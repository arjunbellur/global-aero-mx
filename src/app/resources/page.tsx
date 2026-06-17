import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "What to Expect During Your Annual Inspection",
    teaser:
      "A walk-through of the annual process, timelines, what we look for, and how to prepare your aircraft to minimize downtime.",
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft at airport",
  },
  {
    title: "ADS-B Out: What Tampa Pilots Need to Know",
    teaser:
      "Requirements, install options, certified avionics shops, and what the certification process looks like around the KVDF area.",
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Aircraft cockpit avionics display",
  },
  {
    title: "Pre-Buy Inspection Checklist for Piston Aircraft Buyers",
    teaser:
      "The key airframe, engine, and avionics items we evaluate before you commit to a purchase — and why an independent inspection matters.",
    photo: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Piston aircraft for pre-buy inspection",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "10px" }}>Resources</p>
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
            Maintenance Insights
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", margin: 0, maxWidth: "520px" }}>
            Practical guidance for Tampa-area aircraft owners.
          </p>
        </div>
      </section>

      {/* Article cards */}
      <section className="section" style={{ background: "#fff" }} data-animate>
        <div className="container">
          <div className="resources-grid" data-stagger>
            {articles.map((a) => (
              <div key={a.title} className="card" style={{ overflow: "hidden" }}>
                <div className="img-wrap" style={{ height: "180px", borderRadius: 0 }}>
                  <Image
                    src={a.photo}
                    alt={a.photoAlt}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "24px" }}>
                  {/* Coming Soon badge */}
                  <span
                    style={{
                      display: "inline-block",
                      background: "var(--blue-primary)",
                      color: "#fff",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      borderRadius: "20px",
                      padding: "4px 10px",
                      marginBottom: "14px",
                    }}
                  >
                    Coming Soon
                  </span>

                  <h2
                    style={{
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "var(--text-primary)",
                      margin: "0 0 10px",
                      lineHeight: 1.35,
                    }}
                  >
                    {a.title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.65 }}>
                    {a.teaser}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                margin: "0 0 8px",
              }}
            >
              Have a question now?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Call{" "}
              <a href="tel:+18137534020" style={{ color: "#fff", fontWeight: 700 }}>
                (813) 753-4020
              </a>{" "}
              or browse our FAQ.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/faq" className="btn-white">
              View FAQ
            </Link>
            <Link href="/schedule" className="btn-ghost" style={{ borderColor: "#fff", color: "#fff" }}>
              Schedule Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
