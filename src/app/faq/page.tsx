"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Are you an FAA-certified repair station?",
    a: "Yes. Global Aero Maintenance holds an FAA Certificated Repair Station certificate for airframe and powerplant work on single and multi-engine piston aircraft at KVDF Tampa Executive Airport.",
  },
  {
    q: "What aircraft do you work on?",
    a: "Single and multi-engine piston aircraft including Cessna, Piper, Beechcraft, Mooney, Grumman, and Diamond. See our full list at /aircraft.",
  },
  {
    q: "Do you work on multi-engine aircraft?",
    a: "Yes. We specialize in twin-engine piston including Piper Seneca, Beechcraft Baron, Piper Seminole, Cessna 310, and more.",
  },
  {
    q: "Can I assist with my own maintenance (owner-assisted)?",
    a: "Yes. We support owner-assisted maintenance under FAA regulations. You can participate in preventive maintenance tasks while our A&P provides oversight and signs off the work.",
  },
  {
    q: "Do you support liveaboards at KVDF?",
    a: "Yes. We regularly service aircraft for pilots based full-time at Tampa Executive and understand the unique needs of liveaboard operations.",
  },
  {
    q: "What is a squawk?",
    a: "A squawk is a documented defect or issue noted in your aircraft logbook. We resolve squawks as part of routine maintenance or as stand-alone unscheduled work orders.",
  },
  {
    q: "Do you support flight school aircraft?",
    a: "Yes. We are the in-house maintenance operation for Global Pilot Academy's 17-aircraft training fleet at KVDF.",
  },
  {
    q: "What is an AD and why does it matter?",
    a: "An Airworthiness Directive is a mandatory FAA regulation requiring specific inspections or modifications. Non-compliance can ground your aircraft. We track and incorporate ADs as part of every annual and on request.",
  },
  {
    q: "Do you do pre-buy inspections?",
    a: "Yes. We work for the buyer — not the seller — and provide a written findings report covering airframe, engine, and avionics condition.",
  },
  {
    q: "What are your hours?",
    a: "Monday–Friday 7:00 AM–5:00 PM · Saturday by appointment. AOG: call (813) 753-4020 for same-day response.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "10px" }}>FAQ</p>
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
            Common Questions
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", margin: 0, maxWidth: "520px" }}>
            Everything you need to know about our services, certifications, and how we work.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="accordion-item"
                  style={{
                    borderColor: isOpen ? "var(--blue-primary)" : "var(--gray-200)",
                    transition: "border-color 0.15s",
                  }}
                >
                  <button
                    className="accordion-trigger"
                    onClick={() => toggle(i)}
                    data-open={isOpen ? "true" : "false"}
                    aria-expanded={isOpen}
                  >
                    <span style={{ paddingRight: "24px", lineHeight: 1.4 }}>{faq.q}</span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: isOpen ? "var(--blue-primary)" : "var(--blue-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.15s, transform 0.2s",
                        transform: isOpen ? "rotate(180deg)" : "none",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path
                          d="M2 4l3 3 3-3"
                          stroke={isOpen ? "#fff" : "var(--blue-primary)"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="accordion-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "var(--blue-primary)",
          color: "#fff",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2 style={{ fontWeight: 700, fontSize: "1.5rem", margin: "0 0 12px" }}>
            Still have questions?
          </h2>
          <p style={{ opacity: 0.85, fontSize: "1rem", margin: "0 0 24px", lineHeight: 1.6 }}>
            Call{" "}
            <a href="tel:+18137534020" style={{ color: "#fff", fontWeight: 700 }}>
              (813) 753-4020
            </a>{" "}
            or email{" "}
            <a href="mailto:GAMX@globalaeromx.com" style={{ color: "#fff", fontWeight: 700 }}>
              GAMX@globalaeromx.com
            </a>
          </p>
          <Link href="/schedule" className="btn-white">
            Schedule Service →
          </Link>
        </div>
      </section>
    </>
  );
}
