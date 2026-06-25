import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

        {/* Hero image */}
        <div style={{ width: "100%", background: project.bg, marginTop: 72 }}>
          <img src={project.img} alt={project.title}
            style={{ width: "100%", display: "block", maxHeight: 680, objectFit: "cover", objectPosition: "top" }}
            onError={() => {}} />
        </div>

        {/* Content */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 80, alignItems: "start" }}>

            {/* Left */}
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
                {project.num} — {project.cat}
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "var(--text)", lineHeight: 1.1, marginBottom: 32 }}>
                {project.title}
              </h1>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300, maxWidth: 560, marginBottom: 48 }}>
                {project.description}
              </p>
              {project.url !== "#" && (
                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff", background: "var(--gold)", padding: "13px 32px", textDecoration: "none", transition: "background 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
                  VISIT WEBSITE →
                </a>
              )}
            </div>

            {/* Right — details */}
            <div style={{ paddingTop: 8 }}>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32, marginBottom: 32 }}>
                <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Services</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.services.map(s => (
                    <span key={s} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text)", padding: "6px 14px", border: "1px solid var(--border)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 32 }}>
                <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Year</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "var(--text)" }}>{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next project */}
        <div style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
          <Link href={`/projects/${next.slug}`}
            style={{ display: "block", textDecoration: "none", maxWidth: 1280, margin: "0 auto", padding: "56px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            <div>
              <p style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Next Project</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--text)" }}>{next.title}</h3>
            </div>
            <span style={{ fontSize: 32, color: "var(--gold)" }}>→</span>
          </Link>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          main > div:nth-child(2) > div { grid-template-columns: 1fr !important; padding: 48px 24px !important; }
        }
      `}</style>
    </>
  );
}
