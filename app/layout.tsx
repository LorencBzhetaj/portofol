import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorenc Bzhetaj — Frontend & Full-Stack Developer",
  description: "I design and develop modern, fast and SEO-friendly websites that help businesses grow and stand out online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
