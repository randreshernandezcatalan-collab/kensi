# Ricardo2 — Kensi en Next.js

Migración del sitio Kensi a **Next.js 14 + TypeScript + Tailwind CSS** con estructura compatible con shadcn/ui.

El diseño y los efectos del HTML original (`Ricardo/index.html`) se mantienen 1:1.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** estricto
- **Tailwind CSS** (alias `@/*` → `src/*`)
- **framer-motion** + **motion** (listas para nuevos efectos)
- **lucide-react** (iconos)
- **clsx** + **tailwind-merge** (utility `cn()`)
- Estructura `components/ui` lista para `npx shadcn@latest add <componente>`

## Primer arranque

```powershell
cd C:\Users\Ricardo\Desktop\nuevanet\Ricardo2
npm install
npm run dev
```

Abrir http://localhost:3000

## Estructura

```
Ricardo2/
├── public/
│   └── assets/         # logo.png, robot.png (copiados desde Ricardo/)
├── src/
│   ├── app/
│   │   ├── globals.css   # todos los estilos custom del HTML original
│   │   ├── layout.tsx    # <html>, <body>, fuentes, grain overlay
│   │   └── page.tsx      # nav + secciones (servicios, trabajo, proceso, precios, testimonio, FAQ, contacto, footer)
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # client — shutter + fadeup + sparkles
│   │   │   └── NewsletterForm.tsx    # client — submit handler
│   │   └── ui/
│   │       ├── cursor-glow.tsx       # client — glow que sigue al mouse
│   │       ├── shutter-text.tsx      # efecto shutter slice/blur
│   │       └── sparkles.tsx          # canvas con partículas vanilla
│   └── lib/
│       └── utils.ts                  # cn() helper para shadcn
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Agregar componentes shadcn

```powershell
npx shadcn@latest init        # solo la primera vez
npx shadcn@latest add button   # ejemplos
npx shadcn@latest add sheet
npx shadcn@latest add dialog
```

Se instalan en `src/components/ui/`.

## Notas sobre la migración

- Los estilos custom del HTML viven en `src/app/globals.css` (sin convertir a utilities Tailwind, para preservar el diseño exacto). Tailwind queda disponible para componentes nuevos.
- Las animaciones CSS (`shutter`, `fadeup`, `sparkles`) son las mismas. Los handlers de JS (re-shutter, sparkles canvas) están en componentes React (`use client`).
- Los inline styles del HTML se portaron tal cual a JSX para no perder ningún detalle visual.
- El proyecto original `Ricardo/index.html` queda intacto como respaldo.
