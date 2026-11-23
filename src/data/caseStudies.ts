import artistModeChannel from "@/assets/the-artist-mode-channel.jpg.asset.json";
import artistStudio from "@/assets/the-artist-mode-studio-lifetime.jpg.asset.json";
import style365Website from "@/assets/style365-website.jpg.asset.json";
import topallPrep from "@/assets/topall-prep-portal.jpg.asset.json";
import topallApp from "@/assets/topall-app.jpg.asset.json";
import type { Metric } from "./content";

export interface Chapter {
  label: string;
  title: string;
  intro?: string;
  items: { title: string; body: string }[];
}

export interface JourneyStep {
  title: string;
  body: string;
  link?: { label: string; url: string };
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  client: string;
  kind: "Personal project" | "Client project" | "Employer work" | "Employer product";
  industry: string;
  headline: string;
  summary: string;
  heroStat?: { value: string; label: string; note?: string };
  /** The one figure shown on the case study list. */
  highlight?: { value: string; label: string };
  /** Real buttons to the brand's own pages. The first one is the primary CTA. */
  ctas?: { label: string; url: string }[];
  /** Verified results with their evidence. */
  results?: { title: string; intro?: string; metrics: Metric[]; note: string; image?: { src: string; alt: string; caption: string } };
  overview: { objective: string; audience: string; strategy: string };
  formats: string[];
  responsibilities: string[];
  images: { src: string; alt: string; caption: string }[];
  chapters: Chapter[];
  /** A step-by-step journey (funnel). Explains intent, never claims results. */
  journey?: { label: string; title: string; intro: string; steps: JourneyStep[]; note?: string };
  /** What gets measured. Shown without numbers when numbers aren't verified. */
  measurement?: { title: string; intro: string; items: string[]; note: string };
  /** Awareness → business outcomes, filled only with what's real for this project. */
  conversionLens?: { stage: "Awareness" | "Engagement" | "Consideration" | "Conversion" | "Business outcomes"; detail: string }[];
  budgetReference?: { label: string; value: string; note: string };
  /** Pulls individual pieces from the content list. Section is hidden when there are none. */
  creatives?: { brand: string; title: string; intro?: string; cta?: { label: string; url: string } };
  /** Shows the million-view Shorts gallery. */
  viralGallery?: { title: string; intro: string };
  pages?: { title: string; intro: string; items: { label: string; group: string; url: string }[] };
  learnings: string[];
  /** Hidden when empty. */
  links: { label: string; url: string }[];
}

export const caseStudies: CaseStudy[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    slug: "topall",
    number: "01",
    title: "TopAll",
    client: "TopAll, an AI-powered NEET and JEE learning platform",
    kind: "Employer product",
    industry: "EdTech, NEET and JEE preparation",
    headline: "Free practice resources that guide students to an upgraded AI learning product.",
    summary:
      "TopAll is the primary in-house product I work on at VVT Solutions. It features a free preparation portal loaded with NCERT chapter MCQs, notes and video explainers, alongside an upgraded mobile application with AI doubt clarification, custom tests and adaptive performance analytics. My role connects free educational content with the paid product journey through AI-assisted video production, product brochures, content SEO, and assisting with Google Search and app installation campaigns.",
    ctas: [
      { label: "Explore free resources", url: "https://prep.topall.app/" },
      { label: "See the TopAll app", url: "https://topall.app/" },
    ],
    overview: {
      objective: "Attract NEET and JEE aspirants to the free portal through high-value educational content, build habitual practice, and guide engaged students toward the upgraded TopAll product.",
      audience: "NEET and JEE aspirants in Class 11, Class 12, and repeat years seeking chapter-wise revision, practice MCQs, and quick conceptual clarity.",
      strategy: "Lead with genuinely useful chapter-level content on search, YouTube, and social, supported by NotebookLM AI workflows, informative brochures, and Google Ads campaign support.",
    },
    formats: [
      "Educational video lessons",
      "Chapter resource pages",
      "YouTube explainers and Shorts",
      "Product brochures & collateral",
      "Google Search & app install campaigns",
      "SEO, AEO and GEO content",
    ],
    responsibilities: [
      "Social media and digital content strategy",
      "Educational content planning",
      "AI-assisted content workflows",
      "Creating detailed prompts for educational content generation",
      "Creating brochures for the product",
      "Assisting with Google Search campaigns",
      "Assisting with app installation campaigns",
      "Content planning and publishing",
      "Supporting free resource distribution",
      "Working on the product's digital marketing activities",
    ],
    images: [
      { src: topallPrep.url, alt: "TopAll free NEET and JEE preparation portal homepage", caption: "prep.topall.app, the free preparation portal" },
      { src: topallApp.url, alt: "TopAll app homepage promoting AI-powered NEET and JEE preparation", caption: "topall.app, the upgraded product" },
    ],
    chapters: [
      {
        label: "A",
        title: "Understanding the product ecosystem",
        intro: "Effective EdTech marketing begins with understanding how the free portal connects to the upgraded app experience.",
        items: [
          { title: "The free portal (prep.topall.app)", body: "Chapter-wise NEET and JEE MCQs with detailed explanations, plus Physics, Chemistry, Biology, and Maths resources: study materials, mind maps, notes, and exam guides." },
          { title: "The upgraded app (topall.app)", body: "AI-assisted instant doubt clarification, custom tests, adaptive preparation tools, and deep subject-level performance analytics." },
          { title: "Connecting the value path", body: "Students rarely commit to paid digital learning without first experiencing the quality of explanations. Free practice serves as the authentic proof point." },
          { title: "Content as discovery", body: "Every NCERT video, article, and practice test creates an entry point that solves a student's immediate problem and introduces the next step." },
        ],
      },
      {
        label: "B",
        title: "AI workflows and NotebookLM video production",
        intro: "Developing educational video lessons at scale using strict source grounding and prompt engineering.",
        items: [
          { title: "Topic research & source structuring", body: "Feeding verified NCERT textbook chapters into NotebookLM as the sole source of truth to guarantee syllabus accuracy for competitive exams." },
          { title: "Prompt engineering", body: "Crafting structured multi-part prompts defining student level, pedagogical objectives, visual transitions, and conceptual flow for each sub-topic." },
          { title: "Multi-format content adaptation", body: "Adapting single core chapters like Magnetism and Matter into comprehensive video lessons, summary decks, infographics, and quick YouTube Shorts." },
          { title: "Review and pedagogical refinement", body: "Iterating on generated scripts and visual layouts to ensure complex scientific concepts remain clear, engaging, and exam-focused." },
        ],
      },
      {
        label: "C",
        title: "Google Ads campaign assistance & app acquisition",
        intro: "Supporting performance marketing campaigns to drive targeted student traffic and app installs.",
        items: [
          { title: "Google Search campaign support", body: "Assisting with keyword research, search intent mapping around high-intent NEET/JEE queries, and ad copy alignment with portal resources." },
          { title: "App installation campaign support", body: "Assisting with creative messaging, asset variations, and audience targeting for mobile app download campaigns." },
          { title: "Creative and messaging alignment", body: "Ensuring ad copies match the exact value proposition promised on landing pages, maximizing relevancy and student click-through rates." },
          { title: "Promoting free to paid entry points", body: "Highlighting free chapter test access in top-of-funnel ads while reserving premium AI diagnostic features for in-app discovery." },
        ],
      },
      {
        label: "D",
        title: "Product brochure and collateral creation",
        intro: "Designing tangible and digital marketing collaterals for students, coaching partners, and parents.",
        items: [
          { title: "Product brochure design", body: "Creating clear, comprehensive product brochures detailing TopAll's MCQ question bank, chapter-wise breakdown, and AI diagnostic features." },
          { title: "Feature communication", body: "Translating technical AI capabilities into straightforward student benefits: error identification, speed enhancement, and tailored study schedules." },
          { title: "Educational distribution", body: "Supplying digital collateral for institutional presentations, student seminars, and direct marketing touchpoints." },
        ],
      },
    ],
    journey: {
      label: "E",
      title: "The conversion funnel",
      intro: "This is the marketing strategy and customer journey designed for TopAll. It explains how content drives discovery through to product engagement.",
      steps: [
        { title: "Content discovery", body: "Students find TopAll through educational videos, YouTube search, Google Search campaigns, and social media posts." },
        { title: "Free resource access", body: "They land on the free portal to explore chapter-wise MCQs, study notes, and video lessons.", link: { label: "prep.topall.app", url: "https://prep.topall.app/" } },
        { title: "Lead generation & registration", body: "Students who find value register to track practice scores, save questions, and participate in quizzes." },
        { title: "Engagement and nurturing", body: "Regular practice, weekly topic tests, and clear explanations build confidence and sustained usage." },
        { title: "Premium conversion", body: "Engaged students are introduced to the upgraded TopAll app with AI doubt clearance and performance analytics.", link: { label: "topall.app", url: "https://topall.app/" } },
      ],
    },
    measurement: {
      title: "How I measure the journey",
      intro: "Views alone do not confirm product success. These are the key metrics tracked across the funnel.",
      items: [
        "Website and portal visits",
        "Free resource page views and dwell time",
        "Landing page click-through rates",
        "Lead capture and account sign-ups",
        "Active practice engagement and MCQ attempts",
        "Product page and app store visits",
        "Free-to-paid conversion indicators",
        "Paid app subscriptions and retention",
      ],
      note: "Figures will be populated as verified public reporting data becomes available.",
    },
    conversionLens: [
      { stage: "Awareness", detail: "Video views, search impressions, and ad reach across Google, YouTube, and social media." },
      { stage: "Engagement", detail: "Watch time on educational videos and the volume of MCQs attempted on prep.topall.app." },
      { stage: "Consideration", detail: "Visits to the TopAll app product page and brochure downloads." },
      { stage: "Conversion", detail: "Account registrations, active portal users, and app installations." },
      { stage: "Business outcomes", detail: "Subscriber retention, referral adoption, and customer acquisition cost." },
    ],
    creatives: {
      brand: "TopAll",
      title: "Content & Creatives",
      intro: "Real examples of educational content that bring students into TopAll. Each card opens the original asset.",
      cta: { label: "Explore TopAll's free resources", url: "https://prep.topall.app/" },
    },
    learnings: [
      "A free product is the most persuasive ad for a paid one, provided the free tier offers genuine utility.",
      "Aligning content titles with exact student exam search queries drives steady long-tail organic discovery.",
      "One well-researched NCERT chapter can power an entire suite of lesson pages, long explainers, and quick Shorts.",
      "Performance advertising succeeds when ad messaging strictly mirrors the actual learning experience.",
    ],
    links: [
      { label: "Free preparation portal", url: "https://prep.topall.app/" },
      { label: "TopAll app website", url: "https://topall.app/" },
      { label: "TopAll on YouTube", url: "https://www.youtube.com/@topallapplication/videos" },
    ],
  },

  /* 02 ------------------------------------------------------------------ */
  {
    slug: "vvt-coaching",
    number: "02",
    title: "VVT Coaching",
    client: "VVT Coaching Centre, NEET coaching in Chennai",
    kind: "Employer work",
    industry: "NEET coaching",
    highlight: { value: "5,671", label: "views on Girls NEET Campus Reel" },
    headline: "Audience engagement, campaign marketing and CRM lead management for a premier coaching institute.",
    summary:
      "VVT Coaching Centre is a leading NEET coaching institute in Chennai, operated by my employer VVT Solutions Pvt. Ltd. I manage VVT Coaching's Instagram channel, social media campaigns, educational content, blog publishing, and on-page SEO. My role also encompasses critical admission marketing, including the Repeaters Course admission campaign, VVTSAT scholarship promotions, crash course marketing, and end-to-end CRM setup and lead-management workflows.",
    ctas: [
      { label: "VVT on Instagram", url: "https://www.instagram.com/vvtcoachingcentre/" },
      { label: "vvtcoaching.com", url: "https://www.vvtcoaching.com/" },
    ],
    overview: {
      objective: "Build strong visibility among NEET aspirants and parents, drive consistent social engagement, support targeted admission campaigns, and organize enquiry management through structured CRM workflows.",
      audience: "NEET aspirants, repeaters seeking dedicated residential training, and parents evaluating academic rigor, campus safety, and faculty quality.",
      strategy: "Blend daily practice challenges and student voices on Instagram with high-intent admission campaign promotions, educational blog content, and systematic CRM lead follow-up.",
    },
    formats: [
      "Instagram Reels & Posts",
      "MCQ quizzes & daily challenges",
      "Student campus testimonials",
      "Educational blog articles",
      "CRM lead workflows",
      "Admission campaign creatives",
    ],
    responsibilities: [
      "Instagram account management",
      "Social media strategy",
      "Content creation",
      "Content planning",
      "Educational content",
      "Blog posting",
      "SEO-related blog activities",
      "Admission campaign support",
      "CRM setup and handling",
      "Lead-management activities",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "Repeaters Course Admission Campaign",
        intro: "Promoting intensive full-time preparation for students taking another focused attempt at NEET UG.",
        items: [
          { title: "Parent and student considerations", body: "Repeaters require an environment free from distractions. Campaigns highlighted specialized faculty, daily doubt sessions, and residential campus safety at the Pallikaranai facility." },
          { title: "Student-to-student relatability", body: "Featuring real repeater students sharing their academic routines and score improvement journeys built immediate credibility." },
          { title: "Clear admission messaging", body: "Direct messaging addressing eligibility, batch dates, scholarships, and hostel accommodation, guiding prospective students directly to enquiry forms." },
        ],
      },
      {
        label: "B",
        title: "VVTSAT Promotional Campaign",
        intro: "Marketing the VVT Scholarship and Admission Test to discover and nurture talented medical aspirants.",
        items: [
          { title: "Campaign objective & audience", body: "Encouraging Class 11, Class 12, and repeater students across Tamil Nadu to test their aptitude and earn merit-based tuition fee concessions." },
          { title: "Promotional content direction", body: "Communicating test dates, syllabus guidelines, scholarship tiers, and registration steps through clean, high-clarity social graphics and Reels." },
          { title: "Registration and enquiry drive", body: "Directing traffic from Instagram and educational networks to dedicated registration landing pages with streamlined forms." },
        ],
      },
      {
        label: "C",
        title: "Crash Course Campaign",
        intro: "High-impact, time-sensitive campaigns tailored for the crucial final months before the NEET exam.",
        items: [
          { title: "Urgency and speed focus", body: "Positioning the crash course around high-yield chapter revisions, formula mastery, and rapid problem-solving strategies." },
          { title: "Mock test emphasis", body: "Promoting full-length test series and AI error analysis to students seeking last-minute score acceleration." },
          { title: "Conversion-oriented creatives", body: "Clear call-to-actions highlighting limited batch sizes, intensive timetable schedules, and immediate contact details." },
        ],
      },
      {
        label: "D",
        title: "CRM Setup & Lead Management Workflow",
        intro: "Structuring lead data, follow-up processes, and enquiry handling to support admissions.",
        items: [
          { title: "CRM configuration", body: "Assisting with CRM setup to capture inbound enquiries originating from social media campaigns, website forms, and landing pages." },
          { title: "Lead management and categorization", body: "Organizing incoming leads by programme interest (Repeaters, Regular, Crash Course, Foundation) and qualification status." },
          { title: "Enquiry handling workflow", body: "Establishing structured follow-up routines to ensure student and parent enquiries receive prompt responses from counselling teams." },
          { title: "Conversion journey tracking", body: "Monitoring lead progress from initial contact to campus visit, counselling session, and confirmed enrolment." },
        ],
      },
    ],
    pages: {
      title: "Featured Educational Articles",
      intro: "Official VVT Coaching blog articles where I managed publishing, promotional distribution, and on-page SEO.",
      items: [
        {
          group: "NEET Strategy",
          label: "How VVT's AI-Based Error Exams Help NEET Students Correct Mistakes",
          url: "https://www.vvtcoaching.com/featured/how-vvt-ai-error-exams-improve-neet-scores/",
        },
        {
          group: "Exam Preparation",
          label: "NEET Exam Day Strategy: Morning to Last Minute Guide",
          url: "https://www.vvtcoaching.com/featured/neet-exam-day-strategy-2026-morning-to-last-minute/",
        },
        {
          group: "Subject Strategy",
          label: "How to Solve NEET Chemistry Faster: 45-Minute Strategy",
          url: "https://www.vvtcoaching.com/featured/how-to-solve-neet-chemistry-faster-45-minute-strategy-2026/",
        },
        {
          group: "Mock Tests",
          label: "NEET 2026 Mock Test Strategy Before 21 June",
          url: "https://www.vvtcoaching.com/featured/neet-2026-mock-test-strategy-before-21-june/",
        },
        {
          group: "Resource Center",
          label: "VVT Coaching NEET Category Articles",
          url: "https://www.vvtcoaching.com/category/neet/",
        },
      ],
    },
    conversionLens: [
      { stage: "Awareness", detail: "Organic Reel views, social impressions, and educational blog search discovery." },
      { stage: "Engagement", detail: "Comments on daily quiz challenges, saves of revision carousels, and shares." },
      { stage: "Consideration", detail: "Visits to admission landing pages, brochure reviews, and website clicks." },
      { stage: "Conversion", detail: "Enquiry form submissions, phone calls, and CRM lead capture." },
      { stage: "Business outcomes", detail: "Counselling appointments, campus tours, and student batch enrolments." },
    ],
    creatives: {
      brand: "VVT Coaching",
      title: "Instagram and website content",
      intro: "Instagram Reels, interactive quiz posts, and articles from VVT Coaching. For articles, my contribution focused on publishing, promotion, and on-page SEO.",
      cta: { label: "More NEET articles on vvtcoaching.com", url: "https://www.vvtcoaching.com/category/neet/" },
    },
    learnings: [
      "In competitive education marketing, parents and students require different messages delivered through distinct formats.",
      "Interactive quiz posts and daily challenges build much higher sustained engagement than generic promotional banners.",
      "A structured CRM workflow ensures timely counselling follow-ups, preventing valuable student enquiries from getting lost.",
    ],
    links: [
      { label: "Instagram @vvtcoachingcentre", url: "https://www.instagram.com/vvtcoachingcentre/" },
      { label: "VVT Coaching website", url: "https://www.vvtcoaching.com/" },
      { label: "NEET articles category", url: "https://www.vvtcoaching.com/category/neet/" },
    ],
  },

  /* 03 ------------------------------------------------------------------ */
  {
    slug: "the-artist-mode",
    number: "03",
    title: "The Artist Mode",
    client: "The Artist Mode, my personal YouTube channel",
    kind: "Personal project",
    industry: "Men's fashion, grooming, lifestyle and self-improvement",
    headline: "Building a faceless lifestyle brand from scratch to 3.9 crore views.",
    summary:
      "The Artist Mode is an end-to-end personal brand I conceived, built, and managed myself from scratch. Operating as a faceless channel in the men's style, grooming, and self-improvement space, it achieved 3.9 crore lifetime views, over 32,900 subscribers, and six individual Shorts surpassing one million views each, led by a breakout Short with 19 million views. I directed every phase: niche research, brand positioning, topic curation, hook and script development, faceless production, video editing, title packaging, YouTube SEO, and analytics-driven creative iteration.",
    highlight: { value: "3.9Cr", label: "lifetime channel views" },
    heroStat: { value: "19M", label: "views on my best Short", note: "Finding Your Ideal Fade Haircut! Lifetime total: 3.9Cr views." },
    results: {
      title: "YouTube Studio, lifetime",
      intro: "Direct figures transcribed from the YouTube Studio dashboard screenshot, November 2026.",
      metrics: [
        { label: "Lifetime views", value: "3.9Cr" },
        { label: "Total subscribers", value: "32,905" },
        { label: "Watch hours", value: "82.9K" },
        { label: "Lifetime subscriber change", value: "+33K" },
        { label: "Views in 48 hours", value: "62,756", note: "Snapshot at the time of the screenshot" },
      ],
      note: "From YouTube Studio analytics. The 48-hour metric is a snapshot captured at that date. Cr = crore.",
      image: { src: artistStudio.url, alt: "YouTube Studio lifetime analytics for The Artist Mode showing 3.9Cr views and 32,905 subscribers", caption: "YouTube Studio, lifetime overview" },
    },
    overview: {
      objective: "Build a recognizable men's lifestyle authority brand on YouTube without showing a face, relying entirely on sharp ideas, packaging, and disciplined editing.",
      audience: "Young men looking to enhance their appearance, haircuts, confidence, grooming routines, and personal aesthetic through direct, actionable advice.",
      strategy: "Identify high-demand, relatable grooming and style questions, develop repeatable visual formats, write curiosity-driven hooks, and iterate continuously on audience retention data.",
    },
    formats: [
      "Faceless YouTube Shorts",
      "Numbered format series",
      "Hairstyle & fade guides",
      "Grooming & aesthetic breakdowns",
      "Tamil-language short-form content",
    ],
    responsibilities: [
      "Niche research",
      "Brand positioning",
      "Content pillars",
      "Content research",
      "Content ideation",
      "Hook and script development",
      "Creative production",
      "Video editing and pacing",
      "Titles and content packaging",
      "YouTube SEO and publishing",
      "Audience analysis",
      "Creative iteration",
      "Channel management",
    ],
    images: [{ src: artistModeChannel.url, alt: "The Artist Mode YouTube channel homepage", caption: "The channel homepage, public view" }],
    chapters: [
      {
        label: "A",
        title: "Niche research, brand positioning and content pillars",
        intro: "Building a strategic identity that resonates strongly with young male audiences.",
        items: [
          { title: "Niche research", body: "Analyzing the competitive landscape across men's fashion, grooming, lifestyle, and self-improvement to uncover underserved questions and search trends." },
          { title: "Brand positioning", body: "Establishing The Artist Mode as a practical, objective style mentor. By keeping the content faceless, the viewer becomes the hero and the advice takes center stage." },
          { title: "Core content pillars", body: "Structuring the channel across six complementary pillars: Men's grooming, Hairstyles, Men's fashion, Lifestyle, Self-improvement, and Dating and personal development." },
          { title: "Target demographic", body: "Focused on young men seeking straightforward glow-up guidance, better grooming choices, and aesthetic confidence without complex routines." },
        ],
      },
      {
        label: "B",
        title: "Ideation, hooks and script development",
        intro: "Crafting videos engineered for high audience retention and viewer participation.",
        items: [
          { title: "Content research & trend analysis", body: "Mining audience comments, popular search queries, and viral discussions to identify burning questions rather than arbitrary ideas." },
          { title: "Content ideation", body: "Developing compelling visual concepts that can be understood in the first three seconds, such as side-by-side haircut comparisons." },
          { title: "Opening hooks & script structure", body: "Writing curiosity-inducing opening frames (Which haircut suits your face shape?) that encourage viewers to stop scrolling and make an immediate mental choice." },
          { title: "Concise storytelling", body: "Delivering dense, valuable advice in 30 to 60 seconds with zero wasted filler, keeping the viewer watching until the final loop." },
        ],
      },
      {
        label: "C",
        title: "Faceless creative production, editing and pacing",
        intro: "Translating concepts into polished, dynamic short-form video assets.",
        items: [
          { title: "Creative asset production", body: "Curating high-quality visual materials, illustrations, typography, and clear voiceovers that maintain a cohesive brand aesthetic." },
          { title: "Video editing and pacing", body: "Cutting on action, synchronizing beat transitions, and applying snappy text overlays to keep viewers visually stimulated." },
          { title: "Titles and content packaging", body: "Writing titles that clearly define the topic and intended audience (Finding Your Ideal Fade Haircut!), paired with high-contrast thumbnail frames." },
          { title: "YouTube SEO and metadata", body: "Optimizing video titles, tags, descriptions, and playlist categorization so evergreen guides continue generating views months after upload." },
        ],
      },
      {
        label: "D",
        title: "Audience analytics, creative iteration and channel management",
        intro: "Using YouTube Studio data to compound success into repeatable viral formats.",
        items: [
          { title: "Audience retention analysis", body: "Monitoring drop-off points, average percentage viewed (APV), and view-to-swipe rates in YouTube Studio analytics to refine editing rhythms." },
          { title: "Creative iteration", body: "When the fade haircut concept succeeded, I built the Finding your perfect hairstyle series, producing follow-up hits on Wolf Cuts, Surfer Curtains, and Buzz Cuts." },
          { title: "Multi-hit consistency", body: "Proving that the 19M view Short was not a fluke by driving five additional Shorts past 1M views using the same structured format logic." },
          { title: "End-to-end channel stewardship", body: "Directing publishing schedules, community interaction, pinned comments, and long-term brand identity independently." },
        ],
      },
    ],
    viralGallery: {
      title: "More Than One Viral Hit",
      intro: "The 19M view Short is accompanied by five other Shorts exceeding one million views each, proving the repeatable power of format-driven content.",
    },
    conversionLens: [
      { stage: "Awareness", detail: "3.9Cr lifetime views, a 19M-view breakout Short, and five additional videos past 1M views." },
      { stage: "Engagement", detail: "82.9K hours of total watch time and tens of thousands of comments, saves, and shares." },
      { stage: "Conversion", detail: "+33K subscriber change, reaching 32,905 total channel subscribers." },
      { stage: "Business outcomes", detail: "Demonstrated full-cycle mastery of short-form algorithm dynamics, audience psychology, and independent brand creation." },
    ],
    creatives: { brand: "The Artist Mode", title: "Selected Shorts and format experiments" },
    learnings: [
      "The first two seconds and title packaging dictate whether great advice will ever reach an audience.",
      "A proven format can be successfully iterated with new angles and topics without diminishing viewer trust.",
      "Faceless content scales exceptionally well because the value of the idea, not the presenter, is the product.",
      "Real growth comes from listening to audience search patterns and building repeatable series around them.",
    ],
    links: [
      { label: "YouTube channel", url: "https://www.youtube.com/@TheArtistMode./featured" },
      { label: "The 19M view Short", url: "https://www.youtube.com/shorts/3tl3vXdl5_Y" },
    ],
  },

  /* 04 ------------------------------------------------------------------ */
  {
    slug: "anna-adarsh-womens-college",
    number: "04",
    title: "Anna Adarsh Women's College",
    client: "Anna Adarsh Women's College",
    kind: "Client project",
    industry: "Higher education",
    highlight: { value: "₹286", label: "cost per lead" },
    headline: "Admission lead generation and cost-per-lead optimisation through Meta Ads.",
    summary:
      "An admission-season Meta Ads campaign developed to generate high-intent enquiries from prospective female students and parents in Chennai. I managed ad creative development, audience targeting, Instagram marketing, and Campaign Budget Optimisation, achieving a cost per lead of ₹286.",
    results: {
      title: "Reported campaign performance",
      metrics: [
        { label: "Cost per lead", value: "₹286", note: "₹7.04 lakh spend ÷ 2,461 leads" },
        { label: "Total reach", value: "24.8L", note: "Admission season campaign reach" },
        { label: "Impressions", value: "1.04Cr", note: "Cumulative campaign impressions" },
      ],
      note: "Cost per lead is calculated from the campaign reporting summary: ₹7.04 lakh total spend across 2,461 leads. L = lakh, Cr = crore.",
    },
    overview: {
      objective: "Generate qualified admission enquiries from prospective students and parents during the academic admission window.",
      audience: "Higher secondary graduates and families evaluating undergraduate and postgraduate programmes at Anna Adarsh Women's College.",
      strategy: "Lead-focused Meta ad campaigns running diverse creative angles, selective geographic targeting, and continuous cost-per-lead optimization.",
    },
    formats: ["Meta lead generation ads", "Instagram feeds & stories", "Facebook ads"],
    responsibilities: [
      "Admission campaign management",
      "Instagram social media handling",
      "Social media content planning",
      "Ad creative development",
      "Meta Ads campaign activities",
      "Admission-focused promotional content",
    ],
    images: [],
    journey: {
      label: "A",
      title: "From Ad Impression to Qualified Lead",
      intro: "A multi-stage campaign architecture guiding student interest into direct admission enquiries.",
      steps: [
        { title: "Audience discovery", body: "Targeted Meta Ads placed the college before prospective students and parents during active admission months." },
        { title: "Admission-focused creative", body: "Creatives highlighted academic excellence, campus culture, course variety, and career placements." },
        { title: "Instant form engagement", body: "Interested candidates clicked through to pre-filled instant enquiry forms on Facebook and Instagram." },
        { title: "Lead generation", body: "Captured qualified student contact details directly for college admissions counselling teams." },
        { title: "CPL optimisation", body: "Regularly retired underperforming ad sets and scaled winning creatives to maintain a ₹286 cost per lead." },
      ],
    },
    chapters: [
      {
        label: "B",
        title: "Campaign strategy and creative variation",
        intro: "Deploying varied creative angles to enable algorithmic optimization and reduce lead acquisition costs.",
        items: [
          { title: "Creative variation", body: "Testing multiple creative formats (campus visuals, course highlights, student achievement banners) simultaneously to identify top performers." },
          { title: "Audience segmentation", body: "Structuring ad sets across prospective students and decision-making parents in relevant catchment zones." },
          { title: "Admission-focused messaging", body: "Every ad unit maintained a clear, singular call-to-action focused on admission enquiries." },
          { title: "Budget structure", body: "Utilizing Campaign Budget Optimisation (CBO) to automatically allocate spend to ad sets delivering lower cost per enquiry." },
        ],
      },
    ],
    conversionLens: [
      { stage: "Awareness", detail: "24.8L reach and 1.04Cr impressions across Meta platforms." },
      { stage: "Conversion", detail: "Cost per lead of ₹286 across 2,461 leads." },
      { stage: "Business outcomes", detail: "Student enquiries forwarded to college admissions teams for counselling and enrolment." },
    ],
    learnings: [
      "Testing multiple visual angles early allows the algorithm to quickly locate the lowest-cost lead opportunities.",
      "In higher education marketing, keeping enquiry forms short significantly reduces form drop-off and lowers CPL.",
      "Daily budget monitoring and creative pruning are critical to preventing ad fatigue during peak admission season.",
    ],
    links: [{ label: "Admission campaign Reel on Instagram", url: "https://www.instagram.com/reel/DZ-OjGvJict/" }],
  },

  /* 05 ------------------------------------------------------------------ */
  {
    slug: "anna-adarsh-group-of-schools",
    number: "05",
    title: "Anna Adarsh Group of Schools",
    client: "Anna Adarsh Group of Schools",
    kind: "Client project",
    industry: "School education",
    highlight: { value: "5", label: "schools in one admission campaign" },
    headline: "Parent-focused admission campaigns across five distinct schools.",
    summary:
      "Education marketing and admission campaigns for a group of five schools. Because parents are the primary decision-makers, communication prioritized school values, academic care, and student safety while driving local admission enquiries.",
    overview: {
      objective: "Support school admissions and maintain strong localized awareness for each school in the group.",
      audience: "Parents seeking reputable, safe, and academically sound schools for their children.",
      strategy: "Values-led Meta advertising campaigns consistent in institutional credibility yet tailored to each individual school location.",
    },
    formats: ["Meta Ads", "Facebook", "Instagram"],
    responsibilities: [
      "Admission campaign activities",
      "Meta advertising creatives",
      "School admission promotional content",
      "Marketing communication",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "How I approached parent communication",
        items: [
          { title: "Institutional trust first", body: "School decisions are deeply emotional and long-term. Creative messaging kept a reassuring, values-led tone." },
          { title: "Multi-campus coordination", body: "Crafting distinct ad variations tailored to each of the five schools while preserving the overarching group identity." },
          { title: "Answering parent concerns", body: "Creatives directly addressed safety, faculty qualifications, sports, extracurricular facilities, and board results." },
          { title: "Targeted localized delivery", body: "Targeting parents residing within practical daily commuting radiuses of each campus." },
        ],
      },
    ],
    learnings: [
      "When marketing to parents, institutional reputation and student safety outweigh flashy creative concepts.",
      "A group brand still requires hyper-localized messaging for each individual campus.",
    ],
    links: [{ label: "School campaign Reel on Instagram", url: "https://www.instagram.com/reel/DeGySo9Nswi/" }],
  },

  /* 06 ------------------------------------------------------------------ */
  {
    slug: "dr-vikram-agarwal-adarsh-college",
    number: "06",
    title: "Dr. Vikram Agarwal Adarsh College",
    client: "Dr. Vikram Agarwal Adarsh College",
    kind: "Client project",
    industry: "Higher education",
    highlight: { value: "11.3K", label: "views on campus Reel" },
    headline: "Relatable campus moments, admission campaigns and tracking implementation.",
    summary:
      "Social media marketing, admission campaigns, and digital tracking implementation for an undergraduate college. The content strategy connected with prospective students by showcasing everyday campus culture, supported by marketing tracking setup to evaluate campaign performance.",
    overview: {
      objective: "Make the college feel welcoming and vibrant to prospective students while tracking admission campaign pathways.",
      audience: "High school graduates, college students, and prospective applicants.",
      strategy: "Relatable, authentic short-form Instagram Reels paired with tracking parameter implementation for admission monitoring.",
    },
    formats: ["Instagram Reels", "Marketing tracking setup", "Admission campaigns"],
    responsibilities: [
      "Instagram social media marketing",
      "Social media content planning",
      "Instagram creative execution",
      "Admission campaigns",
      "Marketing campaign activities",
      "Marketing tracking setup and implementation",
      "Monitoring the marketing journey and campaign performance",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "Campus storytelling & tracking contribution",
        items: [
          { title: "Relatable student content", body: "Produced the campus steps Reel that reached 11.3K views by capturing casual, unscripted student friendships." },
          { title: "Creative execution", body: "Simple smartphone framing with an inviting chat-style hook that felt organic in an Instagram feed." },
          { title: "Marketing tracking setup", body: "Implemented structured tracking links to monitor traffic flow from social content and admission promos through to enquiry touchpoints." },
          { title: "Performance monitoring", body: "Monitored campaign referral sources and engagement metrics to understand prospective student discovery pathways." },
        ],
      },
    ],
    creatives: { brand: "Dr. Vikram Agarwal Adarsh College", title: "The Reel" },
    learnings: [
      "Students engage deeply with social content that looks and feels like authentic daily campus life.",
      "Setting up proper tracking early provides clear insight into which creative concepts generate genuine interest.",
    ],
    links: [{ label: "Campus Reel on Instagram (11.3K views)", url: "https://www.instagram.com/p/DdY2cFKztu4/" }],
  },

  /* 07 ------------------------------------------------------------------ */
  {
    slug: "style-365",
    number: "07",
    title: "Style 365 Studio Salon",
    client: "Style 365 Studio Salon",
    kind: "Client project",
    industry: "Salon and beauty services",
    highlight: { value: "₹3,00,000", label: "campaign budget reference" },
    headline: "Local search SEO and paid social advertising working together.",
    summary:
      "SEO, content strategy, and Meta advertising for a premier unisex salon in Bangalore. The strategy unified local search visibility for customers actively looking for nearby beauty services with enquiry-focused paid social ads on Instagram and Facebook.",
    budgetReference: { label: "Campaign Budget Reference", value: "₹3,00,000", note: "The budget figure for this work. It serves as a financial reference for campaign scope." },
    overview: {
      objective: "Help local customers in Bangalore discover salon services, explore offerings, and book appointments via search and social.",
      audience: "Neighborhood residents and working professionals looking for hair transformations, grooming, and specialized skin treatments.",
      strategy: "Combine location-rich website content optimized for local search intent with transformation-led Meta advertising.",
    },
    formats: ["Website SEO", "Meta Ads", "Instagram marketing", "Service landing pages"],
    responsibilities: [
      "SEO",
      "Paid advertising campaigns",
      "Content strategy",
      "Social media content planning",
      "Local business marketing",
      "Promotional content",
    ],
    images: [{ src: style365Website.url, alt: "Style 365 Studio Salon website homepage", caption: "style365.one, homepage" }],
    chapters: [
      {
        label: "A",
        title: "SEO and local search discovery",
        intro: "Ensuring the salon appears prominently when nearby customers search for hair and beauty services.",
        items: [
          { title: "Local search intent", body: "Structuring website content around natural local searches such as unisex salon near me and neighborhood-specific styling keywords." },
          { title: "Search-friendly service pages", body: "Organizing distinct pages for hair coloring, styling, keratin treatments, and skin services with clear descriptions." },
          { title: "Keyword relevance", body: "Integrating localized service and area terms organically into page headings, metadata, and body copy." },
          { title: "Local visibility optimization", body: "Improving site structure and on-page signals so the website ranks effectively in local Bangalore results." },
        ],
      },
      {
        label: "B",
        title: "Advertising and promotional content strategy",
        intro: "Reaching prospective clients in nearby localities through visual, service-led ads.",
        items: [
          { title: "Transformation-led creatives", body: "Highlighting before-and-after hair makeovers, which represent the strongest social proof for salon services." },
          { title: "Local radius targeting", body: "Restricting ad delivery to neighborhoods close enough for practical visits and bookings." },
          { title: "Enquiry-focused messaging", body: "Ensuring every creative pointed directly to appointment booking links and WhatsApp enquiry channels." },
          { title: "Seasonal offers and packages", body: "Structuring ad promotions around festive grooming packages and new customer introductions." },
        ],
      },
    ],
    journey: {
      label: "C",
      title: "From local discovery to booking",
      intro: "The customer path designed for a local service business.",
      steps: [
        { title: "Discovery", body: "A nearby resident finds the salon on Google search or sees a makeover creative on Instagram." },
        { title: "Service exploration", body: "They view the website or profile to examine specific treatments and pricing." },
        { title: "Enquiry & consultation", body: "They reach out with a question on WhatsApp or direct messaging." },
        { title: "Appointment booking", body: "They book an appointment through the salon's contact channels." },
      ],
    },
    learnings: [
      "Local service businesses require search for active intent and social advertising for visual inspiration.",
      "Showing real transformation outcomes is the single most effective creative angle for beauty services.",
    ],
    links: [
      { label: "Salon Reel on Instagram", url: "https://www.instagram.com/reel/DZfDErthSCj/" },
      { label: "Website", url: "https://style365.one/" },
      { label: "Instagram @style365studio", url: "https://www.instagram.com/style365studio/" },
    ],
  },

  /* 08 ------------------------------------------------------------------ */
  {
    slug: "asta-properties",
    number: "08",
    title: "Asta Properties",
    client: "Asta Properties",
    kind: "Client project",
    industry: "Real estate",
    highlight: { value: "3,431", label: "views on location Reel" },
    headline: "Location-led visual storytelling and paid advertising for real estate.",
    summary:
      "Social media marketing, paid advertising campaigns, and visual content direction for a real estate property brand. Because location constitutes the primary buying factor, content led with aerial views, connectivity, and coastal surroundings before presenting individual plots.",
    overview: {
      objective: "Capture prospective home buyers and land investors by presenting the lifestyle and geographic advantages of the property location.",
      audience: "Property buyers, families looking for coastal plots, and long-term land investors.",
      strategy: "High-production aerial video Reels on Instagram supported by targeted Meta lead generation campaigns.",
    },
    formats: ["Instagram Reels", "Meta lead generation ads", "Real estate creatives"],
    responsibilities: [
      "Social media handling",
      "Paid advertising campaigns",
      "Real estate promotional content",
      "Campaign creative planning",
      "Social media marketing",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "Visual storytelling for real estate",
        items: [
          { title: "Selling the place first", body: "Produced the aerial location Reel reaching 3,431 views, emphasizing coastal roads, beach proximity, and infrastructure." },
          { title: "Paid campaign synergy", body: "Using engaging aerial video content to warm prospective audiences before serving direct lead enquiry ads." },
          { title: "Investor clarity", body: "Highlighting growth corridors, road connectivity, and immediate development potential in creative copy." },
        ],
      },
    ],
    creatives: { brand: "Asta Properties", title: "The Reel" },
    learnings: [
      "In property marketing, helping buyers fall in love with the location is what earns the initial enquiry.",
      "High-angle aerial footage gives prospective buyers a tangible sense of scale and neighbourhood maturity.",
    ],
    links: [],
  },

  /* 09 ------------------------------------------------------------------ */
  {
    slug: "ambrig-homes",
    number: "09",
    title: "Ambrig Homes",
    client: "Ambrig Homes",
    kind: "Client project",
    industry: "Real estate",
    headline: "Connecting SEO, Instagram management, and Meta Ads for residential launches.",
    summary:
      "Digital marketing, SEO, Instagram content management, and Meta Ads for residential developer Ambrig Homes. The work combined launch teaser content on social media with organic search visibility to build buyer anticipation for projects in Korattur, Chennai.",
    ctas: [{ label: "Visit ambrighomes.com", url: "https://ambrighomes.com/" }],
    overview: {
      objective: "Build anticipation and enquiry momentum for a new residential development in Korattur, Chennai.",
      audience: "Home buyers seeking premium residential apartments in and around North-West Chennai.",
      strategy: "Teaser-stage social storytelling on Instagram connected with local search optimization and Meta Ads campaigns.",
    },
    formats: ["Instagram posts & carousels", "Meta Ads", "Website SEO", "Launch teasers"],
    responsibilities: [
      "SEO activities",
      "Instagram social media management",
      "Content planning",
      "Social media content creation",
      "Meta Ads campaigns",
      "Real estate digital marketing",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "Search visibility and social launch synergy",
        items: [
          { title: "Pre-launch teaser strategy", body: "Crafted teaser carousels revealing project location and premium positioning to warm potential buyers before launch." },
          { title: "Connecting search with paid ads", body: "Aligning website SEO keywords with Meta ad copy so prospects encounter consistent messaging across platforms." },
          { title: "Engaging residential buyers", body: "Highlighting neighborhood conveniences, lifestyle amenities, and builder reputation." },
        ],
      },
    ],
    creatives: { brand: "Ambrig Homes", title: "The post" },
    learnings: [
      "A strategic teaser campaign builds an engaged follower base ready to enquire the moment bookings open.",
      "Combining search intent with social visibility prevents competitor brand hijacking during launch periods.",
    ],
    links: [{ label: "Ambrig Homes website", url: "https://ambrighomes.com/" }],
  },

  /* 10 ------------------------------------------------------------------ */
  {
    slug: "sofa-42",
    number: "10",
    title: "Sofa 42 Furniture, Bengaluru",
    client: "Sofa 42 Furniture, Bengaluru",
    kind: "Client project",
    industry: "Furniture and home interiors",
    highlight: { value: "1,448", label: "Instagram followers (account snapshot)" },
    headline: "Lifestyle-led presentation, SEO and paid advertising for custom furniture.",
    summary:
      "Content strategy, SEO, paid advertising campaigns, and social media planning for Sofa 42 Furniture in Bengaluru. The approach shifted focus from generic furniture catalogues to lived-in lifestyle presentation, helping buyers picture handcrafted sofas in their own homes and driving showroom visits.",
    overview: {
      objective: "Showcase sofa collections, elevate brand aesthetics online, and drive showroom walk-ins in Bengaluru through search and paid campaigns.",
      audience: "Homeowners, interior design enthusiasts, and apartment buyers in Bengaluru seeking durable, custom furniture.",
      strategy: "Product-first creatives highlighting materials and finishes, combined with room-setting lifestyle imagery and local Bangalore search discovery.",
    },
    formats: [
      "Product showcase creatives",
      "Lifestyle interior presentation",
      "SEO for furniture collections",
      "Paid advertising campaigns",
    ],
    responsibilities: [
      "SEO activities",
      "Paid advertising campaigns",
      "Content strategy",
      "Social media content planning",
      "Furniture product marketing",
      "Digital marketing activities",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "Product-first visual content strategy",
        items: [
          { title: "Focus on craftsmanship details", body: "Clear product photography and close-up creatives showcasing fabric textures, foam density, frame joinery, and custom finishes." },
          { title: "From catalogue to real homes", body: "Framing furniture within actual living room settings with rugs and lighting, helping buyers visualize the piece in their own living space." },
          { title: "Bridging online to showroom", body: "Showroom-focused content that provides clear reasons to visit in person to test comfort and select custom fabrics." },
        ],
      },
      {
        label: "B",
        title: "Search visibility and local paid advertising",
        items: [
          { title: "Local Bangalore SEO", body: "Optimizing website collections for local intent searches such as custom sofas in Bangalore and living room furniture." },
          { title: "Targeted paid campaigns", body: "Deploying Meta and Google campaigns targeting home renovation audiences and new apartment owners across prime Bengaluru localities." },
          { title: "Customer enquiry flow", body: "Directing ad clicks to catalog previews and direct showroom WhatsApp enquiries." },
        ],
      },
    ],
    learnings: [
      "Furniture buyers make significant purchase decisions visually; room context and material details convert better than plain studio cutouts.",
      "Showroom content bridges the gap between digital discovery and physical in-store purchases.",
    ],
    links: [{ label: "Sofa 42 Reel on Instagram", url: "https://www.instagram.com/reel/DeTfw_NR7IK/" }],
  },

  /* 11 ------------------------------------------------------------------ */
  {
    slug: "colan-infotech",
    number: "11",
    title: "Colan Infotech",
    client: "Colan Infotech Pvt. Ltd.",
    kind: "Employer work",
    industry: "Technology services",
    highlight: { value: "300+", label: "organic B2B leads" },
    headline: "B2B social media, organic LinkedIn lead generation, SEO and client account management.",
    summary:
      "As Digital Marketing Executive at Colan Infotech in Madurai, I managed social media presence across LinkedIn, Facebook, and Instagram for the company and its external client brands. My work combined SEO, website content optimization, B2B content planning, and organic LinkedIn lead generation, driving over 300 verified B2B leads and growing company LinkedIn followings from 45K to 60K in six months without paid ad spend.",
    results: {
      title: "From my time at Colan",
      metrics: [
        { label: "Organic B2B leads", value: "300+" },
        { label: "LinkedIn followers", value: "45K to 60K", note: "Within six months" },
      ],
      note: "As documented in my employment records and professional resume.",
    },
    overview: {
      objective: "Build global corporate visibility, generate qualified B2B leads organically on LinkedIn, and manage digital marketing and social content for client accounts.",
      audience: "Technology professionals, enterprise hiring managers, founders, and companies seeking IT solutions and contract staffing partners.",
      strategy: "A disciplined content calendar combining technology insights, interactive polls, quizzes, developer humor, and SEO content across corporate and showcase pages.",
    },
    formats: [
      "LinkedIn thought leadership",
      "Polls, quizzes and memes",
      "Technology & AI posts",
      "Client social media content",
      "SEO and website optimization",
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
    images: [],
    chapters: [
      {
        label: "A",
        title: "B2B content strategy & organic lead generation",
        intro: "Transforming professional company channels into active lead-generating assets through content variety.",
        items: [
          { title: "Technology and AI content", body: "Authoring informative posts on emerging software trends and AI capabilities that established credibility with technical buyers." },
          { title: "Interactive polls and quizzes", body: "Deploying weekly polls and developer questions that stimulated high engagement and increased algorithmic post reach on LinkedIn." },
          { title: "Relatable developer humor", body: "Sharing well-timed developer memes that humanized the brand and dramatically lifted shares among engineers and hiring managers." },
          { title: "Organic lead generation", body: "Generating 300+ organic B2B leads by initiating professional conversations and routing warm engagement to business development teams." },
        ],
      },
      {
        label: "B",
        title: "Multi-page management & client accounts",
        intro: "Balancing internal corporate channels alongside client digital marketing assignments.",
        items: [
          { title: "Regional showcase pages", body: "Managing coordinated content calendars across Madurai, Pernambut, and Bangalore showcase pages to maintain regional brand consistency." },
          { title: "Client social media management", body: "Handling external client accounts: crafting content calendars, producing custom posts, and supporting their independent social marketing goals." },
          { title: "Distinction of client campaigns", body: "Maintaining clear boundaries and distinct brand voices between Colan's corporate channels and client marketing deliverables." },
        ],
      },
      {
        label: "C",
        title: "SEO and website content optimisation",
        intro: "Supporting organic search visibility alongside social media channels.",
        items: [
          { title: "Website content optimisation", body: "Applying on-page SEO best practices to service pages and corporate blogs to attract organic technology searches." },
          { title: "Content research and publishing", body: "Researching high-value B2B technology keywords and scheduling informative articles consistently." },
          { title: "Performance monitoring", body: "Tracking organic impressions, engagement metrics, and referral traffic to inform upcoming calendar themes." },
        ],
      },
    ],
    learnings: [
      "B2B professional channels succeed when they balance technical authority with human, relatable content.",
      "A disciplined monthly content calendar is essential for managing multiple corporate and client pages simultaneously.",
      "Organic LinkedIn marketing can generate significant B2B lead volume when posts invite active commentary and discussion.",
    ],
    links: [
      { label: "Official website", url: "https://www.colaninfotech.com/" },
      { label: "Main LinkedIn page", url: "https://www.linkedin.com/company/colan-infotech-private-limited/home/" },
      { label: "Facebook page", url: "https://www.facebook.com/ColanInfotechPvtLtd" },
      { label: "Instagram page", url: "https://www.instagram.com/colaninfotechpvtltd/" },
      { label: "Madurai Showcase", url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-madurai/" },
      { label: "Pernambut Showcase", url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-pernambut-vellore/" },
      { label: "Bangalore Showcase", url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-bangalore/" },
    ],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
