export default function ViewpointScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="viewSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0f16" />
          <stop offset="50%" stopColor="#111c1e" />
          <stop offset="100%" stopColor="#22321f" />
        </linearGradient>
        <radialGradient id="viewGlow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#d98a4f" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#d98a4f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="farHorizon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#25352c" />
          <stop offset="100%" stopColor="#182620" />
        </linearGradient>
        <linearGradient id="cityValley" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2620" />
          <stop offset="100%" stopColor="#0e1512" />
        </linearGradient>
        <linearGradient id="deckWood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2016" />
          <stop offset="100%" stopColor="#0a0f0c" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#viewSky)" />
      <rect width="1440" height="900" fill="url(#viewGlow)" />

      {/* horizonte lejano: montañas y volcanes, el destino final del alejamiento */}
      <g className="scene-far">
        <path
          d="M0,420 L140,350 260,400 420,320 560,380 700,300 820,370 960,330 1100,390 1260,340 1440,380 L1440,520 0,520 Z"
          fill="url(#farHorizon)"
          opacity="0.85"
        />
        <path d="M760,320 C830,260 870,240 930,300 C900,340 830,360 780,360 Z" fill="#1c2b22" opacity="0.7" />
      </g>

      {/* la ciudad en el valle */}
      <g className="scene-mid">
        <path
          d="M200,560 L260,540 320,555 380,535 460,552 540,530 620,550 700,532 780,552 860,534 940,554 1020,536 1100,554 1180,538 1260,556 L1260,620 200,620 Z"
          fill="url(#cityValley)"
        />
      </g>

      {/* baranda del mirador en primer plano */}
      <g className="scene-near">
        <rect x="0" y="700" width="1440" height="200" fill="url(#deckWood)" />
        <rect x="0" y="680" width="1440" height="14" fill="#20180f" opacity="0.9" />
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={i} x={40 + i * 112} y="620" width="10" height="80" fill="#20180f" opacity="0.85" />
        ))}
      </g>
    </svg>
  );
}
