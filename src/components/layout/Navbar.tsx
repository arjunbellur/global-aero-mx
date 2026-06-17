"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/services",  label: "Services" },
  { href: "/aircraft",  label: "Aircraft" },
  { href: "/about",     label: "About" },
  { href: "/faq",       label: "FAQ" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="container nav-main">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <div style={{
            width: 40, height: 40,
            background: "var(--blue-primary)",
            borderRadius: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 23, color: "#fff",
            boxShadow: "0 8px 18px -8px rgba(26,31,140,0.55)",
            flexShrink: 0,
          }}>
            G
          </div>
          <div style={{ lineHeight: 1.04 }}>
            <div className="nav-wordmark">Global Aero Maintenance</div>
            <div className="nav-tagline">Keeping the World Flying</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links-desktop">
          <nav style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? " nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop right */}
        <div className="nav-right-desktop">
          <a
            href="https://gpapilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-gpa-link"
          >
            gpapilot.com&nbsp;↗
          </a>
          <Link href="/schedule" className="btn-primary nav-cta" style={{ padding: "9px 18px", fontSize: "0.875rem", boxShadow: "0 6px 16px -8px rgba(26,31,140,0.5)" }}>
            Schedule Service
          </Link>
        </div>

        {/* Mobile right — schedule + hamburger */}
        <div className="nav-compact-right">
          <Link href="/schedule" className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.875rem", boxShadow: "0 6px 16px -8px rgba(26,31,140,0.5)" }}>
            Schedule
          </Link>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`nav-mobile-link${pathname === link.href ? " nav-mobile-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://gpapilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-gpa"
            >
              Flight training · gpapilot.com ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
