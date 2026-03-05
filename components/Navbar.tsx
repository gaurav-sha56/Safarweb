"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Fleets", href: "#for-fleets" },
  { label: "Operating Model", href: "#operating-model" },
  { label: "Implementation", href: "#implementation" },
  { label: "FAQ", href: "#faq" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-light bg-navy">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-white">
          SAFAR
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/85 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Request Pilot
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? "x" : "="}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/15 bg-navy md:hidden">
          <nav className="container-shell py-4">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                Request Pilot
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
