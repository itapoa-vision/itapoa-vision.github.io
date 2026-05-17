interface LighthouseLogoProps {
  className?: string
  size?: number
}

export default function LighthouseLogo({ className = '', size = 36 }: LighthouseLogoProps) {
  return (
    <svg
      viewBox="0 0 36 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={Math.round(size * 52 / 36)}
      className={className}
      aria-label="Farol de Itapoá"
    >
      {/* Light beams */}
      <line x1="18" y1="9"  x2="2"  y2="1"  stroke="#FFD400" strokeWidth="1"   strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="18" y1="9"  x2="34" y2="1"  stroke="#FFD400" strokeWidth="1"   strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="18" y1="10" x2="0"  y2="8"  stroke="#FFD400" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.35"/>
      <line x1="18" y1="10" x2="36" y2="8"  stroke="#FFD400" strokeWidth="0.6" strokeLinecap="round" strokeOpacity="0.35"/>

      {/* Lantern roof (red triangle) */}
      <polygon points="11,11 25,11 18,4" fill="#D42727"/>

      {/* Lantern glass body (white) */}
      <rect x="12" y="11" width="12" height="7" fill="white"/>
      {/* Glass pane dividers */}
      <line x1="18" y1="11" x2="18" y2="18" stroke="#D42727" strokeWidth="0.6" strokeOpacity="0.4"/>
      <line x1="12" y1="14.5" x2="24" y2="14.5" stroke="#D42727" strokeWidth="0.6" strokeOpacity="0.4"/>

      {/* Light source */}
      <circle cx="18" cy="14.5" r="2.5" fill="#FFD400"/>

      {/* Gallery railing */}
      <rect x="10" y="18" width="16" height="2" fill="#D42727"/>

      {/* Tower band 1 — white */}
      <polygon points="13,20 23,20 24,27 12,27" fill="white"/>

      {/* Tower band 2 — red */}
      <polygon points="12,27 24,27 25,34 11,34" fill="#D42727"/>

      {/* Tower band 3 — white */}
      <polygon points="11,34 25,34 27,41 9,41" fill="white"/>

      {/* Door (arched, red) — on white band */}
      <path d="M14.5 41 L14.5 37 A3.5 3.5 0 0 0 21.5 37 L21.5 41 Z" fill="#D42727"/>

      {/* Tower band 4 — red */}
      <polygon points="9,41 27,41 28,48 8,48" fill="#D42727"/>

      {/* Base platform */}
      <rect x="4" y="48" width="28" height="4" rx="1" fill="#D42727"/>
    </svg>
  )
}
