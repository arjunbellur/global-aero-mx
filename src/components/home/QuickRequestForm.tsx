"use client";

import { useState } from "react";
import Link from "next/link";

// Replace with your Formspree form ID from formspree.io
// 1. Sign up at https://formspree.io (free)
// 2. Create a form → add GAMX@globalaeromx.com as destination
// 3. Copy the form ID (e.g. "xgvkbypp") and paste below
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

export default function QuickRequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      // Fallback: open mailto if Formspree not configured
      const fd = new FormData(e.currentTarget);
      const subject = encodeURIComponent(`Service Request – ${fd.get("aircraft") ?? "Aircraft"}`);
      const body = encodeURIComponent(
        `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nAircraft: ${fd.get("aircraft")}\nService: ${fd.get("service")}`
      );
      window.location.href = `mailto:GAMX@globalaeromx.com?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
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
      {status === "error" && (
        <div style={{ background: "#fff3f3", border: "1px solid #fca5a5", borderRadius: 8, padding: "10px 14px", marginBottom: 12, fontSize: "0.875rem", color: "#b91c1c" }}>
          Something went wrong. Call <a href="tel:+18137534020" style={{ fontWeight: 700, color: "#b91c1c" }}>(813) 753-4020</a> or email GAMX@globalaeromx.com directly.
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          required
          name="name"
          placeholder="Full name"
          className="form-input"
          style={{ width: "100%" }}
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <input required name="email" type="email" placeholder="Email" className="form-input" />
          <input required name="phone" type="tel" placeholder="Phone" className="form-input" />
        </div>
        <input
          required
          name="aircraft"
          placeholder="Aircraft make / model"
          className="form-input"
          style={{ width: "100%" }}
        />
        <select required name="service" className="form-input" style={{ width: "100%", color: "inherit" }}>
          <option value="">Service requested…</option>
          <option>Annual / 100-Hr Inspection</option>
          <option>Airframe Maintenance</option>
          <option>Multi-Engine Service</option>
          <option>Engine &amp; Powerplant</option>
          <option>AOG / Unscheduled</option>
        </select>
        <button
          type="submit"
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Schedule Service →"}
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
