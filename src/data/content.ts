/**
 * Individual content pieces. To add one, copy an entry and edit it.
 * Only real creatives with their own link belong here. Only verified numbers go in `metrics`.
 */
import vvtGirlsReel from "@/assets/vvt-girls-neet-campus-reel.jpg.asset.json";
import vvtAiReel from "@/assets/vvt-ig-DM2lwC9pwzN-post.jpg.asset.json";
import vvtChemQuiz from "@/assets/vvt-ig-Ddl5MBstGRm-post.jpg.asset.json";
import vvtBotany from "@/assets/vvt-ig-Ddod6mnmsS9-post.jpg.asset.json";
import vvtStudents from "@/assets/vvt-ig-DfCNRdwM7KZ-post.jpg.asset.json";
import vvtArticle1 from "@/assets/vvt-article-1.jpg.asset.json";
import vvtArticle2 from "@/assets/vvt-article-2.jpg.asset.json";
import vvtArticle3 from "@/assets/vvt-article-3.jpg.asset.json";
import vvtArticle4 from "@/assets/vvt-article-4.jpg.asset.json";
import topallChon from "@/assets/topall-chondrichthyes-guide.jpg.asset.json";
import topallYoutube from "@/assets/topall-youtube-channel.jpg.asset.json";
import notebooklm from "@/assets/notebooklm-magnetism-and-matter.jpg.asset.json";
import drVikramReel from "@/assets/dr-vikram-agarwal-college-reel.jpg.asset.json";
import astaReel from "@/assets/asta-properties-aerial-reel.jpg.asset.json";
import ambrigPost from "@/assets/ambrig-homes-korattur-post.jpg.asset.json";

export type Platform = "YouTube" | "Instagram" | "Website" | "NotebookLM";
export type Format = "Short" | "Reel" | "Static Post" | "Carousel" | "Video Lesson" | "Channel" | "Blog Article" | "AI Video Workflow";
export type Category =
  | "YouTube Shorts"
  | "Instagram Reels"
  | "Instagram Posts"
  | "Educational Content"
  | "Promotional Creatives"
  | "Trending Content"
  | "Website Content"
  | "AI Content";

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
  title: string;
  objective: string;
  audienceInsight: string;
  idea: string;
  execution: string;
  contribution: string[];
  metrics: Metric[];
  metricsSource?: string;
  /** Direct link to this individual piece. Never a profile link (except format "Channel"). */
  url: string | null;
  ctaLabel?: string;
  secondaryLinks?: { label: string; url: string }[];
  internalLink?: { label: string; to: "/ai-production" };
  /** Shown instead of a link when the piece is private (e.g. a NotebookLM workspace). */
  privateNote?: string;
  image: { src: string; alt: string; orientation: "portrait" | "landscape" | "square" };
  /** One of the million-view Shorts shown in "More Than One Viral Hit". */
  viral?: boolean;
}

const YT_SOURCE = "View count as displayed on YouTube, November 2026.";
const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/oar2.jpg`;
const artistContribution = ["Topic research", "Script and hook", "Faceless edit", "Title and packaging", "Publishing"];
const short = (
  id: string,
  slug: string,
  title: string,
  views: string,
  rest: Pick<ContentItem, "objective" | "audienceInsight" | "idea" | "execution"> & { categories?: Category[]; viral?: boolean },
): ContentItem => ({
  slug,
  brand: "The Artist Mode",
  projectType: "Personal project",
  platform: "YouTube",
  format: "Short",
  categories: rest.categories ?? ["YouTube Shorts"],
  title,
  objective: rest.objective,
  audienceInsight: rest.audienceInsight,
  idea: rest.idea,
  execution: rest.execution,
  contribution: artistContribution,
  metrics: [{ label: "Views", value: views }],
  metricsSource: YT_SOURCE,
  url: `https://www.youtube.com/shorts/${id}`,
  ctaLabel: "Watch on YouTube",
  image: { src: thumb(id), alt: `Thumbnail of the Short: ${title}`, orientation: "portrait" },
  ...(rest.viral ? { viral: true } : {}),
});

export const contentItems: ContentItem[] = [
  /* ---------- TopAll ---------- */
  {
    slug: "topall-class-chondrichthyes-guide",
    brand: "TopAll",
    projectType: "Employer work",
    platform: "Website",
    format: "Video Lesson",
    categories: ["Educational Content", "Website Content"],
    title: "Class Chondrichthyes Guide for NEET UG Biology",
    objective: "Give NEET students a free, focused lesson on one chapter topic and then move them straight into chapter MCQs on TopAll.",
    audienceInsight: "Students revising Animal Kingdom want one clear explanation of each class, with examples, and then a quick way to test themselves.",
    idea: "Turn a single NCERT topic into a complete learning page: a short video explainer, a written summary and a link to practise.",
    execution: "The page leads with the video so students can learn in a few minutes, then nudges them with one line: revise the topic, then practise chapter MCQs on TopAll. The same video also lives on YouTube, so it works for search on both platforms.",
    contribution: ["Educational video production", "Page content", "SEO for the lesson page", "Distribution on YouTube"],
    metrics: [],
    url: "https://prep.topall.app/neet/biology/animal-kingdom/videos/class-chondrichthyes-guide-topall",
    ctaLabel: "Read on TopAll",
    secondaryLinks: [{ label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=Xpbwn_qdAvc" }],
    image: { src: topallChon.url, alt: "TopAll Class Chondrichthyes Guide page with an embedded video lesson", orientation: "landscape" },
  },
  {
    slug: "topall-youtube-educational-videos",
    brand: "TopAll",
    projectType: "Employer work",
    platform: "YouTube",
    format: "Channel",
    categories: ["Educational Content", "AI Content"],
    title: "TopAll on YouTube: chapter explainers for NEET and JEE",
    objective: "Build a library of subject videos that students find through YouTube search and that lead them back to free practice on TopAll.",
    audienceInsight: "Students search YouTube for specific concepts like p-n junctions or blackbody radiation, usually the night before a test.",
    idea: "One concept per video, named exactly the way students search for it, with the class and chapter in the title.",
    execution: "Clean, branded thumbnails with the concept as the headline. Titles follow one pattern: concept, explained simply, class, chapter. The NotebookLM videos I produce for TopAll are published here alongside the rest of the library.",
    contribution: ["NotebookLM video production", "Titles and packaging", "Publishing"],
    metrics: [],
    url: "https://www.youtube.com/@topallapplication/videos",
    ctaLabel: "Visit TopAll on YouTube",
    image: { src: topallYoutube.url, alt: "TopAll YouTube channel showing physics explainer videos", orientation: "landscape" },
  },
  {
    slug: "topall-notebooklm-magnetism-and-matter",
    brand: "TopAll",
    projectType: "Employer work",
    platform: "NotebookLM",
    format: "AI Video Workflow",
    categories: ["AI Content", "Educational Content"],
    title: "Magnetism and Matter: one chapter, many videos",
    objective: "Turn a Class 12 Physics chapter into a set of short and long educational videos without losing accuracy.",
    audienceInsight: "JEE and NEET students need the same chapter explained at different depths: a quick Short for revision and a longer video for understanding.",
    idea: "Feed NotebookLM the NCERT chapter as the only source, then use detailed prompts to generate focused videos on each sub-topic.",
    execution: "From one source I produced cinematic explainers such as The Dipole in a Uniform Magnetic Field, Diamagnetism and Decoding Ferromagnetism for JEE, plus Shorts like Why Magnetic Monopoles Cannot Exist. Every prompt set the audience, the learning goal, the tone and the structure.",
    contribution: ["Source selection", "Prompt writing", "Video generation", "Review and refinement"],
    metrics: [],
    url: null,
    privateNote: "This is my private NotebookLM workspace, so there's no public link.",
    internalLink: { label: "See the full AI production workflow", to: "/ai-production" },
    image: { src: notebooklm.url, alt: "NotebookLM workspace for Magnetism and Matter with generated video outputs", orientation: "landscape" },
  },

  /* ---------- VVT Coaching: Instagram ---------- */
  {
    slug: "vvt-coaching-girls-neet-campus-reel",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Promotional Creatives"],
    title: "VVT Coaching Centre Girls NEET Campus",
    objective: "Promote the girls-only NEET repeater batch at the residential Pallikaranai campus.",
    audienceInsight: "For girls taking a repeat year, and for their parents, safety and a focused environment matter as much as faculty.",
    idea: "Show the real students on the real campus, with one bold line on screen: Girls NEET Campus.",
    execution: "Group energy in the first frame, the campus name in large text, and a caption that lists what parents ask about: expert faculty, AI analysis, mentoring, a secure residential campus and scholarships.",
    contribution: ["Instagram content planning", "Caption and hashtags", "Publishing"],
    metrics: [{ label: "Views", value: "5,671" }],
    metricsSource: "View count as shown on the Instagram profile grid when captured.",
    url: "https://www.instagram.com/reel/DMuMKBtJuaT/",
    ctaLabel: "View Original Reel",
    image: { src: vvtGirlsReel.url, alt: "VVT Coaching Centre Girls NEET Campus Reel with students outside the campus", orientation: "portrait" },
  },
  {
    slug: "vvt-coaching-ai-analysis-reel",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Promotional Creatives"],
    title: "Crack NEET with VVT's AI Analysis",
    objective: "Explain VVT's AI performance analysis app in a way students immediately get.",
    audienceInsight: "Students don't care about the word AI. They care about knowing exactly which subject is pulling their score down.",
    idea: "Show a real score breakdown on screen: marks, percentage and subject-wise results.",
    execution: "A simple promise in the caption, Analyse. Adapt. Achieve., backed by what the app actually does: track progress, find weak areas and give study insights.",
    contribution: ["Instagram content planning", "Caption", "Publishing"],
    metrics: [],
    url: "https://www.instagram.com/reel/DM2lwC9pwzN/",
    ctaLabel: "View Original Reel",
    image: { src: vvtAiReel.url, alt: "VVT Reel showing a NEET score breakdown with the text Crack NEET with VVT's AI Analysis", orientation: "portrait" },
  },
  {
    slug: "vvt-coaching-chemistry-quiz-reel",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Educational Content"],
    title: "NEET Chemistry Challenge: Quiz Time",
    objective: "Get students to comment, not just scroll.",
    audienceInsight: "Aspirants love testing themselves, and a single MCQ is quick enough to try in the feed.",
    idea: "One MCQ from Some Basic Concepts of Chemistry, with the answer pinned in the comments.",
    execution: "Four clear options on screen, a direct ask to drop the answer below, and the answer hidden in a pinned comment so people open the comments to check.",
    contribution: ["Content idea", "Caption", "Publishing", "Comment management"],
    metrics: [],
    url: "https://www.instagram.com/reel/Ddl5MBstGRm/",
    ctaLabel: "View Original Reel",
    image: { src: vvtChemQuiz.url, alt: "VVT Quiz Time Reel with a NEET chemistry MCQ", orientation: "portrait" },
  },
  {
    slug: "vvt-coaching-botany-challenge-post",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Instagram",
    format: "Static Post",
    categories: ["Instagram Posts", "Educational Content"],
    title: "NEET Botany Challenge of the Day",
    objective: "Build a daily habit of practice on the page and earn saves and shares.",
    audienceInsight: "Students revise with friends. A question worth sending to a study partner travels further than a promo.",
    idea: "A recurring Challenge of the Day series, this one on Biomolecules and Amino Acids.",
    execution: "A clean series design so it's recognisable in the feed, and a caption that asks people to comment, save it for revision and share it with a study partner.",
    contribution: ["Series concept", "Caption", "Publishing"],
    metrics: [],
    url: "https://www.instagram.com/p/Ddod6mnmsS9/",
    ctaLabel: "View Original Post",
    image: { src: vvtBotany.url, alt: "NEET Botany Challenge of the Day post on Biomolecules", orientation: "square" },
  },
  {
    slug: "vvt-coaching-student-voices-reel",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Promotional Creatives"],
    title: "Hear it straight from our students",
    objective: "Let current students explain what studying at VVT is like.",
    audienceInsight: "Parents and students trust other students more than any brochure.",
    idea: "Short to-camera interviews with students, named on screen.",
    execution: "Simple setup on campus, branded lower thirds and a caption inviting people to discover VVT through their experiences.",
    contribution: ["Instagram content planning", "Publishing"],
    metrics: [],
    url: "https://www.instagram.com/reel/DfCNRdwM7KZ/",
    ctaLabel: "View Original Reel",
    image: { src: vvtStudents.url, alt: "VVT student speaking to camera on campus", orientation: "portrait" },
  },

  /* ---------- VVT Coaching: website articles ---------- */
  {
    slug: "vvt-coaching-ai-error-exams-article",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Website",
    format: "Blog Article",
    categories: ["Website Content", "Educational Content"],
    title: "How VVT's AI-Based Error Exams Help NEET Students Correct Their Mistakes and Improve Scores",
    objective: "Explain a product feature through the problem it solves: repeating the same mistakes.",
    audienceInsight: "Every NEET student knows the frustration of losing marks on concepts they thought they knew.",
    idea: "Show how mistakes can be tracked and fixed with targeted practice.",
    execution: "Problem first, then how error exams work, then why it improves scores. Written to rank for the questions students and parents search.",
    contribution: ["Publishing", "On-page SEO"],
    metrics: [],
    url: "https://www.vvtcoaching.com/featured/how-vvt-ai-error-exams-improve-neet-scores/",
    ctaLabel: "Read the Article",
    image: { src: vvtArticle1.url, alt: "Cover image for the VVT article on AI-based error exams", orientation: "landscape" },
  },
  {
    slug: "vvt-coaching-neet-exam-day-strategy-article",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Website",
    format: "Blog Article",
    categories: ["Website Content", "Educational Content"],
    title: "NEET Exam Day Strategy: Morning to Last Minute Guide",
    objective: "Be the page students find in the days before NEET.",
    audienceInsight: "Right before the exam, students search for practical answers: reporting time, documents, OMR tips and how to stay calm.",
    idea: "A step-by-step plan for exam day, from the morning to the last minute.",
    execution: "Time-sensitive, practical and easy to skim, with clear sections students can jump to.",
    contribution: ["Publishing", "On-page SEO"],
    metrics: [],
    url: "https://www.vvtcoaching.com/featured/neet-exam-day-strategy-2026-morning-to-last-minute/",
    ctaLabel: "Read the Article",
    image: { src: vvtArticle2.url, alt: "Cover image for the NEET exam day strategy article", orientation: "landscape" },
  },
  {
    slug: "vvt-coaching-neet-chemistry-45-minute-article",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Website",
    format: "Blog Article",
    categories: ["Website Content", "Educational Content"],
    title: "How to Solve NEET Chemistry Faster: 45-Minute Strategy",
    objective: "Give students a concrete time plan for one section of the paper.",
    audienceInsight: "Chemistry can be the fastest section to score in, but only if students choose questions and manage time well.",
    idea: "A 45-minute plan covering question selection, time control and chapter priority.",
    execution: "A specific number in the title, practical tips in the body, and a clear structure that works for search.",
    contribution: ["Publishing", "On-page SEO"],
    metrics: [],
    url: "https://www.vvtcoaching.com/featured/how-to-solve-neet-chemistry-faster-45-minute-strategy-2026/",
    ctaLabel: "Read the Article",
    image: { src: vvtArticle3.url, alt: "Cover image for the NEET chemistry 45-minute strategy article", orientation: "landscape" },
  },
  {
    slug: "vvt-coaching-neet-mock-test-strategy-article",
    brand: "VVT Coaching",
    projectType: "Employer work",
    platform: "Website",
    format: "Blog Article",
    categories: ["Website Content", "Educational Content"],
    title: "NEET 2026 Mock Test Strategy: How Many Tests Before June 21?",
    objective: "Answer one of the most common questions students ask in the final weeks.",
    audienceInsight: "Students worry about taking too few mock tests, or burning out by taking too many.",
    idea: "Score-wise targets, how to analyse each test and how to avoid burnout.",
    execution: "A question title that matches how students search, answered with clear, practical guidance.",
    contribution: ["Publishing", "On-page SEO"],
    metrics: [],
    url: "https://www.vvtcoaching.com/featured/neet-2026-mock-test-strategy-before-21-june/",
    ctaLabel: "Read the Article",
    image: { src: vvtArticle4.url, alt: "Cover image for the NEET 2026 mock test strategy article", orientation: "landscape" },
  },

  /* ---------- The Artist Mode ---------- */
  short("3tl3vXdl5_Y", "the-artist-mode-fade-haircut", "Finding Your Ideal Fade Haircut! Choose the best one for you!", "19M", {
    categories: ["YouTube Shorts", "Educational Content"],
    viral: true,
    objective: "Help guys pick a fade that actually suits them.",
    audienceInsight: "Most guys know they want a fade but can't tell a low, mid or high fade apart, and they usually find out in the barber's chair.",
    idea: "Put the styles side by side and let the viewer choose, with one question on screen: which one suits you best?",
    execution: "Faceless and illustration-led. The hook is the question itself in the first second, so viewers start comparing straight away and rewatch to decide.",
  }),
  short("ekhq8dEqcNE", "the-artist-mode-aesthetic-poses-for-boys", "Aesthetic Poses for Boys! Stand out in Instagram!", "3M", {
    viral: true,
    objective: "Give guys poses they can copy for their next photo.",
    audienceInsight: "A lot of guys care about their Instagram feed but feel awkward in front of a camera.",
    idea: "A quick set of poses, each one easy to try.",
    execution: "Every pose is on screen just long enough to copy, which gets people rewatching and saving.",
  }),
  short("8vhUUeC_vCM", "the-artist-mode-wolf-cut", "Finding your perfect hairstyle: Wolf cut", "2.3M", {
    categories: ["YouTube Shorts", "Trending Content"],
    viral: true,
    objective: "Ride the interest in the wolf cut while it was trending.",
    audienceInsight: "When a haircut trends, people want to see it on someone before asking their barber for it.",
    idea: "Part of the Finding your perfect hairstyle series, focused on one trending cut.",
    execution: "The style name is in the title so it's searchable, and the visual shows the cut clearly in seconds.",
  }),
  short("OwvXNWKr_bA", "the-artist-mode-glow-up-tips-38", "Glow up tips #38: Improve your facial structure", "2.2M", {
    viral: true,
    objective: "Keep a numbered series going so viewers come back for the next tip.",
    audienceInsight: "Self-improvement viewers like small, specific tips, and a number tells them there's a whole library.",
    idea: "One tip per episode, here on facial structure.",
    execution: "Consistent title format, Glow up tips plus number plus benefit, so each episode is instantly recognisable.",
  }),
  short("qv8ZzTqMSWI", "the-artist-mode-best-short-haircut", "The best Short haircut for men! Latest trends!", "1.5M", {
    categories: ["YouTube Shorts", "Trending Content"],
    viral: true,
    objective: "Answer a very common search: what short haircut should I get?",
    audienceInsight: "Guys with short hair feel they have fewer options and look for what's current.",
    idea: "A round-up of short haircut styles that were trending.",
    execution: "A superlative in the title, the best, plus latest trends, to make it feel worth watching now.",
  }),
  short("-ZfFyMajr3E", "the-artist-mode-surfer-curtains", "Finding your ideal hairstyle: Surfer Curtains", "1.2M", {
    viral: true,
    objective: "Extend the hairstyle series with another specific style.",
    audienceInsight: "Once a series works, viewers trust it and come back for the next style.",
    idea: "The same Finding your ideal hairstyle format, applied to surfer curtains.",
    execution: "Reusing a proven format with a new style, which is how the channel built more than one viral hit.",
  }),
  short("aPgGCdFfUw4", "the-artist-mode-no-face-photo-ideas", "Aesthetic No-face photo ideas for guys! Get inspired!", "995K", {
    objective: "Serve people who want stylish photos without showing their face.",
    audienceInsight: "Plenty of people want an aesthetic feed but are camera-shy. It also matches the channel's own faceless identity.",
    idea: "A visual list of shots built around angles, silhouettes, hands, outfits and surroundings.",
    execution: "The title names the exact need, no-face, and the audience, for guys.",
  }),
  short("1q8YmUTeUV8", "the-artist-mode-hair-fall-tamil", "How to stop hair fall in 4 steps, in Tamil", "22K", {
    categories: ["YouTube Shorts", "Educational Content"],
    objective: "Test regional-language content on a practical grooming topic.",
    audienceInsight: "Hair fall is a common worry, and advice in your own language feels easier to trust and follow.",
    idea: "A four-step hair-fall routine explained in Tamil.",
    execution: "A numbered promise and a language tag in the title so Tamil-speaking viewers know it's for them.",
  }),

  /* ---------- Education & real estate ---------- */
  {
    slug: "dr-vikram-agarwal-college-student-reel",
    brand: "Dr. Vikram Agarwal Adarsh College",
    projectType: "Client work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Trending Content"],
    title: "Open when you are alone",
    objective: "Make the college feel relatable to students through everyday campus moments.",
    audienceInsight: "Students engage with content that looks like their own life, not with polished brochures.",
    idea: "A familiar campus scene, friends on the steps glued to their phones, with a chat-style hook on screen.",
    execution: "Short, student-led and built on a relatable hook that makes people stop and watch to the end.",
    contribution: ["Instagram content", "Publishing"],
    metrics: [{ label: "Views", value: "11.3K" }],
    metricsSource: "View count as shown in the Instagram screenshot.",
    url: "https://www.instagram.com/p/DdY2cFKztu4/",
    ctaLabel: "View Original Reel",
    image: { src: drVikramReel.url, alt: "Students sitting on campus steps looking at their phones in an Instagram Reel", orientation: "portrait" },
  },
  {
    slug: "asta-properties-aerial-location-reel",
    brand: "Asta Properties",
    projectType: "Client work",
    platform: "Instagram",
    format: "Reel",
    categories: ["Instagram Reels", "Promotional Creatives"],
    title: "Aerial location reel",
    objective: "Help buyers understand the location before they ever visit the project.",
    audienceInsight: "For property buyers, the neighbourhood often matters as much as the building: the beach, the roads and what's nearby.",
    idea: "Tell the story of the place from above with a drone shot along the coastline.",
    execution: "Aerial, location-led footage that shows the coast and surroundings, so people discover the area first and the project second.",
    contribution: ["Instagram content", "Publishing"],
    metrics: [{ label: "Views", value: "3,431" }],
    metricsSource: "View count as shown in the Instagram screenshot.",
    url: "https://www.instagram.com/reel/DSSPWyUku9g/",
    ctaLabel: "View Original Reel",
    image: { src: astaReel.url, alt: "Aerial view of a city coastline and beach in an Asta Properties Reel", orientation: "portrait" },
  },
  {
    slug: "ambrig-homes-korattur-location-post",
    brand: "Ambrig Homes",
    projectType: "Client work",
    platform: "Instagram",
    format: "Carousel",
    categories: ["Instagram Posts", "Promotional Creatives"],
    title: "We've found our location! Something exceptional is coming to Korattur",
    objective: "Build curiosity before a new project launch.",
    audienceInsight: "Buyers looking in a specific area want to be first to know when something new is coming there.",
    idea: "A teaser that reveals only the location, Korattur, and asks people to stay tuned.",
    execution: "Big, confident type with the red brand colour on the word LOCATION, and one short line underneath. It's built to create anticipation, not to sell yet.",
    contribution: ["Social media content", "Publishing"],
    metrics: [],
    url: "https://www.instagram.com/p/DaCtOoOjbeW/?img_index=1",
    ctaLabel: "View Original Post",
    image: { src: ambrigPost.url, alt: "Ambrig Homes post reading We've found our location, something exceptional is coming to Korattur", orientation: "square" },
  },
];

export const contentBySlug = (slug: string) => contentItems.find((c) => c.slug === slug);
export const contentByBrand = (brand: string) => contentItems.filter((c) => c.brand === brand);
export const displayTitle = (item: ContentItem) => item.title;
