"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    num: "01", title: "Website Design",
    desc: "Clean, modern and conversion-focused designs that reflect your brand and engage your users. Every pixel considered.",
    items: ["UI/UX Design", "Wireframing", "Brand Identity", "Responsive Design"],
  },
  {
    num: "02", title: "Web Development",
    desc: "High-performance websites and web applications built with modern technologies. Fast, scalable, reliable.",
    items: ["Next.js", "React", "TypeScript", "ASP.NET Core", "SQL Server"],
  },
  {
    num: "03", title: "SEO & Performance",
    desc: "SEO-optimised, fast-loading and Google-friendly websites that rank and perform.",
    items: ["On-Page SEO", "Core Web Vitals", "Performance Audit", "Technical SEO"],
  },
];

const techs = [
  { cat: "Frontend", list: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { cat: "Backend", list: ["ASP.NET Core", "Node.js", "SQL Server", "REST APIs"] },
  { cat: "Tools", list: ["Figma", "Git", "Vercel", "Docker"] },
];

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: 120, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: 80 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Expertise</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--text)", lineHeight: 1.1 }}>
              Skills & <em>Services</em>
            </h1>
          </motion.div>

          {/* Services */}
          <div style={{ borderTop: "1px solid var(--border)", marginBottom: 100 }}>
            {services.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 48, padding: "48px 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
                <p style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--gold)", paddingTop: 4 }}>{s.num}</p>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.8rem", color: "var(--text)", marginBottom: 16, lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: "var(--muted)", fontWeight: 300 }}>{s.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 4 }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text)", padding: "7px 16px", border: "1px solid var(--border)", background: "var(--bg2)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 48 }}>Tech Stack</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }}>
              {techs.map(t => (
                <div key={t.cat} style={{ background: "var(--bg)", padding: "40px 36px" }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 24 }}>{t.cat}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {t.list.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                        <span style={{ fontSize: 14, color: "var(--text)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.05rem" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:768px){main>div{padding:0 24px!important}}`}</style>
    </>
  );
}
