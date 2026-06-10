"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PHONE = "(316) 402-2339";
const PHONE_HREF = "tel:+13164022339";

type DropdownKey = "services" | null;

const navItems: { key: Exclude<DropdownKey, null>; label: string; links: { label: string; href: string }[] }[] = [
  {
    key: "services",
    label: "Services",
    links: [
      { label: "Hot Tub Removal", href: "/services/hot-tub-removal/" },
      { label: "Spa Removal", href: "/services/spa-removal/" },
      { label: "Jacuzzi Removal", href: "/services/jacuzzi-removal/" },
    ],
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#929097] bg-[#121414] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.svg"
            alt="Wichita Hot Tub Removal Logo"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-display text-xl md:text-2xl text-[#e2e2e2] uppercase tracking-tighter">
            Wichita Hot Tub Removal
          </span>
        </Link>

        <nav className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.links[0].href}
                className="flex items-center gap-1 text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase px-3 py-2"
              >
                {item.label}
                <svg
                  className={`w-3 h-3 transition-transform ${openDropdown === item.key ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {openDropdown === item.key && (
                <div className="absolute top-full left-0 bg-[#1a1a2e] border border-[#929097] shadow-lg min-w-[220px] py-2 z-50">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-[#c8c5cd] hover:text-[#e2e2e2] hover:bg-[#121414] transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/areas-we-serve/" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase px-3 py-2">
            Areas
          </Link>
          <Link href="/faq/" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase px-3 py-2">
            FAQ
          </Link>
          <Link href="/contact/" className="text-[#c8c5cd] hover:text-[#e2e2e2] font-bold text-sm tracking-wider transition-colors no-underline uppercase px-3 py-2">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="hidden md:flex items-center gap-2 text-[#c6c4df] hover:bg-[#1a1a2e]/30 transition-colors px-4 py-2 font-bold text-sm tracking-wider no-underline uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call: {PHONE}
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-none border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
            <span className="w-6 h-0.5 bg-[#e2e2e2] block"></span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#121414] border-b border-[#929097] px-6 py-6 flex flex-col gap-4">
          <Link href="/services/hot-tub-removal/" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            Services
          </Link>
          <Link href="/services/spa-removal/" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline pl-4">
            Spa Removal
          </Link>
          <Link href="/services/jacuzzi-removal/" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline pl-4">
            Jacuzzi Removal
          </Link>
          <Link href="/areas-we-serve/" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            Areas
          </Link>
          <Link href="/faq/" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            FAQ
          </Link>
          <Link href="/contact/" onClick={() => setMobileOpen(false)} className="font-bold text-sm tracking-wider text-[#c8c5cd] uppercase no-underline">
            Contact
          </Link>
          <a href={PHONE_HREF} className="font-bold text-sm tracking-wider text-[#e94560] uppercase no-underline">
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
