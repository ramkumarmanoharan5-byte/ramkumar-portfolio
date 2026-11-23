export interface ManagedLink {
  label: string;
  url: string;
  platform: "Website" | "LinkedIn" | "Facebook" | "Instagram";
  note?: string;
  isRegional?: boolean;
}

export interface BrandReference {
  name: string;
  slug: string;
  url?: string;
  description: string;
}

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
  responsibilities?: string[];
  highlights: { value: string; label: string }[];
  details: { label: string; items: string[] }[];
  caseStudies: { slug: string; label: string }[];
  socialPlatforms?: {
    title: string;
    description: string;
    links: ManagedLink[];
  };
  clientSocial?: {
    title: string;
    description: string;
    points: string[];
  };
  brandCategories?: {
    title: string;
    intro: string;
    inHouse: BrandReference[];
    clients: BrandReference[];
  };
  seoAndContent?: {
    title: string;
    description: string;
    items: string[];
  };
}

export const employment: Employment[] = [
  {
    id: "vvt-solutions",
    company: "VVT Solutions Pvt. Ltd.",
    role: "Digital Marketing Specialist",
    location: "Chennai, Tamil Nadu",
    start: "Feb 2025",
    end: null,
    positioning: "In-house product marketing, client brand campaigns, Meta & Google campaign support, SEO, and CRM lead workflows",
    summary:
      "I handle marketing activities across the company's in-house products and external client brands. VVT Solutions Pvt. Ltd. is my employer, while VVT Coaching, TopAll, and our other partner campaigns represent distinct products and brands I manage. My day-to-day responsibilities span social media management, content creation, digital marketing, SEO, blog publishing, advertising support, CRM setup and handling, and lead-generation activities.",
    focus: [
      "Social media management and monthly content planning",
      "TopAll in-house product messaging, AI video production, and brochure creation",
      "Google Search and app installation campaign support",
      "Meta Ads lead generation and admission campaigns",
      "VVT Coaching Instagram marketing, admission campaigns, and CRM setup",
      "On-page, off-page, technical SEO, and educational blog publishing",
      "CRM setup, lead management workflows, and enquiry handling",
    ],
    highlights: [
      { value: "4K to 8K", label: "Instagram followers, grown organically" },
      { value: "300+", label: "SEO-focused blogs published and optimised" },
      { value: "30K+", label: "organic blog views contributed to" },
      { value: "₹286", label: "cost per lead across 2,461 admission leads" },
    ],
    brandCategories: {
      title: "Brands and Products I Worked On",
      intro:
        "Marketing across both in-house learning products and client partner accounts. Each project connects to its own detailed case study.",
      inHouse: [
        {
          name: "TopAll",
          slug: "topall",
          url: "https://topall.app/",
          description:
            "AI-powered NEET and JEE learning platform. My involvement spans social media and digital content strategy, AI-assisted video workflows with NotebookLM, product brochure creation, supporting free resource distribution (prep.topall.app), and assisting with Google Search and app installation campaigns.",
        },
      ],
      clients: [
        {
          name: "VVT Coaching",
          slug: "vvt-coaching",
          description:
            "NEET coaching institute in Chennai. Managed Instagram account, Repeaters admission campaign, VVTSAT campaign, crash course campaign, and hands-on CRM setup and lead-management workflows.",
        },
        {
          name: "Asta Properties",
          slug: "asta-properties",
          description:
            "Real estate brand. Social media handling, location-focused aerial video storytelling, and paid advertising campaigns.",
        },
        {
          name: "Anna Adarsh Women's College",
          slug: "anna-adarsh-womens-college",
          description:
            "Higher education institution. Admission lead generation through Meta Ads, Instagram marketing, and CPL optimisation to ₹286.",
        },
        {
          name: "Anna Adarsh Group of Schools",
          slug: "anna-adarsh-group-of-schools",
          description:
            "Five schools under the group. Parent-focused admission campaign communication and Meta ad creative direction.",
        },
        {
          name: "Style 365 Studio Salon",
          slug: "style-365",
          description:
            "Unisex salon in Bangalore. Local SEO, keyword relevance, website content, and enquiry-focused paid social advertising.",
        },
        {
          name: "Sofa 42 Furniture, Bengaluru",
          slug: "sofa-42",
          description:
            "Furniture brand. Product-first content strategy, interior lifestyle presentation, paid advertising campaigns, and local search discovery.",
        },
      ],
    },
    details: [
      {
        label: "Core areas",
        items: [
          "In-House Product Marketing",
          "Client Campaign Management",
          "Meta Ads",
          "Google Ads Campaign Support",
          "SEO & Blog Publishing",
          "CRM Setup & Lead Handling",
        ],
      },
    ],
    caseStudies: [
      { slug: "topall", label: "TopAll Case Study" },
      { slug: "vvt-coaching", label: "VVT Coaching Case Study" },
      { slug: "anna-adarsh-womens-college", label: "Anna Adarsh Women's College" },
      { slug: "style-365", label: "Style 365 Studio Salon" },
      { slug: "sofa-42", label: "Sofa 42 Furniture" },
    ],
  },
  {
    id: "colan-infotech",
    company: "Colan Infotech Pvt. Ltd.",
    role: "Digital Marketing Executive",
    location: "Madurai, Tamil Nadu",
    start: "Feb 2024",
    end: "Jan 2025",
    positioning: "B2B social media management, organic LinkedIn lead generation, SEO, and client digital marketing",
    summary:
      "I managed social media channels and digital marketing activities for Colan Infotech and its client brands. My role combined SEO, social media management, content marketing, and B2B digital marketing, handling corporate communication, organic LinkedIn lead generation, and external client pages.",
    focus: [
      "Social media management across LinkedIn, Facebook, and Instagram",
      "Managing social media content for Colan Infotech's corporate and regional pages",
      "Working on client social media pages and content ideation",
      "SEO activities, website content optimisation, and performance tracking",
      "Organic LinkedIn lead generation and content planning",
      "Creating informative posts, polls, quizzes, memes, job-related, and technology content",
    ],
    responsibilities: [
      "Social media management",
      "Facebook page management",
      "LinkedIn page management",
      "Instagram page management",
      "Managing social media content for Colan Infotech's pages",
      "Working on client social media pages",
      "SEO activities",
      "Content creation",
      "Social media marketing",
      "Organic LinkedIn lead generation",
      "Content planning and publishing",
      "Creating informative posts, polls, quizzes, memes, job-related content, and technology-related content",
    ],
    highlights: [
      { value: "300+", label: "organic B2B leads from LinkedIn content" },
      { value: "45K to 60K", label: "LinkedIn followers in six months" },
    ],
    socialPlatforms: {
      title: "Social Media Platforms Managed",
      description:
        "Official public social media channels and regional affiliated showcase pages managed for Colan Infotech.",
      links: [
        {
          label: "Official Website",
          url: "https://www.colaninfotech.com/",
          platform: "Website",
        },
        {
          label: "Main LinkedIn Page",
          url: "https://www.linkedin.com/company/colan-infotech-private-limited/home/",
          platform: "LinkedIn",
        },
        {
          label: "Facebook Page",
          url: "https://www.facebook.com/ColanInfotechPvtLtd",
          platform: "Facebook",
        },
        {
          label: "Instagram Page",
          url: "https://www.instagram.com/colaninfotechpvtltd/",
          platform: "Instagram",
        },
        {
          label: "Madurai Regional Showcase",
          url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-madurai/",
          platform: "LinkedIn",
          note: "Regional affiliated page",
          isRegional: true,
        },
        {
          label: "Pernambut Regional Showcase",
          url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-pernambut-vellore/",
          platform: "LinkedIn",
          note: "Regional affiliated page",
          isRegional: true,
        },
        {
          label: "Bangalore Regional Showcase",
          url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-bangalore/",
          platform: "LinkedIn",
          note: "Regional affiliated page",
          isRegional: true,
        },
      ],
    },
    clientSocial: {
      title: "Client Social Media Management",
      description:
        "In addition to Colan Infotech's corporate brand, I handled social media marketing activities for client accounts. My work included managing client social media content, creating engaging posts, developing content ideas, and supporting their digital marketing campaigns, kept strictly separate from Colan Infotech's corporate channels.",
      points: [
        "Managing client social media content calendars and scheduling",
        "Developing tailored post formats and creative briefs for clients",
        "Supporting digital marketing, audience interaction, and brand awareness",
        "Maintaining distinct, professional brand voices for client businesses",
      ],
    },
    seoAndContent: {
      title: "SEO and Content",
      description:
        "A balanced combination of search engine optimisation and B2B content marketing to build consistent organic visibility and generate enquiries without paid ads.",
      items: [
        "Search Engine Optimization (SEO)",
        "Website content optimisation",
        "Social media content creation",
        "Content research and topic discovery",
        "Content publishing and scheduling",
        "Organic marketing",
        "Social media performance monitoring",
      ],
    },
    details: [
      {
        label: "Content types created",
        items: [
          "Technology & AI Insights",
          "Interactive Polls & Quizzes",
          "Developer Memes",
          "Job-Related & Hiring Posts",
          "Industry Trends",
        ],
      },
    ],
    caseStudies: [{ slug: "colan-infotech", label: "Colan Infotech Case Study" }],
  },
];
