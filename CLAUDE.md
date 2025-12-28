# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Yogetsu Akasaka portfolio website - a Zen Buddhist Priest & Sound Artist. Built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### App Router Structure
- `/app/page.tsx` - Home page composed of section components
- `/app/[route]/page.tsx` - Static routes (about, ikigaizen, legal, book)
- `/app/book/[city]/[service]/page.tsx` - Dynamic SEO landing pages (240+ city/service combinations)

### Key Directories
- `/app/components/layout/` - Header, Footer, MobileMenu
- `/app/components/sections/` - Page sections (Hero, Services, FAQ, etc.)
- `/app/components/ui/` - Reusable components (Button, Container, AnimatedSection, InquiryModal)
- `/app/context/` - React contexts (InquiryModalContext for modal state)
- `/hooks/` - Custom hooks (useScrollAnimation, useMediaQuery)
- `/lib/` - Utilities and data (constants.ts, form-data.ts, seo-data.ts, utils.ts)
- `/types/` - TypeScript interfaces

### Data-Driven Content
All content is centralized in `/lib/`:
- `constants.ts` - Navigation, videos, FAQ items, process steps, partner logos, social links
- `form-data.ts` - Multi-step inquiry form structure with type-specific questions
- `seo-data.ts` - City/service combinations for dynamic SEO pages

### Design System
CSS variables defined in `/app/globals.css`:
- `--background: #0e0e0e` (dark charcoal)
- `--foreground: #dac5a7` (warm beige)
- `--primary: #dac5a7` (accent)
- `--surface: #1a1a1a` (card backgrounds)

Breakpoints: Mobile (<678px), Tablet (678-954px), Desktop (>=955px)

### State Management
- `InquiryModalContext` - Controls inquiry form modal visibility and preselected type
- Client components use `"use client"` directive
- Server components for layouts and static content

### Custom Animations
Extensive CSS keyframe animations in `globals.css`:
- Marquee (infinite scroll galleries)
- Scroll-triggered fade/slide animations (`.scroll-animate` class)
- Interactive element animations (audio bars, breathing, mandala rotations)
- All respect `prefers-reduced-motion`

### Key Patterns
- `cn()` utility in `/lib/utils.ts` for merging Tailwind classes
- `AnimatedSection` wrapper for scroll-triggered animations
- `useScrollAnimation` hook with Intersection Observer
- Form submission via mailto and WhatsApp links

### Remote Images
Next.js configured to allow images from `wixstatic.com` domain.
