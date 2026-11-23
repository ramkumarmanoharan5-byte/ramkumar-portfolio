export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Social Media Marketing",
    items: [
      "Instagram Management",
      "Facebook Management",
      "LinkedIn Management",
      "Social Media Strategy",
      "Content Creation",
      "Content Planning",
      "Content Calendars",
      "Platform-Specific Content",
      "Audience Engagement",
      "Brand Communication",
    ],
  },
  {
    title: "Performance Marketing",
    items: [
      "Meta Ads",
      "Google Search Campaigns",
      "App Installation Campaign Support",
      "Lead Generation",
      "Admission Campaigns",
      "Audience Targeting",
      "Creative Testing",
      "Campaign Optimisation",
      "Conversion Tracking",
    ],
  },
  {
    title: "SEO",
    items: [
      "Keyword Research",
      "Website SEO",
      "Blog Publishing",
      "Search Visibility",
      "Content Optimisation",
      "Local SEO",
    ],
  },
  {
    title: "CRM & Conversion",
    items: [
      "CRM Setup",
      "CRM Handling",
      "Lead Management",
      "Enquiry Management",
      "Lead Follow-up Processes",
      "Conversion Funnel Understanding",
    ],
  },
  {
    title: "Content & AI",
    items: [
      "Prompt Engineering",
      "NotebookLM",
      "AI-Assisted Educational Video Production",
      "Short-Form Video Strategy",
      "Video Editing",
      "Content Research",
      "Brochure Creation",
      "Educational Content Development",
    ],
  },
];

export const tools: { group: string; items: string[] }[] = [
  { group: "AI & Video", items: ["NotebookLM", "Claude", "ChatGPT", "Perplexity", "Gemini", "CapCut"] },
  { group: "Advertising", items: ["Meta Ads Manager", "Meta Business Suite", "Google Ads"] },
  { group: "Analytics & Tracking", items: ["GA4", "Google Search Console", "Google Tag Manager"] },
  { group: "SEO", items: ["Google Keyword Planner", "Google Trends", "Semrush", "Ahrefs", "WordPress"] },
  { group: "CRM & Workflows", items: ["CRM Setup", "Lead Management", "Enquiry Tracking"] },
  { group: "Design & Collateral", items: ["Canva", "Brochure Layout"] },
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
