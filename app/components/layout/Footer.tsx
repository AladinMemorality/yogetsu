"use client";

import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { SocialIcons } from "@/app/components/ui/SocialIcons";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & Nav */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-light text-primary">
              Yogetsu Akasaka
            </Link>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & To Top */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <SocialIcons iconClassName="text-muted hover:text-primary" />
            <button
              onClick={scrollToTop}
              className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-2"
            >
              To top
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} Yogetsu Akasaka. All rights
            reserved.
          </p>
          <Link
            href="/legal"
            className="text-sm text-muted hover:text-primary transition-colors text-center md:text-right"
          >
            特定商取引法に基づく表記 / Legal Notice
          </Link>
        </div>
      </Container>
    </footer>
  );
}
