# QMI Lab Website

## Project Overview

This is the website for **QMI Lab (Quantum & Machine Intelligence Laboratory)** — an independent research lab studying intelligence, learning, and representation across classical and quantum computation.

- **Domain:** qmilab.com
- **Framework:** Astro (static-first, content-driven)
- **Deployment:** Static site — deploy to Vercel, Netlify, GitHub Pages, or Cloudflare Pages
- **Phase:** Phase 1 (single-page + manifesto)

## Architecture

```
src/
├── content/
│   ├── publications/       # Markdown files, one per paper (content collection)
│   └── config.ts           # Content collection schemas
├── pages/
│   ├── index.astro         # Main single-page site (hero, research, publications, collaborate)
│   └── manifesto.astro     # Full v3 manifesto
├── layouts/
│   └── Base.astro          # Shared HTML layout, nav, footer
├── components/
│   ├── Hero.astro          # Hero section with lab name and value proposition
│   ├── PillarCard.astro    # Research pillar card component
│   ├── PublicationEntry.astro  # Single publication entry
│   ├── PublicationList.astro   # Publications section with list
│   └── CollaborateCTA.astro    # Collaboration call-to-action section
└── styles/
    └── global.css          # Global styles, CSS custom properties
```

## Key Design Principles

1. **Content-first.** The site exists to communicate research identity. Every pixel serves that purpose.
2. **Static by default.** Zero JavaScript shipped unless explicitly needed. Fast loads, great SEO.
3. **Minimal, professional, not flashy.** This is a research lab, not a startup landing page. Think: clean typography, generous whitespace, muted color palette. No gradients, no animations, no hero images.
4. **Markdown-driven content.** Publications are content collections. The manifesto is markdown. Adding content = adding a file.
5. **Phase 1 is a single page + manifesto.** Do not over-build. Phase 2 (multi-page) comes after first publication.

## Color Palette

```css
--deep-navy: #1B2A4A;      /* Primary headings, logo */
--accent-blue: #2E75B6;     /* Links, accents, Pillar I */
--pillar-purple: #7B4F9E;   /* Pillar II */
--pillar-red: #C0392B;      /* Pillar III */
--dark-gray: #333333;       /* Body text */
--med-gray: #666666;        /* Secondary text */
--light-gray: #F5F5F5;      /* Backgrounds, cards */
--white: #FFFFFF;            /* Page background */
```

## Typography

- **Headings:** EB Garamond (serif) — scholarly authority, loaded via Google Fonts
- **Body:** IBM Plex Sans (sans-serif) — same design family as Plex Mono, designed for technical/research content, loaded via Google Fonts
- **Labels/metadata:** IBM Plex Mono (monospace) — technical "researcher" signal, loaded via Google Fonts

## Content Collections

### Publications (`src/content/publications/`)

Each publication is a `.md` file with YAML frontmatter:

```yaml
---
title: "Hybrid Quantum-Classical Transformer Fine-Tuning for NLP"
authors: ["Nandan"]
pillar: 1 | 2 | 3
status: "in-preparation" | "preprint" | "submitted" | "accepted" | "published"
venue: "ArXiv" | "NeurIPS Workshop" | "EMNLP" | etc.
date: 2026-06-15
arxiv: "https://arxiv.org/abs/..."
code: "https://github.com/qmilab/..."
abstract: "Short abstract text..."
---

Optional extended content / research note below frontmatter.
```

## Navigation Structure (Phase 1)

Anchor links on single page:
- **QMI Lab** → hero (top)
- **Research** → #research
- **Publications** → #publications
- **Collaborate** → #collaborate
- **Manifesto** → /manifesto (separate page)

## Reference Documents

All source documents are in `.claude/docs/`:
- `manifesto-v3.md` — The full QMI Lab Research Manifesto (v3.0, current)
- `quantputation-v2mom-v2.md` — Quantputation V2MOM (v2.0, reflects QMI Lab separation)
- `org-architecture-summary.md` — Full conversation summary covering entity architecture decisions
- `website-spec.md` — Detailed website specification and content plan

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:4321)
bun run build        # Build static site to dist/
bun run preview      # Preview built site locally
```

## Important Notes

- The founder's name is **Nandan**. He is the Principal Researcher.
- QMI Lab is an **independent entity**, NOT a division of Quantputation. The relationship is upstream (research) / downstream (commercial). See org-architecture-summary.md for details.
- The manifesto has gone through three revisions (v1 → v2 → v3). v3 is final. Do not rewrite; only update specific sections if instructed.
- The site should work perfectly without JavaScript. Astro's static output is the goal.
- Do NOT use Astro Starlight theme — it looks like a docs site. Use a custom minimal design.
- Publications list will be empty at launch except for "in preparation" entries. This is intentional and signals seriousness.
