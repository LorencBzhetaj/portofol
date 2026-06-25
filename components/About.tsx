"use client";

import { motion } from "framer-motion";

const qualities = [
  { n: "1", title: "Clean Code", desc: "I write clean, scalable and maintainable code." },
  { n: "2", title: "Performance", desc: "I build fast and optimised web experiences." },
  { n: "3", title: "Client Focused", desc: "I listen, understand and deliver what you need." },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg)", padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div className="about-grid">

          {/* Left — Text */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>About Me</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "var(--text)", lineHeight: 1.15, marginBottom: 24 }}>
              Passionate about<br /><em>code and design.</em>
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, marginBottom: 14 }}>
              I'm Lorenc, a developer based in Albania. I help businesses and brands bring their ideas to life with clean code, modern design and a deep understanding of what makes digital products exceptional.
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, marginBottom: 40 }}>
              Every project is approached with precision, care and a commitment to delivering results that exceed expectations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
              {qualities.map(q => (
                <div key={q.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: 10, color: "var(--gold)" }}>{q.n}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>{q.title}</p>
                    <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 300 }}>{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", transition: "color 0.25s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              <span style={{ width: 28, height: 1, background: "var(--gold)", display: "inline-block" }} />
              More About Me
            </a>
          </motion.div>

          {/* Right — Photo */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }}
            className="about-photo-wrap">
            <div className="about-photo">
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #EDE5DA 0%, #D9CEBD 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: 24, zIndex: 0 }}>
                <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: 10 }} />
                <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>About Photo</p>
              </div>
              <img src="/about.jpg" alt="Lorenc Bzhetaj"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", position: "relative", zIndex: 1 }}
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div className="about-border-deco" />
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .about-photo-wrap {
          position: relative;
        }
        .about-photo {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          position: relative;
        }
        .about-border-deco {
          position: absolute;
          top: 20px;
          right: -20px;
          bottom: -20px;
          left: 20px;
          border: 1px solid var(--border);
          z-index: -1;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-photo-wrap {
            order: -1;
          }
          .about-photo {
            aspect-ratio: 4/3;
          }
          .about-border-deco { display: none; }
          #about > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
