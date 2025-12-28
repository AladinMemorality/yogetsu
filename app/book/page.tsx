import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Container } from "@/app/components/ui/Container";
import { AnimatedSection } from "@/app/components/ui/AnimatedSection";
import { CITIES, SERVICE_TYPES_SEO, City } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Book Yogetsu Akasaka | Meditation Music for Events Worldwide",
  description:
    "Book Yogetsu Akasaka for corporate events, festivals, weddings, retreats, and workshops. Available worldwide in Dubai, Tokyo, New York, London, Bali, and more.",
  keywords: [
    "book meditation artist",
    "hire zen performer",
    "corporate wellness speaker",
    "festival performer",
    "meditation music events",
    "Yogetsu Akasaka booking",
  ],
};

// Group cities by region
function getCitiesByRegion(): Record<string, City[]> {
  const grouped: Record<string, City[]> = {};
  for (const city of CITIES) {
    if (!grouped[city.region]) {
      grouped[city.region] = [];
    }
    grouped[city.region].push(city);
  }
  return grouped;
}

export default function BookIndexPage() {
  const citiesByRegion = getCitiesByRegion();
  const regions = ["Middle East", "Europe", "Asia", "North America", "Oceania"];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-surface">
          <Container>
            <AnimatedSection>
              <div className="max-w-3xl">
                <span className="text-sm text-muted uppercase tracking-wider mb-4 block">
                  Worldwide Availability
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  Book an Experience
                </h1>
                <p className="text-xl text-muted leading-relaxed">
                  Bring transformative meditation music to your event. Yogetsu
                  Akasaka is available for corporate events, festivals, weddings,
                  retreats, and workshops worldwide.
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <Container>
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                Services
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_TYPES_SEO.map((service, i) => (
                <AnimatedSection key={service.slug} delay={Math.min(i + 1, 4)}>
                  <div className="bg-surface border border-border rounded-xl p-6 h-full">
                    <h3 className="text-lg font-light text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {CITIES.slice(0, 4).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/book/${city.slug}/${service.slug}`}
                          className="text-xs text-muted hover:text-primary transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                      <span className="text-xs text-muted">+{CITIES.length - 4} more</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Cities by Region */}
        <section className="py-16 md:py-24 bg-surface">
          <Container>
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-light mb-12">
                Locations
              </h2>
            </AnimatedSection>

            <div className="space-y-12">
              {regions.map((region) => {
                const cities = citiesByRegion[region];
                if (!cities || cities.length === 0) return null;

                return (
                  <AnimatedSection key={region}>
                    <div>
                      <h3 className="text-lg font-light text-primary mb-4 border-b border-border pb-2">
                        {region}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {cities.map((city) => (
                          <div key={city.slug} className="space-y-1">
                            <h4 className="font-light text-primary">{city.name}</h4>
                            <div className="flex flex-col gap-1">
                              {SERVICE_TYPES_SEO.slice(0, 3).map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/book/${city.slug}/${service.slug}`}
                                  className="text-xs text-muted hover:text-primary transition-colors"
                                >
                                  {service.shortName}
                                </Link>
                              ))}
                              <Link
                                href={`/book/${city.slug}/corporate-events`}
                                className="text-xs text-muted hover:text-primary transition-colors"
                              >
                                All services →
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </Container>
        </section>

        {/* All Links Grid (for SEO crawling) */}
        <section className="py-16 md:py-24">
          <Container>
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-light mb-8">
                All Booking Options
              </h2>
              <p className="text-muted mb-8">
                Browse all available locations and services:
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_TYPES_SEO.map((service) => (
                <AnimatedSection key={service.slug}>
                  <div>
                    <h3 className="font-light text-primary mb-3 text-lg">
                      {service.name}
                    </h3>
                    <ul className="space-y-1">
                      {CITIES.map((city) => (
                        <li key={`${city.slug}-${service.slug}`}>
                          <Link
                            href={`/book/${city.slug}/${service.slug}`}
                            className="text-sm text-muted hover:text-primary transition-colors"
                          >
                            {service.name} in {city.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
