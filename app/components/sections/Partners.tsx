"use client";

import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { PARTNER_LOGO_COMPONENTS } from "@/app/components/ui/PartnerLogos";
import { PARTNER_LOGOS } from "@/lib/constants";

export function Partners() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <Container>
        <AnimatedSection>
          <p className="text-center text-muted text-sm uppercase tracking-wider mb-8">
            Featured at
          </p>
        </AnimatedSection>
      </Container>

      {/* Logo Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 marquee-gradient-left z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 marquee-gradient-right z-10" />
        <div className="flex animate-marquee hover:pause">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => {
            const LogoComponent = PARTNER_LOGO_COMPONENTS[partner.name];
            return (
              <div
                key={`partner-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-12 w-32 md:w-44 text-primary/50 hover:text-primary transition-all duration-300"
              >
                {LogoComponent ? (
                  <LogoComponent className="h-full w-auto" />
                ) : (
                  <span className="text-sm font-light tracking-wider">
                    {partner.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
