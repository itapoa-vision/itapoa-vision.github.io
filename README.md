# Itapoá Vision — Urban Intelligence Platform

Premium futuristic landing page for Itapoá Vision, a computer vision and smart city analytics company.

**Stack:** Next.js 14 · TailwindCSS · Framer Motion · TypeScript · Static Export

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Build & Export

```bash
npm run build
# Output: /out directory (fully static, ready for GitHub Pages)
```

---

## GitHub Pages Deployment

### Option A — GitHub Actions (recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_REPO_NAME: itapoa-vision   # ← your repo name
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
        id: deployment
```

2. In GitHub repo **Settings → Pages**, set source to **GitHub Actions**.

3. Push to `main` — the site deploys automatically.

**URL:** `https://<your-username>.github.io/itapoa-vision/`

---

### Option B — Manual gh-pages branch

```bash
# Install gh-pages helper
npm install -g gh-pages

# Build with your repo name
NEXT_PUBLIC_REPO_NAME=itapoa-vision npm run build

# Deploy out/ to gh-pages branch
gh-pages -d out -t true   # -t includes .nojekyll
```

---

### Custom Domain (apex or subdomain)

1. In `next.config.js`, leave `NEXT_PUBLIC_REPO_NAME` **empty**.
2. Add a `CNAME` file to `/public/` containing your domain: `vision.itapoa.com`
3. Configure DNS per GitHub Pages docs.

---

## Migrating to Vercel

1. Push repo to GitHub.
2. Import in Vercel dashboard — zero config needed.
3. Remove `NEXT_PUBLIC_REPO_NAME` env var (or leave it empty).
4. Remove `output: 'export'` from `next.config.js` to unlock SSR/ISR features.

---

## Replacing Video Placeholders

Each `AnalyticsCard` and the Hero have a **clearly marked placeholder** where you drop real footage:

```tsx
// In AnalyticsCard.tsx, find the comment:
// Replace this div with:
<video
  src="/videos/beach-monitoring.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
/>
```

Place `.mp4` files in `/public/videos/`. Files are lazy-loaded and excluded from static analysis.

**Recommended specs:**
- Resolution: 1280×720 or 1920×1080
- Duration: 10–30s loop
- Format: H.264 MP4, ~2–5MB per clip
- Content: aerial/drone footage of Itapoá, beach, traffic, port

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # CSS vars, animations, utilities
│   ├── layout.tsx           # Root layout + Google Fonts
│   └── page.tsx             # Page composition
└── components/
    ├── Navigation.tsx        # Fixed nav with scroll transparency
    ├── Hero/
    │   ├── index.tsx         # Hero section (fullscreen cinematic)
    │   ├── HudOverlay.tsx    # HUD corners, radar, system status
    │   └── BoundingBoxes.tsx # Animated AI detection boxes
    ├── VideoAnalytics/
    │   ├── index.tsx         # 4-card analytics grid
    │   └── AnalyticsCard.tsx # Individual video feed card
    ├── Dashboard/
    │   └── index.tsx         # Metrics, charts, alert feed, camera table
    ├── Technology/
    │   └── index.tsx         # Pipeline flow + tech cards
    ├── SmartCity/
    │   └── index.tsx         # Use cases + impact stats
    ├── CTA/
    │   └── index.tsx         # Full-width CTA section
    ├── Footer/
    │   └── index.tsx         # Minimal footer
    └── ui/
        ├── GlowButton.tsx    # Reusable CTA button with glow
        ├── SectionLabel.tsx  # Section tag with leading line
        └── AnimatedCounter.tsx # Number count-up on scroll
```

---

## Design System

| Token | Value |
|---|---|
| Black | `#050505` |
| White | `#FFFFFF` |
| Yellow | `#FFD400` |
| Green | `#00FF88` |
| Font Display | Rajdhani 700 |
| Font Brand/Data | Orbitron |
| Font Mono | JetBrains Mono |
| Font Body | Barlow |
