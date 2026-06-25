"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "NEXT.JS", icon: "▲" },
  { name: "TAILWINDCSS", icon: "◈" },
  { name: "REACT", icon: "⬡" },
  { name: "NODE.JS", icon: "◆" },
  { name: "SQL SERVER", icon: "⬡" },
  { name: "VERCEL", icon: "△" },
];

export default function TechStrip() {
  return (
    <section id="skills" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "28px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "12px 48px" }}>
        {techs.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{ display: "flex", alignItems: "center", gap: 8, cursor: "default" }}>
            <span style={{ fontSize: 12, color: "var(--gold)" }}>{t.icon}</span>
            <span style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--muted)", fontWeight: 400, transition: "color 0.25s" }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}>
              {t.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
