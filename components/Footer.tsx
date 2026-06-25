"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "24px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
          © {new Date().getFullYear()} Lorenc Bzhetaj. All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>Albania, Europe</p>
      </div>
      <style>{`@media(max-width:768px){footer{padding:20px 24px!important}}`}</style>
    </footer>
  );
}
