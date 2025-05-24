"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 border-b bg-background text-foreground">
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          wreef
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4">
          <ul className="flex gap-6 font-medium text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <button className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 text-sm font-medium px-2">
          <ul className="flex flex-col gap-4">
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/work" onClick={() => setMobileMenuOpen(false)}>Work</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
