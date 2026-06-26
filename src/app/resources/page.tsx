import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "What to Expect During Your Annual Inspection",
    teaser:
      "A walk-through of the annual process, timelines, what we look for, and how to prepare your aircraft to minimize downtime.",
    photo: "/images/crew/IMG_3069.JPG",
    photoAlt: "Active maintenance in GAM hangar",
  },
  {
    title: "Engine Health: Reading Your Oil Analysis Report",
    teaser:
      "What the numbers mean, which metals to watch, and when a trend should prompt a call to your A&P — explained for piston aircraft owners.",
    photo: "/images/crew/IMG_1991.JPG",
    photoAlt: "Aircraft engine with cowl open",
  },
  {
    title: "Pre-Buy Inspection Checklist for Piston Aircraft Buyers",
    teaser:
      "The key airframe, engine, and systems items we evaluate before you commit to a purchase — and why an independent inspection matters.",
    photo: "/images/crew/IMG_3070.JPG",
    photoAlt: "GAM mechanic inspecting aircraft",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: 0 }}>Resources</p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(34px,4.6vw,52px)", lineHeight: 1.04, letterSpacing: "-1.2px", margin: "14px 0 0", color: "#14163d" }}>
            Maintenance Insights
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.55, maxWidth: 600, margin: "18px 0 0" }}>
            Practical guidance for Tampa-area aircraft owners. New articles coming soon.
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
