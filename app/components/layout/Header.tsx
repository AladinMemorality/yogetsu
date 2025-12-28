"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { SocialIcons } from "@/app/components/ui/SocialIcons";
import { MobileMenu } from "./MobileMenu";
import { useInquiryModal } from "@/app/context/InquiryModalContext";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useInquiryModal();

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border">
        <Container className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Nav - Left aligned */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-lg md:text-xl font-light text-primary hover:opacity-80 transition-opacity"
            >
              Yogetsu Akasaka
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
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

          {/* Right side - Social & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <SocialIcons size="sm" className="gap-3" />
            <Button onClick={() => openModal()} size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-primary hover:opacity-80 transition-opacity"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
