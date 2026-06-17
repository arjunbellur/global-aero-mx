"use client";

import { useState } from "react";

const serviceOptions = [
  "Annual / 100-Hr Inspection",
  "Airframe Maintenance",
  "Multi-Engine Service",
  "Engine & Powerplant",
  "Avionics & Electrical",
  "Additional Services",
  "AOG / Unscheduled",
  "Pre-Buy Inspection",
  "Other",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aircraft: string;
  nNumber: string;
  service: string;
  description: string;
}

export default function SchedulePage() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    aircraft: "",
    nNumber: "",
    service: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <p className="overline-label" style={{ marginBottom: "10px" }}>Schedule Service</p>
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
            We&apos;re Ready to Work
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", margin: 0, maxWidth: "600px" }}>
            Annual due, chasing a squawk, or planning an avionics upgrade — get in touch. AOG
            situations receive same-day callbacks.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--gray-200)" }}>
        <div className="container" style={{ padding: "0 24px" }}>
          <div className="schedule-grid" style={{ minHeight: "600px" }}>
            {/* Left — contact + illustration */}
            <div className="schedule-left">
              <h2 style={{ fontWeight: 700, fontSize: "1.25rem", color: "var(--text-primary)", margin: "0 0 28px" }}>
                Contact Us
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
                <div>
                  <div className="form-label">Phone (Primary)</div>
                  <a
                    href="tel:+18137534020"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                      textDecoration: "none",
                    }}
                  >
                    +1 (813) 753-4020
                  </a>
                </div>
                <div>
                  <div className="form-label">Phone (Alternate)</div>
                  <a
                    href="tel:+18136004052"
                    style={{ fontSize: "1rem", color: "var(--text-primary)", textDecoration: "none" }}
                  >
                    +1 (813) 600-4052
                  </a>
                </div>
                <div>
                  <div className="form-label">Email</div>
                  <a
                    href="mailto:GAMX@globalaeromx.com"
                    style={{ fontSize: "1rem", color: "var(--text-primary)", textDecoration: "none" }}
                  >
                    GAMX@globalaeromx.com
                  </a>
                </div>
                <div>
                  <div className="form-label">Address</div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
                    6530 Tampa Executive Airport Rd<br />
                    Tampa, FL 33610<br />
                    Hangar A/B (KVDF)
                  </div>
                </div>
                <div>
                  <div className="form-label">Hours</div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
                    Monday–Friday 7:00 AM–5:00 PM<br />
                    Saturday by appointment
                  </div>
                </div>
              </div>

              {/* Cessna line-art SVG illustration */}
              <div
                style={{
                  background: "var(--gray-50)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: "4px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 280 120"
                  width="100%"
                  height="auto"
                  fill="none"
                  aria-label="Cessna aircraft line art"
                  style={{ maxWidth: "280px" }}
                >
                  {/* Fuselage */}
                  <path
                    d="M40 60 Q60 54 120 56 L200 58 Q230 58 245 62 Q230 66 200 66 L120 68 Q60 70 40 64 Z"
                    stroke="var(--blue-primary)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Nose */}
                  <path
                    d="M245 62 Q258 62 262 63 L258 65 Q254 66 245 66 Z"
                    stroke="var(--blue-primary)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Main wing */}
                  <path
                    d="M130 58 L95 30 L90 32 L120 60 L90 88 L95 90 L130 66 Z"
                    stroke="var(--blue-primary)"
                    strokeWidth="1.5"
                    fill="rgba(26,31,140,0.05)"
                  />
                  {/* Tail vertical */}
                  <path
                    d="M55 56 L48 36 L52 35 L60 56"
                    stroke="var(--blue-primary)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Tail horizontal */}
                  <path
                    d="M47 54 L50 52 L68 58 L65 62 L50 58 Z"
                    stroke="var(--blue-primary)"
                    strokeWidth="1.5"
                    fill="rgba(26,31,140,0.05)"
                  />
                  {/* Prop */}
                  <line x1="262" y1="52" x2="262" y2="74" stroke="var(--blue-primary)" strokeWidth="2" strokeLinecap="round" />
                  {/* Wheels */}
                  <circle cx="155" cy="72" r="6" stroke="var(--blue-primary)" strokeWidth="1.5" fill="none" />
                  <circle cx="185" cy="72" r="6" stroke="var(--blue-primary)" strokeWidth="1.5" fill="none" />
                  <line x1="155" y1="66" x2="155" y2="62" stroke="var(--blue-primary)" strokeWidth="1.5" />
                  <line x1="185" y1="66" x2="185" y2="62" stroke="var(--blue-primary)" strokeWidth="1.5" />
                  {/* Windows */}
                  <rect x="200" y="57" width="10" height="5" rx="1" stroke="var(--blue-primary)" strokeWidth="1" fill="rgba(26,31,140,0.08)" />
                  <rect x="216" y="57" width="10" height="5" rx="1" stroke="var(--blue-primary)" strokeWidth="1" fill="rgba(26,31,140,0.08)" />
                  <rect x="232" y="57" width="8" height="5" rx="1" stroke="var(--blue-primary)" strokeWidth="1" fill="rgba(26,31,140,0.08)" />
                  {/* Registration text */}
                  <text x="140" y="85" fontSize="8" fill="var(--text-muted)" fontFamily="monospace" textAnchor="middle">
                    KVDF · TAMPA EXECUTIVE
                  </text>
                </svg>
              </div>
            </div>

            {/* Right — form */}
            <div className="schedule-right">
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    minHeight: "400px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--blue-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 style={{ fontWeight: 700, fontSize: "1.5rem", color: "var(--text-primary)", margin: "0 0 12px" }}>
                    Request Received
                  </h2>
                  <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "400px", lineHeight: 1.7, marginBottom: "28px" }}>
                    We&apos;ll review your work order request and be in touch within one business day.
                    For AOG situations, call{" "}
                    <a href="tel:+18137534020" style={{ color: "var(--blue-primary)", fontWeight: 700 }}>
                      (813) 753-4020
                    </a>{" "}
                    directly for same-day response.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", aircraft: "", nNumber: "", service: "", description: "" }); }}
                    className="btn-ghost"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontWeight: 700, fontSize: "1.25rem", color: "var(--text-primary)", margin: "0 0 28px" }}>
                    Work Order Request
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div
                      className="form-row"
                    >
                      <div>
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div
                      className="form-row"
                    >
                      <div>
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">Phone *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="(813) 555-0100"
                        />
                      </div>
                    </div>

                    <div
                      className="form-row"
                    >
                      <div>
                        <label htmlFor="aircraft" className="form-label">Aircraft Make / Model *</label>
                        <input
                          id="aircraft"
                          name="aircraft"
                          type="text"
                          required
                          value={form.aircraft}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Cessna 172S"
                        />
                      </div>
                      <div>
                        <label htmlFor="nNumber" className="form-label">N-Number *</label>
                        <input
                          id="nNumber"
                          name="nNumber"
                          type="text"
                          required
                          value={form.nNumber}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="N12345"
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <label htmlFor="service" className="form-label">Service Requested *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ marginBottom: "24px" }}>
                      <label htmlFor="description" className="form-label">Description / Squawk</label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={form.description}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Describe the issue or work needed…"
                        style={{ resize: "vertical", minHeight: "100px" }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Schedule Service →
                    </button>

                    <p
                      style={{
                        marginTop: "12px",
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      AOG situations: call{" "}
                      <a href="tel:+18137534020" style={{ color: "var(--blue-primary)", fontWeight: 600 }}>
                        (813) 753-4020
                      </a>{" "}
                      directly for same-day response.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
