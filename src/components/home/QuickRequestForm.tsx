"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuickRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="quick-request-card" style={{ textAlign: "center", padding: "48px 28px" }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", background: "var(--blue-primary)",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l5 5L20 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: 8 }}>Request Received</div>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", margin: "0 0 20px", lineHeight: 1.6 }}>
          We&apos;ll be in touch within one business day.
        </p>
        <Link href="/schedule" className="btn-primary" style={{ justifyContent: "center" }}>
          View Full Form →
        </Link>
      </div>
    );
  }

  return (
    <div className="quick-request-card">
      <div className="overline-label" style={{ marginBottom: 6 }}>Quick Request</div>
      <div style={{ fontWeight: 800, fontSize: "1.3125rem", margin: "0 0 18px", letterSpacing: "-0.3px" }}>
        Start a work order
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          required
          placeholder="Full name"
          className="form-input"
          style={{ width: "100%" }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <input required type="email" placeholder="Email" className="form-input" />
          <input required type="tel" placeholder="Phone" className="form-input" />
        </div>
        <input
          required
          placeholder="Aircraft make / model"
          className="form-input"
          style={{ width: "100%" }}
        />
        <select required className="form-input" style={{ width: "100%", color: "inherit" }}>
          <option value="">Service requested…</option>
          <option>Annual / 100-Hr Inspection</option>
          <option>Airframe Maintenance</option>
          <option>Multi-Engine Service</option>
          <option>Engine &amp; Powerplant</option>

          <option>AOG / Unscheduled</option>
        </select>
        <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
          Schedule Service →
        </button>
      </form>
      <div style={{
        textAlign: "center",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        fontSize: "0.75rem",
        color: "#7c819b",
        marginTop: 14,
      }}>
        or call <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>(813) 753-4020</span>
      </div>
    </div>
  );
}
