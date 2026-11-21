/**
 * Individual content pieces. To add a new piece, copy an entry and edit it.
 * - Leave `title`, `url` or `image` as null when you don't have them yet;
 *   the site shows "to be added" rather than guessing.
 * - Only put verified numbers in `metrics`.
 */

export type Platform = "YouTube" | "Instagram" | "Facebook" | "LinkedIn" | "Telegram";
export type Format =
  | "Short"
  | "Reel"
  | "Static Post"
  | "Carousel"
  | "Story"
  | "Poll / Quiz"
  | "Job Post"
  | "Ad Creative";
export type Category =
  | "Instagram Reels"
  | "Instagram Static Posts"
  | "Instagram Carousels"
  | "Stories & Interactive"
  | "YouTube Shorts"
  | "Facebook Content"
  | "LinkedIn Content"
  | "Educational Content"
  | "Promotional Creatives"
  | "Trending Content"
  | "Campaign Creatives";

export type ProjectType = "Personal project" | "Client work" | "Employer work";

export interface Metric {
  label: string;
  value: string;
  note?: string;
}

export interface ContentItem {
  slug: string;
  brand: string;
  projectType: ProjectType;
  platform: Platform;
  format: Format;
  categories: Category[];
  /** Exact published title. null = to be added. */
  title: string | null;
  /** Short working label used when the title is still missing. */
  workingLabel: string;
  objective: string;
  audienceInsight: string;
  idea: string;
  execution: string;
  contribution: string[];
  contributionConfirmed: boolean;
  metrics: Metric[];
  metricsSource?: string;
  /** Direct link to this individual piece. Never a profile link. */
  url: string | null;
  image: { src: string; alt: string; orientation: "portrait" | "landscape" | "square" } | null;
  status: "published" | "awaiting-details";
  featured?: boolean;
}

const YT_SOURCE = "Public view count shown on YouTube, checked 21 Nov 2026.";
const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/oar2.jpg`;
const artistContribution = [
  "Concept & topic selection",
  "Research",
  "Script & hook",
  "Faceless video edit",
  "Title, tags & packaging",
  "Publishing",
];

export const contentItems: ContentItem[] = [
  {
    slug: "the-artist-mode-fade-haircut",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts", "Educational Content"],
    title: "Finding Your Ideal Fade Haircut! — choose the best one for you!",
    workingLabel: "Fade haircut guide",
    objective:
      "Help young men pick a fade that suits them — a quick, useful decision aid that people want to watch to the end and share with friends.",
    audienceInsight:
      "Most guys know they want a “fade” but can't tell a low, mid, high or taper fade apart — and they usually discover that in the barber's chair. The question “which one suits me?” is personal, visual and very common.",
    idea:
      "Turn the decision into a side-by-side comparison: show the fade variations one after another and let the viewer pick their favourite. The on-screen prompt “which one suits you best” makes the viewer an active participant.",
    execution:
      "A fully faceless format built on clear illustrations of each fade. The hook is the question itself, shown in the first second. Fast cuts between styles keep the pacing tight, and the comparison invites rewatching and comments about which style people chose.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "19M+", note: "Single Short — not total channel views" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/3tl3vXdl5_Y",
    image: { src: thumb("3tl3vXdl5_Y"), alt: "Illustrated fade haircut with the text 'which one suits you best'", orientation: "portrait" },
    status: "published",
    featured: true,
  },
  {
    slug: "the-artist-mode-mullet-high-taper",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts", "Trending Content"],
    title: "How Men Can Glow Up Without Makeup! — Mullet high taper!",
    workingLabel: "Mullet high taper glow-up",
    objective: "Ride the interest in modern mullets while positioning a haircut as the simplest “glow-up” a man can make.",
    audienceInsight:
      "Many young men want to look better but aren't interested in makeup or complicated routines. A haircut is a low-effort, high-impact change they're already open to.",
    idea: "Frame a trending cut — the mullet with a high taper — as a glow-up that needs no makeup.",
    execution:
      "A promise-led title (“glow up without makeup”) paired with a specific, searchable style name. The short format focuses on the visual change so the payoff is clear within seconds.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "1.2M+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/nmZvx5hHays",
    image: { src: thumb("nmZvx5hHays"), alt: "Thumbnail of the mullet high taper glow-up Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-aesthetic-poses",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts"],
    title: "Aesthetic poses for guys! — level up your IG feed!",
    workingLabel: "Aesthetic poses for guys",
    objective: "Give men practical, copyable pose ideas for better photos — content that gets saved and tried out.",
    audienceInsight:
      "Guys often feel awkward in front of a camera and don't know how to pose. Many care about how their Instagram feed looks but rarely find advice made for them.",
    idea: "A quick-fire set of poses guys can copy straight away to level up their feed.",
    execution:
      "Each pose is shown clearly and briefly so viewers can screenshot or rewatch. The title connects the tip directly to a goal the audience already has — a better IG feed.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "1.1M+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/TqoEk_mDpks",
    image: { src: thumb("TqoEk_mDpks"), alt: "Thumbnail of the aesthetic poses for guys Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-no-face-photo-ideas",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts"],
    title: "Aesthetic No-face photo ideas for guys! — Get Inspired!",
    workingLabel: "No-face photo ideas",
    objective: "Serve men who want stylish photos without showing their face — a niche that matches the channel's own faceless identity.",
    audienceInsight:
      "Plenty of people want an aesthetic feed but are camera-shy or value privacy. “No-face” photos let them post confidently without being on show.",
    idea: "A visual list of no-face photo ideas — shots built around angles, silhouettes, hands, outfits and surroundings.",
    execution:
      "Image-led and fast. The title names the exact need (“no-face”) and the audience (“for guys”), which makes the Short easy to find and easy to relate to.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "995K+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/aPgGCdFfUw4",
    image: { src: thumb("aPgGCdFfUw4"), alt: "Thumbnail of the no-face photo ideas Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-gym-picture-ideas",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts"],
    title: "Aesthetic Gym Picture Ideas — Elevate your IG feed!",
    workingLabel: "Gym picture ideas",
    objective: "Extend the successful photo-ideas format into a specific setting the audience spends time in: the gym.",
    audienceInsight:
      "Gym-goers like to share progress, but most gym photos look the same. They want shots that feel aesthetic rather than like a typical mirror selfie.",
    idea: "Apply the proven “photo ideas” formula to gym settings.",
    execution:
      "Same structure as the other photo-idea Shorts — clear, copyable shots — with the gym as the hook. A good example of reusing a format that already works with a new context.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "537K+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/uqWrr917SWc",
    image: { src: thumb("uqWrr917SWc"), alt: "Thumbnail of the gym picture ideas Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-no-face-photo-ideas-part-2",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts"],
    title: "Aesthetic No-Face Photo ideas for Guys — pt 2",
    workingLabel: "No-face photo ideas, part 2",
    objective: "Follow up on a topic the audience had already responded to strongly.",
    audienceInsight: "When a topic clearly resonates, viewers want more of it — a sequel meets that demand directly.",
    idea: "A second set of no-face photo ideas, labelled as part 2.",
    execution:
      "Keeps the title wording close to the original so returning viewers recognise it, while the “pt 2” signals fresh ideas.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "492K+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/lp_Sn3lFe9o",
    image: { src: thumb("lp_Sn3lFe9o"), alt: "Thumbnail of the no-face photo ideas part 2 Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-trending-hairstyles-2023",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts", "Trending Content"],
    title: "Must try Trending Hairstyles for Boys in 2023!",
    workingLabel: "Trending hairstyles 2023",
    objective: "Capture timely search and browsing interest around the year's trending hairstyles.",
    audienceInsight: "Every year young men look for “what's in” before their next haircut. A dated, trend-led title answers that directly.",
    idea: "A round-up of the hairstyles trending that year.",
    execution: "A time-stamped title (“2023”) and a direct instruction (“must try”) create urgency and relevance.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "82K+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/adp7q1HtkaA",
    image: { src: thumb("adp7q1HtkaA"), alt: "Thumbnail of the trending hairstyles 2023 Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-glow-up-tips-72",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts", "Educational Content"],
    title: "Glow up tips #72 — Boost testosterone naturally and reduce stress!",
    workingLabel: "Glow up tips series",
    objective: "Build a recurring, numbered series that brings viewers back and keeps the channel publishing consistently.",
    audienceInsight: "Self-improvement audiences like small, repeatable tips. Numbered series also signal there's a whole library to explore.",
    idea: "A long-running “Glow up tips #” series — each episode one focused tip on grooming, health or lifestyle.",
    execution:
      "Consistent title structure (“Glow up tips #number — benefit”) so episodes are instantly recognisable. Each one leads with the benefit to the viewer.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "46K+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/nX_mg1_Fc8I",
    image: { src: thumb("nX_mg1_Fc8I"), alt: "Thumbnail of Glow up tips #72 Short", orientation: "portrait" },
    status: "published",
  },
  {
    slug: "the-artist-mode-hair-fall-tamil",
    brand: "The Artist Mode",
    projectType: "Personal project",
    platform: "YouTube",
    format: "Short",
    categories: ["YouTube Shorts", "Educational Content"],
    title: "How to stop hair fall in 4 steps — In தமிழ்!",
    workingLabel: "Hair fall tips in Tamil",
    objective: "Test regional-language content with a practical, high-interest grooming topic.",
    audienceInsight: "Hair fall is a common worry, and advice in your own language feels more trustworthy and easier to follow.",
    idea: "A four-step hair-fall routine explained in Tamil.",
    execution:
      "A numbered promise (“4 steps”) plus a language tag in the title so Tamil-speaking viewers know immediately it's made for them.",
    contribution: artistContribution,
    contributionConfirmed: true,
    metrics: [{ label: "Views", value: "22K+" }],
    metricsSource: YT_SOURCE,
    url: "https://www.youtube.com/shorts/1q8YmUTeUV8",
    image: { src: thumb("1q8YmUTeUV8"), alt: "Thumbnail of the Tamil hair fall tips Short", orientation: "portrait" },
    status: "published",
  },

  /* ---------- Entries waiting for the actual creative, title and link ---------- */
  {
    slug: "style-365-hair-transformation-reel",
    brand: "Style 365 Studio Salon",
    projectType: "Client work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Promotional Creatives"],
    title: null,
    workingLabel: "Hair transformation reel",
    objective: "Show a salon service through its result so local viewers can picture it for themselves and enquire.",
    audienceInsight: "People choose a salon by the results they see. A visible transformation is more convincing than any description.",
    idea: "A before-and-after transformation built around one service.",
    execution: "Details of the hook, edit and caption to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "style-365-service-post",
    brand: "Style 365 Studio Salon",
    projectType: "Client work",
    platform: "Instagram",
    format: "Static Post",
    categories: ["Instagram Static Posts", "Promotional Creatives"],
    title: null,
    workingLabel: "Service promotion post",
    objective: "Make a specific salon service clear and easy to book.",
    audienceInsight: "Local customers want to quickly know what's offered and why it's worth the visit.",
    idea: "A service-led creative focused on a single offer.",
    execution: "Visual and caption details to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "sofa-42-collection-carousel",
    brand: "Sofa 42",
    projectType: "Client work",
    platform: "Instagram",
    format: "Carousel",
    categories: ["Instagram Carousels", "Promotional Creatives"],
    title: null,
    workingLabel: "Sofa collection carousel",
    objective: "Present a collection so buyers can compare pieces and feel encouraged to visit the showroom.",
    audienceInsight: "Furniture buyers want to see shape, fabric and how a piece looks in a room before they travel to see it.",
    idea: "A swipeable product showcase moving from the hero piece to details and room context.",
    execution: "Slide structure and copy to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "shoutout-campus-campaign-showcase",
    brand: "Shoutout Campus",
    projectType: "Client work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Campaign Creatives"],
    title: null,
    workingLabel: "Creator campaign showcase",
    objective: "Show what a creator-led brand promotion looks like on the feed.",
    audienceInsight: "Promotions land better when they feel like the creator's own content rather than a traditional advert.",
    idea: "A campaign showcase built around creator-led content.",
    execution: "Details to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "colan-infotech-staffing-job-post",
    brand: "Colan Infotech",
    projectType: "Employer work",
    platform: "LinkedIn",
    format: "Job Post",
    categories: ["LinkedIn Content", "Promotional Creatives"],
    title: null,
    workingLabel: "Contract staffing job post",
    objective: "Promote contract staffing requirements (e.g. PHP, .NET, Java, MERN, Node.js, Data Engineer) to reach candidates and potential B2B clients.",
    audienceInsight: "Tech professionals and hiring managers scan LinkedIn quickly — role, stack and location need to be clear at a glance.",
    idea: "A clear, skimmable job post for a specific tech role.",
    execution: "Creative and copy details to be added.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "colan-infotech-linkedin-poll",
    brand: "Colan Infotech",
    projectType: "Employer work",
    platform: "LinkedIn",
    format: "Poll / Quiz",
    categories: ["LinkedIn Content", "Stories & Interactive"],
    title: null,
    workingLabel: "Tech poll / quiz",
    objective: "Encourage interaction on the company pages with low-effort, tech-relevant questions.",
    audienceInsight: "Developers enjoy sharing opinions about tools and tech — a quick poll gives them an easy way to take part.",
    idea: "A poll or quiz on a technology topic.",
    execution: "Question and options to be added.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "colan-infotech-ai-tech-post",
    brand: "Colan Infotech",
    projectType: "Employer work",
    platform: "LinkedIn",
    format: "Static Post",
    categories: ["LinkedIn Content", "Educational Content"],
    title: null,
    workingLabel: "AI & technology explainer",
    objective: "Position the company as knowledgeable about AI and modern technology.",
    audienceInsight: "B2B audiences follow companies that help them keep up with fast-moving technology.",
    idea: "An educational post on an AI or technology topic.",
    execution: "Details to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "colan-infotech-tech-meme",
    brand: "Colan Infotech",
    projectType: "Employer work",
    platform: "LinkedIn",
    format: "Static Post",
    categories: ["LinkedIn Content", "Trending Content"],
    title: null,
    workingLabel: "Developer meme",
    objective: "Add personality to a B2B feed and earn easy engagement.",
    audienceInsight: "Developers share humour about their daily work — relatable memes humanise a company page.",
    idea: "A meme built on a familiar developer moment.",
    execution: "Details to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "neet-guide-educational-post",
    brand: "NEET Guide",
    projectType: "Employer work",
    platform: "Instagram",
    format: "Carousel",
    categories: ["Instagram Carousels", "Educational Content"],
    title: null,
    workingLabel: "NEET chapter explainer",
    objective: "Help NEET aspirants revise a topic while building trust in the brand.",
    audienceInsight: "Exam aspirants save content that makes revision faster and easier.",
    idea: "A chapter-based educational carousel.",
    execution: "Details to be added with the creative.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
  {
    slug: "anna-adarsh-admission-ad-creative",
    brand: "Anna Adarsh Women's College",
    projectType: "Client work",
    platform: "Facebook",
    format: "Ad Creative",
    categories: ["Facebook Content", "Campaign Creatives"],
    title: null,
    workingLabel: "Admission campaign ad creative",
    objective: "Generate admission enquiries through Meta lead ads.",
    audienceInsight: "Students and parents compare colleges during admission season and need clear reasons to enquire.",
    idea: "One of the creatives used in the admission lead-generation campaign.",
    execution: "Creative details to be added. Individual creative metrics are not shown unless supplied.",
    contribution: ["Contribution for this piece to be confirmed"],
    contributionConfirmed: false,
    metrics: [],
    url: null,
    image: null,
    status: "awaiting-details",
  },
];

export const contentBySlug = (slug: string) => contentItems.find((c) => c.slug === slug);

export const displayTitle = (item: ContentItem) => item.title ?? item.workingLabel;
