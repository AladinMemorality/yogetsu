import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CITIES,
  SERVICE_TYPES_SEO,
  getCityBySlug,
  getServiceBySlug,
  getAllCityServiceCombinations,
  getPageTitle,
  getPageDescription,
  getPageKeywords,
} from "@/lib/seo-data";
import { ServiceLandingPage } from "./ServiceLandingPage";

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

// Generate all static paths at build time
export async function generateStaticParams() {
  return getAllCityServiceCombinations();
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    return {
      title: "Page Not Found",
    };
  }

  const title = getPageTitle(city, service);
  const description = getPageDescription(city, service);
  const keywords = getPageKeywords(city, service);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/book/${citySlug}/${serviceSlug}`,
    },
  };
}

export default async function BookingPage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    notFound();
  }

  // Get related cities in the same region
  const relatedCities = CITIES.filter(
    (c) => c.region === city.region && c.slug !== city.slug
  ).slice(0, 4);

  // Get other services
  const otherServices = SERVICE_TYPES_SEO.filter(
    (s) => s.slug !== service.slug
  ).slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} by Yogetsu Akasaka`,
    description: service.longDescription,
    provider: {
      "@type": "Person",
      name: "Yogetsu Akasaka",
      jobTitle: "Zen Buddhist Priest & Meditation Music Artist",
      url: "https://yogetsuakasaka.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "Country",
        name: city.country,
      },
    },
    serviceType: service.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceLandingPage
        city={city}
        service={service}
        relatedCities={relatedCities}
        otherServices={otherServices}
      />
    </>
  );
}
