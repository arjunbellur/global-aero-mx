import Link from "next/link";
import Image from "next/image";

const serviceSections = [
  {
    title: "Annual & 100-Hour Inspections",
    bullets: [
      "FAA-approved annual inspections",
      "100-hour inspections (commercial operators)",
      "Airworthiness Directive (AD) compliance",
      "Pre-purchase inspections",
      "Return-to-service documentation",
      "Detailed squawk resolution reports",
    ],
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Aircraft on airport ramp",
  },
  {
    title: "Airframe Maintenance & Repair",
    bullets: [
      "Sheet metal repair & fabrication",
      "Flight control rigging & adjustment",
      "Landing gear inspections & service",
      "Brake system overhaul",
      "Corrosion treatment & prevention",
      "Interior & exterior panel work",
    ],
    photo: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Aircraft in flight",
  },
  {
    title: "Multi-Engine Specialization",
    bullets: [
      "Twin engine differential rigging",
      "Propeller synchronization checks",
      "Engine-out procedures verification",
      "Fuel crossfeed & valve inspection",
      "Twin-specific AD compliance",
    ],
    photo: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Piston aircraft on runway",
  },
  {
    title: "Engine & Powerplant Services",
    bullets: [
      "Top overhaul & cylinder replacements",
      "Engine troubleshooting & repair",
      "Magneto inspection & overhaul",
      "Carburetor & fuel injection service",
      "Exhaust system inspection & repair",
      "Pre-overhaul assessments",
    ],
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Aircraft powerplant",
  },
  {
    title: "Avionics & Electrical Systems",
    bullets: [
      "ADS-B Out installation & certification",
      "COM/NAV radio troubleshooting",
      "Transponder testing (IFR cert.)",
      "GPS navigator installation",
      "ELT inspection & replacement",
      "Electrical wiring & harness repair",
    ],
    photo: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=900&q=80",
    photoAlt: "Aircraft cockpit instruments",
  },
  {
    title: "Additional Services",
    bullets: [
      "Propeller removal, balance & overhaul",
      "Pitot-static & altimeter certification",
      "Oil analysis interpretation",
      "Weight & balance recalculation",
      "Aircraft ferry coordination",
    ],
    photo: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
    photoAlt: "General aviation aircraft",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "10px" }}>Our Services</p>
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
            Full-Service FAA Maintenance
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", margin: 0, maxWidth: "560px" }}>
            Single and multi-engine piston aircraft. We handle everything from routine annuals to
            complex avionics installations — with full documentation every time.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {serviceSections.map((sec, i) => (
        <section
          key={sec.title}
          data-animate
          style={{
            background: i % 2 === 0 ? "#fff" : "var(--gray-50)",
            borderBottom: "1px solid var(--gray-200)",
            padding: "64px 24px",
          }}
        >
          <div className="container">
            <div className="svc-section-grid">
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--blue-light)",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M17.5 5.5c-3.06 0-5.5 2.44-5.5 5.5 0 .5.07 1 .2 1.46L4 20.59A2.5 2.5 0 1 0 7.41 24l8.59-8.59c.46.13.96.2 1.5.2 3.06 0 5.5-2.44 5.5-5.5S20.56 5.5 17.5 5.5ZM6 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      fill="var(--blue-primary)"
                    />
                  </svg>
                </div>
                <h2
                  style={{
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "var(--text-primary)",
                    margin: "0 0 24px",
                  }}
                >
                  {sec.title}
                </h2>
                <ul className="bullet-list" style={{ marginBottom: "28px" }}>
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link href="/schedule" className="btn-primary">
                  Schedule This Service →
                </Link>
              </div>

              {/* Photo */}
              <div className="img-wrap svc-photo">
                <Image
                  src={sec.photo}
                  alt={sec.photoAlt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section
        data-animate
        style={{ background: "var(--blue-primary)", color: "#fff", padding: "56px 24px", textAlign: "center" }}
      >
        <div className="container" style={{ maxWidth: "640px" }}>
          <h2 style={{ fontWeight: 700, fontSize: "1.625rem", margin: "0 0 12px" }}>
            Not sure what you need?
          </h2>
          <p style={{ fontSize: "1.125rem", opacity: 0.85, margin: 0 }}>
            Call{" "}
            <a href="tel:+18137534020" style={{ color: "#fff", fontWeight: 700 }}>
              (813) 753-4020
            </a>{" "}
            and we&apos;ll walk you through it.
          </p>
        </div>
      </section>
    </>
  );
}
