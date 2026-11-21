export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Social Media",
    items: ["Social media strategy", "Content planning and calendars", "Platform-specific content", "Short-form video", "Community growth", "Brand voice", "Trend-based content"],
  },
  {
    title: "Performance Marketing",
    items: ["Meta Ads", "Google Ads", "Lead generation", "Audience targeting", "Campaign optimisation", "A/B and creative testing", "Budget planning (CBO, lifetime budgets)"],
  },
  {
    title: "SEO & Content",
    items: ["Keyword research and search intent", "On-page, off-page and technical SEO", "AEO and GEO content", "Blog writing", "Copywriting", "Website content"],
  },
  {
    title: "Analytics",
    items: ["Google Analytics and GA4", "Google Search Console", "Google Tag Manager", "Campaign reporting", "Funnel and conversion tracking"],
  },
  {
    title: "AI Marketing",
    items: ["Prompt engineering", "NotebookLM video production", "AI-assisted content creation", "Marketing research", "Workflow automation"],
  },
];

export const tools: { group: string; items: string[] }[] = [
  { group: "AI", items: ["NotebookLM", "Claude", "ChatGPT", "Perplexity", "Gemini", "Grok", "Midjourney"] },
  { group: "Advertising", items: ["Meta Ads Manager", "Meta Business Suite", "Google Ads"] },
  { group: "Analytics", items: ["GA4", "Google Search Console", "Google Tag Manager"] },
  { group: "SEO", items: ["Google Keyword Planner", "Google Trends", "Semrush", "Ahrefs", "WordPress"] },
  { group: "Design", items: ["Canva", "CapCut"] },
];

export const education: { title: string; institution: string | null; status: string; year: string }[] = [
  { title: "Bachelor of Business Administration (BBA)", institution: "Alagappa University, distance education (DDE)", status: "Currently pursuing", year: "2024 to 2027 (expected)" },
  { title: "Diploma in Civil Engineering", institution: "Government Polytechnic College", status: "Completed", year: "2017 to 2020" },
];

export const certifications = [
  {
    title: "Google Digital Marketing & E-commerce Professional Certificate",
    issuer: "Google / Coursera",
    status: "Completed",
    topics: ["SEO", "SEM", "Google Ads", "Meta Ads", "Content Marketing", "Email Marketing", "Digital Marketing Strategy"],
  },
];
