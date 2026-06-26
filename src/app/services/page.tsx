"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceSections = [
  {
    title: "Annual & 100-Hour Inspections",
    short: "Inspections",
    photo: "/images/crew/IMG_3069.JPG",
    photoAlt: "Active maintenance in GAM hangar",
    bullets: [
      "FAA-approved annual inspections",
      "100-hour inspections (commercial operators)",
      "Airworthiness Directive (AD) compliance",
      "Pre-purchase inspections",
      "Return-to-service documentation",
      "Detailed squawk resolution reports",
    ],
  },
  {
    title: "Airframe Maintenance & Repair",
    short: "Airframe",
    photo: "/images/crew/IMG_0082.JPG",
    photoAlt: "Aircraft in GAM hangar",
    bullets: [
      "Sheet metal repair & fabrication",
      "Flight control rigging & adjustment",
      "Landing gear inspections & service",
      "Brake system overhaul",
      "Corrosion treatment & prevention",
      "Interior & exterior panel work",
    ],
  },
  {
    title: "Multi-Engine Specialization",
    short: "Multi-Engine",
    photo: "/images/crew/IMG_1040.JPG",
    photoAlt: "Twin-engine aircraft at KVDF",
    bullets: [
      "Twin engine differential rigging",
      "Propeller synchronization checks",
      "Engine-out procedures verification",
      "Fuel crossfeed & valve inspection",
      "Twin-specific AD compliance",
    ],
  },
  {
    title: "Engine & Powerplant Services",
    short: "Powerplant",
    photo: "/images/crew/IMG_1991.JPG",
    photoAlt: "Aircraft engine with cowl open",
    bullets: [
      "Top overhaul & cylinder replacements",
      "Engine troubleshooting & repair",
      "Magneto inspection & overhaul",
      "Carburetor & fuel injection service",
      "Exhaust system inspection & repair",
      "Pre-overhaul assessments",
    ],
  },
  {
    title: "Additional Services",
    short: "Additional",
    photo: "/images/crew/IMG_0192.jpg",
    photoAlt: "Global Aero Maintenance hangar exterior",
    bullets: [
      "Propeller removal, balance & overhaul",
      "Pitot-static & altimeter certification",
      "Oil analysis interpretation",
      "Weight & balance recalculation",
      "Aircraft ferry coordination",
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = serviceSections[activeTab];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: 0 }}>Our Services</p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(34px,4.6vw,52px)", lineHeight: 1.04, letterSpacing: "-1.2px", margin: "14px 0 0", color: "#14163d" }}>
            Full-Service FAA Maintenance
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.55, maxWidth: 600, margin: "18px 0 0" }}>
            Complete maintenance for piston aircraft — single and multi-engine. Choose a category to see exactly what&apos;s covered.
          </p>
        </div>
      </section>

      {/* Tabbed panel */}
      <div className="container" style={{ padding: "36px clamp(20px,4vw,28px) 72px" }}>
        {/* Tabs */}
        <div className="svc-tabs">
          {serviceSections.map((sec, i) => (
            <button
              key={sec.short}
              className={`svc-tab${i === activeTab ? " svc-tab-active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {sec.short}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="svc-panel-grid">
          <div>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(26px,3vw,32px)", letterSpacing: "-0.6px", margin: "0 0 22px", color: "var(--text-primary)" }}>
              {active.title}
            </h2>
            <ul className="bullet-list" style={{ marginBottom: 28 }}>
              {active.bullets.map((b) => (
                <li key={b}>
                  <span className="check-dot-sm">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/schedule" className="btn-primary">Schedule This Service →</Link>
          </div>
          <div className="svc-photo img-wrap" style={{ alignSelf: "stretch", minHeight: 260 }}>
            <Image
              key={active.short}
              src={active.photo}
              alt={active.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", borderRadius: 14 }}
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="cta-band" data-animate>
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "clamp(26px,3.2vw,36px)", letterSpacing: "-0.6px" }}>
            Not sure what you need?
          </div>
          <div style={{ fontSize: "1.125rem", marginTop: 12, opacity: 0.92 }}>
            Call <span style={{ fontWeight: 700 }}>(813) 753-4020</span> and we&apos;ll walk you through it.
          </div>
        </div>
      </section>
    </>
  );
}
