import Link from "next/link";
import Image from "next/image";

const trustBadges = [
  "FAA Certificated",
  "On-Airport KVDF",
  "A&P / IA Staff",
  "No Surprise Invoices",
  "Quick Turnaround",
];

const services = [
  {
    title: "Annual Inspections",
    desc: "FAA-approved annual & 100-hour inspections with full squawk resolution reports.",
  },
  {
    title: "Airframe & Repair",
    desc: "Sheet metal fabrication, flight control rigging, landing gear, corrosion treatment.",
  },
  {
    title: "Multi-Engine",
    desc: "Twin-engine differential rigging, prop sync checks, and engine-out procedure verification.",
  },
  {
    title: "Engine & Powerplant",
    desc: "Top overhauls, magneto service, carburetor & fuel injection, exhaust repair.",
  },
  {
    title: "Avionics & Electrical",
    desc: "ADS-B Out installation, transponder testing, GPS navigators, ELT, wiring repair.",
  },
  {
    title: "Additional Services",
    desc: "Propeller balance & overhaul, pitot-static certification, weight & balance.",
  },
];

const whyChoose = [
  "FAA Certificated",
  "Experienced AMTs",
  "Transparent Pricing",
  "Detailed Logbooks",
  "Quick Turnaround",
  "On-Airport Location",
  "Flight School Support",
  "Owner-Assisted Work",
  "Liveaboard Support",
  "No Surprise Invoices",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="container" style={{ padding: "80px 24px" }}>
          <div className="hero-grid">
            {/* Left */}
            <div>
              <p className="overline-label" style={{ marginBottom: "16px" }} data-hero-anim>
                FAA Certificated Repair Station · KVDF Tampa Executive Airport
              </p>
              <h1
                data-hero-anim
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.08,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  color: "var(--text-primary)",
                  margin: "0 0 20px",
                }}
              >
                Expert Piston Aircraft Maintenance — Single &amp; Multi-Engine
              </h1>
              <p
                data-hero-anim
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                  maxWidth: "520px",
                }}
              >
                Keeping your aircraft airworthy, safe, and flying. Our FAA-certificated technicians
                deliver quality maintenance, inspections, and avionics support for the general aviation
                community at one of Tampa Bay&apos;s most active reliever airports.
              </p>
              <div data-hero-anim style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/schedule" className="btn-primary">
                  Schedule Service →
                </Link>
                <Link href="/services" className="btn-ghost">
                  View Services
                </Link>
              </div>
            </div>

            {/* Right — hero photo */}
            <div
              className="img-wrap hero-photo"
              style={{ borderRadius: "4px" }}
              data-hero-anim
            >
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
                alt="Aircraft at Tampa Executive Airport"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust badge strip ── */}
      <section
        data-animate
        style={{ background: "#fff", borderBottom: "1px solid var(--gray-200)", padding: "20px 24px" }}
      >
        <div
          className="container"
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}
          data-stagger
        >
          {trustBadges.map((b) => (
            <span key={b} className="trust-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="6" fill="var(--blue-primary)" />
                <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="section" data-animate>
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "8px" }}>Core Services</p>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.875rem",
              color: "var(--text-primary)",
              margin: "0 0 40px",
            }}
          >
            What We Do
          </h2>
          <div className="services-grid" data-stagger>
            {services.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className="service-card-link"
              >
                <div className="card service-card">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--blue-light)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M14 4a4 4 0 0 0-4 4c0 .36.05.7.14 1.03L4 15.07A2 2 0 1 0 7.07 17l6.57-6.57c.33.09.67.14 1.03.14A4 4 0 1 0 14 4Zm-7 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                        fill="var(--blue-primary)"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--text-primary)",
                      margin: "0 0 8px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: "0 0 16px", lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote band ── */}
      <section className="quote-band" data-animate>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              lineHeight: 1.45,
              margin: "0 0 20px",
              fontWeight: 300,
            }}
          >
            &ldquo;Airworthiness is not a destination — it&apos;s a standard we maintain every day.&rdquo;
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.7,
              margin: 0,
            }}
          >
            — Global Aero Maintenance Team
          </p>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-alt" data-animate>
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "8px" }}>Why Choose Us</p>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.875rem",
              color: "var(--text-primary)",
              margin: "0 0 40px",
            }}
          >
            10 Reasons Owners Trust Us
          </h2>
          <div className="why-grid" data-stagger>
            {whyChoose.map((w) => (
              <div
                key={w}
                className="card"
                style={{
                  padding: "20px 16px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7l3 3 6-6" stroke="var(--blue-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
                  {w}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aircraft teaser ── */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container">
          <div className="aircraft-teaser-grid">
            <div>
              <p className="overline-label" style={{ marginBottom: "12px" }}>Aircraft We Service</p>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "1.875rem",
                  color: "var(--text-primary)",
                  margin: "0 0 12px",
                }}
              >
                Cessna, Piper, Beechcraft, Mooney, Grumman &amp; more.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "24px", lineHeight: 1.7 }}>
                Single and multi-engine piston aircraft. If it has a prop and a logbook, we can work on it.
              </p>
              <Link href="/aircraft" className="btn-primary">
                See All Aircraft →
              </Link>
            </div>
            <div className="img-wrap" style={{ height: "280px" }}>
              <Image
                src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=80"
                alt="Piston aircraft on runway"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="cta-band" data-animate>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                textTransform: "uppercase",
                margin: "0 0 8px",
                color: "#fff",
              }}
            >
              Ready to Schedule?
            </h2>
            <a
              href="tel:+18137534020"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              +1 (813) 753-4020
            </a>
          </div>
          <Link href="/schedule" className="btn-white">
            Schedule Service →
          </Link>
        </div>
      </section>
    </>
  );
}
