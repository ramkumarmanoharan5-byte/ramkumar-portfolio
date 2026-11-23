import artistModeChannel from "@/assets/the-artist-mode-channel.jpg.asset.json";
import artistStudio from "@/assets/the-artist-mode-studio-lifetime.jpg.asset.json";
import style365Website from "@/assets/style365-website.jpg.asset.json";
import topallPrep from "@/assets/topall-prep-portal.jpg.asset.json";
import topallApp from "@/assets/topall-app.jpg.asset.json";
import neetGuideHome from "@/assets/neet-guide-home.jpg.asset.json";
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
    headline: "Free resources that lead students to a paid product.",
    summary:
      "TopAll is the product I work on right now. It has a free preparation portal full of MCQs, notes and videos, and an upgraded app with AI doubt clarification, custom tests and performance insights. My job is to make the free side genuinely useful, get it in front of students, and make the path to the paid product feel natural.",
    ctas: [
      { label: "Explore free resources", url: "https://prep.topall.app/" },
      { label: "See the TopAll app", url: "https://topall.app/" },
    ],
    overview: {
      objective: "Bring NEET and JEE students to the free resources, keep them practising, and give engaged students a reason to move to the upgraded TopAll product.",
      audience: "NEET and JEE aspirants in Class 11, Class 12 and repeat years, who search for chapter help, MCQs and quick revision.",
      strategy: "Lead with useful, free, chapter-level content on search, YouTube and social. Then let regular practice and clear explanations build trust in the product.",
    },
    formats: ["Educational videos", "Chapter lesson pages", "YouTube explainers and Shorts", "Study resources", "Website content", "SEO, AEO and GEO content"],
    responsibilities: ["Product messaging", "Website content", "Educational content marketing", "NotebookLM video production", "SEO, AEO and GEO", "Social media content", "Funnel thinking and measurement"],
    images: [
      { src: topallPrep.url, alt: "TopAll free NEET and JEE preparation portal homepage", caption: "prep.topall.app, the free preparation portal" },
      { src: topallApp.url, alt: "TopAll app homepage promoting AI-powered NEET and JEE preparation", caption: "topall.app, the upgraded product" },
    ],
    chapters: [
      {
        label: "A",
        title: "Understanding the product",
        intro: "Before writing anything I spent time on both sides of the product, because the marketing only works if the free side and the paid side connect.",
        items: [
          { title: "The free portal", body: "Chapter-wise NEET and JEE MCQs with answers and explanations, plus Biology, Chemistry, Physics and Maths resources: study materials, educational videos, PDF notes, mind maps, study guides, exam articles and a study library." },
          { title: "The upgraded product", body: "AI-assisted doubt clarification, personalised and custom tests, adaptive preparation tools and performance insights. This is where serious students get the most value." },
          { title: "Why the free side matters", body: "Students won't pay for something they haven't tried. Free practice is the most honest way to show them what TopAll can do." },
          { title: "Where content fits", body: "Every lesson, video and article is a way in. Each one should help a student right now and point them to the next useful step." },
        ],
      },
      {
        label: "B",
        title: "What I actually do",
        items: [
          { title: "Product messaging", body: "Writing how TopAll explains itself to students and parents, on the website and in marketing assets." },
          { title: "Educational content", body: "Turning NCERT concepts into videos, slide decks, infographics and Shorts using NotebookLM workflows." },
          { title: "Search", body: "On-page, off-page and technical SEO, along with content written for AI answers (AEO and GEO), so TopAll shows up where students look for help." },
          { title: "Distribution", body: "Publishing lessons on the portal and on YouTube, so one piece of content works on two platforms." },
        ],
      },
    ],
    journey: {
      label: "C",
      title: "The conversion funnel",
      intro: "This is my marketing strategy and the customer journey the product is designed around. It explains how I think. It is not a claim about how many students converted.",
      steps: [
        { title: "Content discovery", body: "Students find TopAll through educational videos, social media, search and blog content." },
        { title: "Free resource access", body: "They land on the free portal and explore MCQs, study materials, chapter resources, notes and videos.", link: { label: "prep.topall.app", url: "https://prep.topall.app/" } },
        { title: "Lead generation and sign-up", body: "Students who find it useful are encouraged to register and keep using the platform." },
        { title: "Engagement and nurturing", body: "Regular practice, clear explanations and new content give them reasons to come back and build interest in the product." },
        { title: "Premium conversion", body: "Engaged free users are introduced to the upgraded TopAll offering, with features they now understand the value of.", link: { label: "topall.app", url: "https://topall.app/" } },
      ],
    },
    measurement: {
      title: "How I'd measure it",
      intro: "Views alone don't tell you whether the funnel works. These are the numbers I track across the journey.",
      items: [
        "Website visits",
        "Free resource page visits",
        "Landing page click-through rate",
        "Lead capture and registrations",
        "Free account sign-ups",
        "Practice engagement",
        "Product page visits",
        "Free-to-paid conversion rate",
        "Paid subscriptions",
        "Acquisition cost and revenue",
      ],
      note: "No figures are shown here on purpose. I'll add them once I can share verified numbers from the product's analytics.",
    },
    conversionLens: [
      { stage: "Awareness", detail: "Video views, search impressions and content discovery on YouTube, Google and social." },
      { stage: "Engagement", detail: "Watch time on lessons and the number of MCQs students attempt." },
      { stage: "Consideration", detail: "Visits to free resource pages and the TopAll product page." },
      { stage: "Conversion", detail: "Registrations, free sign-ups and paid subscriptions." },
      { stage: "Business outcomes", detail: "Paid users, revenue and acquisition cost, once verified." },
    ],
    creatives: {
      brand: "TopAll",
      title: "Content & Creatives",
      intro: "Real examples of the content that brings students into TopAll. Each one opens the original.",
      cta: { label: "Explore TopAll's free resources", url: "https://prep.topall.app/" },
    },
    learnings: [
      "A free product is the best ad for a paid one, but only if the free part is genuinely good.",
      "Name content exactly the way students search for it.",
      "One NCERT concept can become a lesson page, a long video and a Short.",
      "Measure the whole journey, not just the top of it.",
    ],
    links: [
      { label: "Free preparation portal", url: "https://prep.topall.app/" },
      { label: "TopAll app", url: "https://topall.app/" },
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
    headline: "Building visibility and audience engagement for an education-focused brand through social media and content.",
    summary:
      "I handle the Instagram account for VVT Coaching Centre. The page has to speak to two people at once: the student preparing for NEET, and the parent deciding where they should study. So the feed mixes useful practice content with clear, honest promotion of the campus and programmes.",
    ctas: [
      { label: "VVT on Instagram", url: "https://www.instagram.com/vvtcoachingcentre/" },
      { label: "vvtcoaching.com", url: "https://www.vvtcoaching.com/" },
    ],
    overview: {
      objective: "Make VVT visible to NEET aspirants and their parents, keep students engaging with the page, and support admissions for programmes like the girls-only repeater batch.",
      audience: "NEET aspirants, especially repeaters, and parents looking for a safe, focused place to study.",
      strategy: "Mix daily practice content (MCQs, challenges) with programme promotion, student voices and exam-time updates, all in a voice students actually read.",
    },
    formats: ["Instagram Reels", "Static posts", "MCQ quizzes", "Student testimonials", "Website articles"],
    responsibilities: [
      "Instagram content planning",
      "Educational content ideas",
      "Creative planning",
      "NEET and JEE content",
      "Student-focused communication",
      "Promotional content",
      "Exam-related updates",
      "Publishing",
      "Content adaptation",
      "Engagement-focused captions",
    ],
    images: [],
    chapters: [
      {
        label: "A",
        title: "How I plan the feed",
        items: [
          { title: "Practice that invites a reply", body: "Quiz Time Reels and Challenge of the Day posts ask students to comment their answer, save it and share it with a study partner. That turns scrolling into practice." },
          { title: "Promotion that answers parents' questions", body: "Programme posts lead with what parents worry about: safety, residential facilities, mentoring and scholarships." },
          { title: "Real students, real campus", body: "Testimonials and campus Reels use VVT's own students, which builds more trust than any graphic." },
          { title: "Product in plain words", body: "Features like the AI performance analysis app are shown through what a student sees: their score, broken down by subject." },
        ],
      },
    ],
    conversionLens: [
      { stage: "Awareness", detail: "Reel views and reach, for example 5,671 views on the Girls NEET Campus Reel." },
      { stage: "Engagement", detail: "Comments on quizzes, saves and shares of practice posts." },
      { stage: "Consideration", detail: "Profile visits and clicks through to the website and articles." },
      { stage: "Conversion", detail: "Enquiries and admission calls for programmes." },
    ],
    creatives: {
      brand: "VVT Coaching",
      title: "Instagram and website content",
      intro: "Instagram Reels and posts from the account I manage, plus articles from VVT's website. For the articles I handled publishing and on-page SEO. I'm not claiming to have written every one.",
      cta: { label: "More NEET articles on vvtcoaching.com", url: "https://www.vvtcoaching.com/category/neet/" },
    },
    learnings: [
      "In education, the student and the parent are different audiences. Good content speaks to one of them clearly.",
      "A single MCQ can do more for engagement than a polished promo.",
      "Real students on camera are the most trusted content on the page.",
    ],
    links: [
      { label: "Instagram @vvtcoachingcentre", url: "https://www.instagram.com/vvtcoachingcentre/" },
      { label: "VVT Coaching website", url: "https://www.vvtcoaching.com/" },
      { label: "NEET articles", url: "https://www.vvtcoaching.com/category/neet/" },
    ],
  },

  /* 03 ------------------------------------------------------------------ */
  {
    slug: "the-artist-mode",
    number: "03",
    title: "The Artist Mode",
    client: "The Artist Mode, my own faceless YouTube channel",
    kind: "Personal project",
    industry: "Men's fashion, grooming, lifestyle and self-improvement",
    headline: "Building a faceless brand. Reaching millions.",
    summary:
      "A faceless YouTube channel I built from scratch around men's style, grooming and self-improvement. It's where I learned, by doing, what makes short-form content get watched, rewatched and shared.",
    highlight: { value: "3.9Cr", label: "lifetime channel views" },
    heroStat: { value: "19M", label: "views on my best Short", note: "One Short: Finding Your Ideal Fade Haircut! The channel's lifetime total is 3.9Cr views." },
    results: {
      title: "YouTube Studio, lifetime",
      intro: "Straight from the channel's YouTube Studio dashboard.",
      metrics: [
        { label: "Lifetime views", value: "3.9Cr" },
        { label: "Total subscribers", value: "32,905" },
        { label: "Watch hours", value: "82.9K" },
        { label: "Lifetime subscriber change", value: "+33K" },
        { label: "Views in 48 hours", value: "62,756", note: "Snapshot at the time of the screenshot" },
      ],
      note: "As captured in my YouTube Studio screenshot, November 2026. The 48-hour figure is a snapshot from that moment, not a permanent channel number. Cr = crore.",
      image: { src: artistStudio.url, alt: "YouTube Studio lifetime analytics for The Artist Mode showing 3.9Cr views and 32,905 subscribers", caption: "YouTube Studio, lifetime overview" },
    },
    overview: {
      objective: "Build a recognisable men's lifestyle brand on YouTube without ever showing a face, so the ideas, packaging and editing carry the channel.",
      audience: "Young men who want to look and feel better: better haircuts, better photos, better habits, and practical advice that's quick to apply.",
      strategy: "Short, useful, highly visual Shorts on recurring content pillars, with clear hooks and titles that name the exact problem the viewer has.",
    },
    formats: ["YouTube Shorts", "Long-form videos", "Numbered series", "Tamil-language content"],
    responsibilities: ["Brand positioning", "Content pillars", "Topic research", "Scripts and hooks", "Faceless editing", "Titles and packaging", "Publishing", "Performance review"],
    images: [{ src: artistModeChannel.url, alt: "The Artist Mode YouTube channel homepage", caption: "The channel homepage, public view" }],
    chapters: [
      {
        label: "A",
        title: "Positioning and audience",
        items: [
          { title: "A style coach without a face", body: "The Artist Mode is a straightforward guide for men who want to improve their style, grooming and confidence. Being faceless keeps the focus on the advice. The viewer is the hero of every video." },
          { title: "Who it's for", body: "Young men who care about how they look but don't want complicated routines. They search for specific answers: which haircut suits me, how do I pose for photos, how do I fix this grooming problem." },
        ],
      },
      {
        label: "B",
        title: "Content pillars",
        items: [
          { title: "Men's fashion", body: "Outfits, aesthetics and photo styling." },
          { title: "Grooming", body: "Haircuts, hair care, skin and beard." },
          { title: "Lifestyle", body: "Habits and routines that change how you look and feel." },
          { title: "Self-improvement", body: "Glow-up tips and confidence." },
        ],
      },
      {
        label: "C",
        title: "How I make the Shorts",
        items: [
          { title: "Research", body: "Topics come from questions people keep asking, not from what's easy to make." },
          { title: "Hooks", body: "I open on the viewer's own question, like which one suits you best, so they lean in." },
          { title: "Packaging", body: "Titles name the problem and the audience, for example for guys, and series names make episodes easy to recognise." },
          { title: "Experiments", body: "Numbered series, sequels, trend round-ups and Tamil Shorts, to see what the audience responds to." },
          { title: "Optimisation", body: "When something works, I build a format around it and repeat it with a new style or angle." },
          { title: "Faceless production", body: "Visuals, illustrations, text and voice. The format scales without anyone appearing on camera." },
        ],
      },
    ],
    viralGallery: {
      title: "More Than One Viral Hit",
      intro: "The 19M Short isn't a one-off. Six Shorts on the channel have crossed a million views each, most of them from the same few repeatable formats.",
    },
    conversionLens: [
      { stage: "Awareness", detail: "3.9Cr lifetime views and a 19M-view Short." },
      { stage: "Engagement", detail: "82.9K hours of watch time." },
      { stage: "Conversion", detail: "+33K lifetime subscriber change, 32,905 total subscribers." },
    ],
    creatives: { brand: "The Artist Mode", title: "More Shorts and format tests" },
    learnings: [
      "Packaging, the title and the first frame, decides whether great content is ever seen.",
      "A format that works once can work again with a new angle.",
      "Faceless content scales because the idea, not the person, is the product.",
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
    highlight: { value: "2,461", label: "leads at ₹286.08 each" },
    headline: "Admission lead generation through Meta Ads.",
    summary:
      "An admission-season Meta Ads campaign built to bring in enquiries from prospective students. It's one of my most measurable projects. I ran it in Meta Ads Manager and judged every decision by lead volume and cost per lead.",
    results: {
      title: "Reported campaign performance",
      metrics: [
        { label: "Reported ad spend", value: "₹7.04L" },
        { label: "Leads generated", value: "2,461" },
        { label: "Average cost per lead", value: "₹286.08" },
        { label: "Reach", value: "24.8L" },
        { label: "Impressions", value: "1.04Cr" },
      ],
      note: "Reported campaign totals. The initial budget discussed was ₹7.5 lakh for two months, with an extension discussed later. ₹7.04 lakh is the actual reported spend. L = lakh, Cr = crore.",
    },
    overview: {
      objective: "Generate admission enquiries from prospective students during the admission period.",
      audience: "Prospective students and their families considering the college.",
      strategy: "Lead-focused Meta campaigns with a variety of creatives, careful budget structure and daily monitoring of cost per lead.",
    },
    formats: ["Meta lead ads", "Facebook", "Instagram"],
    responsibilities: ["Meta Ads Manager", "Campaign optimisation", "Audience targeting", "Creative testing", "A/B testing", "Campaign Budget Optimisation (CBO)", "Lifetime budgets", "Performance monitoring"],
    images: [],
    journey: {
      label: "A",
      title: "From Ad Reach to Qualified Leads",
      intro: "Reach and impressions are only the start. This is how the campaign turned attention into enquiries.",
      steps: [
        { title: "Audience discovery", body: "Meta Ads put the college in front of prospective students during the admission window." },
        { title: "Admission-focused creative", body: "Creatives led with what students want to know about admissions and courses." },
        { title: "Audience interaction", body: "Interested students engaged with the ad and opened the form." },
        { title: "Lead form or enquiry", body: "They shared their details through the lead form." },
        { title: "Lead generation", body: "2,461 leads came in over the campaign." },
        { title: "Cost per lead optimisation", body: "I kept adjusting creatives and budgets to hold the average at ₹286.08 per lead." },
      ],
      note: "These are leads, meaning enquiries from interested students. They are not confirmed admissions, and I don't claim that every lead enrolled.",
    },
    chapters: [
      {
        label: "B",
        title: "Creative strategy",
        intro: "In a lead campaign, the creative does a lot of the targeting. Having several angles running at once gave the system room to find what worked.",
        items: [
          { title: "Creative variation", body: "Multiple creatives ran together, so both the algorithm and I could see which angles brought in enquiries." },
          { title: "Audience relevance", body: "Messages were built around what prospective students care about at admission time." },
          { title: "Admission-focused messaging", body: "Every creative pointed to one action: enquire about admission." },
          { title: "Targeting", body: "Set up around prospective students for the admission period." },
          { title: "CBO and lifetime budgets", body: "Campaign Budget Optimisation let money flow to better-performing ad sets, and lifetime budgets were planned against the campaign period." },
          { title: "A/B testing", body: "Testing creatives against each other to keep improving cost per lead." },
        ],
      },
    ],
    conversionLens: [
      { stage: "Awareness", detail: "24.8L reach and 1.04Cr impressions." },
      { stage: "Conversion", detail: "2,461 leads at ₹286.08 average cost per lead." },
      { stage: "Business outcomes", detail: "Admissions are tracked by the college and aren't claimed here." },
    ],
    learnings: [
      "Creative variety gives the algorithm room to find better combinations.",
      "Budget structure shapes results as much as targeting does.",
      "In an admission campaign, cost per lead is the number to watch every day.",
    ],
    links: [],
  },

  /* 05 ------------------------------------------------------------------ */
  {
    slug: "anna-adarsh-group-of-schools",
    number: "05",
    title: "Anna Adarsh Group of Schools",
    client: "Anna Adarsh Group of Schools",
    kind: "Client project",
    industry: "School education",
    headline: "Talking to parents across five schools.",
    summary:
      "Education marketing for a group of five schools. Here the decision maker is almost always a parent, so the communication has to build trust first and talk about admissions second.",
    overview: {
      objective: "Support school admissions and keep each school visible to parents in its area.",
      audience: "Parents choosing a school for their children.",
      strategy: "Parent-focused messaging on Meta platforms, consistent across the group but specific to each school.",
    },
    formats: ["Meta Ads", "Facebook", "Instagram"],
    responsibilities: ["Education marketing", "Admission messaging", "Social media ad creative direction", "Communication across five schools"],
    images: [],
    chapters: [
      {
        label: "A",
        title: "How I approached it",
        items: [
          { title: "Education brand communication", body: "A school is a long-term decision. The tone stays calm, clear and reassuring." },
          { title: "Admissions and promotion", body: "Admission messages focus on what each school offers and the next step for parents." },
          { title: "Parent-first", body: "Parents look for safety, results, teachers and facilities. The creatives answer those questions." },
          { title: "Ad creative direction", body: "Clear visuals of real school life, with one message per creative." },
          { title: "Objective and audience", body: "Every campaign had one goal and one audience: parents near that school." },
        ],
      },
    ],
    learnings: [
      "With schools, you're marketing to parents. Trust comes before any offer.",
      "A group brand still needs each school to feel local.",
    ],
    links: [],
  },

  /* 06 ------------------------------------------------------------------ */
  {
    slug: "dr-vikram-agarwal-adarsh-college",
    number: "06",
    title: "Dr. Vikram Agarwal Adarsh College",
    client: "Dr. Vikram Agarwal Adarsh College",
    kind: "Client project",
    industry: "Higher education",
    headline: "Campus content students relate to.",
    summary:
      "Student and campus-focused short-form content for a college. The idea is simple: show college life the way students see it, and they'll stop to watch.",
    overview: {
      objective: "Make the college feel relatable and keep it visible to prospective students.",
      audience: "College students and school leavers.",
      strategy: "Short Reels built on familiar student moments and relatable hooks.",
    },
    formats: ["Instagram Reels"],
    responsibilities: ["Instagram content", "Short-form content", "Publishing"],
    images: [],
    chapters: [],
    creatives: { brand: "Dr. Vikram Agarwal Adarsh College", title: "The Reel" },
    learnings: ["Students engage with content that looks like their own life."],
    links: [],
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
    headline: "Local search and paid social, working together.",
    summary:
      "SEO and Meta Ads for a unisex salon. People find a salon in two ways: they search for one nearby, or they see one while scrolling. I worked on both, with one goal: get more people to enquire and book.",
    budgetReference: { label: "Campaign Budget Reference", value: "₹3,00,000", note: "The budget figure for this work. It's a reference, not verified media spend." },
    overview: {
      objective: "Help people nearby discover the salon's services and enquire or book.",
      audience: "Local customers looking for hair, skin and beauty services.",
      strategy: "Search-friendly website content for organic discovery, supported by Meta Ads focused on enquiries.",
    },
    formats: ["Website content", "Meta Ads", "Instagram"],
    responsibilities: ["SEO", "Website content", "Meta Ads", "Creative direction"],
    images: [{ src: style365Website.url, alt: "Style 365 Studio Salon website homepage", caption: "style365.one, homepage" }],
    chapters: [
      {
        label: "A",
        title: "SEO and organic discovery",
        intro: "Making the salon easy to find for people searching for its services nearby.",
        items: [
          { title: "Service discovery", body: "Each service is easy to find and easy to understand." },
          { title: "Local search intent", body: "Content shaped around how people search, such as salon near me or a service plus the area." },
          { title: "Search-friendly service pages", body: "Clear service information that both visitors and search engines can read quickly." },
          { title: "Keyword relevance", body: "Service and location keywords used naturally in the content." },
          { title: "Local visibility and optimisation", body: "Improving the website so the salon shows up in local results." },
        ],
      },
      {
        label: "B",
        title: "Meta Ads and paid social",
        intro: "Reaching people nearby on Facebook and Instagram with service-led ads.",
        items: [
          { title: "Local targeting", body: "Reaching people close enough to visit." },
          { title: "Service promotions", body: "Ads built around specific services and offers." },
          { title: "Creative variation", body: "Different creatives to learn which services and angles people respond to." },
          { title: "Enquiry-focused messaging", body: "Every ad points to one action: enquire or book." },
          { title: "Traffic to website and social", body: "Sending people to the website and Instagram to see more before they book." },
        ],
      },
    ],
    journey: {
      label: "C",
      title: "From discovery to booking",
      intro: "An illustrative path showing how I think about a local service business. It's the journey the work was built around, not a report of results.",
      steps: [
        { title: "Discovery", body: "Someone sees an ad or finds the salon in search." },
        { title: "Profile or website visit", body: "They check the Instagram profile or the website." },
        { title: "Service exploration", body: "They look at a specific service and what it includes." },
        { title: "Enquiry", body: "They reach out with a question." },
        { title: "Booking", body: "They book an appointment through the salon's contact channels." },
      ],
      note: "Each step needs to feel easy, so the website, the profile and the ads all have to tell the same story.",
    },
    learnings: [
      "Local businesses need both search and social. They reach people at different moments.",
      "For a salon, showing the result of a service is the strongest creative.",
    ],
    links: [
      { label: "Website", url: "https://style365.one/" },
      { label: "Instagram @style365official", url: "https://www.instagram.com/style365official/" },
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
    headline: "Selling the place before the property.",
    summary:
      "Social media and Meta lead generation for a property brand. For buyers, the location is half the decision, so the content leads with the place itself.",
    overview: {
      objective: "Help potential buyers discover the location and the project, and enquire.",
      audience: "Home buyers and investors researching property in the area.",
      strategy: "Location-led visual storytelling on Instagram, supported by Meta lead generation campaigns.",
    },
    formats: ["Instagram Reels", "Meta lead ads"],
    responsibilities: ["Social media marketing", "Meta lead generation campaigns", "Content direction"],
    images: [],
    chapters: [],
    journey: {
      label: "A",
      title: "From discovery to enquiry",
      intro: "How location-focused content helps a property buyer move forward.",
      steps: [
        { title: "Discover the place", body: "Aerial Reels show the coast, the roads and what's nearby." },
        { title: "Get curious about the project", body: "People who like the area look at the project itself." },
        { title: "Enquire", body: "Interested buyers reach out or fill in a lead form." },
      ],
      note: "I'm not claiming any number of enquiries or sales from this Reel.",
    },
    creatives: { brand: "Asta Properties", title: "The Reel" },
    learnings: ["Property buyers need to trust the location before they look at the offer."],
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
    headline: "Building curiosity before a launch.",
    summary:
      "Real estate social media for a property developer. This post is from the teaser stage, where the job is to make people curious about what's coming before anything is for sale.",
    overview: {
      objective: "Create anticipation for a new project in Korattur and grow interest before launch.",
      audience: "Home buyers looking in and around Korattur.",
      strategy: "Reveal a little at a time, starting with the location.",
    },
    formats: ["Instagram posts"],
    responsibilities: ["Social media content", "Launch communication"],
    images: [],
    chapters: [],
    journey: {
      label: "A",
      title: "From teaser to enquiry",
      intro: "Where a launch teaser sits in a buyer's journey.",
      steps: [
        { title: "Teaser", body: "Reveal the location and promise something exceptional." },
        { title: "Follow along", body: "Interested buyers follow the page to see what comes next." },
        { title: "Launch and enquiry", body: "When details go live, they're already warm and ready to ask." },
      ],
    },
    creatives: { brand: "Ambrig Homes", title: "The post" },
    learnings: ["A good teaser gives away just enough to make people want the rest."],
    links: [
      { label: "Ambrig Homes website", url: "https://ambrighomes.com/" },
    ],
  },

  /* 10 ------------------------------------------------------------------ */
  {
    slug: "neet-guide",
    number: "10",
    title: "NEET Guide",
    client: "NEET Guide",
    kind: "Employer work",
    industry: "NEET preparation",
    headline: "Chapter-wise help for NEET students.",
    summary:
      "NEET Guide is a separate education brand from TopAll. It organises help chapter by chapter across Physics, Chemistry, Botany and Zoology, with AI-supported doubt clarification for each one. My work here is educational content marketing and SEO.",
    ctas: [{ label: "Visit neet.guide", url: "https://neet.guide/" }],
    overview: {
      objective: "Help NEET students find chapter-level answers quickly, and make the site easy to discover through search.",
      audience: "NEET aspirants revising specific chapters.",
      strategy: "One clear page per chapter and subject, written and structured for the way students search.",
    },
    formats: ["Chapter resource pages", "Subject quizzes", "Revision content", "AI doubt clarification"],
    responsibilities: ["Educational content marketing", "Platform content planning", "Blog and SEO content"],
    images: [{ src: neetGuideHome.url, alt: "NEET Guide homepage", caption: "neet.guide, homepage" }],
    chapters: [],
    pages: {
      title: "Example pages",
      intro: "A few real chapter pages, one from each subject.",
      items: [
        { group: "Physics", label: "Electromagnetic Induction, Class 12", url: "https://neet.guide/ask-your-doubts/physics/class-xii-electromagnetic-induction" },
        { group: "Chemistry", label: "Chemical Kinetics, Class 12", url: "https://neet.guide/ask-your-doubts/chemistry/class-xii-chemical-kinetics" },
        { group: "Botany", label: "Photosynthesis in Higher Plants, Class 11", url: "https://neet.guide/ask-your-doubts/botany/class-xi-photosynthesis-in-higher-plants" },
        { group: "Zoology", label: "Animal Kingdom, Class 11", url: "https://neet.guide/ask-your-doubts/zoology/class-xi-animal-kingdom" },
        { group: "Admissions", label: "Ask about admissions", url: "https://neet.guide/ask-about-admissions" },
      ],
    },
    learnings: ["Students search by chapter, so the site is organised by chapter."],
    links: [{ label: "NEET Guide website", url: "https://neet.guide/" }],
  },

  /* 11 ------------------------------------------------------------------ */
  {
    slug: "colan-infotech",
    number: "11",
    title: "Colan Infotech",
    client: "Colan Infotech",
    kind: "Employer work",
    industry: "Technology services",
    highlight: { value: "300+", label: "organic B2B leads" },
    headline: "B2B social media that earns leads organically.",
    summary:
      "As Digital Marketing Executive, I managed LinkedIn, Facebook and Instagram for the company and its client brands, including three LinkedIn company pages. The aim was to build visibility and bring in B2B leads without paid ads.",
    results: {
      title: "From my time at Colan",
      metrics: [
        { label: "Organic B2B leads", value: "300+" },
        { label: "LinkedIn followers", value: "45K to 60K", note: "Within six months" },
      ],
      note: "As reported on my resume.",
    },
    overview: {
      objective: "Build visibility and generate organic B2B leads.",
      audience: "Tech professionals, hiring managers and companies looking for technology partners.",
      strategy: "A varied LinkedIn content calendar mixing industry content, interactive posts and humour across three pages.",
    },
    formats: ["LinkedIn posts", "Polls and quizzes", "Memes", "Educational posts"],
    responsibilities: ["Social media management", "LinkedIn content strategy", "Content calendars", "Managing three company pages", "Organic lead generation"],
    images: [],
    chapters: [
      {
        label: "A",
        title: "Content strategy",
        intro: "A B2B feed doesn't have to be dry. The mix kept people coming back.",
        items: [
          { title: "Technology and AI content", body: "Informative posts on technology and AI that build credibility with a technical audience." },
          { title: "Industry insights", body: "What's changing in the industry and why it matters." },
          { title: "Polls and quizzes", body: "Easy ways for people to take part, which lifts engagement on LinkedIn." },
          { title: "Memes", body: "Relatable developer humour that makes a B2B page feel human." },
        ],
      },
      {
        label: "B",
        title: "Selected work",
        items: [
          { title: "Three LinkedIn pages, one calendar", body: "Content planned and managed for the Madurai, Pernambut and Bangalore pages, so each stayed active and on-brand." },
          { title: "Organic lead generation", body: "Consistent LinkedIn content that brought in 300+ B2B leads without ad spend." },
          { title: "Audience growth", body: "LinkedIn followers grew from 45K to 60K in six months." },
        ],
      },
    ],
    learnings: [
      "B2B audiences still respond to personality. Variety keeps a professional feed alive.",
      "A content calendar is what keeps three pages consistent.",
    ],
    links: [],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
