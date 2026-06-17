"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/aircraft", label: "Aircraft" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav-header">
      {/* Thin top bar — phone for quick conversion */}
      <div className="nav-topbar">
        <div className="container nav-topbar-inner">
          <span>Mon–Fri 7AM–5PM · KVDF Tampa Executive Airport</span>
          <a href="tel:+18137534020" className="nav-topbar-phone">
            AOG? Call (813) 753-4020
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="container nav-main">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <svg width="36" height="36" viewBox="0 0 38 38" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
            <rect width="38" height="38" rx="6" fill="var(--blue-primary)" />
            <path
              d="M24.5 8.5c-3.03 0-5.5 2.47-5.5 5.5 0 .55.08 1.09.22 1.6L10.5 24.3A2.75 2.75 0 1 0 14.7 28.5l8.7-8.72c.51.14 1.05.22 1.6.22 3.03 0 5.5-2.47 5.5-5.5 0-.7-.13-1.37-.37-1.99l-3.13 3.13-2.12-2.12 3.13-3.13A5.47 5.47 0 0 0 24.5 8.5ZM12 27a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
              fill="#fff"
            />
          </svg>
          <div style={{ lineHeight: 1.1 }}>
            <div className="nav-wordmark">Global Aero Maintenance</div>
            <div className="nav-tagline">Keeping the World Flying</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="nav-links-desktop">
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

        {/* Desktop right side */}
        <div className="nav-right-desktop">
          <a
            href="https://gpapilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-gpa-link"
          >
            Flight Training ↗
          </a>
          <Link href="/schedule" className="btn-primary nav-cta">
            Schedule Service
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`ham-line${mobileOpen ? " ham-line-top-open" : ""}`} />
          <span className={`ham-line ham-line-mid${mobileOpen ? " ham-line-mid-open" : ""}`} />
          <span className={`ham-line${mobileOpen ? " ham-line-bot-open" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          <nav className="nav-mobile-links">
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
          </nav>
          <Link
            href="/schedule"
            onClick={() => setMobileOpen(false)}
            className="btn-primary nav-mobile-cta"
          >
            Schedule Service →
          </Link>
          <a
            href="tel:+18137534020"
            className="nav-mobile-phone"
          >
            📞 (813) 753-4020
          </a>
          <a
            href="https://gpapilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-gpa"
          >
            Flight Training: gpapilot.com ↗
          </a>
        </div>
      )}
    </header>
  );
}
