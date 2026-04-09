# Intent — Landing Page

Marketing landing page for Intent, a wallet infrastructure platform.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main landing page
│   └── icon.svg          # Favicon
└── components/
    ├── navbar.tsx             # Sticky navigation bar
    ├── hero.tsx               # Hero section with headline and CTAs
    ├── problem-section.tsx    # Value prop / problem-solution
    ├── features-grid.tsx      # 6-card capabilities grid
    ├── builders-section.tsx   # Developer-focused section with code
    ├── integrations-section.tsx # Stack compatibility section
    ├── benefits-section.tsx   # 3 outcome cards
    ├── cta-section.tsx        # Final call to action
    └── footer.tsx             # Site footer
```

## Build

```bash
npm run build
npm start
```
