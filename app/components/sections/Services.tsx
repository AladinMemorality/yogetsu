"use client";

import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { VIDEOS } from "@/lib/constants";

export function Services() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <Container>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 md:mb-16">
            Experience
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {VIDEOS.map((video, index) => (
            <AnimatedSection key={video.title} delay={index + 1}>
              <div className="group relative overflow-hidden rounded-2xl bg-surface">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-light text-primary">
                    {video.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
