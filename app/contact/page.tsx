"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_NUMBER = "355697536334";
const EMAIL = "bzhetajlorenc@gmail.com";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 120, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Contact</p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--text)", lineHeight: 1.1, marginBottom: 28 }}>
                Let's build something <em style={{ color: "var(--gold)" }}>great</em> together.
              </h1>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, maxWidth: 420, marginBottom: 48 }}>
                Have a project in mind? Reach out. I'm open for freelance work and new opportunities across Europe and beyond.
              </p>
              <a href={`https://wa.me/${WA_NUMBER}?text=Përshëndetje%20Lorenc%2C%20doja%20të%20diskutonim%20një%20projekt.`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 36px", background: "var(--gold)", color: "#fff", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-dark)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
                SEND MESSAGE →
              </a>
            </motion.div>

            {/* Right — details */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { label: "WhatsApp", value: `+${WA_NUMBER.replace("355", "355 ")}`, href: `https://wa.me/${WA_NUMBER}` },
                { label: "Location", value: "Albania, Europe", href: null },
                { label: "Availability", value: "Open for projects", href: null },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "28px 0", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ fontSize: 14, color: "var(--text)", textDecoration: "none", transition: "color 0.25s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: 14, color: item.label === "Availability" ? "var(--gold)" : "var(--text)" }}>{item.value}</p>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:768px){main>div>div{grid-template-columns:1fr!important;gap:48px!important}main>div{padding:0 24px!important}}`}</style>
    </>
  );
}
