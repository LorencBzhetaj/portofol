"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg2)", minHeight: "100vh", paddingTop: 120, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ marginBottom: 80 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Portfolio</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--text)", lineHeight: 1.1 }}>
              All <em>Projects</em>
            </h1>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px 48px", alignItems: "start" }}>
            {projects.map((p, i) => (
              <motion.div key={p.slug}
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ marginTop: i % 2 !== 0 ? 48 : 0 }}>

                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", textDecoration: "none", marginBottom: 24, overflow: "hidden", backgroundColor: p.bg, transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 32px 64px rgba(0,0,0,0.11)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <img src={p.img} alt={p.title} style={{ width: "100%", display: "block", objectFit: "cover" }}
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
                    <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--gold)", marginBottom: 6 }}>{p.num}</p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "1.5rem", color: "var(--text)", marginBottom: 5, lineHeight: 1.2 }}>{p.title}</h3>
                    <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>{p.cat}</p>
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", paddingBottom: 2, borderBottom: "1px solid transparent", transition: "all 0.25s", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.borderBottomColor = "var(--gold)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
                    VIEW PROJECT →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:768px){main>div{padding:0 24px!important}main>div>div:last-of-type{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
