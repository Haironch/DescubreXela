const streetsV = [380, 420, 460, 500, 540, 580, 620, 660];
const streetsH = [220, 262, 304, 346, 388, 430];

const blocks = [
  { x: 300, y: 236, w: 58, h: 40, roof: "h" },
  { x: 366, y: 228, w: 44, h: 46, roof: "v" },
  { x: 566, y: 232, w: 50, h: 42, roof: "h" },
  { x: 626, y: 240, w: 46, h: 36, roof: "v" },
  { x: 676, y: 230, w: 40, h: 44, roof: "h" },
  { x: 296, y: 356, w: 50, h: 46, roof: "v" },
  { x: 356, y: 372, w: 42, h: 38, roof: "h" },
  { x: 562, y: 368, w: 48, h: 42, roof: "v" },
  { x: 622, y: 360, w: 52, h: 44, roof: "h" },
  { x: 684, y: 372, w: 38, h: 36, roof: "v" },
  { x: 320, y: 292, w: 36, h: 34, roof: "h" },
  { x: 610, y: 300, w: 40, h: 32, roof: "v" },
];

const baulRings = [
  { rx: 200, ry: 140, opacity: 0.55 },
  { rx: 172, ry: 118, opacity: 0.6 },
  { rx: 144, ry: 98, opacity: 0.65 },
  { rx: 114, ry: 78, opacity: 0.7 },
  { rx: 84, ry: 58, opacity: 0.78 },
  { rx: 52, ry: 36, opacity: 0.85 },
];

const miradorRings = [
  { rx: 160, ry: 108, opacity: 0.55 },
  { rx: 132, ry: 88, opacity: 0.62 },
  { rx: 102, ry: 68, opacity: 0.7 },
  { rx: 72, ry: 48, opacity: 0.8 },
  { rx: 42, ry: 28, opacity: 0.88 },
];

const round = (n: number) => Math.round(n * 100) / 100;

const vegetation = (cx: number, cy: number, count: number, spread: number) =>
  Array.from({ length: count }).map((_, i) => {
    const a = (i / count) * Math.PI * 2 + i * 0.7;
    const r = spread * (0.3 + ((i * 37) % 10) / 14);
    return {
      x: round(cx + Math.cos(a) * r),
      y: round(cy + Math.sin(a) * r * 0.6),
      size: 3 + ((i * 17) % 5),
    };
  });

const baulTrees = vegetation(270, 210, 22, 150);
const miradorTrees = vegetation(740, 434, 16, 110);

export default function MapScene() {
  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="terrain" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#151d17" />
          <stop offset="55%" stopColor="#111811" />
          <stop offset="100%" stopColor="#0b100d" />
        </linearGradient>
        <radialGradient id="mapGlow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#3a4a3c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3a4a3c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sunlight" cx="82%" cy="12%" r="65%">
          <stop offset="0%" stopColor="#d98a4f" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#d98a4f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hillLightBaul" x1="100%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%" stopColor="#3d4c34" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#16221c" stopOpacity="0.24" />
        </linearGradient>
        <linearGradient id="hillLightMirador" x1="100%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%" stopColor="#37472f" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#131f19" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="plazaGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#33503f" />
          <stop offset="100%" stopColor="#243a2d" />
        </linearGradient>
        <linearGradient id="blockLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c3a2c" />
          <stop offset="100%" stopColor="#182219" />
        </linearGradient>
        <linearGradient id="blockDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d2820" />
          <stop offset="100%" stopColor="#131b15" />
        </linearGradient>
        <filter id="terrainBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="30" />
        </filter>
        <filter id="shadowBlur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="lampGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <rect width="1000" height="700" fill="url(#terrain)" />
      <rect width="1000" height="700" fill="url(#sunlight)" />
      <ellipse cx="500" cy="322" rx="420" ry="300" fill="url(#mapGlow)" />

      {/* relieve suave que distingue las zonas elevadas, con luz cálida del lado del atardecer */}
      <ellipse cx="270" cy="210" rx="230" ry="170" fill="url(#hillLightBaul)" filter="url(#terrainBlur)" />
      <ellipse cx="740" cy="434" rx="190" ry="140" fill="url(#hillLightMirador)" filter="url(#terrainBlur)" />

      {/* río — curva sutil que atraviesa el valle */}
      <path
        d="M120,20 C160,120 130,200 175,270 C215,335 190,420 230,500 C260,565 235,640 260,700"
        stroke="#4a615f"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M120,20 C160,120 130,200 175,270 C215,335 190,420 230,500 C260,565 235,640 260,700"
        stroke="#7c948f"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.2"
      />

      {/* curvas de nivel — El Baúl */}
      <g opacity="0.85">
        {baulRings.map((r, i) => (
          <ellipse
            key={i}
            cx="270"
            cy="216"
            rx={r.rx}
            ry={r.ry}
            fill="none"
            stroke="#3a4a3c"
            strokeWidth={i === baulRings.length - 1 ? 1.8 : 1.1}
            opacity={r.opacity}
          />
        ))}
      </g>
      {/* vegetación dispersa en la ladera */}
      {baulTrees.map((t, i) => (
        <circle key={i} cx={t.x} cy={t.y} r={t.size} fill="#233a2c" opacity="0.55" />
      ))}
      {/* sendero hacia el mirador */}
      <path
        d="M210,290 C230,270 245,250 262,222"
        stroke="#8a6b4f"
        strokeWidth="1.6"
        strokeDasharray="1 6"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="270" cy="212" r="4" fill="#e9e4d8" opacity="0.5" />

      {/* curvas de nivel — Mirador Rutzil */}
      <g opacity="0.85">
        {miradorRings.map((r, i) => (
          <ellipse
            key={i}
            cx="742"
            cy="440"
            rx={r.rx}
            ry={r.ry}
            fill="none"
            stroke="#25352c"
            strokeWidth={i === miradorRings.length - 1 ? 1.8 : 1.1}
            opacity={r.opacity}
          />
        ))}
      </g>
      {miradorTrees.map((t, i) => (
        <circle key={i} cx={t.x} cy={t.y} r={t.size} fill="#1c2c23" opacity="0.55" />
      ))}
      {/* cono de vista, sugiere el panorama que se abre desde el mirador */}
      <path
        d="M742,440 L640,560 L850,560 Z"
        fill="#e9e4d8"
        opacity="0.03"
      />
      <circle cx="742" cy="436" r="4" fill="#e9e4d8" opacity="0.5" />

      {/* trazos de camino que conectan los tres puntos */}
      <path
        d="M330,260 C400,300 430,330 470,326"
        stroke="#8a6b4f"
        strokeWidth="1.8"
        strokeDasharray="2 9"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M560,340 C620,370 670,400 715,420"
        stroke="#8a6b4f"
        strokeWidth="1.8"
        strokeDasharray="2 9"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* trama urbana */}
      <g opacity="0.9">
        {streetsV.map((x, i) => (
          <line key={i} x1={x} y1="210" x2={x} y2="440" stroke="#2a352e" strokeWidth="1" opacity="0.35" />
        ))}
        {streetsH.map((y, i) => (
          <line key={i} x1="280" y1={y} x2="730" y2={y} stroke="#2a352e" strokeWidth="1" opacity="0.35" />
        ))}
        {/* avenidas principales */}
        <line x1="500" y1="200" x2="500" y2="450" stroke="#3a4a3c" strokeWidth="2" opacity="0.4" />
        <line x1="270" y1="322" x2="740" y2="322" stroke="#3a4a3c" strokeWidth="2" opacity="0.4" />
      </g>

      {/* manzanas urbanas con sombra y detalle de techo */}
      <g>
        {blocks.map((b, i) => (
          <g key={i}>
            <rect
              x={b.x + 3}
              y={b.y + 4}
              width={b.w}
              height={b.h}
              rx="3"
              fill="#020403"
              opacity="0.55"
              filter="url(#shadowBlur)"
            />
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="3"
              fill={`url(#${i % 2 === 0 ? "blockLight" : "blockDark"})`}
              stroke="#0d130f"
              strokeWidth="0.6"
            />
            {b.roof === "h" ? (
              <line
                x1={b.x + 4}
                y1={b.y + b.h / 2}
                x2={b.x + b.w - 4}
                y2={b.y + b.h / 2}
                stroke="#0d130f"
                strokeWidth="0.7"
                opacity="0.6"
              />
            ) : (
              <line
                x1={b.x + b.w / 2}
                y1={b.y + 4}
                x2={b.x + b.w / 2}
                y2={b.y + b.h - 4}
                stroke="#0d130f"
                strokeWidth="0.7"
                opacity="0.6"
              />
            )}
          </g>
        ))}
      </g>

      {/* árboles a lo largo de las calles cercanas a la plaza */}
      {[
        [420, 300], [420, 344], [580, 300], [580, 344],
        [452, 260], [548, 260], [452, 388], [548, 388],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="#2a4033" opacity="0.75" />
      ))}

      {/* farolas — puntos de luz cálida al anochecer */}
      {[
        [420, 322], [580, 322], [500, 260], [500, 388],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="#d98a4f" opacity="0.18" filter="url(#lampGlow)" />
          <circle cx={x} cy={y} r="1.6" fill="#e8b27f" opacity="0.8" />
        </g>
      ))}

      {/* Parque Central */}
      <g>
        <rect
          x="458"
          y="292"
          width="84"
          height="60"
          rx="8"
          fill="url(#plazaGreen)"
          stroke="#8a6b4f"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />
        {/* senderos en cruz, típicos de la plaza */}
        <line x1="500" y1="296" x2="500" y2="348" stroke="#8a6b4f" strokeWidth="1.4" opacity="0.4" />
        <line x1="462" y1="322" x2="538" y2="322" stroke="#8a6b4f" strokeWidth="1.4" opacity="0.4" />
        <line x1="466" y1="298" x2="534" y2="346" stroke="#8a6b4f" strokeWidth="0.8" opacity="0.25" />
        <line x1="534" y1="298" x2="466" y2="346" stroke="#8a6b4f" strokeWidth="0.8" opacity="0.25" />

        {/* kiosco central */}
        <circle cx="500" cy="322" r="10" fill="#1c2a22" stroke="#8a6b4f" strokeOpacity="0.5" strokeWidth="1" />
        <path d="M490,318 L500,306 L510,318 Z" fill="#2a4033" opacity="0.7" />

        {/* árboles en las esquinas de la plaza */}
        <circle cx="466" cy="298" r="6" fill="#2a4033" />
        <circle cx="534" cy="298" r="6" fill="#2a4033" />
        <circle cx="466" cy="346" r="6" fill="#2a4033" />
        <circle cx="534" cy="346" r="6" fill="#2a4033" />
      </g>
    </svg>
  );
}
