import Link from "next/link";

const singleEngine = [
  { make: "Cessna", models: "150 / 152 / 172 / 182 / 206" },
  { make: "Piper", models: "Cherokee / Archer / Warrior / Arrow" },
  { make: "Piper", models: "Tomahawk (PA-38)" },
  { make: "Beechcraft", models: "Bonanza / Sundowner" },
  { make: "Grumman", models: "AA-5 Series" },
  { make: "Mooney", models: "M20 Series" },
];

const multiEngine = [
  { make: "Piper Seminole", models: "PA-44" },
  { make: "Piper Seneca", models: "PA-34" },
  { make: "Beechcraft Duchess", models: "BE-76" },
  { make: "Beechcraft Baron", models: "BE-55 / 58" },
  { make: "Cessna 310 / 337", models: "Skymaster" },
  { make: "Piper Aztec", models: "PA-23" },
];

function AircraftCard({ make, models }: { make: string; models: string }) {
  return (
    <div className="card" style={{ padding: "24px" }}>
      {/* Placeholder silhouette */}
      <div
        className="photo-placeholder"
        style={{
          height: "80px",
          marginBottom: "16px",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="64" height="32" viewBox="0 0 64 32" fill="none" aria-label={make}>
          {/* Simple generic aircraft silhouette */}
          <path
            d="M4 20 L24 20 L32 12 L40 20 L60 20 L56 22 L36 22 L34 28 L30 28 L28 22 L8 22 Z"
            fill="var(--gray-200)"
          />
          <circle cx="14" cy="20" r="3" fill="var(--gray-200)" />
          <circle cx="50" cy="20" r="3" fill="var(--gray-200)" />
        </svg>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", color: "var(--text-primary)", margin: "0 0 6px" }}>
        {make}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
        {models}
      </p>
    </div>
  );
}

export default function AircraftPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "10px" }}>Makes &amp; Models</p>
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
            Aircraft We Service
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", margin: 0, maxWidth: "520px" }}>
            If it has a prop and a logbook, we can work on it.
          </p>
        </div>
      </section>

      {/* Single engine */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              margin: "0 0 32px",
              paddingBottom: "16px",
              borderBottom: "2px solid var(--blue-primary)",
              display: "inline-block",
            }}
          >
            Single Engine
          </h2>
          <div
            className="aircraft-grid"
          >
            {singleEngine.map((a) => (
              <AircraftCard key={`${a.make}-${a.models}`} make={a.make} models={a.models} />
            ))}
          </div>
        </div>
      </section>

      {/* Multi engine */}
      <section className="section-alt">
        <div className="container">
          <h2
            style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              margin: "0 0 32px",
              paddingBottom: "16px",
              borderBottom: "2px solid var(--blue-primary)",
              display: "inline-block",
            }}
          >
            Multi-Engine
          </h2>
          <div
            className="aircraft-grid"
          >
            {multiEngine.map((a) => (
              <AircraftCard key={`${a.make}-${a.models}`} make={a.make} models={a.models} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta-band">
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
              Don&apos;t see your aircraft?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", margin: 0, fontSize: "1rem" }}>
              Call us — if it&apos;s piston, we probably work on it.{" "}
              <a href="tel:+18137534020" style={{ color: "#fff", fontWeight: 700 }}>
                (813) 753-4020
              </a>
            </p>
          </div>
          <Link href="/schedule" className="btn-white">
            Schedule Service →
          </Link>
        </div>
      </section>

    </>
  );
}
