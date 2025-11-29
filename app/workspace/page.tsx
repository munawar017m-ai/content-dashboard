"use client";

import React, { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

/* ====================== TYPES ====================== */

type ContentIdea = {
  title?: string;
  hook?: string;
  script?: string;
  caption?: string;
  hashtags?: string[];
  cta?: string;
  explanation?: string;
};

type ChatMessage = {
  sender: "user" | "ai";
  text: string;
  ideas?: ContentIdea[];
};

/* ====================== MAIN COMPONENT ====================== */

export default function Workspace() {
  const router = useRouter();

  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "ai", text: "Hey! 👋 What content do you want to create today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  /* ====================== AUTH CHECK ====================== */

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (!data?.user) {
          router.replace("/login");
          return;
        }
        setCheckingAuth(false);
      } catch {
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router]);

  /* ====================== AUTO SCROLL ====================== */

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  /* ====================== LOGOUT ====================== */

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } finally {
      router.replace("/login");
    }
  };

  /* ====================== SEND MESSAGE ====================== */

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const text = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { sender: "user", text }]);

    const payloadMessages = [
      ...messages.map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      })),
      { role: "user", content: text },
    ];

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      const json = await res.json();
      const reply = json.reply;

      let aiText = "";
      let ideaArray: ContentIdea[] | undefined;

      if (reply?.content) {
        try {
          const parsed = JSON.parse(reply.content);
          if (Array.isArray(parsed)) {
            ideaArray = parsed;
            aiText = `Generated ${parsed.length} content ideas. Click a card to review.`;
          } else {
            aiText = reply.content;
          }
        } catch {
          aiText = reply.content;
        }
      } else {
        aiText = "I'm here! How can I help?";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: aiText, ideas: ideaArray },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong — try again." },
      ]);
    }

    setLoading(false);
  };

  /* ====================== APPROVE / REJECT ====================== */

  const approve = (idea: ContentIdea) => {
    const raw = localStorage.getItem("cg_library_v1");
    const prev: ContentIdea[] = raw ? JSON.parse(raw) : [];
    const updated = [idea, ...prev];

    localStorage.setItem("cg_library_v1", JSON.stringify(updated));

    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: `✅ Saved to your library.` },
    ]);
  };

  const reject = () => {
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: `❌ Skipped.` },
    ]);
  };

  /* ====================== IDEA TABS (CARDS) ====================== */

  const IdeaTabs = ({ ideas }: { ideas: ContentIdea[] }) => {
    const [open, setOpen] = useState<number | null>(null);

    return (
      <div style={styles.ideaList}>
        {ideas.map((idea, idx) => {
          const expanded = open === idx;

          return (
            <div
              key={idx}
              style={{
                ...styles.ideaCard,
                borderColor: expanded ? "#2563eb" : "#e5e7eb",
                boxShadow: expanded
                  ? "0 12px 32px rgba(15,23,42,0.16)"
                  : "0 4px 16px rgba(15,23,42,0.06)",
              }}
              onClick={() => setOpen(expanded ? null : idx)}
            >
              <div style={styles.ideaHeader}>
                <div>
                  <div style={styles.ideaTitle}>
                    {idea.title ?? `Idea ${idx + 1}`}
                  </div>
                  {idea.explanation && (
                    <div style={styles.ideaSubtitle}>{idea.explanation}</div>
                  )}
                </div>
                <button style={styles.toggleChip}>
                  {expanded ? "Hide" : "Details"}
                </button>
              </div>

              {expanded && (
                <div style={styles.ideaBody}>
                  {idea.hook && (
                    <div style={styles.ideaRow}>
                      <span style={styles.ideaLabel}>Hook</span>
                      <p style={styles.ideaText}>{idea.hook}</p>
                    </div>
                  )}
                  {idea.caption && (
                    <div style={styles.ideaRow}>
                      <span style={styles.ideaLabel}>Caption</span>
                      <p style={styles.ideaText}>{idea.caption}</p>
                    </div>
                  )}
                  {idea.script && (
                    <div style={styles.ideaRow}>
                      <span style={styles.ideaLabel}>Script</span>
                      <p style={styles.ideaText}>{idea.script}</p>
                    </div>
                  )}
                  {idea.hashtags && idea.hashtags.length > 0 && (
                    <div style={styles.ideaRow}>
                      <span style={styles.ideaLabel}>Hashtags</span>
                      <p style={styles.ideaText}>
                        {idea.hashtags.map((tag, i) => (
                          <span key={i} style={styles.hashtag}>
                            #{tag}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                  {idea.cta && (
                    <div style={styles.ideaRow}>
                      <span style={styles.ideaLabel}>CTA</span>
                      <p style={styles.ideaText}>{idea.cta}</p>
                    </div>
                  )}

                  <div style={styles.ideaActions}>
                    <button
                      style={styles.approveBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        approve(idea);
                      }}
                    >
                      ✅ Approve & Save
                    </button>
                    <button
                      style={styles.rejectBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        reject();
                      }}
                    >
                      ✖ Reject
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  /* ====================== LOADING STATE ====================== */

  if (checkingAuth) {
    return <div style={{ padding: 40 }}>Checking authentication...</div>;
  }

  /* ====================== UI ====================== */

  return (
    <div style={styles.page}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <div>
          <h2 style={styles.title}>Content Workspace</h2>
          <p style={styles.subtitle}>
            Chat with the AI, explore ideas, approve the best ones into your library.
          </p>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN SURFACE */}
      <div style={styles.surface}>
        {/* CHAT WINDOW */}
        <div ref={scrollRef} style={styles.messages}>
          {messages.map((m, i) => (
            <div key={i} style={messageRowStyle(m.sender)}>
              <div style={styles.bubbleWrapper}>
                <div style={bubbleStyle(m.sender)}>
                  {m.text}
                </div>

                {m.sender === "ai" && m.ideas && (
                  <div style={styles.ideasWrapper}>
                    <IdeaTabs ideas={m.ideas} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT BAR */}
        <div style={styles.composer}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            rows={2}
            placeholder="Describe the content you want. Example: “Give me 5 Instagram Reels ideas for fitness beginners.”"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            style={{
              ...styles.sendBtn,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "default" : "pointer",
            }}
          >
            {loading ? "Generating..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ====================== STYLES ====================== */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: 12,
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 16px",
    borderRadius: 10,
    background: "#ffffff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
  },

  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
  },

  subtitle: {
    margin: "4px 0 0",
    fontSize: 13,
    color: "#6b7280",
  },

  logoutBtn: {
    padding: "6px 14px",
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    background: "#f9fafb",
    fontSize: 13,
    cursor: "pointer",
  },

  surface: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    boxShadow: "0 12px 35px rgba(15,23,42,0.08)",
    boxSizing: "border-box",
  },

  messages: {
    flex: 1,
    overflowY: "auto",
    paddingRight: 8,
    marginBottom: 10,
  },

  bubbleWrapper: {
    maxWidth: "80%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  ideasWrapper: {
    marginTop: 6,
  },

  composer: {
    display: "flex",
    gap: 10,
    alignItems: "flex-end",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "#e5e7eb",
    paddingTop: 10,
  },

  input: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d1d5db",
    padding: 10,
    fontSize: 14,
    resize: "none",
    outline: "none",
    fontFamily: "inherit",
  },

  sendBtn: {
    padding: "10px 18px",
    borderRadius: 999,
    borderWidth: 0,
    background: "#2563eb",
    color: "white",
    fontSize: 14,
    fontWeight: 500,
  },

  /* Ideas UI */
  ideaList: {
    marginTop: 4,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  ideaCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 12,
    background: "#f9fafb",
    transition: "box-shadow 0.16s ease, border-color 0.16s ease",
  },

  ideaHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },

  ideaTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 2,
  },

  ideaSubtitle: {
    fontSize: 12,
    color: "#6b7280",
  },

  toggleChip: {
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d1d5db",
    background: "#ffffff",
    padding: "4px 10px",
    fontSize: 12,
    cursor: "pointer",
  },

  ideaBody: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "#e5e7eb",
    paddingTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  ideaRow: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  ideaLabel: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 0.4,
    color: "#6b7280",
  },

  ideaText: {
    margin: 0,
    fontSize: 13,
    color: "#111827",
  },

  hashtag: {
    display: "inline-block",
    marginRight: 6,
    fontSize: 12,
    color: "#2563eb",
    background: "#e0edff",
    padding: "2px 6px",
    borderRadius: 999,
  },

  ideaActions: {
    display: "flex",
    gap: 8,
    marginTop: 6,
  },

  approveBtn: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: 999,
    borderWidth: 0,
    background: "#16a34a",
    color: "white",
    fontSize: 13,
    cursor: "pointer",
  },

  rejectBtn: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fecaca",
    background: "#fef2f2",
    color: "#b91c1c",
    fontSize: 13,
    cursor: "pointer",
  },
};

/* ====================== DYNAMIC STYLE HELPERS ====================== */

function messageRowStyle(sender: "user" | "ai"): React.CSSProperties {
  return {
    display: "flex",
    justifyContent: sender === "user" ? "flex-end" : "flex-start",
    marginBottom: 10,
  };
}

function bubbleStyle(sender: "user" | "ai"): React.CSSProperties {
  return {
    padding: "10px 14px",
    borderRadius: 14,
    background: sender === "user" ? "#2563eb" : "#f1f5f9",
    color: sender === "user" ? "white" : "#0f172a",
    fontSize: 14,
    lineHeight: 1.5,
  };
}
