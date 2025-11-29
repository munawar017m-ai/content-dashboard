"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type ContentIdea = {
  title?: string;
  hook?: string;
  script?: string;
  caption?: string;
  hashtags?: string[];
  cta?: string;
  explanation?: string;
};

const STORAGE_KEY = "cg_library_v1";

export default function LibraryPage() {
  const router = useRouter();
  const [library, setLibrary] = useState<ContentIdea[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // ✅ AUTH PROTECTION (SAFE)
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.replace("/login");
        return;
      }
      setCheckingAuth(false);
    };
    checkAuth();
  }, [router]);

  // ✅ LOAD FROM LOCAL STORAGE
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setLibrary(parsed);
        }
      }
    } catch {
      setLibrary([]);
    }
  }, []);

  // ✅ DELETE SINGLE IDEA
  const deleteIdea = (index: number) => {
    setLibrary((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    if (open === index) setOpen(null);
    else if (open !== null && open > index) setOpen(open - 1);
  };

  // ✅ CLEAR ALL IDEAS
  const clearAll = () => {
    setLibrary([]);
    localStorage.removeItem(STORAGE_KEY);
    setOpen(null);
  };

  // ✅ BLOCK UI UNTIL AUTH CHECK COMPLETES
  if (checkingAuth) {
    return <div style={{ padding: 40 }}>Checking authentication...</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={{ margin: 0 }}>Content Library</h1>
          <p style={{ fontSize: 14, color: "#64748b" }}>
            All ideas you approved from the Workspace.
          </p>
        </div>

        {library.length > 0 && (
          <button style={styles.clearBtn} onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>

      {library.length === 0 && (
        <div style={styles.empty}>
          <h3>No saved ideas yet</h3>
          <p>
            Go to the <b>Content Workspace</b>, generate ideas and click{" "}
            <b>Approve</b>.
          </p>
        </div>
      )}

      {library.map((idea, idx) => {
        const expanded = open === idx;

        return (
          <div
            key={idx}
            style={{
              ...styles.card,
              ...(expanded ? styles.cardOpen : {}),
            }}
          >
            <div
              style={styles.cardHeader}
              onClick={() => setOpen(expanded ? null : idx)}
            >
              <div>
                <b>{idea.title ?? `Content Idea ${idx + 1}`}</b>
                {idea.hook && (
                  <p style={styles.muted}>
                    {idea.hook.length > 80
                      ? idea.hook.slice(0, 80) + "..."
                      : idea.hook}
                  </p>
                )}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <button
                  style={styles.deleteBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteIdea(idx);
                  }}
                >
                  Delete
                </button>
                <span>{expanded ? "▲" : "▼"}</span>
              </div>
            </div>

            {expanded && (
              <div style={styles.details}>
                {idea.hook && <p><b>Hook:</b> {idea.hook}</p>}

                {idea.script && (
                  <pre style={styles.pre}><b>Script:</b>{"\n"}{idea.script}</pre>
                )}

                {idea.caption && <p><b>Caption:</b> {idea.caption}</p>}

                {idea.hashtags && (
                  <p><b>Hashtags:</b> {idea.hashtags.join(" ")}</p>
                )}

                {idea.cta && <p><b>CTA:</b> {idea.cta}</p>}

                {idea.explanation && (
                  <p style={{ fontStyle: "italic", color: "#4b5563" }}>
                    {idea.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    maxWidth: 900,
    margin: "0 auto",
    padding: 32,
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  clearBtn: {
    padding: "8px 14px",
    background: "#fee2e2",
    color: "#991b1b",
    border: "1px solid #fecaca",
    borderRadius: 6,
    cursor: "pointer",
  },
  empty: {
    background: "#eef2ff",
    padding: 20,
    borderRadius: 8,
    border: "1px dashed #c7d2fe",
  },
  card: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    cursor: "pointer",
  },
  cardOpen: {
    borderColor: "#2563eb",
    boxShadow: "0 10px 20px rgba(37,99,235,0.15)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  muted: {
    margin: "4px 0 0",
    fontSize: 13,
    color: "#6b7280",
  },
  deleteBtn: {
    padding: "5px 10px",
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    background: "#f3f4f6",
    cursor: "pointer",
    fontSize: 12,
  },
  details: {
    marginTop: 10,
    borderTop: "1px solid #e5e7eb",
    paddingTop: 10,
    fontSize: 14,
  },
  pre: {
    background: "#f9fafb",
    padding: 8,
    borderRadius: 6,
    border: "1px solid #e5e7eb",
    fontSize: 13,
  },
};
