import artistModeChannel from "@/assets/the-artist-mode-channel.jpg.asset.json";
import style365Website from "@/assets/style365-website.jpg.asset.json";
import type { Metric } from "./content";

/** A metric whose value may still be missing (shown as an editable placeholder). */
export interface OpenMetric {
  label: string;
  value: string | null;
  note?: string;
}

export interface Chapter {
  label: string;
  title: string;
  intro?: string;
  items: { title: string; body: string; bullets?: string[] }[];
  metrics?: OpenMetric[];
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  client: string;
  kind: "Personal project" | "Client project" | "Employer work" | "Project group";
  industry: string;
  headline: string;
  summary: string;
  heroStat?: { value: string; label: string; note?: string };
  dashboard?: Metric[];
  dashboardNote?: string;
  overview: { objective: string; audience: string; strategy: string };
  formats: string[];
  responsibilities: string[];
  chapters: Chapter[];
  subProjects?: { name: string; website?: string; points: string[] }[];
  learnings: string[];
  images: { src: string; alt: string; caption: string }[];
  links: { label: string; url: string | null }[];
  /** Brand name used to pull individual pieces from the content list. */
  contentBrand?: string;
  /** Number of empty creative slots to show when creatives are still missing. */
  creativeSlots?: number;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-artist-mode",
    number: "01",
    title: "The Artist Mode",
    client: "The Artist Mode — my own faceless YouTube brand",
    kind: "Personal project",
    industry: "Men's fashion, grooming, lifestyle & self-improvement",
    headline: "Building a faceless brand. Reaching millions.",
    summary:
      "A faceless YouTube channel I built from scratch around men's style, grooming and self-improvement. It's where I learned — by doing — what makes short-form content get watched, rewatched and shared.",
    heroStat: { value: "19M+", label: "views on one YouTube Short", note: "A single Short — not total channel views." },
    overview: {
      objective: "Build a recognisable men's lifestyle brand on YouTube without ever showing a face — letting the ideas, packaging and editing carry the channel.",
      audience: "Young men who want to look and feel better: better haircuts, better photos, better habits — practical advice that's quick to apply.",
      strategy: "Short, useful, highly visual Shorts on recurring content pillars, with clear hooks and titles that name the exact problem the viewer has.",
    },
    formats: ["YouTube Shorts", "Long-form videos", "Numbered series", "Regional-language (Tamil) content"],
    responsibilities: ["Brand positioning", "Content pillars", "Topic research", "Scripts & hooks", "Faceless video editing", "Titles & packaging", "Publishing", "Performance review"],
    chapters: [
      {
        label: "A",
        title: "Brand positioning",
        items: [
          {
            title: "A style coach without a face",
            body: "The Artist Mode is positioned as a straightforward guide for men who want to improve their style, grooming and confidence. Being faceless keeps the focus on the advice, not on a personality — the viewer is the hero of every video.",
          },
        ],
      },
      {
        label: "B",
        title: "Audience understanding",
        items: [
          {
            title: "Who the channel serves",
            body: "Young men who care about how they look and come across, but don't want complicated routines. They search for specific, practical answers: which haircut suits me, how to pose for photos, how to fix a grooming problem.",
          },
        ],
      },
      {
        label: "C",
        title: "Content pillars",
        items: [
          { title: "Men's fashion", body: "Outfits, aesthetics and photo styling." },
          { title: "Grooming", body: "Haircuts, hair care, skin and beard." },
          { title: "Lifestyle", body: "Habits and routines that change how you look and feel." },
          { title: "Self-improvement", body: "Glow-up tips and confidence." },
          { title: "Dating & personal development", body: "Presenting yourself well and building confidence." },
        ],
      },
      {
        label: "D",
        title: "Content execution",
        items: [
          { title: "Faceless production", body: "Videos built from visuals, illustrations, text and voice — the format scales without the creator appearing on camera." },
          { title: "Short-form storytelling", body: "One idea per Short, with a clear promise and a payoff inside the first few seconds." },
          { title: "Hook development", body: "Opening on the viewer's own question (“which one suits you best?”) so they lean in." },
          { title: "Audience-focused concepts", body: "Topics chosen from real, recurring questions rather than what's easy to make." },
          { title: "Visual presentation & pacing", body: "Clean visuals and tight pacing so every second earns the next." },
          { title: "Packaging", body: "Titles that name the problem and the audience (“…for guys”), backed by relevant hashtags." },
          { title: "Creative experimentation", body: "Testing formats — numbered series, part 2s, trend round-ups and Tamil-language Shorts — to see what the audience responds to." },
        ],
      },
      {
        label: "E",
        title: "Performance milestone",
        intro: "The headline result is a single Short — “Finding Your Ideal Fade Haircut!” — passing 19 million views. Two more Shorts on the channel passed one million views each.",
        items: [],
        metrics: [
          { label: "Viewed vs. swiped away", value: null },
          { label: "Average view duration", value: null },
          { label: "Subscribers gained", value: null },
          { label: "Likes", value: null },
          { label: "Comments", value: null },
          { label: "Shares", value: null },
        ],
      },
      {
        label: "F",
        title: "What it taught me",
        items: [
          { title: "Audience interests", body: "The topics that travel furthest are personal, visual decisions people are already struggling with." },
          { title: "Short-form storytelling", body: "One clear idea beats many tips. If the payoff isn't obvious, people swipe." },
          { title: "Content hooks", body: "A question the viewer wants answered is the strongest opening." },
          { title: "Creative experimentation", body: "Small format tests — series, sequels, language — reveal what an audience wants faster than guessing." },
          { title: "Video engagement & performance", body: "When something works, build a format around it and repeat it with a new angle." },
        ],
      },
    ],
    learnings: [
      "Packaging (title + first frame) decides whether great content is ever seen.",
      "Formats that succeed can be reused with a new context — photo ideas → gym photo ideas.",
      "Faceless content scales because the idea, not the person, is the product.",
    ],
    images: [
      { src: artistModeChannel.url, alt: "The Artist Mode YouTube channel homepage", caption: "Channel homepage — public snapshot, Nov 2026" },
    ],
    links: [
      { label: "YouTube channel", url: "https://www.youtube.com/@TheArtistMode./featured" },
      { label: "The 19M+ view Short", url: "https://www.youtube.com/shorts/3tl3vXdl5_Y" },
    ],
    contentBrand: "The Artist Mode",
  },
  {
    slug: "anna-adarsh-womens-college",
    number: "02",
    title: "Anna Adarsh Women's College",
    client: "Anna Adarsh Women's College",
    kind: "Client project",
    industry: "Higher education",
    headline: "Admission lead generation through Meta Ads.",
    summary:
      "An admission-season Meta Ads campaign built to generate enquiries from prospective students. One of my most measurable projects — managed in Meta Ads Manager with a focus on lead volume and cost per lead.",
    dashboard: [
      { label: "Reported ad spend", value: "₹7.04L" },
      { label: "Leads generated", value: "2,461" },
      { label: "Average cost per lead", value: "₹286.08" },
      { label: "Reach", value: "24.8L" },
      { label: "Impressions", value: "1.04Cr" },
    ],
    dashboardNote: "Reported campaign totals. The initial budget discussed was ₹7.5 lakh for two months, with an extension discussed later; ₹7.04 lakh is the actual reported spend.",
    overview: {
      objective: "Generate admission enquiries (leads) from prospective students during the admission period.",
      audience: "Prospective students and their families considering the college. Detailed audience demographics are not shown here.",
      strategy: "Lead-focused Meta campaigns with a variety of creatives, budget controls and continuous monitoring of cost per lead.",
    },
    formats: ["Meta lead ads", "Facebook", "Instagram"],
    responsibilities: ["Meta Ads Manager", "Campaign optimisation", "Audience targeting", "Creative testing", "A/B testing", "Campaign Budget Optimisation (CBO)", "Lifetime budgets", "Creative diversity", "Performance monitoring"],
    chapters: [
      {
        label: "Approach",
        title: "How the campaign was run",
        items: [
          { title: "01 — Campaign objective", body: "Lead generation for admissions: every decision was judged by the number and cost of enquiries." },
          { title: "02 — Audience targeting", body: "Targeting set up around prospective students for the admission period." },
          { title: "03 — Admission strategy", body: "Campaigns timed to the admission window so spend was concentrated when interest is highest." },
          { title: "04 — Creative diversity", body: "Multiple creatives running together so the delivery system — and the data — could find what worked." },
          { title: "05 — Campaign structure", body: "Structured using Campaign Budget Optimisation (CBO) so budget could flow to better-performing ad sets." },
          { title: "06 — Budget planning", body: "Lifetime budgets planned against the campaign period, starting from the ₹7.5 lakh / two-month budget discussed." },
          { title: "07 — Performance tracking", body: "Leads, cost per lead, reach and impressions monitored throughout." },
          { title: "08 — Optimisation", body: "Creative testing and A/B testing used to keep improving results." },
          { title: "09 — Results", body: "2,461 leads at an average cost of ₹286.08 per lead, from ₹7.04 lakh reported spend." },
          { title: "10 — Key learnings", body: "Creative variety and budget flexibility matter as much as targeting in lead campaigns." },
        ],
      },
    ],
    learnings: [
      "Creative variety gives the algorithm room to find better-performing combinations.",
      "Budget structure (CBO, lifetime budgets) shapes results as much as targeting.",
      "Cost per lead is the number to watch daily in an admission campaign.",
    ],
    images: [],
    links: [{ label: "Campaign creatives", url: null }],
    contentBrand: "Anna Adarsh Women's College",
    creativeSlots: 3,
  },
  {
    slug: "style-365",
    number: "03",
    title: "Style 365 Studio Salon",
    client: "Style 365 Studio Salon",
    kind: "Client project",
    industry: "Salon & beauty services",
    headline: "Local search visibility meets paid social.",
    summary:
      "Work for a unisex salon brand across two sides of local discovery: being found when people search, and being seen when they scroll.",
    overview: {
      objective: "Help people nearby discover the salon's services and enquire or book.",
      audience: "Local customers looking for hair, skin and beauty services.",
      strategy: "Search-friendly website content for organic discovery, supported by Meta Ads focused on enquiries.",
    },
    formats: ["Website content", "Meta Ads", "Instagram"],
    responsibilities: ["SEO", "Website content", "Meta Ads", "Creative direction"],
    chapters: [
      {
        label: "A",
        title: "SEO & organic discovery",
        intro: "Making the salon easier to find for people searching locally for the services it offers.",
        items: [
          { title: "Website content structure", body: "Organising service information so visitors and search engines can understand it quickly." },
          { title: "Service presentation", body: "Presenting salon services clearly on the website." },
          { title: "Local search intent", body: "Content shaped around how people search for salons near them." },
          { title: "Location & keywords", body: "Location relevance and service-related keywords built into the content." },
          { title: "Website optimisation", body: "Improving the website for organic discoverability." },
        ],
        metrics: [
          { label: "Keyword rankings", value: null },
          { label: "Organic traffic", value: null },
          { label: "Search Console clicks", value: null },
        ],
      },
      {
        label: "B",
        title: "Meta Ads & paid social",
        intro: "Reaching local audiences on Facebook and Instagram with service-led ads.",
        items: [
          { title: "Local targeting", body: "Reaching people close enough to visit." },
          { title: "Service promotion", body: "Ads built around specific salon services." },
          { title: "Creative direction", body: "Ad creative focused on the result of a service." },
          { title: "Enquiry-focused objectives", body: "Campaigns set up to generate enquiries and leads." },
          { title: "Creative testing & optimisation", body: "Testing creatives and refining campaigns based on results." },
        ],
        metrics: [
          { label: "Ad spend", value: null },
          { label: "Leads / enquiries", value: null },
          { label: "Cost per lead", value: null },
          { label: "Conversions", value: null },
        ],
      },
    ],
    learnings: [
      "Local businesses need both search visibility and social presence — they reach people at different moments.",
      "Service results are the strongest creative for salons.",
    ],
    images: [{ src: style365Website.url, alt: "Style 365 Studio Salon website homepage", caption: "style365.one — homepage" }],
    links: [
      { label: "Website", url: "https://style365.one/" },
      { label: "Instagram @style365official", url: "https://www.instagram.com/style365official/" },
    ],
    contentBrand: "Style 365 Studio Salon",
  },
  {
    slug: "colan-infotech",
    number: "04",
    title: "Colan Infotech",
    client: "Colan Infotech",
    kind: "Employer work",
    industry: "Technology services & contract staffing",
    headline: "B2B social media that earns leads organically.",
    summary:
      "As Digital Marketing Executive, I managed social media for multiple branch pages, using LinkedIn content to build visibility for contract staffing services and generate organic B2B leads.",
    overview: {
      objective: "Build visibility and generate organic B2B leads for contract staffing services.",
      audience: "Tech professionals, hiring managers and companies looking for contract developers.",
      strategy: "A varied LinkedIn content calendar mixing job posts, industry content, interactive posts and humour across three branch pages.",
    },
    formats: ["LinkedIn posts", "Job posts", "Polls & quizzes", "Memes", "Educational posts"],
    responsibilities: ["Social media management", "LinkedIn content strategy", "Content calendars", "Multi-branch page management", "Organic lead generation"],
    chapters: [
      {
        label: "Approach",
        title: "A content mix for a B2B feed",
        items: [
          { title: "Job posts", body: "Contract staffing roles across PHP, .NET, Java, MERN, Node.js and Data Engineering." },
          { title: "Industry & AI content", body: "Educational posts on technology and AI to build credibility." },
          { title: "Polls & quizzes", body: "Interactive formats that invite easy participation." },
          { title: "Memes", body: "Relatable developer humour to make a B2B page feel human." },
          { title: "Multi-branch management", body: "Content planned and managed for the Madurai, Pernambut and Bangalore pages." },
        ],
        metrics: [
          { label: "Organic leads", value: null },
          { label: "Engagement", value: null },
          { label: "Follower change", value: null },
        ],
      },
    ],
    learnings: ["B2B audiences still respond to personality — variety keeps a professional feed alive.", "A content calendar is what makes multi-page management consistent."],
    images: [],
    links: [],
    contentBrand: "Colan Infotech",
  },
  {
    slug: "education-marketing",
    number: "05",
    title: "Education Marketing",
    client: "Education brands",
    kind: "Project group",
    industry: "Schools, colleges & exam preparation",
    headline: "Content and campaigns for students and parents.",
    summary: "Education-sector work across coaching brands, colleges and schools — from content calendars and SEO blogs to Meta campaign exposure.",
    overview: {
      objective: "Help education brands reach and inform students and parents.",
      audience: "Students (including NEET and JEE aspirants) and their families.",
      strategy: "Educational, useful content on social and search, supported by campaigns during admission periods.",
    },
    formats: ["Instagram", "YouTube", "Facebook", "Telegram", "Blogs", "Meta Ads"],
    responsibilities: ["Social media planning", "Content calendars", "SEO & blog content", "Campaign exposure"],
    chapters: [],
    subProjects: [
      { name: "VVT Coaching", points: ["Education-focused content", "Social media planning", "Content calendars", "Educational communication"] },
      { name: "NEET Guide", points: ["Educational content marketing", "AI-related educational content initiatives", "Platform content planning", "Blog and SEO content"] },
      { name: "NEET / JEE content", points: ["NEET", "JEE", "Academic topics", "Chapter-based content planning"] },
      { name: "Anna Adarsh Group of Schools", points: ["Education marketing", "Campaign exposure", "Communication across five schools in the group"] },
      { name: "Dr. Vikram Agarwal Adarsh College", points: ["Education-sector marketing", "Meta campaign experience"] },
    ],
    learnings: ["Education audiences reward genuinely useful content — clarity builds trust."],
    images: [],
    links: [],
    creativeSlots: 3,
  },
  {
    slug: "real-estate-marketing",
    number: "06",
    title: "Real Estate Marketing",
    client: "Real estate brands",
    kind: "Project group",
    industry: "Real estate",
    headline: "Lead generation for property brands.",
    summary: "Meta Ads and digital marketing exposure for property developers, focused on generating enquiries from potential buyers.",
    overview: {
      objective: "Generate property enquiries from potential buyers.",
      audience: "People researching homes and property investments.",
      strategy: "Meta campaigns and website-related marketing focused on lead generation.",
    },
    formats: ["Meta Ads", "Website"],
    responsibilities: ["Meta campaign experience", "Lead-generation exposure", "Website-related marketing"],
    chapters: [],
    subProjects: [
      { name: "Asta Properties", points: ["Real estate marketing", "Meta Ads campaign experience", "Property lead-generation exposure"] },
      { name: "Ambrig Homes", website: "https://ambrighomes.com/", points: ["Real estate digital marketing", "Lead-generation exposure", "Website-related marketing", "Meta campaign experience"] },
    ],
    learnings: ["Property leads need trust before they need offers."],
    images: [],
    links: [{ label: "Ambrig Homes website", url: "https://ambrighomes.com/" }],
    creativeSlots: 2,
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
