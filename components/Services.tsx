"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="1" y="4" width="24" height="15" rx="1.5" stroke="#B08D57" strokeWidth="1.2" fill="none"/>
        <path d="M8 19l-1.5 4M18 19l1.5 4M7 23h12" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M6 9h14M6 13h8" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Design",
    desc: "Clean, modern and conversion-focused designs that reflect your brand and engage your users.",
    link: "About Design",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M7 9l-4 4 4 4M19 9l4 4-4 4" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6l-4 14" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Development",
    desc: "High-performance websites and web applications built with modern technologies.",
    link: "About Development",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="#B08D57" strokeWidth="1.2" fill="none"/>
        <path d="M17 17l5 5" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "SEO & Performance",
    desc: "SEO-optimised, fast-loading and Google-friendly websites that rank and perform.",
    link: "About SEO",
  },
];

export default function Services() {
  return (
    <section style={{ background: "var(--bg)", padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Services</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.8rem)", color: "var(--text)", lineHeight: 1.1 }}>
            What I <em>offer</em>
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="service-card">
              <div style={{ marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "1.5rem", color: "var(--text)", marginBottom: 14, lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--muted)", fontWeight: 300, flex: 1, marginBottom: 24 }}>{s.desc}</p>
              <a href="/contact"
                style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, transition: "color 0.25s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
                {s.link} <span style={{ color: "var(--gold)" }}>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
        }
        .service-card {
          background: var(--bg);
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 36px 0;
            background: transparent;
            border-bottom: 1px solid var(--border);
          }
          .service-card:last-child {
            border-bottom: none;
          }
        }
        @media (max-width: 768px) {
          section > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
