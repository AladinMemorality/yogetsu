"use client";

import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { Button } from "@/app/components/ui/Button";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

// Geometric Shape Components
function Circle({
  className = "",
  size = "w-64 h-64",
  animate = true,
}: {
  className?: string;
  size?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={`absolute rounded-full border border-primary/20 ${size} ${
        animate ? "animate-float" : ""
      } ${className}`}
    />
  );
}

function Triangle({
  className = "",
  size = 50,
  animate = true,
}: {
  className?: string;
  size?: number;
  animate?: boolean;
}) {
  const height = Math.round(size * 1.732);
  return (
    <div
      className={`absolute ${animate ? "animate-float-reverse" : ""} ${className}`}
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size}px solid transparent`,
        borderRight: `${size}px solid transparent`,
        borderBottom: `${height}px solid rgba(218, 197, 167, 0.15)`,
      }}
    />
  );
}

function Square({
  className = "",
  size = "w-32 h-32",
  animate = true,
}: {
  className?: string;
  size?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={`absolute border border-primary/20 ${size} ${
        animate ? "animate-spin-slow" : ""
      } ${className}`}
    />
  );
}

// Element Card Component
function ElementCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative bg-surface border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30 hover:translate-y-[-4px]">
        <div className="mb-6 text-primary/60 group-hover:text-primary transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-light mb-3 text-primary">{title}</h3>
        <p className="text-muted leading-relaxed text-sm">{description}</p>
      </div>
    </AnimatedSection>
  );
}

// SVG Icons for Elements
const icons = {
  livelooping: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="liveloop-icon"
    >
      <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12" />
      <path d="M36 24c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12" />
    </svg>
  ),
  breathwork: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="breathwork-circles"
    >
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="20" />
    </svg>
  ),
  voice: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="voice-equalizer"
    >
      <line x1="8" y1="24" x2="8" y2="24" />
      <line x1="14" y1="18" x2="14" y2="30" />
      <line x1="20" y1="14" x2="20" y2="34" />
      <line x1="26" y1="10" x2="26" y2="38" />
      <line x1="32" y1="14" x2="32" y2="34" />
      <line x1="38" y1="18" x2="38" y2="30" />
      <line x1="44" y1="24" x2="44" y2="24" />
    </svg>
  ),
  movement: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="movement-icon"
    >
      <path d="M24 8l16 28H8L24 8z" />
    </svg>
  ),
};

export default function IkigaiZen() {
  const { openModal } = useInquiryModal();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Geometric Shapes */}
          <Circle
            size="w-[500px] h-[500px]"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
            animate={false}
          />
          <Circle
            size="w-[700px] h-[700px]"
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 animate-pulse-soft"
            animate={false}
          />
          <Triangle
            size={60}
            className="top-20 left-[15%] hidden md:block"
          />
          <Triangle
            size={40}
            className="bottom-32 right-[20%] rotate-180 hidden md:block"
          />
          <Square
            size="w-24 h-24"
            className="top-1/4 right-[10%] rotate-12 hidden lg:block"
          />
          <Square
            size="w-16 h-16"
            className="bottom-1/4 left-[8%] -rotate-12 hidden lg:block"
          />
          <Circle
            size="w-20 h-20"
            className="top-1/3 left-[5%] hidden md:block"
          />
          <Circle
            size="w-12 h-12"
            className="bottom-1/3 right-[8%] hidden md:block"
          />

          <Container className="relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <span className="text-sm text-muted uppercase tracking-[0.3em] mb-6 block">
                  A Transformative Inner Journey
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
                  IKIGAI ZEN JOURNEY
                </h1>
                <p className="text-xl md:text-2xl text-primary/80 font-light mb-8">
                  Awaken the Next Version of You
                </p>
                <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-12">
                  A transformative inner journey that combines breathwork, voice
                  meditation, and active meditation—guided and empowered by
                  hypnotic live-looping music by Yogetsu Akasaka.
                </p>
                <Button onClick={() => openModal("workshop")}>
                  Begin Your Journey
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
            </AnimatedSection>
          </Container>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32 bg-surface relative overflow-hidden">
          {/* Background Shapes */}
          <Circle
            size="w-96 h-96"
            className="-top-48 -right-48 opacity-20"
          />
          <Triangle
            size={80}
            className="bottom-20 left-10 opacity-50 hidden lg:block"
          />

          <Container className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <AnimatedSection>
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
                    In the age of AI,
                    <br />
                    <span className="text-primary/60">
                      the true evolution begins within.
                    </span>
                  </h2>
                  <div className="space-y-6 text-muted leading-relaxed">
                    <p>
                      Breathwork, voice meditation, movement, and music—the most
                      primal expressions of our being—guide us into a space
                      beyond thought, beyond noise, to remember what it means to
                      be alive.
                    </p>
                    <p>
                      These elemental practices spark a deep reconnection to
                      presence, truth, and purpose. And through LiveLooping,
                      each moment becomes unrepeatable—a once-in-a-lifetime
                      encounter with your most authentic self.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Geometric Composition */}
              <AnimatedSection delay={1}>
                <div className="relative h-80 md:h-96 flex items-center justify-center">
                  {/* Overlapping shapes */}
                  <div className="absolute w-48 h-48 rounded-full border-2 border-primary/30 animate-float" />
                  <div
                    className="absolute w-40 h-40 border-2 border-primary/20 rotate-45 animate-spin-slow"
                    style={{ animationDuration: "30s" }}
                  />
                  <div
                    className="absolute animate-float-reverse"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "60px solid transparent",
                      borderRight: "60px solid transparent",
                      borderBottom: "104px solid rgba(218, 197, 167, 0.2)",
                      transform: "translateY(-20px)",
                    }}
                  />
                  {/* Center dot */}
                  <div className="absolute w-4 h-4 rounded-full bg-primary/40" />
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* The Elements Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background Shapes */}
          <Square
            size="w-40 h-40"
            className="top-20 -left-20 rotate-12 opacity-30 hidden lg:block"
          />
          <Circle
            size="w-32 h-32"
            className="bottom-20 -right-16 opacity-20 hidden lg:block"
          />

          <Container className="relative z-10">
            <AnimatedSection>
              <div className="text-center mb-16">
                <span className="text-sm text-muted uppercase tracking-[0.2em] mb-4 block">
                  The Practice
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                  The Elements
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ElementCard
                icon={icons.livelooping}
                title="LiveLooping Music"
                description="LiveLooping empowers your breath, voice, and movement—turning presence into sound. Each loop builds upon the last, creating a unique sonic tapestry that exists only in this moment."
                delay={1}
              />
              <ElementCard
                icon={icons.breathwork}
                title="Breathwork"
                description="The foundation of presence and awareness. Through conscious breathing, we anchor ourselves in the present moment and prepare the body and mind for deep transformation."
                delay={2}
              />
              <ElementCard
                icon={icons.voice}
                title="Voice Meditation"
                description="Reconnect with your authentic expression through the therapeutic power of your own voice. Discover the profound healing that comes from sounding your truth."
                delay={3}
              />
              <ElementCard
                icon={icons.movement}
                title="Movement"
                description="Embodied mindfulness through active meditation. Inspired by Zen traditions, movement becomes a gateway to tune into the here and now through body and breath."
                delay={4}
              />
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-surface relative overflow-hidden">
          {/* Background Shapes */}
          <Circle
            size="w-64 h-64"
            className="top-1/2 left-10 -translate-y-1/2 opacity-10 hidden lg:block"
          />
          <Triangle
            size={50}
            className="top-20 right-20 hidden md:block"
          />
          <Square
            size="w-20 h-20"
            className="bottom-20 right-1/4 rotate-45 hidden md:block"
          />

          <Container className="relative z-10">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-4xl mb-6">🌿</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                  Are you ready to remember
                  <br />
                  what it means to be alive?
                </h2>
                <p className="text-muted leading-relaxed mb-10">
                  Join Yogetsu Akasaka for a transformative journey that
                  awakens your presence, reconnects you with your authentic
                  self, and guides you toward a life of purpose and harmony.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => openModal("workshop")}>
                    Book an Experience
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
                  <Button href="/about" variant="outline">
                    Learn About Yogetsu
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
