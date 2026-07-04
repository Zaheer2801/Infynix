import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

type Env = {
  BLOG_KV: KVNamespace;
  VITE_GEMINI_API_KEY?: string;
  GEMINI_API_KEY?: string;
  RESEND_API_KEY?: string;
  ADMIN_API_TOKEN?: string;
};

const NOTIFY_TO_EMAIL = "info@infynixtek.com";
const NOTIFY_FROM_EMAIL = "Infynix Website <notifications@infynixtek.com>";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Simple string field extractor: trims, caps length, and rejects non-strings.
function field(body: Record<string, unknown>, key: string, maxLen = 500): string {
  const value = body[key];
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendNotificationEmail(
  env: Env,
  opts: { subject: string; replyTo?: string; rows: [string, string][] }
): Promise<{ ok: boolean; error?: string }> {
  if (!env.RESEND_API_KEY) {
    return { ok: false, error: "Email is not configured" };
  }

  const html = `<h2 style="font-family:sans-serif">${escapeHtml(opts.subject)}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${opts.rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_FROM_EMAIL,
      to: [NOTIFY_TO_EMAIL],
      reply_to: opts.replyTo && isValidEmail(opts.replyTo) ? [opts.replyTo] : undefined,
      subject: opts.subject,
      html,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    return { ok: false, error: `Resend error ${response.status}: ${text.slice(0, 300)}` };
  }
  return { ok: true };
}

// Minimal per-IP rate limit backed by KV: `max` requests per `windowSeconds`.
async function checkRateLimit(
  env: Env,
  request: Request,
  routeKey: string,
  max: number,
  windowSeconds: number
): Promise<boolean> {
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const key = `ratelimit:${routeKey}:${ip}`;
  const current = await env.BLOG_KV.get(key);
  const count = current ? parseInt(current, 10) : 0;
  if (count >= max) return false;
  await env.BLOG_KV.put(key, String(count + 1), { expirationTtl: windowSeconds });
  return true;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

type ServerEntry = {
  fetch: (request: Request, env: Env, ctx: ExecutionContext) => Promise<Response> | Response;
};

const CATEGORIES = [
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Data Analytics",
  "Enterprise ERP",
  "IT Staffing",
  "Web & Mobile",
];

const MAX_STORED_POSTS = 90;

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function fallbackPost(category: string): BlogPost {
  const titles: Record<string, string> = {
    "AI & Machine Learning": "Scaling Generative AI in Business Operations: Realities and Roadmap",
    "Data Analytics": "Establishing Next-Gen Data Lakes: Leveraging Modern Cloud Infrastructures",
    "Cloud & DevOps": "Mastering GitOps: Zero-Downtime Deployments at Scale",
    "Enterprise ERP": "Migrating to SAP S/4HANA: Key Enterprise Architecture Strategies",
    "IT Staffing": "Navigating the 2026 Developer Market: What Tech Leaders Look For",
    "Web & Mobile": "Building Fast Progressive Web Apps: UX Best Practices for Modern Frontends",
  };
  const title = titles[category] ?? `Innovations in ${category}: Driving Tech Forward`;
  const date = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return {
    slug: generateSlug(title) + "-" + Math.floor(Math.random() * 10000),
    title,
    category,
    date,
    readingTime: "6 min read",
    excerpt: `Deploying services within the ${category} domain remains a top competitive differentiator for modern enterprises in 2026.`,
    body: [
      `Establishing a stable framework around ${category} remains a top priority for technology executives striving to optimize business performance. Too many teams launch complex initiatives without standardizing data schemas, creating administrative bottlenecks and slowing down dev cycles.`,
      `By partnering with a seasoned systems integrator like Infynix Tech Solutions, businesses gain access to battle-tested blueprints and specialized talent to de-risk migrations, deploy resilient automations, and scale modern architectures smoothly.`,
      `Furthermore, continuous performance monitoring and integrated unit-test suites should be established on day one. Having human-in-the-loop validation checkpoints ensures high fidelity, preserves user trust, and prevents regression anomalies during large updates.`,
      `Ultimately, digital evolution is not simply about adopting the latest framework — it represents a cultural alignment towards agility, data-driven strategy, and absolute developer focus. Organizations that build clear developer platforms consistently outpace their competition.`,
    ],
  };
}

async function generatePostWithGemini(category: string, apiKey: string): Promise<BlogPost> {
  const prompt = `You are a Senior Principal Technology Director at Infynix Tech Solutions.
Write an insightful, professional blog post targeting enterprise clients about the latest trends and best practices in "${category}".
Reference Infynix Tech Solutions as the leading consulting and engineering partner.

Return ONLY a raw JSON object with this structure:
{
  "title": "...",
  "excerpt": "...",
  "body": ["paragraph1", "paragraph2", "paragraph3", "paragraph4"],
  "readingTime": "7 min read"
}

Tone: authoritative, technical, engaging. Focus on production deployments, scale, security, and velocity.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json", temperature: 0.75 },
      }),
    }
  );

  if (!response.ok) throw new Error(`Gemini API error: ${response.status}`);

  const data = await response.json() as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
  const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!jsonText) throw new Error("Empty Gemini response");

  const result = JSON.parse(jsonText.trim()) as { title: string; excerpt: string; body: string[]; readingTime: string };
  const date = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return {
    slug: generateSlug(result.title) + "-" + Math.floor(Math.random() * 10000),
    title: result.title,
    category,
    date,
    readingTime: result.readingTime ?? "7 min read",
    excerpt: result.excerpt,
    body: Array.isArray(result.body) ? result.body : [result.body],
  };
}

async function generateDailyPosts(env: Env): Promise<void> {
  const apiKey = env.GEMINI_API_KEY ?? env.VITE_GEMINI_API_KEY ?? "";

  // Pick 3 categories based on today's day-of-year so rotation is predictable
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const startIdx = (dayOfYear * 3) % CATEGORIES.length;
  const todayCategories = [
    CATEGORIES[startIdx % CATEGORIES.length],
    CATEGORIES[(startIdx + 1) % CATEGORIES.length],
    CATEGORIES[(startIdx + 2) % CATEGORIES.length],
  ];

  const newPosts: BlogPost[] = [];
  for (const category of todayCategories) {
    try {
      const post = apiKey
        ? await generatePostWithGemini(category, apiKey)
        : fallbackPost(category);
      newPosts.push(post);
    } catch {
      newPosts.push(fallbackPost(category));
    }
  }

  // Prepend new posts, keep last MAX_STORED_POSTS
  const existing = await env.BLOG_KV.get("posts", "json") as BlogPost[] | null;
  const merged = [...newPosts, ...(existing ?? [])].slice(0, MAX_STORED_POSTS);
  await env.BLOG_KV.put("posts", JSON.stringify(merged));

  console.log(`Daily blog generation complete: ${newPosts.map(p => p.title).join(", ")}`);
}

// ── Server entry ──────────────────────────────────────────────────────────────

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry))
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try { payload = JSON.parse(body); } catch { return false; }
  if (!payload || Array.isArray(payload) || typeof payload !== "object") return false;
  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) return false;
  return fields.unhandled === true && fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus);
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;
  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) return response;
  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);

    // API: GET /api/posts — return stored blog posts from KV
    if (url.pathname === "/api/posts" && request.method === "GET") {
      const posts = await env.BLOG_KV.get("posts", "json") as BlogPost[] | null;
      return new Response(JSON.stringify(posts ?? []), {
        headers: {
          "content-type": "application/json",
          "cache-control": "public, max-age=900",
          "access-control-allow-origin": "*",
        },
      });
    }

    // API: POST /api/generate (manual trigger for seeding, internal use only)
    if (url.pathname === "/api/generate" && request.method === "POST") {
      const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
      if (!env.ADMIN_API_TOKEN || token !== env.ADMIN_API_TOKEN) {
        return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
      }
      ctx.waitUntil(generateDailyPosts(env));
      return jsonResponse({ ok: true });
    }

    // API: POST /api/contact — general inquiry / "request a callback" forms
    if (url.pathname === "/api/contact" && request.method === "POST") {
      if (!(await checkRateLimit(env, request, "contact", 5, 600))) {
        return jsonResponse({ ok: false, error: "Too many requests, please try again later" }, 429);
      }
      let body: Record<string, unknown>;
      try {
        body = (await request.json()) as Record<string, unknown>;
      } catch {
        return jsonResponse({ ok: false, error: "Invalid request body" }, 400);
      }

      const firstName = field(body, "firstName", 80);
      const lastName = field(body, "lastName", 80);
      const email = field(body, "email", 120);
      if (!firstName || !email || !isValidEmail(email)) {
        return jsonResponse({ ok: false, error: "Name and a valid email are required" }, 400);
      }

      const result = await sendNotificationEmail(env, {
        subject: `New website inquiry from ${firstName} ${lastName}`.trim(),
        replyTo: email,
        rows: [
          ["Name", `${firstName} ${lastName}`.trim()],
          ["Email", email],
          ["Phone", field(body, "phone", 32)],
          ["Company", field(body, "company") || field(body, "companyName")],
          ["Country", field(body, "country")],
          ["Inquiry Type", field(body, "service") || field(body, "inquiryType")],
          ["Message", field(body, "message", 2000) || field(body, "additionalInfo", 2000)],
        ],
      });

      if (!result.ok) {
        console.error("Failed to send contact email:", result.error);
        return jsonResponse({ ok: false, error: "Could not send your message right now" }, 502);
      }
      return jsonResponse({ ok: true });
    }

    // API: POST /api/apply — careers application form
    if (url.pathname === "/api/apply" && request.method === "POST") {
      if (!(await checkRateLimit(env, request, "apply", 5, 600))) {
        return jsonResponse({ ok: false, error: "Too many requests, please try again later" }, 429);
      }
      let body: Record<string, unknown>;
      try {
        body = (await request.json()) as Record<string, unknown>;
      } catch {
        return jsonResponse({ ok: false, error: "Invalid request body" }, 400);
      }

      const name = field(body, "name", 120);
      const email = field(body, "email", 120);
      if (!name || !email || !isValidEmail(email)) {
        return jsonResponse({ ok: false, error: "Name and a valid email are required" }, 400);
      }

      const jobTitle = field(body, "jobTitle", 160);
      const result = await sendNotificationEmail(env, {
        subject: `New application: ${jobTitle || "Unspecified role"} — ${name}`,
        replyTo: email,
        rows: [
          ["Job Title", jobTitle],
          ["Job Code", field(body, "jobCode", 40)],
          ["Name", name],
          ["Email", email],
          ["Phone", field(body, "phone", 32)],
          ["LinkedIn", field(body, "linkedin", 200)],
          ["Message", field(body, "message", 3000)],
        ],
      });

      if (!result.ok) {
        console.error("Failed to send application email:", result.error);
        return jsonResponse({ ok: false, error: "Could not submit your application right now" }, 502);
      }
      return jsonResponse({ ok: true });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env as unknown, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },

  // Cloudflare cron — runs daily at 09:00 UTC
  async scheduled(_event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(generateDailyPosts(env));
  },
};
