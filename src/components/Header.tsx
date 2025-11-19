"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Download } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#price", label: "Pricing" },
    { href: "#floorplan", label: "Unit Plan" },
    { href: "#amenities", label: "Amenities" },
    { href: "#gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Bigger */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/niko-garden-logo-header.jpg"
              alt="Bhartiya City"
              width={240}
              height={80}
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors">
              <Download className="w-4 h-4" />
              Brochure
            </button>
          </nav>

          {/* Desktop Phone Number */}
          <div className="hidden lg:flex items-center gap-2 text-primary font-bold text-lg">
            <Phone className="w-5 h-5 fill-current" />
            <span>+91 78990 94424</span>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:+917899094424" className="text-primary">
              <Phone className="w-6 h-6 fill-current" />
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-primary"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl font-semibold text-foreground hover:text-primary border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <button className="flex items-center gap-3 text-xl font-semibold text-foreground hover:text-primary pb-4">
                <Download className="w-6 h-6" />
                Brochure
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
