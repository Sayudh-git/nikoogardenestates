"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/niko-garden-logo-header.jpg"
              alt="Bhartiya City"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#home"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#overview"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Overview
            </Link>
            <Link
              href="#location"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Location
            </Link>
            <Link
              href="#amenities"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Amenities
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#price"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Price
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side: Download Brochure & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-4 py-2 border-2 border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-white transition-colors">
              Download Brochure
            </button>
            <div className="flex items-center gap-2 text-foreground">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">+91 XXXXX XXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
