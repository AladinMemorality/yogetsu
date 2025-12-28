User approved Claude's plan
  ⎿  Plan saved to: ~/.claude/plans/staged-frolicking-toast.md · /plan to edit
     EDGE Bali Landing Page - Implementation Plan

     Overview

     Implement a luxury Bali travel/concierge service landing page using Next.js 16 
     with Tailwind CSS v4. Features scroll-triggered animations, local images, and
     interactive FAQ accordions.

     ---
     User Preferences

     - Scroll animations: Yes - fade-in/slide-up on scroll using Intersection Observer
     - Images: Download to local /public folder
     - FAQ: Interactive accordions with smooth expand/collapse

     ---
     Design System

     Color Palette

     | Token        | Value                     | Usage                       |
     |--------------|---------------------------|-----------------------------|
     | --background | #0e0e0e                   | Page background             |
     | --primary    | #dac5a7                   | Accent color, buttons, text |
     | --surface    | #1a1a1a                   | Card backgrounds            |
     | --border     | rgba(218, 197, 167, 0.15) | Subtle borders              |
     | --muted      | rgba(218, 197, 167, 0.6)  | Secondary text              |
     | --dark-text  | #1d1e1f                   | Text on beige buttons       |

     Responsive Breakpoints

     - Mobile: < 678px
     - Tablet: 678px - 954px
     - Desktop: >= 955px

     ---
     File Structure

     my-app/
     ├── app/
     │   ├── globals.css              # Design system, animations
     │   ├── layout.tsx               # Metadata, fonts
     │   ├── page.tsx                 # Main page composition
     │   └── components/
     │       ├── layout/
     │       │   ├── Header.tsx       # Sticky glassmorphism header
     │       │   ├── MobileMenu.tsx   # Slide-in mobile menu
     │       │   └── Footer.tsx       # Site footer
     │       ├── sections/
     │       │   ├── Hero.tsx         # Video background hero
     │       │   ├── Services.tsx     # 2x2 service cards
     │       │   ├── ServiceTypes.tsx # 3 service type cards
     │       │   ├── ServicesMarquee.tsx # Infinite scroll images
     │       │   ├── MembersClub.tsx  # Split layout CTA
     │       │   ├── Process.tsx      # 4-step timeline
     │       │   ├── FAQ.tsx          # Accordion FAQ
     │       │   └── Partners.tsx     # Logo marquee
     │       └── ui/
     │           ├── Button.tsx       # Reusable button
     │           ├── Container.tsx    # Max-width wrapper
     │           └── AnimatedSection.tsx # Scroll animation wrapper
     ├── hooks/
     │   ├── useScrollAnimation.ts    # Intersection Observer hook
     │   └── useMediaQuery.ts         # Responsive hook
     ├── lib/
     │   ├── constants.ts             # Content data, colors
     │   └── utils.ts                 # cn() utility
     ├── public/
     │   ├── images/
     │   │   ├── logo.png
     │   │   ├── trustpilot.png
     │   │   ├── services/            # 4 service card images
     │   │   ├── marquee/             # ~12 marquee images
     │   │   └── partners/            # 6 partner logos
     │   └── videos/
     │       ├── hero-bg.mp4
     │       └── members-club.mp4
     └── types/
         └── index.ts                 # TypeScript interfaces

     ---
     Implementation Steps

     Phase 1: Foundation

     Step 1: Update globals.css
     - Add CSS variables for color palette
     - Add custom keyframe animations (marquee, fade-up)
     - Add scroll animation utility classes
     - Add reduced-motion media query support

     Step 2: Create utility files
     - lib/utils.ts - className merger function
     - lib/constants.ts - colors, FAQ data, service data
     - types/index.ts - TypeScript interfaces

     Step 3: Create hooks
     - hooks/useScrollAnimation.ts - Intersection Observer for scroll animations
     - hooks/useMediaQuery.ts - responsive breakpoint detection

     Step 4: Create base UI components
     - components/ui/Container.tsx - max-width wrapper
     - components/ui/Button.tsx - primary/secondary/whatsapp variants
     - components/ui/AnimatedSection.tsx - scroll animation wrapper

     Phase 2: Layout Components

     Step 5: Header
     - Sticky with glassmorphism (backdrop-blur-xl)
     - Logo, WhatsApp icon, "Inquire Here" CTA
     - Hamburger menu for mobile

     Step 6: MobileMenu
     - Slide-in drawer from right
     - Navigation links
     - Close on navigation or backdrop click

     Step 7: Footer
     - Logo, navigation links
     - Social icons (Instagram, WhatsApp)
     - "To Top" button, copyright

     Phase 3: Page Sections

     Step 8: Hero
     - Full viewport height (min-h-screen)
     - HTML5 video background with poster fallback
     - Headline, subheadline, CTA button
     - Trustpilot badge
     - Scroll indicator arrow

     Step 9: Services
     - Section title "Services"
     - 2x2 responsive grid (1 col mobile, 2 cols tablet+)
     - Image cards with title overlay and hover effect

     Step 10: ServiceTypes
     - Section title "Service Types"
     - 3 cards in row (stack on mobile)
     - Each: number label, title, description, CTA

     Step 11: ServicesMarquee
     - Two horizontal marquee rows (opposite directions)
     - CSS @keyframes for infinite scroll
     - Gradient fade on edges, pause on hover

     Step 12: MembersClub
     - Split layout (text left, video right)
     - Stack on mobile
     - CTA button with arrow icon

     Step 13: Process
     - 4-step vertical timeline
     - Number badges with connecting line
     - Title, subtitle, description for each step

     Step 14: FAQ
     - Two-column layout (title left, accordion right)
     - Single accordion open at a time
     - Smooth height animation using grid-rows
     - Plus/minus icon toggle

     Step 15: Partners
     - Horizontal logo marquee
     - Grayscale filter, color on hover
     - Infinite scroll animation

     Phase 4: Assets & Integration

     Step 16: Download images
     - Download all images to /public/images/
     - Download videos to /public/videos/
     - Optimize for web (compress, appropriate sizes)

     Step 17: Assemble page
     - Import all sections into page.tsx
     - Add section IDs for navigation
     - Add smooth scroll behavior

     Step 18: Testing & Polish
     - Test all breakpoints (mobile, tablet, desktop)
     - Verify animations work correctly
     - Check accessibility (keyboard nav, focus states)
     - Test reduced-motion preference

     ---
     Key Technical Patterns

     Scroll Animation Hook

     // hooks/useScrollAnimation.ts
     export function useScrollAnimation({ threshold = 0.1, triggerOnce = true }) {
       const ref = useRef<HTMLElement>(null);
       const [isVisible, setIsVisible] = useState(false);

       useEffect(() => {
         const observer = new IntersectionObserver(
           ([entry]) => {
             if (entry.isIntersecting) {
               setIsVisible(true);
               if (triggerOnce) observer.unobserve(entry.target);
             }
           },
           { threshold, rootMargin: '0px 0px -50px 0px' }
         );
         if (ref.current) observer.observe(ref.current);
         return () => observer.disconnect();
       }, []);

       return { ref, isVisible };
     }

     FAQ Accordion (smooth height animation)

     <div className={`grid transition-all duration-300 ${
       isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
     }`}>
       <div className="overflow-hidden">
         <p className="p-6">{answer}</p>
       </div>
     </div>

     Infinite Marquee CSS

     @keyframes marquee {
       0% { transform: translateX(0); }
       100% { transform: translateX(-50%); }
     }
     .animate-marquee {
       animation: marquee 30s linear infinite;
     }

     Glassmorphism Header

     <header className="fixed top-0 inset-x-0 z-50
       bg-[rgba(14,14,14,0.7)] backdrop-blur-xl
       border-b border-[rgba(218,197,167,0.15)]">

     ---
     Critical Files

     | File                                    | Action  | Priority |
     |-----------------------------------------|---------|----------|
     | app/globals.css                         | Modify  | High     |
     | app/layout.tsx                          | Modify  | High     |
     | app/page.tsx                            | Replace | High     |
     | hooks/useScrollAnimation.ts             | Create  | High     |
     | lib/constants.ts                        | Create  | High     |
     | components/ui/Button.tsx                | Create  | High     |
     | components/ui/AnimatedSection.tsx       | Create  | High     |
     | components/layout/Header.tsx            | Create  | High     |
     | components/sections/Hero.tsx            | Create  | High     |
     | components/sections/Services.tsx        | Create  | Medium   |
     | components/sections/ServiceTypes.tsx    | Create  | Medium   |
     | components/sections/ServicesMarquee.tsx | Create  | Medium   |
     | components/sections/MembersClub.tsx     | Create  | Medium   |
     | components/sections/Process.tsx         | Create  | Medium   |
     | components/sections/FAQ.tsx             | Create  | Medium   |
     | components/sections/Partners.tsx        | Create  | Medium   |
     | components/layout/Footer.tsx            | Create  | Medium   |
     | components/layout/MobileMenu.tsx        | Create  | Low      |

     ---
     Accessibility

     - Keyboard navigation for FAQ accordions
     - ARIA attributes for interactive elements
     - Reduced motion support:
     @media (prefers-reduced-motion: reduce) {
       .scroll-animate { transition: none; opacity: 1; transform: none; }
       .animate-marquee { animation: none; }
     }
     - Focus states for all interactive elements
     - Semantic HTML structure
     - Alt text for all images

     ---
     Image Sources (to download)

     Hero Video:
     - https://framerusercontent.com/assets/MyxJNjLLbjUID1g9uAU0Q75eBlk.mp4

     Services:
     - Luxury Villas: 
     https://framerusercontent.com/images/1tgxg315hEEcx0ndDSeXK2rq3iQ.jpg
     - Adventures: 
     https://framerusercontent.com/images/uzJpi791tmKdp4RUyn9AlVJ8zL0.jpg
     - Restaurants: 
     https://framerusercontent.com/images/FoyKnsFS9jWzFPIgUt6nFkbgSg.jpg
     - Transport: https://framerusercontent.com/images/cmMjBUncTS1w8xzd4EOkZ1fsC0.jpg

     Logo:
     - https://framerusercontent.com/images/Lno0262AAS2IltjjtR5TVVPPKY.png

     Trustpilot:
     - https://framerusercontent.com/images/3pcNzCpC313QM2V0TaADJ74AU.png