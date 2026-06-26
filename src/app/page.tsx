import Link from "next/link";
import Image from "next/image";
import QuickRequestForm from "@/components/home/QuickRequestForm";

const trustBadges = [
  "FAA Certificated Repair Station",
  "On-Airport KVDF",
  "A&P/IA Staff",
  "No Surprise Invoices",
  "Quick Turnaround",
];

const services = [
  {
    title: "Annual & 100-Hour Inspections",
    desc: "FAA annuals, 100-hour checks, AD compliance, and pre-purchase inspections.",
    photo: "/images/crew/IMG_3069.JPG",
    photoAlt: "Active maintenance in GAM hangar",
  },
  {
    title: "Airframe Maintenance & Repair",
    desc: "Sheet metal, control rigging, landing gear, brakes, and corrosion control.",
    photo: "/images/crew/IMG_0082.JPG",
    photoAlt: "Aircraft in GAM hangar",
  },
  {
    title: "Multi-Engine Specialization",
    desc: "Twin differential rigging, prop sync, and twin-specific AD compliance.",
    photo: "/images/crew/IMG_1040.JPG",
    photoAlt: "Twin-engine aircraft at KVDF",
  },
  {
    title: "Engine & Powerplant",
    desc: "Top overhauls, cylinder work, magnetos, carburetor and fuel injection service.",
    photo: "/images/crew/IMG_1991.JPG",
    photoAlt: "Aircraft engine with cowl open",
  },
  {
    title: "Additional Services",
    desc: "Prop balance, pitot-static cert, oil analysis, and weight & balance.",
    photo: "/images/crew/IMG_0180.jpg",
    photoAlt: "Aircraft and equipment in GAM hangar",
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
  "Owner-Input in Maintenance",
  "Aircraft on Ground (AOG) Teams",
  "No Surprise Invoices",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(180deg,#f6f7fb 0%,#fff 100%)", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="container" style={{ padding: "clamp(40px,7vw,62px) clamp(20px,4vw,28px) clamp(46px,7vw,70px)" }}>
          <div className="hero-grid">
            {/* Left — headline + CTAs + trust chips */}
            <div style={{ order: 1 }}>
              <p className="overline-label" style={{ marginBottom: 0 }} data-hero-anim>
                FAA Certificated Repair Station · KVDF Tampa
              </p>
              <h1
                data-hero-anim
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(40px,5.2vw,62px)",
                  lineHeight: 1.02,
                  letterSpacing: "-1.5px",
                  color: "#14163d",
                  margin: "16px 0 0",
                }}
              >
                Keeping the World Flying.
              </h1>
              <p
                data-hero-anim
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  color: "var(--text-muted)",
                  maxWidth: 520,
                  margin: "20px 0 26px",
                }}
              >
                Expert piston aircraft maintenance — single &amp; multi-engine — from FAA-certificated
                technicians at Tampa Executive Airport. Quality maintenance, inspections, and repair for
                the general aviation community.
              </p>
              <div data-hero-anim style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 30 }}>
                <Link href="/schedule" className="btn-primary">Schedule Service →</Link>
                <Link href="/services" className="btn-ghost">View Services</Link>
              </div>
              <div data-hero-anim style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                {trustBadges.map((b) => (
                  <span key={b} className="trust-badge">{b}</span>
                ))}
              </div>
            </div>

            {/* Right — Quick Request card */}
            <div style={{ order: 2 }} data-hero-anim>
              <QuickRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Hangar photo band ── */}
      <div className="container" style={{ padding: "clamp(44px,7vw,64px) clamp(20px,4vw,28px) 0" }}>
        <div className="img-wrap" style={{ height: "clamp(220px,42vw,380px)" }} data-animate>
          <Image
            src="/images/crew/IMG_2890.JPG"
            alt="Global Aero Maintenance hangar at KVDF Tampa Executive Airport"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1180px"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
        <p style={{
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "0.6875rem",
          letterSpacing: "0.5px",
          color: "#9298b4",
          textAlign: "center",
          marginTop: 10,
        }}>
          Hangar A/B · Tampa Executive Airport (KVDF)
        </p>
      </div>

      {/* ── Quote band ── */}
      <section className="quote-band" data-animate style={{ marginTop: "clamp(44px,7vw,64px)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(22px,2.6vw,30px)",
            lineHeight: 1.34,
            margin: 0,
          }}>
            &ldquo;Airworthiness is not a destination — it&apos;s a standard we maintain every day.&rdquo;
          </p>
          <p style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: "0.6875rem",
            letterSpacing: "2.5px",
            marginTop: 20,
            opacity: 0.75,
            textTransform: "uppercase",
          }}>
            — Global Aero Maintenance Team
          </p>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="section" data-animate>
        <div className="container">
          <p className="overline-label" style={{ marginBottom: 8 }}>Core Services</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", margin: "8px 0 30px" }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3.4vw,38px)", letterSpacing: "-0.8px", margin: 0, color: "var(--text-primary)" }}>
              Full-service maintenance, under one roof.
            </h2>
            <Link href="/services" style={{ color: "var(--blue-primary)", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none", whiteSpace: "nowrap" }}>
              All services →
            </Link>
          </div>
          <div className="services-grid" data-stagger>
            {services.map((s) => (
              <Link key={s.title} href="/services" className="service-card-link">
                <div className="card service-card">
                  <div className="service-card-photo" style={{ position: "relative" }}>
                    <Image src={s.photo} alt={s.photoAlt} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="service-card-body">
                    <div className="service-card-header">
                      <div className="icon-tile">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M14 4a4 4 0 0 0-4 4c0 .36.05.7.14 1.03L4 15.07A2 2 0 1 0 7.07 17l6.57-6.57c.33.09.67.14 1.03.14A4 4 0 1 0 14 4Zm-7 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="var(--blue-primary)" />
                        </svg>
                      </div>
                      <h3 style={{ fontWeight: 800, fontSize: "1.125rem", letterSpacing: "-0.3px", color: "var(--text-primary)", margin: 0 }}>
                        {s.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.90625rem", color: "var(--text-muted)", lineHeight: 1.5, margin: "13px 0 14px" }}>
                      {s.desc}
                    </p>
                    <span style={{ color: "var(--blue-primary)", fontWeight: 700, fontSize: "0.84375rem" }}>
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-alt" data-animate>
        <div className="container">
          <p className="overline-label" style={{ marginBottom: 8 }}>Why Choose Us</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(28px,3.4vw,38px)", letterSpacing: "-0.8px", margin: "8px 0 30px", color: "var(--text-primary)" }}>
            Ten reasons owners trust us with their aircraft.
          </h2>
          <div className="why-grid" data-stagger>
            {whyChoose.map((w) => (
              <div key={w} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 11, padding: "15px 16px" }}>
                <span className="check-dot">✓</span>
                <span style={{ fontWeight: 600, fontSize: "0.90625rem" }}>{w}</span>
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
              <p className="overline-label" style={{ marginBottom: 12 }}>Aircraft We Service</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(26px,3.2vw,34px)", letterSpacing: "-0.6px", margin: "8px 0 14px", color: "var(--text-primary)" }}>
                Cessna, Piper, Beechcraft, Mooney, Grumman &amp; more.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", marginBottom: 22, lineHeight: 1.6 }}>
                Single and multi-engine piston aircraft. If it has a prop and a logbook, we can work on it.
              </p>
              <Link href="/aircraft" className="btn-ghost">View all aircraft →</Link>
            </div>
            <div className="img-wrap" style={{ height: 260 }}>
              <Image
                src="/images/crew/IMG_0448.jpg"
                alt="Piper Archer aircraft at golden hour"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 60%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="cta-band" data-animate>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 26, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: "clamp(28px,3.4vw,40px)", letterSpacing: "-0.8px" }}>
              Ready to schedule?
            </div>
            <div style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace", fontSize: "1.0625rem", marginTop: 10, opacity: 0.9 }}>
              +1 (813) 753-4020 · GAMX@globalaeromx.com
            </div>
          </div>
          <Link href="/schedule" className="btn-white">Schedule Service →</Link>
        </div>
      </section>
    </>
  );
}
