"use client";

import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { Button } from "@/app/components/ui/Button";
import { OFFERING_SHAPES } from "@/app/components/ui/OfferingShapes";
import { SERVICE_TYPES } from "@/lib/constants";
import { useInquiryModal } from "@/app/context/InquiryModalContext";
import { InquiryTypeId } from "@/lib/form-data";

// Map service types to inquiry types
const serviceToInquiry: Record<string, InquiryTypeId> = {
  "Voice Meditation": "workshop",
  "Active Meditation": "workshop",
  "Sound-Mandala Performance": "performance",
};

export function ServiceTypes() {
  const { openModal } = useInquiryModal();

  return (
    <section id="offerings" className="py-20 md:py-32 bg-surface">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16">
            Offerings
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICE_TYPES.map((type, index) => {
            const ShapeComponent = OFFERING_SHAPES[type.title];
            return (
              <AnimatedSection key={type.number} delay={index + 1}>
                <div className="relative bg-background border border-border rounded-2xl p-6 md:p-8 h-full flex flex-col overflow-hidden">
                  {/* Background Shape */}
                  {ShapeComponent && <ShapeComponent />}

                  {/* Card Content */}
                  <div className="relative z-10">
                    <span className="text-sm text-muted mb-4 block">
                      {type.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-light mb-4">
                      {type.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {type.description}
                    </p>
                    <Button
                      onClick={() => openModal(serviceToInquiry[type.title])}
                      variant="outline"
                      size="sm"
                    >
                      {type.cta}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
