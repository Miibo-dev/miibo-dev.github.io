# Portfolio Full Redesign — Design Spec

**Date:** 2026-04-16  
**Author:** Mohammad Bahrami (Miibo)  
**Status:** Approved

---

## Overview

Full rebuild of miibo-dev.github.io — Mohammad Bahrami's personal portfolio. The goal is to:

1. Remove all placeholder/dead data and unused components
2. Redesign every section under a unified **Dark Neon / Cyberpunk** design system
3. Keep the 3D robot and profile picture in the hero (layout that was already working well)
4. Make the site feel production-grade: cohesive, intentional, visually distinctive

This is a **full component rebuild** (Approach A) — not a theme layer on top of existing code. Every component gets rewritten with the new design system. Content is preserved exactly as it exists in the current components; nothing is fabricated.

---

## Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#050810` | Primary background |
| `--bg2` | `#070c18` | Alternate section background |
| `--teal` | `#00ffb4` | Primary accent, borders, glows |
| `--blue` | `#0096ff` | Secondary accent |
| `--mid` | `#00c8ff` | Mid-range accent (gradients) |
| `--text` | `#e0fff8` | Primary text |
| `--text-muted` | `rgba(200,255,240,0.55)` | Secondary / body text |
| `--border` | `rgba(0,255,180,0.18)` | Default border |
| `--border-hover` | `rgba(0,255,180,0.45)` | Hover border |

### Typography

- **Headings:** Existing serif font, `font-weight: 800`, negative letter-spacing
- **Body:** `font-sans`, `font-size: 14px`, `line-height: 1.8`
- **Labels:** `10px`, `letter-spacing: 3px`, `text-transform: uppercase`, teal color
- **Gradient text:** `linear-gradient(90deg, var(--teal), var(--blue))` on key headline words

### Glow / Shadow System

- Cards on hover: `box-shadow: 0 0 32px rgba(0,255,180,0.08)`
- Buttons primary: `box-shadow: 0 0 24px rgba(0,255,180,0.3), 0 0 48px rgba(0,150,255,0.1)`
- Robot chest core: `box-shadow: 0 0 20px var(--teal)`
- Section backgrounds: `radial-gradient` glow fields at key positions

### Background Grid

Subtle dot/line grid applied to hero and other sections:
```css
background-image:
  linear-gradient(rgba(0,255,180,0.025) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,255,180,0.025) 1px, transparent 1px);
background-size: 44px 44px;
mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
```

### Section Dividers

Between every section:
```css
width: 60%; height: 1px;
background: linear-gradient(90deg, transparent, rgba(0,255,180,0.3), transparent);
box-shadow: 0 0 8px rgba(0,255,180,0.15);
```

---

## Navigation

**Component:** `components/ui/FloatingNavbar.tsx` — rebuild with new design system.

- Sticky, `backdrop-filter: blur(16px)`, `background: rgba(5,8,16,0.85)`
- Bottom border: `1px solid var(--border)`
- Logo: `MIIBO` in teal with glow (`text-shadow: 0 0 20px rgba(0,255,180,0.25)`)
- Nav links: muted text default, teal on active/hover
- Links: Home, About, Experience, Projects, Contact (unchanged)

---

## Section 1 — Hero

**Component:** `components/Hero.tsx` — full rewrite.

### Layout
Two-column grid: `grid-template-columns: 50% 50%`, vertically centered, `min-height: 100vh`.

### Left Column (text)

1. **Eyebrow badge** — `"Available for new projects"` with a pulsing green dot (CSS animation)
2. **Headline** — existing copy: *"Building smarter automation systems through simulation, integration & innovation."* Key words gradient-colored.
3. **Profile row** — `/profile.png` avatar (64×64px, teal border + glow) + name block (`Hello, I'm Miibo` + `Automation & Digital Twin Engineer` in teal)
4. **CTAs** — `View Projects` (primary gradient button) + `Download CV` (ghost button with teal border)

### Right Column (3D Robot)

- Keep `Robot3D` component (Three.js model) — **reskin lighting and environment** to match neon cyberpunk palette:
  - Ambient light color: teal (`#00ffb4`) at low intensity
  - Point lights: teal + blue instead of current purple/white
  - Floor glow: `radial-gradient` teal ellipse beneath the robot
  - Background radial glow: teal/blue behind robot
- Robot sizing and position: unchanged from current (user confirmed this was good)

### Background
- Near-black base (`#050810`)
- Subtle grid overlay (see Design System)
- Two radial gradient glows: teal bottom-left, blue top-right

---

## Section 2 — About

**Component:** `components/About.tsx` — full rewrite.

### Layout
Two-column grid, `max-width: 1100px`, centered.

### Left Column
1. **Bio card** — neon border card with:
   - Name: `Mohammad Bahrami` (large, bold)
   - Role: `Automation & Digital Twin Engineer` (teal)
   - Bio paragraphs (existing text, unchanged)
2. **Interests row** — 3-column grid of mini cards: Travel ✈️, Music 🎸, Learning 💡
   - Keep animated icons (plane flies, guitar shakes, bulb glows) — recolor to teal/blue palette

### Right Column (single card)
1. **Expertise tags** — `Digital Twin`, `Warehouse Automation`, `Virtual Commissioning`, `AMR/AGV Systems`, `PLC Integration`, `ROS2 Integration`, `NVIDIA Omniverse`, `Emulate3D`, `C#/Python`, `OPC UA/MQTT`
   - Teal tags + blue tags alternated by category
2. **CTAs** — Download CV (full-width primary), LinkedIn + GitHub (half-width ghost buttons)
3. **Seeking box** — gradient border box: *"Currently seeking opportunities in automation, robotics, and digital twin projects across Europe and beyond."*

### Removed
- `Grid.tsx`, `Clients.tsx`, `Approach.tsx` components deleted (unused)
- All testimonials, companies, unused workExperience from `data/index.ts` deleted

---

## Section 3 — Experience

**Component:** `components/Experience.tsx` — full rewrite.

### Layout
Alternating left/right timeline. `max-width: 900px`, centered. Vertical teal line down the middle.

### Timeline Items

**Item 1 — Automation & Digital Twin Engineer @ Dymation**
- Period: May 2023 – Present
- Card left side, dot center
- Description: condensed bullet highlights (92% sim time reduction, 5–10% throughput, 8 facilities, ROS2, NVIDIA Omniverse)
- Skills: Emulate3D, C#, ROS2, NVIDIA Omniverse, Digital Twin, AMR/AGV, PLC Integration, FMEA

**Item 2 — Master's Thesis Intern @ Dymation**
- Period: Oct 2022 – May 2023
- Card right side, dot center
- Description: condensed (OPC UA server, TCP AMR protocol, 7% throughput improvement)
- Skills: OPC UA, MQTT, TCP/IP, C#, Virtual Commissioning, Emulate3D

### Card Style
- `background: rgba(0,255,180,0.02)`, `border: 1px solid var(--border)`
- Hover: `border-color: rgba(0,255,180,0.35)`, `box-shadow: 0 0 32px rgba(0,255,180,0.07)`
- Timeline dot: 56px circle, teal border, teal glow, icon (⚙ / 🎓)
- Skills: small pill tags, blue palette

---

## Section 4 — Projects

**Component:** `components/RecentProjects.tsx` — full rewrite.

### Layout
3-column grid, `max-width: 1100px`, centered.

### Filter Bar
3 filter buttons: `All`, `Digital Twin`, `ROS` — pill style, teal active state.

### Project Cards

**1. Warehouse Automation Digital Twins**
- GIF: `Simulation_Ratio.gif` (always visible as card background, full opacity)
- Category: Digital Twin
- GitHub: `github.com/Miibo-dev/warehouse-automation-digital-twin`

**2. Fleetwise Simulator**
- GIF: `PreLASim.gif`
- Categories: Digital Twin, ROS
- GitHub: `github.com/Miibo-dev/fleetwise-simulator`

**3. Path Planning Comparison**
- GIF: `Astar_Ratio.gif`
- Category: ROS
- GitHub: `github.com/Miibo-dev/ros2-path-planning-comparison`

### Card Style
- `border: 1px solid var(--border)`, `border-radius: 16px`
- Hover: lift (`translateY(-4px)`), teal border glow
- GIF always visible at top of card (not hidden behind hover)
- Hover reveals: description + GitHub button (keep existing `CanvasRevealEffect` — recolor to teal/blue palette instead of current emerald/pink/sky)

---

## Section 5 — Contact / Footer

**Component:** `components/Footer.tsx` — full rewrite.

### Layout
Compact centered section — **not** `min-h-[100vh]`. Approximately `padding: 100px 80px 60px`.

### Content
1. Label: `GET IN TOUCH`
2. Title: *"Looking for an automation engineer?"* — "automation engineer" gradient colored
3. Subtitle: *"Open to new opportunities and challenging projects."*
4. CTA button: `bahrami98mohammad@gmail.com →` (primary gradient button)
5. Social links row: GitHub, LinkedIn, Email (icon squares, teal on hover)
6. Copyright: `© 2026 Mohammad Bahrami · Built with Next.js · Milan, Italy`

### Background
- Radial teal glow at bottom center
- Top border: `1px solid var(--border)`
- Footer grid SVG: keep but apply teal tint at `opacity: 0.15`

---

## Data Cleanup

### `data/index.ts`
**Keep:** `navItems` (used by FloatingNavbar)  
**Delete:** `gridItems`, `projects`, `testimonials`, `companies`, `workExperience`, `socialMedia`

All content for Experience, Projects, About now lives directly in their components (already the case).

### Components to Delete
- `components/Grid.tsx`
- `components/Clients.tsx`
- `components/Approach.tsx`
- `components/ui/LayoutGrid.tsx` (only used by deleted components)
- `components/ui/GradientBg.tsx` (unused)
- `components/ui/GridGlobe.tsx` (unused)

### Components to Keep (and reskin)
- `components/ui/Robot3D.tsx` — recolor lights
- `components/ui/CanvasRevealEffect.tsx` — recolor
- `components/ui/FloatingNavbar.tsx` — rewrite
- `components/ui/Spotlight.tsx` — recolor to teal/blue
- `components/ui/TextGenerateEffect.tsx` — keep, may use in hero
- `components/ui/MovingBorders.tsx` — keep for buttons
- `components/ui/HoverBorder.tsx` — keep
- `components/MagicButton.tsx` — reskin to teal

---

## SEO

- Keep all existing SEO meta tags in `app/layout.tsx`
- Update theme color from purple to `#00ffb4`
- Keep Google Search Console verification tag
- Keep sitemap (`app/sitemap.ts`)
- Keep `og-image-template.html` but update colors to neon cyberpunk palette

---

## Tailwind Config

Add new color tokens to `tailwind.config.ts`:
```ts
teal: '#00ffb4',
'neon-blue': '#0096ff',
'mid-blue': '#00c8ff',
'bg-dark': '#050810',
'bg-dark2': '#070c18',
```

Replace all purple-themed utility classes site-wide with teal/blue equivalents.

---

## Out of Scope

- No new sections added beyond the current 5
- No backend / API changes
- No new dependencies beyond what's already installed
- No testimonials section (all placeholder, removed)
- No blog or case study pages
