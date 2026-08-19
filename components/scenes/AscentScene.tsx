export default function AscentScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ascentSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1218" />
          <stop offset="55%" stopColor="#101c1a" />
          <stop offset="100%" stopColor="#1c2b22" />
        </linearGradient>
        <linearGradient id="valleyFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2c26" />
          <stop offset="100%" stopColor="#152019" />
        </linearGradient>
        <linearGradient id="ridgeMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#233a2c" />
          <stop offset="100%" stopColor="#16241c" />
        </linearGradient>
        <linearGradient id="vegetationNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2b21" />
          <stop offset="100%" stopColor="#0a0f0c" />
        </linearGradient>
        <filter id="ascentBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <rect width="1440" height="900" fill="url(#ascentSky)" />

      {/* lejos: valle y horizonte de volcanes, la recompensa al llegar arriba */}
      <g className="scene-far">
        <path
          d="M0,520 L120,470 240,500 380,440 500,485 640,450 760,490 880,455 1000,495 1140,460 1280,492 1440,465 L1440,560 0,560 Z"
          fill="url(#valleyFar)"
          opacity="0.8"
        />
        <ellipse cx="1000" cy="470" rx="420" ry="60" fill="#0d1210" opacity="0.35" filter="url(#ascentBlur)" />
      </g>

      {/* medio: cresta con vegetación */}
      <g className="scene-mid">
        <path
          d="M0,600 C200,520 320,560 460,500 C600,450 700,520 860,480 C1020,440 1180,520 1440,470 L1440,700 0,700 Z"
          fill="url(#ridgeMid)"
        />
        {[180, 340, 560, 780, 980, 1200].map((x, i) => (
          <ellipse key={i} cx={x} cy={560 - (i % 2) * 30} rx="46" ry="34" fill="#20302a" opacity="0.6" />
        ))}
      </g>

      {/* cerca: vegetación densa y neblina que se atraviesa al ascender */}
      <g className="scene-near">
        <path
          d="M0,720 C220,650 340,730 520,660 C700,600 820,700 1000,650 C1180,610 1300,690 1440,640 L1440,900 0,900 Z"
          fill="url(#vegetationNear)"
        />
        {[80, 260, 460, 660, 900, 1120, 1320].map((x, i) => (
          <path
            key={i}
            d={`M${x},760 C${x - 40},700 ${x - 20},650 ${x},610 C${x + 20},650 ${x + 40},700 ${x},760 Z`}
            fill="#12190f"
            opacity="0.85"
          />
        ))}
        <ellipse cx="360" cy="780" rx="420" ry="50" fill="#e9e4d8" opacity="0.06" filter="url(#ascentBlur)" />
        <ellipse cx="1040" cy="800" rx="480" ry="55" fill="#e9e4d8" opacity="0.05" filter="url(#ascentBlur)" />
      </g>
    </svg>
  );
}
