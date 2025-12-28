"use client";

import Image from "next/image";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { Button } from "@/app/components/ui/Button";
import { SocialIcons } from "@/app/components/ui/SocialIcons";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

export default function About() {
  const { openModal } = useInquiryModal();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Portrait */}
              <AnimatedSection>
                <div className="relative aspect-[7/8] rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
                  <Image
                    src="https://static.wixstatic.com/media/cdf36e_5016e2e387a44547bef8e1127bdff7ef~mv2.jpg/v1/fill/w_700,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/cdf36e_5016e2e387a44547bef8e1127bdff7ef~mv2.jpg"
                    alt="Yogetsu Akasaka"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={1}>
                <div>
                  <span className="text-sm text-muted uppercase tracking-wider mb-4 block">
                    Meditation Music Artist & Zen Buddhist Priest
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                    Yogetsu Akasaka
                  </h1>
                  <p className="text-lg text-muted leading-relaxed mb-8">
                    Born in Tokyo, I began my creative journey as a beatboxer
                    and soon discovered the transformative power of
                    improvisation. Today, I craft immersive musical experiences
                    that awaken the present moment, inspiring connection and
                    self-discovery.
                  </p>
                  <SocialIcons size="md" className="justify-start" />
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Journey Section */}
        <section className="py-20 md:py-32 bg-surface">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <AnimatedSection>
                <div>
                  <span className="text-sm text-muted uppercase tracking-wider mb-4 block">
                    The Journey
                  </span>
                  <h2 className="text-3xl md:text-4xl font-light mb-6">
                    From Tokyo to the World
                  </h2>
                  <div className="space-y-6 text-muted leading-relaxed">
                    <p>
                      After studying at a Soto Zen monastery in Japan and the
                      San Francisco Zen Center, I created a unique practice
                      called Sound-Mandala that bridges ancient Buddhist
                      traditions with modern soundscapes.
                    </p>
                    <p>
                      Using a loop station, I layer Buddhist chanting,
                      beatboxing, handpan melodies, and my multi-layered voice
                      to create spontaneous, meditative soundscapes. Each
                      performance is completely improvised and unique.
                    </p>
                    <p>
                      During the pandemic, my Heart Sutra Beatbox Remix went
                      viral on YouTube, reaching millions of viewers worldwide.
                      This led to performances at internationally renowned
                      festivals including Wonderfruit, Shambala, Colors of
                      Ostrava, and SXSW, as well as a memorable appearance at
                      NASA&apos;s keynote speech.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection delay={1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://static.wixstatic.com/media/cdf36e_b94e2bb0d7034982ab2206a1e0f3893b~mv2.jpg/v1/fill/w_1440,h_781,al_c,q_85,enc_avif,quality_auto/cdf36e_b94e2bb0d7034982ab2206a1e0f3893b~mv2.jpg"
                    alt="Yogetsu performing"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 md:py-32">
          <Container>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
                Purpose & Vision
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Mission */}
              <AnimatedSection delay={1}>
                <div className="border-l-2 border-primary/30 pl-6 h-full">
                  <h3 className="text-xl font-light mb-4 text-primary">
                    Mission
                  </h3>
                  <p className="text-muted leading-relaxed">
                    I empower individuals to unlock their full potential by
                    integrating Zen philosophy with voice, music, breath, and
                    movement. Through transformative experiences such as Zen
                    Voice Awakening, improvisational music, and mindful
                    embodiment, my sessions guide participants toward deep
                    self-discovery and authentic expression. Rooted in Ikigai
                    principles, this journey helps individuals reconnect with
                    their true essence, cultivate inner harmony, and embrace a
                    life of purpose, creativity, and balance.
                  </p>
                </div>
              </AnimatedSection>

              {/* Vision */}
              <AnimatedSection delay={2}>
                <div className="border-l-2 border-primary/30 pl-6 h-full">
                  <h3 className="text-xl font-light mb-4 text-primary">
                    Vision
                  </h3>
                  <p className="text-muted leading-relaxed">
                    I envision a world where individuals fully express their
                    true selves, contributing to both their own spiritual growth
                    and a vibrant, sustainable society. Through immersive and
                    transformative experiences, I guide people on a journey of
                    self-discovery, helping them reconnect with their inner
                    essence, cultivate authenticity, and embrace a life of
                    purpose and harmony.
                  </p>
                  <p className="text-muted leading-relaxed mt-4">
                    By fusing ancient wisdom with modern technology, I aim to
                    make conscious growth accessible to millions, pioneering a
                    new way of living that integrates artistry, mindfulness, and
                    innovation for a more awakened world.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Additional Image Section */}
        <section className="py-20 md:py-32 bg-surface">
          <Container>
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/cdf36e_d13e30640b5d4a038a81108b3d30f87d~mv2.jpeg/v1/fill/w_1724,h_1252,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdf36e_d13e30640b5d4a038a81108b3d30f87d~mv2.jpeg"
                  alt="Yogetsu in meditation"
                  width={1724}
                  height={1252}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <Container>
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Begin Your Journey
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Whether you seek a transformative performance, a mindful
                  workshop, or a personal meditation experience, I am here to
                  guide you on your path to self-discovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => openModal()}>
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
                  <Button
                    href="https://youtu.be/nvIGCMhjkvw?si=IYFCO1LkYJ7AiJyA"
                    external
                    variant="outline"
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
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
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
