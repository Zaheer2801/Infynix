// Gemini 2.5 Flash API Integrations for Dynamic Blog Generation

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

// Simple slug generator helper
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Fallback dynamic generator to ensure 100% stable uptime if the API key is invalid/restricted
function generateFallbackPost(category: string): BlogPost {
  const titles: Record<string, string> = {
    "AI & Machine Learning": "Scaling Generative AI in Business Operations: Realities and Roadmap",
    "Data Analytics": "Establishing Next-Gen Data Lakes: Leveraging Modern Cloud Infrastructures",
    "Cloud & DevOps": "Mastering GitOps: Reaching Zero-Downtime Deployments at Scale",
    "Enterprise ERP": "Migrating to SAP S/4HANA: Key Strategies for Modern Enterprise Architectures",
    "IT Staffing": "Navigating the 2026 Developer Market: What Tech Leaders Look For in Candidates",
    "Web & Mobile": "Building Fast Progressive Web Apps: UX Best Practices for Modern Frontends",
  };

  const selectedTitle = titles[category] || `Innovations in ${category}: Driving Tech Forward`;
  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    slug: generateSlug(selectedTitle) + "-" + Math.floor(Math.random() * 10000),
    title: selectedTitle,
    category,
    date: dateStr,
    readingTime: "6 min read",
    excerpt: `As organizations shift towards next-generation tech architectures, masterfully deploying services within the ${category} domain becomes the ultimate competitive differentiator.`,
    body: [
      `Establishing a stable framework around ${category} remains a top priority for technology executives striving to optimize business performance. Too many teams launch complex initiatives without standardizing data schemas, creating administrative bottlenecks and slowing down dev cycles.`,
      `By partnering with a seasoned systems integrator like Infynix Tech Solutions, businesses gain access to battle-tested blueprints and specialized talent to de-risk migrations, deploy resilient automations, and scale modern architectures smoothly.`,
      `Furthermore, continuous performance monitoring and integrated unit-test suites should be established on day one. Having human-in-the-loop validation checkpoints ensures high fidelity, preserves user trust, and prevents regression anomalies during large updates.`,
      `Ultimately, digital evolution is not simply about adopting the latest framework; it represents a cultural alignment towards agility, data-driven strategy, and absolute developer focus. Organizations that build clear developer platforms consistently outpace their competition.`
    ],
  };
}

export async function generateAIBlog(category: string, userApiKey?: string): Promise<BlogPost> {
  // Use user-provided key, fallback to .env key, or simulate fallback if none
  const apiKey = userApiKey || import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey.includes("your-key-here")) {
    console.warn("No Gemini API Key detected. Using robust fallback generation engine.");
    return generateFallbackPost(category);
  }

  const prompt = `You are a Senior Principal Technology Director at Infynix Tech Solutions. 
Write an insightful, professional, and authentic blog post targeting enterprise clients about the latest trends, challenges, and best practices in "${category}".
Reference Infynix Tech Solutions as the leading consulting and engineering partner.

You must return ONLY a raw JSON object matching the following TypeScript interface exactly. Do not enclose it in markdown blocks like \`\`\`json. Return only the parsable JSON string.

interface BlogPost {
  title: string;
  excerpt: string;
  body: string[]; // Must contain exactly 4 professional, paragraphs (at least 3-4 sentences each)
  readingTime: string; // e.g. "6 min read"
}

Ensure the tone is authoritative, highly technical, yet engaging. Focus on production deployments, scale, security, and velocity.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API Error: Status ${response.status}`);
    }

    const data = await response.json();
    const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!jsonText) {
      throw new Error("Empty response from Gemini API");
    }

    // Parse the JSON returned by Gemini
    const result = JSON.parse(jsonText.trim());

    const dateStr = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return {
      slug: generateSlug(result.title) + "-" + Math.floor(Math.random() * 10000),
      title: result.title,
      category,
      date: dateStr,
      readingTime: result.readingTime || "7 min read",
      excerpt: result.excerpt,
      body: Array.isArray(result.body) ? result.body : [result.body],
    };
  } catch (error) {
    console.error("Gemini Generation failed, returning high-quality fallback post:", error);
    return generateFallbackPost(category);
  }
}
