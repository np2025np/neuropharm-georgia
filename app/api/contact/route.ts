import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
  website?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = (await req.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ success: true });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required field' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  if (name.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Field too long' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const company = (body.company ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const serviceType = (body.serviceType ?? '').trim();

  const subject = `ახალი შეტყობინება საიტიდან — ${name}`;

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
  ];
  if (company) rows.push(['Company', company]);
  if (phone) rows.push(['Phone', phone]);
  if (serviceType) rows.push(['Service type', serviceType]);

  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#5A615F;font:500 13px/1.4 -apple-system,Segoe UI,sans-serif;vertical-align:top;white-space:nowrap;">${escapeHtml(
          k
        )}</td><td style="padding:6px 0;color:#0E1B19;font:400 14px/1.5 -apple-system,Segoe UI,sans-serif;">${escapeHtml(v)}</td></tr>`
    )
    .join('');

  const html = `<!doctype html>
<html><body style="margin:0;background:#FAFAF7;padding:32px 0;">
  <table role="presentation" style="margin:0 auto;max-width:560px;background:#FFFFFF;border:1px solid #E2DFD7;border-radius:8px;overflow:hidden;">
    <tr><td style="padding:24px 28px;border-bottom:1px solid #E2DFD7;">
      <div style="font:600 11px/1 -apple-system,Segoe UI,sans-serif;letter-spacing:0.12em;color:#0F6E66;text-transform:uppercase;">Neuropharm Georgia</div>
      <h1 style="margin:8px 0 0;font:600 20px/1.3 Georgia,serif;color:#0E1B19;">New contact form submission</h1>
    </td></tr>
    <tr><td style="padding:20px 28px;">
      <table role="presentation" style="border-collapse:collapse;width:100%;">${tableRows}</table>
    </td></tr>
    <tr><td style="padding:20px 28px;border-top:1px solid #E2DFD7;">
      <div style="font:500 11px/1 -apple-system,Segoe UI,sans-serif;letter-spacing:0.08em;color:#5A615F;text-transform:uppercase;margin-bottom:10px;">Message</div>
      <div style="font:400 14px/1.6 -apple-system,Segoe UI,sans-serif;color:#0E1B19;white-space:pre-wrap;">${escapeHtml(message)}</div>
    </td></tr>
  </table>
  <p style="margin:16px auto 0;max-width:560px;font:400 11px/1.5 -apple-system,Segoe UI,sans-serif;color:#8A8E8B;text-align:center;">
    Reply to this email to respond to ${escapeHtml(name)} directly.
  </p>
</body></html>`;

  const textRows = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const text = `New contact form submission\n\n${textRows}\n\nMessage:\n${message}\n\n— Reply to this email to respond to ${name} directly.\n`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Neuropharm Georgia <noreply@neuropharmgeorgia.com>',
      to: ['info@neuropharmgeorgia.com'],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
