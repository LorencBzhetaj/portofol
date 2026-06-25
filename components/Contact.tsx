"use client";

import { motion } from "framer-motion";

const WA_NUMBER = "355697536334";
const EMAIL = "bzhetajlorenc@gmail.com";

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg)", padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Contact</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--text)", lineHeight: 1.1, marginBottom: 20 }}>
            Let's build something <em style={{ color: "var(--gold)" }}>great</em> together.
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted)", fontWeight: 300, maxWidth: 380, margin: "0 auto 40px" }}>
            Have a project in mind? Reach out — I'm open for freelance work and new opportunities.
          </p>
          <a href={`https://wa.me/${WA_NUMBER}?text=Përshëndetje%20Lorenc%2C%20doja%20të%20diskutonim%20një%20projekt.`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 36px", background: "var(--gold)", color: "#fff", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", transition: "background 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-dark)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
            SEND MESSAGE →
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="contact-details">
          {[
            { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { label: "WhatsApp", value: "+355 697 536 334", href: `https://wa.me/${WA_NUMBER}` },
            { label: "Location", value: "Albania, Europe", href: null },
          ].map((item, i) => (
            <div key={item.label} className={`contact-item ${i < 2 ? "contact-divider" : ""}`}>
              <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>{item.label}</p>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ fontSize: 14, color: "var(--text)", textDecoration: "none", transition: "color 0.25s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}>
                  {item.value}
                </a>
              ) : (
                <p style={{ fontSize: 14, color: "var(--text)" }}>{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .contact-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--border);
          padding-top: 48px;
        }
        .contact-item {
          text-align: center;
          padding: 0 24px;
        }
        .contact-divider {
          border-right: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .contact-details {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .contact-item {
            text-align: left;
            padding: 20px 0;
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }
          .contact-item:last-child { border-bottom: none; }
          #contact > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
