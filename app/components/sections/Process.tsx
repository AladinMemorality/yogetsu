"use client";

import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-surface">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-4">
            How It Works
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-12 md:mb-16">
            From first contact to a transformative experience—here&apos;s how
            we create something meaningful together.
          </p>
        </AnimatedSection>

        {/* Desktop: Horizontal timeline with connecting line */}
        <div className="hidden lg:block relative">
          {/* Connecting Line Background */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedSection key={step.number} delay={index + 1}>
                <div className="group relative cursor-default">
                  {/* Number Badge with animations */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(218,197,167,0.3)]">
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 group-hover:animate-ping" />
                    <span className="text-2xl text-primary font-light transition-transform duration-300 group-hover:scale-110">
                      {step.number}
                    </span>
                  </div>

                  {/* Content with slide up on hover */}
                  <div className="text-center transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-xs text-muted uppercase tracking-wider block mb-2 transition-colors duration-300 group-hover:text-primary/70">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg font-light mb-3 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector dot */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="absolute top-8 -right-3 w-2 h-2 rounded-full bg-primary/50 transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Tablet: 2x2 Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <AnimatedSection key={step.number} delay={index + 1}>
              <div className="group bg-background rounded-2xl p-6 border border-border h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(218,197,167,0.1)] hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  {/* Number Badge with animation */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110">
                    <span className="text-xl text-primary font-light">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-muted uppercase tracking-wider block mb-1 transition-colors duration-300 group-hover:text-primary/70">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg font-light mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: Vertical cards with animated accent */}
        <div className="md:hidden space-y-4">
          {PROCESS_STEPS.map((step, index) => (
            <AnimatedSection key={step.number} delay={index + 1}>
              <div className="group relative bg-background rounded-2xl p-5 border border-border transition-all duration-300 active:scale-[0.98] hover:border-primary/40">
                {/* Animated accent line */}
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-primary/30 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </div>

                <div className="pl-4">
                  {/* Header with number */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl text-primary font-light transition-transform duration-300 group-hover:scale-110">
                      {step.number}
                    </span>
                    <div>
                      <span className="text-xs text-muted uppercase tracking-wider block transition-colors duration-300 group-hover:text-primary/70">
                        {step.subtitle}
                      </span>
                      <h3 className="text-lg font-light text-primary">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary/50"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
