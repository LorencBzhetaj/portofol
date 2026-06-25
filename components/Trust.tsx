"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "logo/ipsum", label: "logoipsum" },
  { name: "⊕ ipsum", label: "ipsum" },
  { name: "LOGO", label: "LOGO" },
  { name: "◎ logo/ipsum", label: "logoipsum" },
  { name: "LOGOPSUM", label: "LOGOPSUM" },
];

export default function Trust() {
  return (
    <section style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "56px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 40 }}>
          Trusted by
        </motion.p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px 0", flexWrap: "wrap", borderTop: "1px solid var(--border)" }}>
          {clients.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ padding: "20px 40px", borderRight: i < clients.length - 1 ? "1px solid var(--border)" : "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "var(--muted)", fontWeight: 400, letterSpacing: 1, transition: "color 0.25s" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}>
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
