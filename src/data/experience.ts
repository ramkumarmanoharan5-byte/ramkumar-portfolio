export interface Employment {
  id: string;
  company: string;
  role: string;
  location: string | null;
  start: string | null;
  end: string | null;
  positioning: string;
  summary: string;
  focus: string[];
  highlights: { value: string; label: string }[];
  details: { label: string; items: string[] }[];
  caseStudies: { slug: string; label: string }[];
}

export const employment: Employment[] = [
  {
    id: "vvt-solutions",
    company: "VVT Solutions Pvt. Ltd.",
    role: "Digital Marketing Specialist",
    location: null,
    start: "Feb 2025",
    end: null,
    positioning: "Product marketing, social media, Meta Ads and SEO for education brands",
    summary:
      "I look after content and marketing for several brands and products here. That means monthly content calendars, Instagram, Facebook, LinkedIn and YouTube, Meta Ads for education, real estate and service businesses, and SEO for the TopAll and VVT Coaching websites. I also support the marketing of TopAll, our AI-powered NEET and JEE learning platform.",
    focus: [
      "Social media strategy across Instagram, Facebook, LinkedIn and YouTube",
      "Monthly content calendars",
      "Meta lead generation, engagement and traffic campaigns",
      "TopAll product messaging and website content",
      "NotebookLM content workflows for videos, slide decks, infographics and Shorts",
      "On-page, off-page and technical SEO, plus AEO and GEO content",
    ],
    highlights: [
      { value: "4K to 8K", label: "Instagram followers, grown organically" },
      { value: "300+", label: "SEO-focused blogs published and optimised" },
      { value: "30K+", label: "organic blog views I contributed to" },
      { value: "Up to ₹5L", label: "Meta Ads budgets managed" },
    ],
    details: [
      { label: "Key projects", items: ["TopAll", "VVT Coaching", "Anna Adarsh Women's College", "Asta Properties"] },
    ],
    caseStudies: [
      { slug: "topall", label: "TopAll" },
      { slug: "vvt-coaching", label: "VVT Coaching" },
      { slug: "anna-adarsh-womens-college", label: "Anna Adarsh Women's College" },
    ],
  },
  {
    id: "colan-infotech",
    company: "Colan Infotech Pvt. Ltd.",
    role: "Digital Marketing Executive",
    location: "Madurai, Tamil Nadu",
    start: "Feb 2024",
    end: "Jan 2025",
    positioning: "B2B social media and organic LinkedIn lead generation",
    summary:
      "I managed LinkedIn, Facebook and Instagram for the company and its client brands, including three LinkedIn company pages. Most of the work was B2B content for a technology services and contract staffing business, built to bring in leads without paid ads.",
    focus: [
      "LinkedIn content strategy across three company pages",
      "Social media for the company and client brands",
      "Organic B2B lead generation",
      "Technology, AI and industry content, polls, quizzes and memes",
      "Working with internal teams on branding and awareness",
    ],
    highlights: [
      { value: "300+", label: "organic B2B leads from LinkedIn content" },
      { value: "45K to 60K", label: "LinkedIn followers in six months" },
    ],
    details: [
      { label: "Branch pages", items: ["Madurai", "Pernambut", "Bangalore"] },
    ],
    caseStudies: [{ slug: "colan-infotech", label: "Colan Infotech" }],
  },
];
