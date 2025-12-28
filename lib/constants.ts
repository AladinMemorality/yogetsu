export const COLORS = {
  background: "#0e0e0e",
  primary: "#dac5a7",
  surface: "#1a1a1a",
  border: "rgba(218, 197, 167, 0.15)",
  muted: "rgba(218, 197, 167, 0.6)",
  darkText: "#1d1e1f",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ikigai Zen", href: "/ikigaizen" },
  { label: "Book", href: "/book" },
] as const;

export const VIDEOS = [
  { title: "Heart Sutra", videoId: "nvIGCMhjkvw" },
  { title: "Inner Journey", videoId: "OSpVV3vTM1M" },
  { title: "Monk 3.0", videoId: "ILxH0FWHdKY" },
  { title: "Prayers", videoId: "02X5M9frac8" },
] as const;

export const SERVICE_TYPES = [
  {
    number: "01",
    title: "Voice Meditation",
    description:
      "Experience the profound therapeutic power of the human voice. Through guided breathwork and vocal exploration, reconnect with yourself and discover inner stillness in the present moment.",
    cta: "Book a session",
    href: "#contact",
  },
  {
    number: "02",
    title: "Active Meditation",
    description:
      "A dynamic practice combining movement and mindful presence. Inspired by Zen traditions, this offering invites you to tune into the here and now through the body and breath.",
    cta: "Learn more",
    href: "#contact",
  },
  {
    number: "03",
    title: "Sound-Mandala Performance",
    description:
      "Witness the creation of live, improvised soundscapes. Using loop station, beatbox, handpan, and Buddhist chanting, each performance is a unique journey into meditative sound.",
    cta: "Book for your event",
    href: "#contact",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Share Your Vision",
    subtitle: "Step One",
    description:
      "Tell me about your event, retreat, or personal journey. Whether you are seeking a festival performance, corporate wellness session, or private meditation experience, I am here to listen.",
  },
  {
    number: "02",
    title: "Tailored Experience",
    subtitle: "Step Two",
    description:
      "Based on your needs, I will design a custom experience. From intimate voice meditation sessions to large-scale Sound-Mandala performances, each offering is crafted for your unique context.",
  },
  {
    number: "03",
    title: "Seamless Coordination",
    subtitle: "Step Three",
    description:
      "Once we align on the vision, I handle all the creative preparation. You will receive clear guidance on setup, timing, and how to prepare your audience for the experience.",
  },
  {
    number: "04",
    title: "Journey Together",
    subtitle: "Step Four",
    description:
      "The moment arrives. Whether in person or virtual, we embark on a transformative journey bridging ancient wisdom and modern soundscapes. The present moment awaits.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who is Yogetsu Akasaka?",
    answer:
      "I am a Zen Buddhist priest, live-looping artist, and meditation musician from Tokyo, Japan. After studying at a Soto Zen monastery and the San Francisco Zen Center, I created a unique practice called Sound-Mandala that bridges ancient Buddhist traditions with modern soundscapes.",
  },
  {
    question: "What is Sound-Mandala?",
    answer:
      "Sound-Mandala is my signature live performance style. Using a loop station, I layer Buddhist chanting, beatboxing, handpan melodies, and my multi-layered voice to create spontaneous, meditative soundscapes. Each performance is completely improvised and unique.",
  },
  {
    question: "What types of events do you perform at?",
    answer:
      "I perform at music festivals (SXSW, Wonderfruit, Shambala), corporate wellness events, meditation retreats, private ceremonies, and special occasions. I have also guided meditation experiences at unique venues like NASA keynote presentations.",
  },
  {
    question: "Do you offer virtual sessions?",
    answer:
      "Yes, I offer virtual meditation sessions and performances that can reach audiences anywhere in the world. These online experiences maintain the same depth and presence as in-person gatherings.",
  },
  {
    question: "How can I book you for an event?",
    answer:
      "Reach out through the contact form or WhatsApp with details about your event—date, location, audience size, and the type of experience you envision. I will respond within 48 hours to discuss how we can create something meaningful together.",
  },
  {
    question: "Where can I listen to your music?",
    answer:
      "My music is available on all major streaming platforms including Spotify, Apple Music, YouTube, and SoundCloud. The Heart Sutra Beatbox Remix that went viral during the pandemic is a great starting point.",
  },
] as const;

export const MARQUEE_IMAGES = [
  "/images/marquee/1.avif",
  "/images/marquee/2.avif",
  "/images/marquee/3.avif",
  "/images/marquee/4.avif",
  "/images/marquee/5.avif",
  "/images/marquee/6.webp",
  "/images/marquee/7.webp",
  "/images/marquee/8.webp",
  "/images/marquee/9.webp",
  "/images/marquee/10.webp",
  "/images/marquee/11.webp",
  "/images/marquee/12.webp",
  "/images/marquee/13.webp",
  "/images/marquee/14.webp",
  "/images/marquee/15.webp",
  "/images/marquee/16.webp",
  "/images/marquee/17.webp",
] as const;

export const PARTNER_LOGOS = [
  { name: "SXSW", logo: "/images/partners/1.png" },
  { name: "Wonderfruit", logo: "/images/partners/2.png" },
  { name: "Shambala", logo: "/images/partners/3.png" },
  { name: "San Francisco Zen Center", logo: "/images/partners/4.png" },
  { name: "Colors of Ostrava", logo: "/images/partners/5.png" },
  { name: "Stanford", logo: "/images/partners/6.png" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/yogetsu",
  youtube: "https://www.youtube.com/channel/UC9Wesh1nf7vtrMHNF7DtUog",
  spotify: "https://open.spotify.com/artist/5x5CCr6qXbarmVN3K6o32h",
  soundcloud: "https://soundcloud.com/yochanting",
  facebook: "https://www.facebook.com/yochanting",
  tiktok: "https://www.tiktok.com/@yochanting?lang=en",
  whatsapp: "https://wa.me/966598843697",
} as const;

export const WHATSAPP_LINK = "https://wa.me/966598843697";
