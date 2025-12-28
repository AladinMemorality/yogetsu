"use client";

import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { Button } from "@/app/components/ui/Button";
import { useInquiryModal } from "@/app/context/InquiryModalContext";
import { City, ServiceType } from "@/lib/seo-data";
import { WHATSAPP_LINK } from "@/lib/constants";

interface ServiceLandingPageProps {
  city: City;
  service: ServiceType;
  relatedCities: City[];
  otherServices: ServiceType[];
}

// Service icons
const ServiceIcon = ({ type }: { type: ServiceType["icon"] }) => {
  const icons = {
    building: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
      </svg>
    ),
    music: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    heart: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    users: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    mic: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
  };
  return <span className="text-primary">{icons[type]}</span>;
};

export function ServiceLandingPage({
  city,
  service,
  relatedCities,
  otherServices,
}: ServiceLandingPageProps) {
  const { openModal } = useInquiryModal();

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="pt-24 pb-4 bg-surface">
          <Container>
            <nav className="text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#offerings" className="hover:text-primary transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary">{service.name} in {city.name}</span>
            </nav>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-surface">
          <Container>
            <div className="max-w-4xl">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <ServiceIcon type={service.icon} />
                  <span className="text-sm text-muted uppercase tracking-wider">
                    {service.shortName} in {city.region}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  {service.name} in {city.name}
                </h1>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => openModal(service.inquiryType)}>
                    Book for {city.name}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Button>
                  <Button href={WHATSAPP_LINK} variant="whatsapp" external>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* About Yogetsu Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="text-sm text-muted uppercase tracking-wider mb-4 block">
                  Your Guide
                </span>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Yogetsu Akasaka
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Zen Buddhist priest, live-looping artist, and meditation musician from Tokyo, Japan.
                    Yogetsu creates transformative experiences through his unique Sound-Mandala practice,
                    blending ancient Buddhist traditions with modern soundscapes.
                  </p>
                  <p>
                    His viral Heart Sutra Beatbox Remix reached millions worldwide, and he has performed
                    at renowned festivals including SXSW, Wonderfruit, and Shambala, as well as at
                    NASA&apos;s keynote presentation.
                  </p>
                </div>
                <div className="mt-6">
                  <Button href="/about" variant="outline">
                    Learn More About Yogetsu
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <div className="bg-surface border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-light mb-6 text-primary">
                    What to Expect
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Live-looping performance with beatbox, handpan & chanting",
                      "Guided breathwork and voice meditation",
                      "Customized experience for your event",
                      "Intimate or large-scale formats available",
                      "Virtual and in-person options",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted">
                        <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Why This City Section */}
        <section className="py-16 md:py-24 bg-surface">
          <Container>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  {service.name} in {city.name}, {city.country}
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  {city.name} is a vibrant hub for {service.shortName.toLowerCase()} events in {city.region}.
                  Whether you&apos;re organizing a {service.shortName.toLowerCase()} in the heart of the city
                  or at a unique venue nearby, Yogetsu brings a transformative meditation music experience
                  that resonates with audiences across cultures.
                </p>
                <Button onClick={() => openModal(service.inquiryType)} size="lg">
                  Inquire for {city.name}
                </Button>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Related Cities */}
        {relatedCities.length > 0 && (
          <section className="py-16 md:py-24">
            <Container>
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-light mb-8">
                  Also Available in {city.region}
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedCities.map((relatedCity, i) => (
                  <AnimatedSection key={relatedCity.slug} delay={i + 1}>
                    <Link
                      href={`/book/${relatedCity.slug}/${service.slug}`}
                      className="block p-6 bg-surface border border-border rounded-xl hover:border-primary/30 transition-colors"
                    >
                      <h3 className="font-light text-primary">{relatedCity.name}</h3>
                      <p className="text-sm text-muted">{relatedCity.country}</p>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Other Services */}
        <section className="py-16 md:py-24 bg-surface">
          <Container>
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Other Services in {city.name}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((otherService, i) => (
                <AnimatedSection key={otherService.slug} delay={i + 1}>
                  <Link
                    href={`/book/${city.slug}/${otherService.slug}`}
                    className="block p-6 bg-background border border-border rounded-xl hover:border-primary/30 transition-all hover:translate-y-[-2px]"
                  >
                    <div className="mb-4">
                      <ServiceIcon type={otherService.icon} />
                    </div>
                    <h3 className="text-lg font-light text-primary mb-2">{otherService.name}</h3>
                    <p className="text-sm text-muted">{otherService.description}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <Container>
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Ready to Book?
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Let&apos;s discuss how Yogetsu can create a unique {service.shortName.toLowerCase()} experience
                  for your event in {city.name}. Reach out today to start planning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => openModal(service.inquiryType)}>
                    Start Your Inquiry
                  </Button>
                  <Button href={WHATSAPP_LINK} variant="whatsapp" external>
                    Chat on WhatsApp
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
