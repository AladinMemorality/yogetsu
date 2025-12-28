"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { useInquiryModal } from "@/app/context/InquiryModalContext";

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { openModal } = useInquiryModal();

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />

        {/* Content */}
        <Container className="relative z-10 text-center pt-20">
          <div className="animate-fade-up">
            {/* Play Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group cursor-pointer inline-flex flex-col items-center gap-3 mb-8"
              aria-label="Play video"
            >
              <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary transition-transform duration-300 group-hover:scale-105">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-dark-text ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-muted group-hover:text-primary transition-colors">
                Watch Video
              </span>
            </button>

            <p className="text-sm md:text-base text-muted uppercase tracking-[0.3em] mb-6">
              Zen Buddhist Priest & Sound Artist
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6">
              Yogetsu Akasaka
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
              Bridging ancient Buddhist traditions with modern soundscapes.
              <br className="hidden md:block" />
              Live-looping, beatbox, handpan, and meditative chanting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => openModal()} size="lg">
                Book an Experience
              </Button>
              <Button
                href="https://open.spotify.com/artist/5x5CCr6qXbarmVN3K6o32h"
                variant="outline"
                size="lg"
                external
              >
                Listen on Spotify
              </Button>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToExperience}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer z-10"
          aria-label="Scroll to experience"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white hover:text-primary transition-colors"
            aria-label="Close video"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Video Container */}
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nvIGCMhjkvw?si=72Ywg18vMByVJWXl&autoplay=1"
              title="Yogetsu Akasaka"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
