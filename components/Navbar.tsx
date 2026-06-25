"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          backgroundColor: scrolled ? "rgba(247,243,238,0.96)" : "rgba(247,243,238,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, color: "var(--text)", letterSpacing: 2, textDecoration: "none" }}>
            LB
          </Link>

          <nav style={{ display: "flex", gap: 40, alignItems: "center" }} className="nav-desktop">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                style={{
                  fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: pathname === l.href ? "var(--gold)" : "var(--muted)",
                  textDecoration: "none", transition: "color 0.25s",
                  borderBottom: pathname === l.href ? "1px solid var(--gold)" : "1px solid transparent",
                  paddingBottom: 2,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === l.href ? "var(--gold)" : "var(--muted)")}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact"
            style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 22px", border: "1px solid var(--gold)", color: "var(--gold)", textDecoration: "none", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
            className="nav-desktop">
            LET'S WORK TOGETHER
          </Link>

          <button onClick={() => setOpen(!open)} className="nav-mobile-btn"
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: 8 }}>
            <span style={{ width: 24, height: 1, background: "var(--text)", display: "block", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ width: 16, height: 1, background: "var(--text)", display: "block", opacity: open ? 0 : 1 }} />
            <span style={{ width: 24, height: 1, background: "var(--text)", display: "block", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 99, background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, color: pathname === l.href ? "var(--gold)" : "var(--text)", textDecoration: "none", letterSpacing: 2 }}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
