"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are you an FAA-certified repair station?",
    a: "Yes. Global Aero Maintenance holds an FAA Certificated Repair Station certificate for airframe and powerplant work on single and multi-engine piston aircraft at KVDF Tampa Executive Airport.",
  },
  {
    q: "What aircraft do you work on?",
    a: "Single and multi-engine piston aircraft including Cessna, Piper, Beechcraft, Mooney, and Grumman. See our full list at /aircraft.",
  },
  {
    q: "Do you work on multi-engine aircraft?",
    a: "Yes. We specialize in twin-engine piston including Piper Seneca, Beechcraft Baron, Piper Seminole, Cessna 310, and more.",
  },
  {
    q: "Can I provide input on my own maintenance?",
    a: "Yes. We support owner-input in maintenance under FAA regulations. You can participate in preventive maintenance tasks while our A&P provides oversight and signs off the work.",
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
    a: "Yes. We are the in-house maintenance operation for Global Pilot Academy's 22-aircraft training fleet at KVDF.",
  },
  {
    q: "What is an AD and why does it matter?",
    a: "An Airworthiness Directive is a mandatory FAA regulation requiring specific inspections or modifications. Non-compliance can ground your aircraft. We track and incorporate ADs as part of every annual and on request.",
  },
  {
    q: "Do you do pre-buy inspections?",
    a: "Yes. We work for the buyer — not the seller — and provide a written findings report covering airframe, engine, and systems condition.",
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
          <p className="overline-label" style={{ marginBottom: 0 }}>FAQ</p>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(34px,4.6vw,52px)", lineHeight: 1.04, letterSpacing: "-1.2px", margin: "14px 0 0", color: "#14163d" }}>
            Common Questions
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.55, maxWidth: 600, margin: "18px 0 0" }}>
            Everything owners ask before bringing an aircraft to KVDF.
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
      <section className="cta-band" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ fontWeight: 900, fontSize: "clamp(24px,3vw,32px)", letterSpacing: "-0.5px" }}>
            Still have questions?
          </div>
          <div style={{ fontSize: "1.0625rem", marginTop: 10, opacity: 0.92 }}>
            Call (813) 753-4020 or email GAMX@globalaeromx.com
          </div>
        </div>
      </section>
    </>
  );
}
