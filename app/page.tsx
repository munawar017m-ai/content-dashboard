"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={styles.wrapper}>
      {/* HEADER */}
      <header style={styles.header}>
        <h2 style={styles.logo}>Content Dashboard</h2>
        <div style={styles.headerBtns}>
          <button style={styles.linkBtn} onClick={() => router.push("/login")}>
            Login
          </button>
          <button style={styles.primaryBtn} onClick={() => router.push("/signup")}>
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          AI Powered Content Generation Dashboard
        </h1>
        <p style={styles.heroSubtitle}>
          Create, manage and scale your content with AI — all inside one powerful workspace.
        </p>

        <div style={styles.heroBtns}>
          <button style={styles.primaryBtn} onClick={() => router.push("/signup")}>
            Start Free
          </button>
          <button style={styles.outlineBtn} onClick={() => router.push("/login")}>
            Login
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>AI Workspace</h3>
          <p>Generate high-quality content using AI prompts inside your workspace.</p>
        </div>

        <div style={styles.card}>
          <h3>Content Library</h3>
          <p>Save, organize and reuse all your generated content easily.</p>
        </div>

        <div style={styles.card}>
          <h3>Secure Authentication</h3>
          <p>Secure login and signup powered by Supabase with full protection.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.how}>
        <h2>How It Works</h2>

        <div style={styles.steps}>
          <div>
            <h4>1. Sign Up</h4>
            <p>Create your free account using your email & password.</p>
          </div>

          <div>
            <h4>2. Generate Content</h4>
            <p>Use the AI workspace to instantly generate content ideas.</p>
          </div>

          <div>
            <h4>3. Save to Library</h4>
            <p>Store and organize your content inside your personal library.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to build your content system?</h2>
        <button style={styles.primaryBtn} onClick={() => router.push("/signup")}>
          Create Free Account
        </button>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2025 Content Dashboard. All rights reserved.
      </footer>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fa",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "white",
  },

  logo: { color: "#2563eb" },

  headerBtns: { display: "flex", gap: 16 },

  // ✅ Bigger Top Right Login Button
  linkBtn: {
    background: "transparent",
    border: "none",
    fontSize: 17,
    fontWeight: 600,
    cursor: "pointer",
  },

  // ✅ Bigger Primary Buttons (Get Started, Start Free, CTA)
  primaryBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 6,
    padding: "14px 26px",
    fontSize: 17,
    fontWeight: 600,
    cursor: "pointer",
  },

  // ✅ Bigger Center Outline Login Button
  outlineBtn: {
    border: "1px solid #2563eb",
    background: "white",
    color: "#2563eb",
    borderRadius: 6,
    padding: "14px 26px",
    fontSize: 17,
    fontWeight: 600,
    cursor: "pointer",
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px",
  },

  heroTitle: { fontSize: 44, marginBottom: 16 },

  heroSubtitle: {
    color: "#555",
    fontSize: 18,
    maxWidth: 620,
    margin: "0 auto 30px",
  },

  heroBtns: { display: "flex", justifyContent: "center", gap: 16 },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    padding: "60px 40px",
  },

  card: {
    background: "white",
    padding: 24,
    borderRadius: 10,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  how: { padding: "60px 40px", textAlign: "center" },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginTop: 30,
  },

  cta: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#eef2ff",
  },

  footer: {
    textAlign: "center",
    padding: 20,
    background: "white",
    marginTop: 40,
  },
};
