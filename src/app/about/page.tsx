import Image from "next/image";

const pillars = [
  {
    title: "Expert & Experienced",
    desc: "A&P/IA technicians who know piston aircraft inside and out — from annuals to complex engine work.",
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft at airport",
  },
  {
    title: "Support with Technology",
    desc: "Modern diagnostic tools and testing equipment — accurate, efficient troubleshooting with full documentation.",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft cockpit instruments",
  },
  {
    title: "Transparent Service",
    desc: "Detailed logbooks and no-surprise invoices on every job. You see exactly what was done and why.",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft cockpit instruments",
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

const credentials = [
  "FAA Certificated Repair Station",
  "KVDF — Tampa Executive Airport",
  "Hangar A/B · 6530 Tampa Executive Airport Rd, Tampa FL 33610",
  "Single & Multi-Engine Piston",
  "A&P / IA Certified Mechanics",
  "Return-to-Service Documentation",
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: 0 }}>About</p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(34px,4.6vw,52px)", lineHeight: 1.04, letterSpacing: "-1.2px", margin: "14px 0 0", color: "#14163d" }}>
            About Global Aero Maintenance
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.55, maxWidth: 600, margin: "18px 0 0" }}>
            FAA-certificated. Tampa-based. Built for general aviation.
          </p>
        </div>
      </section>

      {/* About copy */}
      <section style={{ background: "#fff" }} data-animate>
        <div className="container" style={{ maxWidth: 820, padding: "60px clamp(20px,4vw,28px) 10px" }}>
          <p style={{ fontSize: "1.3125rem", lineHeight: 1.6, color: "#33384f", fontWeight: 500, margin: 0 }}>
            Keeping your aircraft airworthy, safe, and flying. Our FAA-certificated technicians deliver
            quality maintenance, inspections, and airframe &amp; powerplant support for the general aviation community at
            one of Tampa Bay&apos;s most active reliever airports. Based at Tampa Executive Airport (KVDF),
            we serve private owners, commercial operators, and flight schools with the same standard of
            accountability on every aircraft that comes through our hangar.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container">
          <div className="pillars-grid" data-stagger>
            {pillars.map((p, idx) => (
              <div key={p.title} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div className="img-wrap" style={{ height: 170, borderRadius: 0 }}>
                  <Image
                    src={p.photo}
                    alt={p.photoAlt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1875rem", letterSpacing: "-0.3px", color: "var(--text-primary)", margin: "0 0 6px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.90625rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt" data-animate>
        <div className="container">
          <p className="overline-label" style={{ marginBottom: 8 }}>Why Choose Us</p>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(26px,3.2vw,34px)", letterSpacing: "-0.6px", margin: "8px 0 28px", color: "var(--text-primary)" }}>
            The standard we hold on every aircraft.
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

      {/* Credentials + GPA */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container">
          <div className="creds-gpa-grid">
            {/* Credentials */}
            <div>
              <p className="overline-label" style={{ marginBottom: 18 }}>Station Credentials</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {credentials.map((c) => (
                  <div key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span className="check-dot-sm">✓</span>
                    <span style={{ fontSize: "1rem", color: "#33384f", lineHeight: 1.4 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GPA card */}
            <div style={{ background: "var(--gray-50)", border: "1px solid var(--gray-200)", borderRadius: 16, padding: 28 }}>
              <div className="img-wrap" style={{ height: 160, marginBottom: 20 }}>
                <Image
                  src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=80"
                  alt="Training fleet aircraft"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="overline-label" style={{ marginBottom: 0 }}>Part of the GPA Family</p>
              <h3 style={{ fontWeight: 800, fontSize: "1.375rem", letterSpacing: "-0.3px", margin: "10px 0 12px", color: "var(--text-primary)" }}>
                Global Pilot Academy
              </h3>
              <p style={{ fontSize: "0.96875rem", color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 16px" }}>
                GAM is the in-house maintenance operation supporting GPA&apos;s 17-aircraft training fleet
                at KVDF. The same quality and accountability we bring to flight school aircraft is what
                we bring to yours.
              </p>
              <a
                href="https://gpapilot.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--blue-primary)", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}
              >
                Visit gpapilot.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="quote-band" data-animate>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontStyle: "italic", fontWeight: 500, fontSize: "clamp(22px,2.6vw,30px)", lineHeight: 1.34, margin: 0 }}>
            &ldquo;Airworthiness is not a destination — it&apos;s a standard we maintain every day.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
