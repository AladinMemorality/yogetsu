"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { Button } from "@/app/components/ui/Button";
import { AudioPlayer } from "@/app/components/ui/AudioPlayer";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

// Ikigai Zen Preview Component with geometric shapes (same size as AudioPlayer)
function IkigaiZenPreview() {
  return (
    <Link
      href="/ikigaizen"
      className="group relative block bg-surface border border-border rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-primary/30"
    >
      {/* Geometric Shapes - positioned to the right */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24">
        {/* Circle */}
        <div className="absolute inset-0 rounded-full border border-primary/25 animate-float" />
        {/* Square rotated */}
        <div
          className="absolute inset-2 border border-primary/20 rotate-45 animate-spin-slow"
          style={{ animationDuration: "30s" }}
        />
        {/* Triangle */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-reverse"
          style={{
            width: 0,
            height: 0,
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderBottom: "28px solid rgba(218, 197, 167, 0.15)",
          }}
        />
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40" />
      </div>

      {/* Content - matches AudioPlayer layout */}
      <div className="relative z-10 flex items-center gap-5 md:gap-6">
        {/* Icon circle matching play button size */}
        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
        </div>

        {/* Text content */}
        <div className="flex-grow min-w-0">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">
            Transformative Journey
          </p>
          <h4 className="font-light text-primary text-sm md:text-base">
            Ikigai Zen
          </h4>
          <p className="text-xs text-muted mt-1 hidden sm:block">
            Breathwork, voice meditation & movement
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 text-muted group-hover:text-primary transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export function MembersClub() {
  const { openModal } = useInquiryModal();

  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Image + Audio Player */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/yogetsu.webp"
                  alt="Yogetsu Akasaka"
                  fill
                  className="object-cover"
                />
              </div>
              <AudioPlayer
                src="/audio/story_podcast.mp3"
                title="The Yogetsu Story"
                subtitle="Podcast"
              />
            </div>
          </AnimatedSection>

          {/* Right Column: Text + Ikigai Zen Preview */}
          <AnimatedSection delay={1}>
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex-grow">
                <span className="text-sm text-muted uppercase tracking-wider mb-4 block">
                  Meditation Music Artist & Zen Buddhist Priest
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                  Yogetsu Akasaka
                </h2>
                <div className="space-y-6 text-muted leading-relaxed">
                  <p>
                    Born in Tokyo, Yogetsu Akasaka is a beatboxer, handpan player,
                    live-looping artist, and Zen Buddhist priest whose work
                    bridges ancient traditions and modern soundscapes.
                  </p>
                  <p>
                    Combining ethereal handpan melodies, rhythmic beatboxing, and
                    Buddhist mantras, Yogetsu creates transformative, improvised
                    live-looping music that embodies the Zen philosophy of
                    treasuring each moment as a once-in-a-lifetime experience. His
                    performances guide audiences on a journey of self-discovery
                    and inner peace.
                  </p>
                </div>
              </div>
              <IkigaiZenPreview />
            </div>
          </AnimatedSection>
        </div>

        {/* Extended Bio */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-light mb-4 text-primary">
                Global Recognition
              </h3>
              <p className="text-muted leading-relaxed">
                During the pandemic, Yogetsu gained international recognition
                when his Heart Sutra Beatbox Remix went viral on YouTube,
                reaching millions of viewers worldwide. This success propelled
                his global career, leading to performances at internationally
                renowned festivals including Wonderfruit (Thailand), Shambala
                (UK), Colors of Ostrava (Czech Republic), and SXSW (USA). In
                2023 and 2024, he performed as an official SXSW artist,
                including a memorable appearance at NASA&apos;s keynote speech,
                guiding the audience on an inner space journey.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="border-l-2 border-primary/30 pl-6">
              <h3 className="text-xl font-light mb-4 text-primary">
                Workshops & Wellness
              </h3>
              <p className="text-muted leading-relaxed">
                Yogetsu shares his unique fusion of music and mindfulness at
                global wellness conferences, offering live sessions and
                workshops including Voice Meditation and Active Meditation. Each
                workshop integrates breathwork with transformative, improvised
                music created spontaneously in the present moment—inviting
                participants to reconnect with themselves and experience the
                profound therapeutic power of the human voice and movement,
                inspired by the Zen practice of mindful presence.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://youtu.be/nvIGCMhjkvw?si=IYFCO1LkYJ7AiJyA"
              external
            >
              Watch Heart Sutra
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
            <Button onClick={() => openModal("workshop")} variant="outline">
              Book a Workshop
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
