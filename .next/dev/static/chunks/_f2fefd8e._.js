(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$auth$2d$helpers$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/auth-helpers-nextjs/dist/index.js [app-client] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$auth$2d$helpers$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPagesBrowserClient"])({
    supabaseUrl: ("TURBOPACK compile-time value", "https://vpghmxcvtcnybdvcbtql.supabase.co"),
    supabaseKey: ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwZ2hteGN2dGNueWJkdmNidHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzIxNTksImV4cCI6MjA3OTgwODE1OX0.fpJTWTjtdjXhQgcnQ39vMYeBil-ry8QRh7nC-aEhpmg")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/workspace/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Workspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Workspace() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            sender: "ai",
            text: "Hey! 👋 What content do you want to create today?"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkingAuth, setCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ====================== AUTH CHECK ====================== */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Workspace.useEffect": ()=>{
            const checkAuth = {
                "Workspace.useEffect.checkAuth": async ()=>{
                    try {
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                        if (!data?.user) {
                            router.replace("/login");
                            return;
                        }
                        setCheckingAuth(false);
                    } catch  {
                        router.replace("/login");
                    }
                }
            }["Workspace.useEffect.checkAuth"];
            checkAuth();
        }
    }["Workspace.useEffect"], [
        router
    ]);
    /* ====================== AUTO SCROLL ====================== */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Workspace.useEffect": ()=>{
            const el = scrollRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        }
    }["Workspace.useEffect"], [
        messages
    ]);
    /* ====================== LOGOUT ====================== */ const handleLogout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        } finally{
            router.replace("/login");
        }
    };
    /* ====================== SEND MESSAGE ====================== */ const sendMessage = async ()=>{
        if (!input.trim() || loading) return;
        const text = input.trim();
        setInput("");
        setMessages((prev)=>[
                ...prev,
                {
                    sender: "user",
                    text
                }
            ]);
        const payloadMessages = [
            ...messages.map((m)=>({
                    role: m.sender === "user" ? "user" : "assistant",
                    content: m.text
                })),
            {
                role: "user",
                content: text
            }
        ];
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: payloadMessages
                })
            });
            const json = await res.json();
            const reply = json.reply;
            let aiText = "";
            let ideaArray;
            if (reply?.content) {
                try {
                    const parsed = JSON.parse(reply.content);
                    if (Array.isArray(parsed)) {
                        ideaArray = parsed;
                        aiText = `Generated ${parsed.length} content ideas. Click a card to review.`;
                    } else {
                        aiText = reply.content;
                    }
                } catch  {
                    aiText = reply.content;
                }
            } else {
                aiText = "I'm here! How can I help?";
            }
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: aiText,
                        ideas: ideaArray
                    }
                ]);
        } catch  {
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: "Something went wrong — try again."
                    }
                ]);
        }
        setLoading(false);
    };
    /* ====================== APPROVE / REJECT ====================== */ const approve = (idea)=>{
        const raw = localStorage.getItem("cg_library_v1");
        const prev = raw ? JSON.parse(raw) : [];
        const updated = [
            idea,
            ...prev
        ];
        localStorage.setItem("cg_library_v1", JSON.stringify(updated));
        setMessages((prev)=>[
                ...prev,
                {
                    sender: "ai",
                    text: `✅ Saved to your library.`
                }
            ]);
    };
    const reject = ()=>{
        setMessages((prev)=>[
                ...prev,
                {
                    sender: "ai",
                    text: `❌ Skipped.`
                }
            ]);
    };
    /* ====================== IDEA TABS (CARDS) ====================== */ const IdeaTabs = ({ ideas })=>{
        _s1();
        const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.ideaList,
            children: ideas.map((idea, idx)=>{
                const expanded = open === idx;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...styles.ideaCard,
                        borderColor: expanded ? "#2563eb" : "#e5e7eb",
                        boxShadow: expanded ? "0 12px 32px rgba(15,23,42,0.16)" : "0 4px 16px rgba(15,23,42,0.06)"
                    },
                    onClick: ()=>setOpen(expanded ? null : idx),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.ideaHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.ideaTitle,
                                            children: idea.title ?? `Idea ${idx + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        idea.explanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.ideaSubtitle,
                                            children: idea.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: styles.toggleChip,
                                    children: expanded ? "Hide" : "Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workspace/page.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this),
                        expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.ideaBody,
                            children: [
                                idea.hook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.ideaRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.ideaLabel,
                                            children: "Hook"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.ideaText,
                                            children: idea.hook
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 21
                                }, this),
                                idea.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.ideaRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.ideaLabel,
                                            children: "Caption"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.ideaText,
                                            children: idea.caption
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 21
                                }, this),
                                idea.script && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.ideaRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.ideaLabel,
                                            children: "Script"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.ideaText,
                                            children: idea.script
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 21
                                }, this),
                                idea.hashtags && idea.hashtags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.ideaRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.ideaLabel,
                                            children: "Hashtags"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.ideaText,
                                            children: idea.hashtags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: styles.hashtag,
                                                    children: [
                                                        "#",
                                                        tag
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/workspace/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 21
                                }, this),
                                idea.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.ideaRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.ideaLabel,
                                            children: "CTA"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.ideaText,
                                            children: idea.cta
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.ideaActions,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.approveBtn,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                approve(idea);
                                            },
                                            children: "✅ Approve & Save"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: styles.rejectBtn,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                reject();
                                            },
                                            children: "✖ Reject"
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/workspace/page.tsx",
                            lineNumber: 197,
                            columnNumber: 17
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/app/workspace/page.tsx",
                    lineNumber: 171,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/app/workspace/page.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    };
    _s1(IdeaTabs, "3gHT60S3lHEhyYybFcB05ha95j4=");
    /* ====================== LOADING STATE ====================== */ if (checkingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: 40
            },
            children: "Checking authentication..."
        }, void 0, false, {
            fileName: "[project]/app/workspace/page.tsx",
            lineNumber: 267,
            columnNumber: 12
        }, this);
    }
    /* ====================== UI ====================== */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.topBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: styles.title,
                                children: "Content Workspace"
                            }, void 0, false, {
                                fileName: "[project]/app/workspace/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.subtitle,
                                children: "Chat with the AI, explore ideas, approve the best ones into your library."
                            }, void 0, false, {
                                fileName: "[project]/app/workspace/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/workspace/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: styles.logoutBtn,
                        onClick: handleLogout,
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/app/workspace/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/workspace/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.surface,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        style: styles.messages,
                        children: messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: messageRowStyle(m.sender),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.bubbleWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: bubbleStyle(m.sender),
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        m.sender === "ai" && m.ideas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.ideasWrapper,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IdeaTabs, {
                                                ideas: m.ideas
                                            }, void 0, false, {
                                                fileName: "[project]/app/workspace/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/workspace/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/workspace/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/workspace/page.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/workspace/page.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.composer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                style: styles.input,
                                rows: 2,
                                placeholder: "Describe the content you want. Example: “Give me 5 Instagram Reels ideas for fitness beginners.”"
                            }, void 0, false, {
                                fileName: "[project]/app/workspace/page.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: sendMessage,
                                disabled: loading,
                                style: {
                                    ...styles.sendBtn,
                                    opacity: loading ? 0.7 : 1,
                                    cursor: loading ? "default" : "pointer"
                                },
                                children: loading ? "Generating..." : "Send"
                            }, void 0, false, {
                                fileName: "[project]/app/workspace/page.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/workspace/page.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/workspace/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/workspace/page.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s(Workspace, "il4VLBCwk/hrVuBcEKaVO0Vt/10=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Workspace;
/* ====================== STYLES ====================== */ const styles = {
    page: {
        padding: 12,
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 12
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
        borderColor: "#e5e7eb"
    },
    title: {
        margin: 0,
        fontSize: 20,
        fontWeight: 600
    },
    subtitle: {
        margin: "4px 0 0",
        fontSize: 13,
        color: "#6b7280"
    },
    logoutBtn: {
        padding: "6px 14px",
        borderRadius: 999,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#e5e7eb",
        background: "#f9fafb",
        fontSize: 13,
        cursor: "pointer"
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
        boxSizing: "border-box"
    },
    messages: {
        flex: 1,
        overflowY: "auto",
        paddingRight: 8,
        marginBottom: 10
    },
    bubbleWrapper: {
        maxWidth: "80%",
        display: "flex",
        flexDirection: "column",
        gap: 6
    },
    ideasWrapper: {
        marginTop: 6
    },
    composer: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end",
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor: "#e5e7eb",
        paddingTop: 10
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
        fontFamily: "inherit"
    },
    sendBtn: {
        padding: "10px 18px",
        borderRadius: 999,
        borderWidth: 0,
        background: "#2563eb",
        color: "white",
        fontSize: 14,
        fontWeight: 500
    },
    /* Ideas UI */ ideaList: {
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        gap: 8
    },
    ideaCard: {
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
        padding: 12,
        background: "#f9fafb",
        transition: "box-shadow 0.16s ease, border-color 0.16s ease"
    },
    ideaHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer"
    },
    ideaTitle: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 2
    },
    ideaSubtitle: {
        fontSize: 12,
        color: "#6b7280"
    },
    toggleChip: {
        borderRadius: 999,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#d1d5db",
        background: "#ffffff",
        padding: "4px 10px",
        fontSize: 12,
        cursor: "pointer"
    },
    ideaBody: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor: "#e5e7eb",
        paddingTop: 8,
        display: "flex",
        flexDirection: "column",
        gap: 6
    },
    ideaRow: {
        display: "flex",
        flexDirection: "column",
        gap: 2
    },
    ideaLabel: {
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: 0.4,
        color: "#6b7280"
    },
    ideaText: {
        margin: 0,
        fontSize: 13,
        color: "#111827"
    },
    hashtag: {
        display: "inline-block",
        marginRight: 6,
        fontSize: 12,
        color: "#2563eb",
        background: "#e0edff",
        padding: "2px 6px",
        borderRadius: 999
    },
    ideaActions: {
        display: "flex",
        gap: 8,
        marginTop: 6
    },
    approveBtn: {
        flex: 1,
        padding: "8px 10px",
        borderRadius: 999,
        borderWidth: 0,
        background: "#16a34a",
        color: "white",
        fontSize: 13,
        cursor: "pointer"
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
        cursor: "pointer"
    }
};
/* ====================== DYNAMIC STYLE HELPERS ====================== */ function messageRowStyle(sender) {
    return {
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        marginBottom: 10
    };
}
function bubbleStyle(sender) {
    return {
        padding: "10px 14px",
        borderRadius: 14,
        background: sender === "user" ? "#2563eb" : "#f1f5f9",
        color: sender === "user" ? "white" : "#0f172a",
        fontSize: 14,
        lineHeight: 1.5
    };
}
var _c;
__turbopack_context__.k.register(_c, "Workspace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f2fefd8e._.js.map