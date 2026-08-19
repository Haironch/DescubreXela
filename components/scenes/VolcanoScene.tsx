export default function VolcanoScene() {
  return (
    <svg
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1018" />
          <stop offset="45%" stopColor="#101c22" />
          <stop offset="75%" stopColor="#1a2b28" />
          <stop offset="100%" stopColor="#2c3428" />
        </linearGradient>
        <radialGradient id="horizonGlow" cx="55%" cy="72%" r="45%">
          <stop offset="0%" stopColor="#d98a4f" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#d98a4f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="farRange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#233229" />
          <stop offset="100%" stopColor="#1a2620" />
        </linearGradient>
        <linearGradient id="santaMaria" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f4436" />
          <stop offset="100%" stopColor="#182720" />
        </linearGradient>
        <linearGradient id="santiaguito" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26382c" />
          <stop offset="100%" stopColor="#141f19" />
        </linearGradient>
        <linearGradient id="foreground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141e18" />
          <stop offset="100%" stopColor="#0a0f0c" />
        </linearGradient>
        <linearGradient id="baseFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0f0c" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a0f0c" stopOpacity="1" />
        </linearGradient>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="softBlurLg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e9e4d8" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#e9e4d8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#e9e4d8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="moonBody" cx="38%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#f5f1e8" />
          <stop offset="100%" stopColor="#d8d2c2" />
        </radialGradient>
      </defs>

      {/* cielo */}
      <rect width="1440" height="810" fill="url(#sky)" />
      <rect width="1440" height="810" fill="url(#horizonGlow)" />

      {/* luna — símbolo característico de las noches de Xela */}
      <g className="scene-moon">
        <circle cx="1180" cy="150" r="120" fill="url(#moonGlow)" />
        <circle cx="1180" cy="150" r="46" fill="url(#moonBody)" />
        <circle cx="1166" cy="134" r="7" fill="#c9c2b0" opacity="0.35" />
        <circle cx="1194" cy="158" r="10" fill="#c9c2b0" opacity="0.3" />
        <circle cx="1178" cy="170" r="5" fill="#c9c2b0" opacity="0.3" />
      </g>

      {/* nubes — capa ambiental lenta */}
      <g className="scene-clouds" style={{ opacity: 0.5 }}>
        <ellipse cx="260" cy="160" rx="180" ry="34" fill="#c9d6cf" opacity="0.10" filter="url(#softBlurLg)" />
        <ellipse cx="980" cy="120" rx="220" ry="30" fill="#c9d6cf" opacity="0.08" filter="url(#softBlurLg)" />
        <ellipse cx="620" cy="210" rx="160" ry="26" fill="#c9d6cf" opacity="0.07" filter="url(#softBlurLg)" />
      </g>

      {/* cordillera lejana */}
      <g className="scene-far-mountains">
        <path
          d="M0,480 L110,410 L230,455 L340,380 L460,440 L560,395 L700,450 L820,400 L960,460 L1090,410 L1220,450 L1440,400 L1440,560 L0,560 Z"
          fill="url(#farRange)"
          opacity="0.75"
        />
      </g>

      {/* Volcán Santa María */}
      <g className="scene-volcanoes">
        <path
          d="M540,560 C610,430 660,330 782,258 C860,312 905,430 960,560 Z"
          fill="url(#santaMaria)"
        />
        {/* nieve/luz sutil en la cima */}
        <path
          d="M782,258 C800,278 812,300 822,320 L742,320 C752,300 764,278 782,258 Z"
          fill="#4a5c4c"
          opacity="0.5"
        />

        {/* Santiaguito, domo activo junto al flanco */}
        <path
          d="M470,560 C500,470 545,415 616,388 C672,420 705,480 726,560 Z"
          fill="url(#santiaguito)"
        />
        <ellipse cx="616" cy="390" rx="22" ry="10" fill="#20140f" opacity="0.6" />

        {/* pluma de humo — sutil, animada */}
        <g className="scene-smoke" style={{ transformOrigin: "616px 385px" }}>
          <ellipse cx="616" cy="370" rx="16" ry="10" fill="#c9c2b6" opacity="0.28" filter="url(#softBlur)" />
          <ellipse cx="628" cy="345" rx="24" ry="14" fill="#c9c2b6" opacity="0.18" filter="url(#softBlur)" />
          <ellipse cx="648" cy="315" rx="34" ry="18" fill="#c9c2b6" opacity="0.10" filter="url(#softBlur)" />
        </g>
      </g>

      {/* quetzal — vuela en un recorrido corto entre los dos volcanes */}
      <g transform="translate(700,320)">
        <g className="scene-quetzal-flight">
          {/* estelas de la cola, seña característica del quetzal */}
          <path
            d="M0,1 C-30,-2 -55,4 -76,-6"
            fill="none"
            stroke="var(--xela-forest-2)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M0,3 C-28,6 -52,16 -70,14"
            fill="none"
            stroke="var(--xela-forest-2)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* ala */}
          <g
            className="scene-quetzal-wing"
            style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
          >
            <path
              d="M3,-1 C-4,-15 12,-19 19,-6 C11,-3 6,0 3,-1 Z"
              fill="var(--xela-forest-2)"
              opacity="0.92"
            />
          </g>

          {/* cuerpo */}
          <ellipse cx="6" cy="1" rx="10" ry="6" fill="var(--xela-forest-2)" />
          {/* pecho rojo, distintivo del quetzal */}
          <path d="M11,3 C14,2 16,4 15,7 C12,7 10,6 11,3 Z" fill="var(--xela-ember)" opacity="0.9" />
          {/* cabeza */}
          <circle cx="17" cy="-2" r="4.6" fill="var(--xela-forest-2)" />
          <path d="M21,-2 L26,-1 L21,0 Z" fill="var(--xela-forest-2)" opacity="0.85" />
        </g>
      </g>

      {/* neblina — capas horizontales sutiles */}
      <g className="scene-mist" style={{ opacity: 0.55 }}>
        <ellipse cx="420" cy="580" rx="420" ry="30" fill="#e9e4d8" opacity="0.10" filter="url(#softBlurLg)" />
        <ellipse cx="1020" cy="600" rx="480" ry="34" fill="#e9e4d8" opacity="0.08" filter="url(#softBlurLg)" />
      </g>

      {/* silueta cercana */}
      <path
        className="scene-foreground"
        d="M0,650 C160,600 300,660 480,620 C660,580 760,650 900,610 C1080,565 1240,640 1440,600 L1440,810 L0,810 Z"
        fill="url(#foreground)"
      />

      {/* fundido hacia la siguiente sección */}
      <rect y="620" width="1440" height="190" fill="url(#baseFade)" />
    </svg>
  );
}
