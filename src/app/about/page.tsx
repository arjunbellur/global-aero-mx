import Image from "next/image";

const pillars = [
  {
    title: "Expert & Experienced",
    desc: "Our A&P/IA-certificated mechanics bring decades of hands-on experience across single and multi-engine piston platforms.",
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft at airport",
  },
  {
    title: "Support with Technology",
    desc: "We use current diagnostic tools and avionics support systems to deliver accurate, efficient troubleshooting and repairs.",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft cockpit avionics",
  },
  {
    title: "Transparent Service",
    desc: "Every work order is documented in full. You see exactly what was done, what was found, and what it cost — no surprises.",
    photo: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft in flight",
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

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "10px" }}>About</p>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              margin: "0 0 12px",
            }}
          >
            About Global Aero Maintenance
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", margin: 0, maxWidth: "560px" }}>
            FAA-certificated. Tampa-based. Built for general aviation.
          </p>
        </div>
      </section>

      {/* About copy */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            Keeping your aircraft airworthy, safe, and flying. Our FAA-certificated technicians deliver
            quality maintenance, inspections, and avionics support for the general aviation community at
            one of Tampa Bay&apos;s most active reliever airports. Based at Tampa Executive Airport (KVDF),
            we serve private owners, commercial operators, and flight schools with the same standard of
            accountability on every aircraft that comes through our hangar.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section-alt" data-animate>
        <div className="container">
          <div className="pillars-grid" data-stagger>
            {pillars.map((p, idx) => (
              <div key={p.title} className="card" style={{ padding: "0", overflow: "hidden" }}>
                <div className="img-wrap" style={{ height: "200px" }}>
                  <Image
                    src={p.photo}
                    alt={p.photoAlt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--text-primary)", margin: "0 0 10px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "8px" }}>Why Choose Us</p>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.875rem",
              color: "var(--text-primary)",
              margin: "0 0 36px",
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
                  padding: "18px 14px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5l3 3 6-6" stroke="var(--blue-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.8125rem", color: "var(--text-primary)", lineHeight: 1.3 }}>
                  {w}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station credentials */}
      <section className="section-alt" data-animate>
        <div className="container">
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.375rem",
              color: "var(--text-primary)",
              margin: "0 0 24px",
            }}
          >
            Station Credentials
          </h2>
          <div className="creds-grid">
            {[
              "FAA Certificated Repair Station",
              "KVDF — Tampa Executive Airport",
              "Hangar A/B — Tampa, FL 33610",
              "Single & Multi-Engine Piston",
              "A&P / IA Certified Mechanics",
              "Return-to-Service Documentation",
            ].map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9375rem",
                  color: "var(--text-primary)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--blue-primary)",
                    flexShrink: 0,
                  }}
                />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPA connection */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container">
          <div className="gpa-grid">
            <div>
              <p className="overline-label" style={{ marginBottom: "12px" }}>Part of the GPA Family</p>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--text-primary)",
                  margin: "0 0 16px",
                }}
              >
                Part of the Global Pilot Academy Family
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                Global Aero Maintenance is the in-house maintenance operation supporting GPA&apos;s
                17-aircraft training fleet at KVDF. The same quality and accountability we bring to
                flight school aircraft is what we bring to yours.
              </p>
              <a
                href="https://gpapilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit gpapilot.com →
              </a>
            </div>
            <div className="img-wrap" style={{ height: "280px" }}>
              <Image
                src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=80"
                alt="Training fleet aircraft on ramp"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
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
    </>
  );
}
