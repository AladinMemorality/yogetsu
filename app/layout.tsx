import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InquiryModalProvider } from "@/app/context/InquiryModalContext";
import { InquiryModal } from "@/app/components/ui/InquiryModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yogetsu Akasaka | Zen Buddhist Priest & Sound Artist",
  description:
    "Zen Buddhist priest, live-looping artist, and meditation musician bridging ancient traditions with modern soundscapes. Experience Sound-Mandala performances, voice meditation, and transformative workshops.",
  keywords: [
    "Yogetsu Akasaka",
    "Zen Buddhist",
    "meditation music",
    "beatbox monk",
    "Sound-Mandala",
    "live looping",
    "handpan",
    "Buddhist chanting",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Yogetsu Akasaka | Zen Buddhist Priest & Sound Artist",
    description:
      "Zen Buddhist priest, live-looping artist, and meditation musician bridging ancient traditions with modern soundscapes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InquiryModalProvider>
          {children}
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
