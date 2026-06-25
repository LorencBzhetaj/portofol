"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="hero-grid">

        {/* Left — Text */}
        <div className="hero-text">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
            style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>
            Frontend | Full-Stack Developer
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1, ease }}
            className="hero-title">
            <span style={{ display: "block" }}>I build digital</span>
            <span style={{ display: "block", fontStyle: "italic", color: "var(--gold)" }}>experiences</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
            style={{ fontSize: 14, lineHeight: 1.85, color: "var(--muted)", marginTop: 24, marginBottom: 40, fontWeight: 300 }}>
            I design and develop modern, fast and SEO-friendly websites that help businesses grow and stand out online.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease }}
            style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="/projects"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text)", textDecoration: "none" }}>
              <span style={{ width: 32, height: 1, background: "var(--gold)", display: "inline-block" }} />
              View My Work
            </a>
            <a href="/contact"
              style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", padding: "11px 24px", border: "1px solid var(--border)", color: "var(--muted)", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}>
              Contact
            </a>
          </motion.div>
        </div>

        {/* Right — Portrait */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.15, ease }}
          className="hero-portrait-wrap">
          <div className="hero-portrait">
            <img src="/hero.jpg" alt="Lorenc Bzhetaj"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
              onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
            {/* Placeholder shown when no image */}
            <div className="hero-portrait-placeholder">
              <div style={{ width: 60, height: 1, background: "var(--gold)", marginBottom: 14 }} />
              <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>Your Portrait</p>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, padding: "12px 20px", background: "var(--bg)", border: "1px solid var(--border)" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>Albania, Europe</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue — hidden on mobile */}
      <motion.div className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ width: 1, height: 28, background: "var(--gold)" }} />
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          min-height: 100vh;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 48px 80px;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--text);
          font-size: clamp(2.8rem, 6vw, 6rem);
        }
        .hero-portrait-wrap {
          position: relative;
          display: flex;
          justify-content: flex-end;
        }
        .hero-portrait {
          width: 100%;
          max-width: 460px;
          aspect-ratio: 3/4;
          background: linear-gradient(160deg, #EDE5DA 0%, #D9CEBD 100%);
          overflow: hidden;
          position: relative;
        }
        .hero-portrait-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 32px;
        }
        .scroll-cue {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 100px 24px 60px;
            gap: 36px;
            min-height: auto;
          }
          .hero-portrait-wrap {
            justify-content: center;
            order: -1;
          }
          .hero-portrait {
            max-width: 100%;
            aspect-ratio: 4/3;
          }
          .scroll-cue {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
