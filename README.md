# DescubreXela

Experiencia web interactiva y cinematográfica de Quetzaltenango (Xela), Guatemala. El usuario entra por una escena de volcanes animada, desciende hacia un mapa real de la ciudad y recorre tres destinos iniciales: Parque Central, El Baúl y Mirador Rutzil.

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4
- **GSAP / ScrollTrigger** — animaciones y parallax de scroll
- **Lenis** — smooth scroll
- **MapLibre GL** + tiles de [OpenFreeMap](https://openfreemap.org) — mapa real, sin API key

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — layout y página principal
- `components/` — secciones de la experiencia (hero, mapa, destinos, nav)
- `components/scenes/` — ilustraciones SVG animadas de cada escena
- `data/destinations.ts` — datos de los destinos (nombre, coordenadas reales, descripción)

## Escalabilidad

Solo hay tres destinos por diseño. Para agregar más (Cerro Quemado, Fuentes Georginas, Catedral, etc.), se amplía `data/destinations.ts` y se agrega una `DestinationSection` en `app/page.tsx`.
