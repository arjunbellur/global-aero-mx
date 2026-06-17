import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--blue-dark)", color: "#c8cce8" }}>
      {/* Main footer grid */}
      <div className="container" style={{ padding: "64px 24px 48px" }}>
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <svg width="36" height="36" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                <rect width="38" height="38" rx="6" fill="rgba(255,255,255,0.12)" />
                <path
                  d="M24.5 8.5c-3.03 0-5.5 2.47-5.5 5.5 0 .55.08 1.09.22 1.6L10.5 24.3A2.75 2.75 0 1 0 14.7 28.5l8.7-8.72c.51.14 1.05.22 1.6.22 3.03 0 5.5-2.47 5.5-5.5 0-.7-.13-1.37-.37-1.99l-3.13 3.13-2.12-2.12 3.13-3.13A5.47 5.47 0 0 0 24.5 8.5ZM12 27a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  fill="#fff"
                />
              </svg>
              <div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "0.9375rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    color: "#fff",
                  }}
                >
                  Global Aero Maintenance
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Keeping the World Flying
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "20px", color: "#a0a8cc" }}>
              FAA-certificated aircraft maintenance for single and multi-engine piston aircraft at Tampa
              Executive Airport (KVDF). Quality maintenance, inspections, and avionics support for the
              general aviation community.
            </p>

            {/* FAA badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "4px",
                padding: "8px 12px",
                marginBottom: "20px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 1L10.09 5.26L14.8 5.98L11.4 9.29L12.18 14L8 11.77L3.82 14L4.6 9.29L1.2 5.98L5.91 5.26L8 1Z"
                  fill="rgba(255,255,255,0.6)"
                />
              </svg>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                FAA Certificated Repair Station
              </span>
            </div>

            {/* GPA cross-link */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "4px",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "4px",
                }}
              >
                Flight Training by
              </div>
              <a
                href="https://gpapilot.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Global Pilot Academy →
              </a>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                gpapilot.com
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Annual Inspections",
                "Airframe & Repair",
                "Multi-Engine",
                "Engine & Powerplant",
                "Avionics & Electrical",
                "Additional Services",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={{ fontSize: "0.875rem", color: "#a0a8cc", textDecoration: "none" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aircraft column */}
          <div>
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              Aircraft
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Cessna", "Piper", "Beechcraft", "Mooney", "Grumman", "Multi-Engine"].map((a) => (
                <li key={a}>
                  <Link
                    href="/aircraft"
                    style={{ fontSize: "0.875rem", color: "#a0a8cc", textDecoration: "none" }}
                  >
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/resources", label: "Resources" },
                { href: "/schedule", label: "Schedule Service" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#a0a8cc", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <div
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.875rem" }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6875rem", marginBottom: "2px" }}>
                  Address
                </div>
                <div style={{ color: "#a0a8cc", lineHeight: 1.5 }}>
                  6530 Tampa Executive Airport Rd<br />
                  Tampa, FL 33610<br />
                  Hangar A/B (KVDF)
                </div>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6875rem", marginBottom: "2px" }}>
                  Phone
                </div>
                <a href="tel:+18137534020" style={{ color: "#a0a8cc", textDecoration: "none", display: "block" }}>
                  +1 (813) 753-4020
                </a>
                <a href="tel:+18136004052" style={{ color: "#a0a8cc", textDecoration: "none", display: "block" }}>
                  +1 (813) 600-4052
                </a>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6875rem", marginBottom: "2px" }}>
                  Email
                </div>
                <a href="mailto:GAMX@globalaeromx.com" style={{ color: "#a0a8cc", textDecoration: "none" }}>
                  GAMX@globalaeromx.com
                </a>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6875rem", marginBottom: "2px" }}>
                  Hours
                </div>
                <div style={{ color: "#a0a8cc", lineHeight: 1.5 }}>
                  Mon–Fri 7:00 AM–5:00 PM<br />
                  Saturday by appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "16px 24px",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
            © 2025 Global Aero Maintenance, Inc. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="#" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="#" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
              Terms
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
