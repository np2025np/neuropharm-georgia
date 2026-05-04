import type { ReactNode, MouseEventHandler } from 'react';

export const BracketedEyebrow = ({ children, color = 'var(--brand)' }: { children: ReactNode; color?: string }) => (
  <span className="np-bracketed" style={{ color }}>
    <span className="np-bracketed-rule" />
    {children}
    <span className="np-bracketed-rule" />
  </span>
);

export const Eyebrow = ({ children, color = 'var(--accent)' }: { children: ReactNode; color?: string }) => (
  <span className="np-eyebrow" style={{ color }}>{children}</span>
);

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  type?: 'button' | 'submit';
};

export const Button = ({ variant = 'primary', size = 'md', children, onClick, icon, type = 'button' }: ButtonProps) => (
  <button type={type} className={`np-btn np-btn-${variant} np-btn-${size}`} onClick={onClick}>
    {children}
    {icon && <span className="np-btn-icon">{icon}</span>}
  </button>
);
