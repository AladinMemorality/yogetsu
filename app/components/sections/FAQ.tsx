"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Title */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-muted">
                Got questions? We have got answers. If you do not find what you
                are looking for, reach out to us directly.
              </p>
            </div>
          </AnimatedSection>

          {/* Accordion */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AnimatedSection key={index} delay={Math.min(index + 1, 4)}>
                <div className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface/50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-light pr-4">{item.question}</span>
                    <span className="flex-shrink-0 text-primary">
                      {openIndex === index ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
