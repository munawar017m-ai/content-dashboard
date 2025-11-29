"use client";

import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ Sidebar ONLY on protected pages
  const showSidebar =
    pathname.startsWith("/workspace") || pathname.startsWith("/library");

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#f5f7fa",
          color: "#0f172a",
        }}
      >
        {showSidebar ? (
          <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* ✅ Sidebar */}
            <aside
              style={{
                width: 220,
                background: "#0f172a",
                color: "white",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ marginTop: 0, marginBottom: 24 }}>
                  Dashboard
                </h2>

                <nav
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {/* ❌ LANDING REMOVED */}

                  <a
                    href="/workspace"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 6,
                      textDecoration: "none",
                      color: "white",
                      background: "#1e293b",
                    }}
                  >
                    🧠 Content Workspace
                  </a>

                  <a
                    href="/library"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 6,
                      textDecoration: "none",
                      color: "white",
                      background: "#1e293b",
                    }}
                  >
                    📚 Content Library
                  </a>
                </nav>
              </div>

              {/* ✅ Bottom section */}
              <div>
                <p style={{ fontSize: 12, opacity: 0.7, marginBottom: 0 }}>
                  © 2025 Content Dashboard
                </p>
              </div>
            </aside>

            {/* ✅ Main Content */}
            <main style={{ flex: 1, padding: 24 }}>
              {children}
            </main>
          </div>
        ) : (
          // ✅ Public pages (NO sidebar)
          children
        )}
      </body>
    </html>
  );
}
