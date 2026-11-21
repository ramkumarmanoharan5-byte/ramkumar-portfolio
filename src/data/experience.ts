export interface Employment {
  id: string;
  company: string;
  role: string;
  location: string | null;
  /** Leave null until confirmed — shown as "Dates to be added". */
  start: string | null;
  end: string | null;
  positioning: string;
  summary: string;
  focus: string[];
  details: { label: string; items: string[] }[];
  caseStudy?: string;
}

export const employment: Employment[] = [
  {
    id: "colan-infotech",
    company: "Colan Infotech",
    role: "Digital Marketing Executive",
    location: "Madurai, Tamil Nadu",
    start: null,
    end: null,
    positioning: "B2B social media, content marketing & organic lead generation",
    summary:
      "Managed social media for a technology services company across several branch pages, using LinkedIn as the main channel to build visibility for contract staffing services and generate organic B2B leads.",
    focus: [
      "Social media management",
      "LinkedIn content strategy",
      "Organic B2B lead generation",
      "Contract staffing marketing",
      "Multi-branch content management",
      "Content calendars",
    ],
    details: [
      {
        label: "Content mix",
        items: [
          "Job posts",
          "Industry-related posts",
          "Polls and quizzes",
          "Memes",
          "Educational content",
          "AI and technology content",
        ],
      },
      { label: "Branch pages", items: ["Madurai", "Pernambut", "Bangalore"] },
      {
        label: "Contract staffing exposure",
        items: ["PHP", ".NET", "Java", "MERN", "Node.js", "Data Engineer"],
      },
    ],
    caseStudy: "colan-infotech",
  },
  {
    id: "vvt-solutions",
    company: "VVT Solutions Pvt. Ltd.",
    role: "Digital Marketing Specialist",
    location: null,
    start: null,
    end: null,
    positioning: "Education brand marketing, content planning & SEO",
    summary:
      "Worked on marketing for education brands — planning social content, building content calendars and writing search-friendly blog content for students preparing for competitive exams.",
    focus: [
      "Educational brand marketing",
      "Social media strategy",
      "Content calendars",
      "SEO content",
      "Blog optimisation",
      "Educational content initiatives",
    ],
    details: [
      { label: "Brands", items: ["VVT Coaching", "NEET Guide"] },
      { label: "Platforms planned for", items: ["Instagram", "YouTube", "Facebook", "Telegram"] },
      { label: "Subject areas", items: ["NEET", "JEE", "Chapter-based academic topics"] },
    ],
    caseStudy: "education-marketing",
  },
];
