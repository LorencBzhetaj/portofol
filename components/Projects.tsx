"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg2)", padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 12 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Portfolio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.8rem)", color: "var(--text)", lineHeight: 1.1 }}>
              Selected <em>Work</em>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Link href="/projects"
              style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, transition: "color 0.25s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              VIEW ALL PROJECTS <span style={{ color: "var(--gold)" }}>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`project-item ${i % 2 !== 0 ? "project-offset" : ""}`}>

              <a href={p.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none", marginBottom: 20, overflow: "hidden", backgroundColor: p.bg, transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 28px 56px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <img src={p.img} alt={p.title}
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                  onError={e => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const d = document.createElement("div");
                    d.style.cssText = `width:100%;aspect-ratio:16/10;background:${p.bg};display:flex;align-items:center;justify-content:center;`;
                    d.innerHTML = `<span style="font-family:'Cormorant Garamond',serif;font-size:13px;letter-spacing:0.3em;text-transform:uppercase;color:#B08D57">${p.title}</span>`;
                    el.parentNode?.insertBefore(d, el);
                  }} />
              </a>

              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--gold)", marginBottom: 5 }}>{p.num}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "1.4rem", color: "var(--text)", marginBottom: 4, lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>{p.cat}</p>
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", paddingBottom: 2, borderBottom: "1px solid transparent", transition: "all 0.25s", whiteSpace: "nowrap", marginLeft: 12 }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderBottomColor = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
                  VIEW →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px 40px;
          align-items: start;
        }
        .project-offset {
          margin-top: 48px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .project-offset {
            margin-top: 0;
          }
          #projects > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
