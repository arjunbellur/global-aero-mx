import Link from "next/link";
import Image from "next/image";

const pages = [
  { href: "/",          label: "Home" },
  { href: "/services",  label: "Services" },
  { href: "/aircraft",  label: "Aircraft" },
  { href: "/about",     label: "About" },
  { href: "/schedule",  label: "Schedule Service" },
  { href: "/faq",       label: "FAQ" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--blue-primary)", color: "#fff" }}>
      <div className="container" style={{ padding: "56px clamp(20px,4vw,28px) 40px" }}>
        <div className="footer-grid">

          {/* Col 1 — Logo + address + contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
              <div style={{ background: "#fff", borderRadius: 8, padding: 3, flexShrink: 0 }}>
                <Image src="/logo.png" alt="Global Aero Maintenance logo" width={34} height={34} style={{ objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", lineHeight: 1.1 }}>
                Global Aero<br />Maintenance, Inc.
              </div>
            </div>
            <div style={{ fontSize: "0.84375rem", lineHeight: 1.7, opacity: 0.78 }}>
              6530 Tampa Executive Airport Rd<br />
              Tampa, FL 33610 · Hangar A/B (KVDF)<br />
              (813) 753-4020 · (813) 600-4052<br />
              GAMX@globalaeromx.com<br />
              Mon–Fri 7AM–5PM · Sat by appt
            </div>
          </div>

          {/* Col 2 — Pages */}
          <div>
            <div style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.625rem", letterSpacing: "2px", opacity: 0.6, marginBottom: 14,
              textTransform: "uppercase",
            }}>
              Pages
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{ fontSize: "0.875rem", opacity: 0.85, color: "#fff", textDecoration: "none" }}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — GPA cross-link + FAA badge */}
          <div>
            <div style={{ border: "1px solid rgba(255,255,255,0.28)", borderRadius: 11, padding: 16, marginBottom: 16 }}>
              <div style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.59375rem", letterSpacing: "1.5px", opacity: 0.6,
                textTransform: "uppercase",
              }}>
                Flight Training by
              </div>
              <a
                href="https://gpapilot.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", textDecoration: "none", display: "block", marginTop: 4 }}
              >
                Global Pilot Academy →
              </a>
              <div style={{ fontSize: "0.8125rem", opacity: 0.7, marginTop: 2 }}>gpapilot.com</div>
            </div>
            <div style={{
              display: "inline-block",
              border: "1.5px solid rgba(255,255,255,0.45)",
              borderRadius: 8, padding: "8px 12px",
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.625rem", letterSpacing: "1px", textTransform: "uppercase",
            }}>
              FAA Certificated Repair Station
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.16)" }}>
        <div className="container" style={{
          padding: "18px clamp(20px,4vw,28px)",
          fontSize: "0.75rem", opacity: 0.6,
          display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
        }}>
          <span>© 2025 Global Aero Maintenance, Inc.</span>
          <span style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", letterSpacing: "1px", textTransform: "uppercase" }}>
            Keeping the World Flying
          </span>
        </div>
      </div>
    </footer>
  );
}
