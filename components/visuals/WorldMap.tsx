type Props = { regionAName?: string; regionBName?: string };

export function WorldMap({ regionAName = 'Europe', regionBName = 'India' }: Props) {
  return (
    <svg viewBox="0 0 1000 500" className="np-sourcing-map" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g className="lat">
        <line x1="0" y1="125" x2="1000" y2="125" />
        <line x1="0" y1="250" x2="1000" y2="250" />
        <line x1="0" y1="375" x2="1000" y2="375" />
      </g>
      <path className="land" d="M70 120 L160 80 L240 100 L290 145 L300 195 L260 235 L240 280 L195 290 L155 270 L120 250 L95 220 L65 180 Z" />
      <path className="land" d="M345 70 L390 60 L405 105 L380 130 L355 120 Z" />
      <path className="land" d="M260 295 L295 290 L320 320 L320 380 L300 430 L275 460 L255 440 L240 405 L245 360 Z" />
      <path className="land" d="M480 200 L545 195 L580 230 L585 290 L555 345 L525 365 L500 350 L470 310 L460 260 Z" />
      <path className="land-active" d="M455 130 L490 115 L530 120 L555 140 L555 175 L530 195 L490 195 L460 180 L445 155 Z" />
      <path className="land" d="M555 175 L605 165 L640 185 L640 220 L600 240 L570 230 Z" />
      <path className="land-active" d="M660 230 L700 225 L725 245 L735 285 L715 315 L685 325 L665 300 L655 265 Z" />
      <path className="land" d="M735 285 L770 280 L800 305 L795 340 L770 350 L745 335 Z" />
      <path className="land" d="M720 150 L780 140 L825 165 L835 200 L800 225 L755 220 L725 200 Z" />
      <path className="land" d="M810 350 L870 345 L905 365 L900 395 L860 410 L825 395 Z" />
      <path className="land" d="M770 350 L820 360 L800 380 L770 375 Z" />
      <path className="land" d="M555 90 L640 80 L730 85 L820 95 L860 110 L830 130 L740 130 L640 130 L555 125 Z" />
      <path className="land" d="M442 130 L455 125 L455 150 L443 155 Z" />
      <path className="land" d="M870 165 L890 175 L880 200 L863 188 Z" />
      <g>
        <line className="pin-tether" x1="505" y1="160" x2="505" y2="60" />
        <circle className="pin-ring" cx="505" cy="160" r="14" />
        <circle className="pin-dot" cx="505" cy="160" r="5" />
        <text className="pin-label" x="505" y="48" textAnchor="middle">{regionAName}</text>
      </g>
      <g>
        <line className="pin-tether" x1="700" y1="275" x2="780" y2="430" />
        <circle className="pin-ring" cx="700" cy="275" r="14" />
        <circle className="pin-dot" cx="700" cy="275" r="5" />
        <text className="pin-label" x="780" y="448" textAnchor="middle">{regionBName}</text>
      </g>
    </svg>
  );
}
