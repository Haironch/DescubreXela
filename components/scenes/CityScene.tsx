export default function CityScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="citySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d1218" />
          <stop offset="60%" stopColor="#141d1a" />
          <stop offset="100%" stopColor="#1e2a22" />
        </linearGradient>
        <linearGradient id="rooftops" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2723" />
          <stop offset="100%" stopColor="#141c19" />
        </linearGradient>
        <linearGradient id="facades" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c3a30" />
          <stop offset="100%" stopColor="#1a241f" />
        </linearGradient>
        <linearGradient id="plazaGround" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171f1a" />
          <stop offset="100%" stopColor="#0a0f0c" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#citySky)" />

      {/* lejos: siluetas de tejados y un volcán distante, conecta con la apertura */}
      <g className="scene-far">
        <path
          d="M600,430 C680,360 720,340 760,300 C800,340 840,370 900,430 Z"
          fill="#20302a"
          opacity="0.55"
        />
        <path
          d="M0,470 L60,440 130,460 200,430 280,455 360,435 440,460 520,440 600,465 680,445 760,465 840,440 920,462 1000,438 1080,460 1160,435 1240,458 1320,440 1440,455 L1440,540 0,540 Z"
          fill="url(#rooftops)"
        />
      </g>

      {/* medio: fachadas del parque central */}
      <g className="scene-mid">
        <rect x="180" y="480" width="220" height="220" fill="url(#facades)" />
        <rect x="420" y="500" width="180" height="200" fill="url(#facades)" opacity="0.92" />
        <rect x="840" y="490" width="200" height="210" fill="url(#facades)" opacity="0.92" />
        <rect x="1060" y="500" width="220" height="200" fill="url(#facades)" />
        {/* arcos */}
        {[220, 270, 320, 460, 510, 880, 930, 980, 1100, 1150, 1200].map((x, i) => (
          <path
            key={i}
            d={`M${x},700 L${x},640 A20,20 0 0 1 ${x + 40},640 L${x + 40},700`}
            fill="none"
            stroke="#8a6b4f"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        ))}
        {/* kiosco central */}
        <path d="M660,560 L780,560 L780,660 L660,660 Z" fill="#2a4033" opacity="0.4" />
        <path d="M650,560 L790,560 L720,510 Z" fill="#2a4033" opacity="0.55" />
      </g>

      {/* cerca: plaza, árboles y figuras */}
      <g className="scene-near">
        <rect x="0" y="690" width="1440" height="210" fill="url(#plazaGround)" />
        {[240, 420, 620, 820, 1020, 1200].map((x, i) => (
          <g key={i} transform={`translate(${x},640)`} opacity="0.85">
            <ellipse cx="0" cy="0" rx="26" ry="22" fill="#2a4033" />
            <rect x="-3" y="18" width="6" height="26" fill="#3a2c1e" />
          </g>
        ))}
        {[520, 700, 900].map((x, i) => (
          <g key={i} transform={`translate(${x},740)`} opacity="0.7">
            <ellipse cx="0" cy="34" rx="9" ry="3" fill="#0a0f0c" opacity="0.5" />
            <rect x="-4" y="0" width="8" height="30" rx="3" fill="#12190f" />
            <circle cx="0" cy="-8" r="7" fill="#12190f" />
          </g>
        ))}
      </g>
    </svg>
  );
}
