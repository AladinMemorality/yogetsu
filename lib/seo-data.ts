import { InquiryTypeId } from "./form-data";

// City data for SEO landing pages
export interface City {
  slug: string;
  name: string;
  country: string;
  region: "Asia" | "Middle East" | "Europe" | "North America" | "Oceania";
}

export const CITIES: City[] = [
  // Global Major Cities
  { slug: "tokyo", name: "Tokyo", country: "Japan", region: "Asia" },
  { slug: "new-york", name: "New York", country: "USA", region: "North America" },
  { slug: "london", name: "London", country: "UK", region: "Europe" },
  { slug: "singapore", name: "Singapore", country: "Singapore", region: "Asia" },
  { slug: "bali", name: "Bali", country: "Indonesia", region: "Asia" },

  // Middle East
  { slug: "dubai", name: "Dubai", country: "UAE", region: "Middle East" },
  { slug: "riyadh", name: "Riyadh", country: "Saudi Arabia", region: "Middle East" },
  { slug: "abu-dhabi", name: "Abu Dhabi", country: "UAE", region: "Middle East" },
  { slug: "doha", name: "Doha", country: "Qatar", region: "Middle East" },

  // Europe
  { slug: "berlin", name: "Berlin", country: "Germany", region: "Europe" },
  { slug: "paris", name: "Paris", country: "France", region: "Europe" },
  { slug: "zurich", name: "Zurich", country: "Switzerland", region: "Europe" },
  { slug: "davos", name: "Davos", country: "Switzerland", region: "Europe" },
  { slug: "prague", name: "Prague", country: "Czech Republic", region: "Europe" },
  { slug: "ibiza", name: "Ibiza", country: "Spain", region: "Europe" },
  { slug: "amsterdam", name: "Amsterdam", country: "Netherlands", region: "Europe" },
  { slug: "barcelona", name: "Barcelona", country: "Spain", region: "Europe" },

  // Festival Circuit / Americas
  { slug: "bangkok", name: "Bangkok", country: "Thailand", region: "Asia" },
  { slug: "austin", name: "Austin", country: "USA", region: "North America" },
  { slug: "los-angeles", name: "Los Angeles", country: "USA", region: "North America" },
  { slug: "san-francisco", name: "San Francisco", country: "USA", region: "North America" },
  { slug: "sydney", name: "Sydney", country: "Australia", region: "Oceania" },
];

// Service types for SEO landing pages
export interface ServiceType {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  inquiryType: InquiryTypeId;
  keywords: string[];
  icon: "building" | "music" | "heart" | "users" | "mic";
}

export const SERVICE_TYPES_SEO: ServiceType[] = [
  {
    slug: "corporate-events",
    name: "Corporate Events",
    shortName: "Corporate",
    description: "Team building, conferences, and corporate wellness",
    longDescription:
      "Transform your corporate gathering with a unique blend of Zen meditation and live-looping music. Perfect for team building sessions, executive retreats, wellness programs, and conference keynotes that leave a lasting impression.",
    inquiryType: "corporate",
    keywords: ["corporate wellness", "team building", "conference", "retreat", "executive wellness"],
    icon: "building",
  },
  {
    slug: "festival-performance",
    name: "Festival Performance",
    shortName: "Festival",
    description: "Music festivals and cultural events",
    longDescription:
      "Bring the mesmerizing Sound-Mandala experience to your festival stage. Yogetsu's unique fusion of beatboxing, Buddhist chanting, and handpan creates an unforgettable live performance that captivates audiences of all sizes.",
    inquiryType: "performance",
    keywords: ["music festival", "cultural event", "live performance", "festival artist", "stage performance"],
    icon: "music",
  },
  {
    slug: "wedding-ceremony",
    name: "Wedding Ceremony",
    shortName: "Wedding",
    description: "Sacred ceremonies and celebrations",
    longDescription:
      "Create a truly unique and sacred atmosphere for your special day. Yogetsu's meditative music and ceremonial presence adds depth and meaning to wedding ceremonies, receptions, and celebration events.",
    inquiryType: "private",
    keywords: ["wedding music", "ceremony", "celebration", "wedding entertainment", "sacred ceremony"],
    icon: "heart",
  },
  {
    slug: "private-retreat",
    name: "Private Retreat",
    shortName: "Retreat",
    description: "Wellness retreats and private gatherings",
    longDescription:
      "Design an intimate wellness experience for your private retreat. Whether a personal journey or small group gathering, Yogetsu guides participants through breathwork, voice meditation, and transformative sound experiences.",
    inquiryType: "private",
    keywords: ["retreat", "wellness retreat", "private event", "healing retreat", "mindfulness retreat"],
    icon: "heart",
  },
  {
    slug: "workshop",
    name: "Workshop",
    shortName: "Workshop",
    description: "Voice meditation and active meditation sessions",
    longDescription:
      "Interactive workshops combining Voice Meditation and Active Meditation practices. Participants learn breathing techniques, discover their authentic voice, and experience the transformative power of mindful movement.",
    inquiryType: "workshop",
    keywords: ["meditation workshop", "voice meditation", "breathwork", "mindfulness workshop", "wellness workshop"],
    icon: "users",
  },
  {
    slug: "keynote-speaker",
    name: "Keynote Speaker",
    shortName: "Keynote",
    description: "Conferences and speaking engagements",
    longDescription:
      "An inspiring keynote experience that goes beyond traditional speaking. Yogetsu combines Zen wisdom with live musical demonstration, offering audiences a unique perspective on mindfulness, creativity, and presence in the modern age.",
    inquiryType: "corporate",
    keywords: ["keynote speaker", "conference speaker", "mindfulness talk", "inspirational speaker", "TED-style talk"],
    icon: "mic",
  },
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return SERVICE_TYPES_SEO.find((service) => service.slug === slug);
}

export function getCitiesByRegion(region: City["region"]): City[] {
  return CITIES.filter((city) => city.region === region);
}

// Generate all city-service combinations for static generation
export function getAllCityServiceCombinations(): { city: string; service: string }[] {
  const combinations: { city: string; service: string }[] = [];
  for (const city of CITIES) {
    for (const service of SERVICE_TYPES_SEO) {
      combinations.push({ city: city.slug, service: service.slug });
    }
  }
  return combinations;
}

// SEO content helpers
export function getPageTitle(city: City, service: ServiceType): string {
  return `${service.name} in ${city.name} | Yogetsu Akasaka`;
}

export function getPageDescription(city: City, service: ServiceType): string {
  return `Book Yogetsu Akasaka for ${service.name.toLowerCase()} in ${city.name}, ${city.country}. Zen meditation music, live-looping performance, and transformative experiences for your ${service.shortName.toLowerCase()}.`;
}

export function getPageKeywords(city: City, service: ServiceType): string[] {
  return [
    ...service.keywords,
    city.name,
    city.country,
    "Yogetsu Akasaka",
    "Zen meditation",
    "meditation music",
    "live looping",
  ];
}
