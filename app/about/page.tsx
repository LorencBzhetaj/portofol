"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const qualities = [
  { n: "1", title: "Clean Code", desc: "I write clean, scalable and maintainable code." },
  { n: "2", title: "Performance", desc: "I build fast and optimised web experiences." },
  { n: "3", title: "Client Focused", desc: "I listen, understand and deliver what you need." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 120, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: 80 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Who I am</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--text)", lineHeight: 1.1 }}>
              About <em>Me</em>
            </h1>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--text)", lineHeight: 1.15, marginBottom: 32 }}>
                Passionate about<br /><em>code and design.</em>
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, marginBottom: 16 }}>
                I'm Lorenc, a developer based in Albania. I help businesses and brands bring their ideas to life with clean code, modern design and a deep understanding of what makes digital products exceptional.
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, marginBottom: 48 }}>
                Every project is approached with precision, care and a commitment to delivering results that exceed expectations — both visually and technically.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 48 }}>
                {qualities.map(q => (
                  <div key={q.n} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 10, color: "var(--gold)" }}>{q.n}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 3 }}>{q.title}</p>
                      <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 300 }}>{q.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", background: "transparent", border: "1px solid var(--gold)", padding: "12px 28px", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}>
                GET IN TOUCH →
              </a>
            </motion.div>

            {/* Right — photo */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85 }}
              style={{ position: "relative" }}>
              <div style={{ width: "100%", aspectRatio: "4/5", background: "linear-gradient(160deg, #EDE5DA 0%, #D9CEBD 100%)", overflow: "hidden", position: "relative" }}>
                <img src="/about.jpg" alt="Lorenc Bzhetaj"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
              <div style={{ position: "absolute", top: 20, right: -20, bottom: -20, left: 20, border: "1px solid var(--border)", zIndex: -1 }} />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:768px){main>div>div:last-of-type{grid-template-columns:1fr!important}main>div>div:last-of-type>div:last-child{display:none!important}main>div{padding:0 24px!important}}`}</style>
    </>
  );
}
