"use client";

import Image from "next/image";
import Logo from "@/public/shrijanshillogo.jpeg";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href="#"
          className="flex min-w-0 items-center gap-3 text-lg font-bold text-blue-900 sm:text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white p-1.5 shadow-sm ring-2 ring-white sm:h-16 sm:w-16">
            <Image
              src={Logo}
              alt="Shrijanshil Medical Hall logo"
              width={64}
              height={64}
              className="h-full w-full rounded-full object-contain"
              placeholder="blur"
              sizes="64px"
            />
          </span>
          <span className="truncate">Shrijanshil Medical Hall</span>
        </Link>

        <div className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-white text-blue-900 shadow-sm md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-6 py-3 shadow-md md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
