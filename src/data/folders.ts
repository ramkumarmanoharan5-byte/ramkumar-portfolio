import topallPrep from "@/assets/topall-prep-portal.jpg.asset.json";
import topallApp from "@/assets/topall-app.jpg.asset.json";
import topallChon from "@/assets/topall-chondrichthyes-guide.jpg.asset.json";
import topallYoutube from "@/assets/topall-youtube-channel.jpg.asset.json";
import neetGuideHome from "@/assets/neet-guide-home.jpg.asset.json";
import artistChannel from "@/assets/the-artist-mode-channel.jpg.asset.json";
import artistStudio from "@/assets/the-artist-mode-studio-lifetime.jpg.asset.json";
import drVikramReel from "@/assets/dr-vikram-agarwal-college-reel.jpg.asset.json";
import astaReel from "@/assets/asta-properties-aerial-reel.jpg.asset.json";
import ambrigPost from "@/assets/ambrig-homes-korattur-post.jpg.asset.json";
import style365Website from "@/assets/style365-website.jpg.asset.json";
import vvtGirlsReel from "@/assets/vvt-girls-neet-campus-reel.jpg.asset.json";
import vvtAiReel from "@/assets/vvt-ig-DM2lwC9pwzN-post.jpg.asset.json";
import vvtChemQuiz from "@/assets/vvt-ig-Ddl5MBstGRm-post.jpg.asset.json";
import vvtArticle1 from "@/assets/vvt-article-1.jpg.asset.json";

export interface BrandFolder {
  id: string;
  number: string;
  name: string;
  displayName: string;
  industry: string;
  relationship: "In-house Product (VVT Solutions)" | "Client Project (VVT Solutions)" | "Personal Brand" | "Separate Employer";
  relationshipBadge: string;
  caseStudySlug: string;
  websiteUrl: string | null;
  overview: string;
  contentAreas: string[];
  platforms: string[];
  keyMetric?: { label: string; value: string };
  previewImages: { src: string; alt: string; label?: string }[];
  featuredDeliverables: string[];
}

export const brandFolders: BrandFolder[] = [
  {
    id: "topall",
    number: "01",
    name: "TopAll",
    displayName: "TopAll — AI-Powered Learning Platform",
    industry: "Educational Technology",
    relationship: "In-house Product (VVT Solutions)",
    relationshipBadge: "In-house Product",
    caseStudySlug: "topall",
    websiteUrl: "https://topall.app/",
    overview:
      "Primary in-house EdTech product connecting free NCERT preparation tools (chapter MCQs, revision notes, video explainers) with an upgraded AI app featuring doubt clarification and performance analytics.",
    contentAreas: [
      "Social Media Management",
      "AI Content Workflows",
      "Educational Video Lessons",
      "Product Brochures & Collateral",
      "Google Search Ads Support",
      "App Installation Campaigns",
    ],
    platforms: ["YouTube", "Website", "Google Ads", "NotebookLM", "Android / iOS"],
    keyMetric: { value: "Full Funnel", label: "Free Portal to App Upgrade" },
    previewImages: [
      { src: topallPrep.url, alt: "TopAll Free Preparation Portal", label: "Prep Portal" },
      { src: topallApp.url, alt: "TopAll Mobile App", label: "AI App" },
      { src: topallChon.url, alt: "TopAll Biology Video Lesson", label: "Lesson Page" },
      { src: topallYoutube.url, alt: "TopAll YouTube Channel", label: "YouTube" },
    ],
    featuredDeliverables: [
      "Free NCERT chapter MCQ and lesson hub (prep.topall.app)",
      "NotebookLM prompt-engineered video explainers",
      "Digital product brochure for school & student outreach",
      "Assistance on Google Search & App Install campaigns",
    ],
  },
  {
    id: "vvt-coaching",
    number: "02",
    name: "VVT Coaching",
    displayName: "VVT Coaching Centre",
    industry: "Education & Competitive Exams",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "vvt-coaching",
    websiteUrl: "https://www.vvtcoaching.com/",
    overview:
      "Premier NEET coaching institute in Chennai. Managed Instagram channel growth, admission lead-generation campaigns, educational quiz reels, on-page SEO blog articles, and lead handling in NoPaperForms CRM.",
    contentAreas: [
      "Instagram Management",
      "Admission Campaigns",
      "Content Creation & Quizzes",
      "Educational Blog Articles",
      "CRM Setup & Lead Handling",
    ],
    platforms: ["Instagram", "Meta Ads", "Website / SEO", "NoPaperForms CRM"],
    keyMetric: { value: "5.6K+ Views", label: "Single Campus Reel" },
    previewImages: [
      { src: vvtGirlsReel.url, alt: "VVT Coaching Centre Girls NEET Campus Reel", label: "Campus Reel" },
      { src: vvtAiReel.url, alt: "VVT AI Performance Analysis Reel", label: "AI Feature Reel" },
      { src: vvtChemQuiz.url, alt: "NEET Chemistry Quiz Challenge", label: "Quiz Series" },
      { src: vvtArticle1.url, alt: "VVT SEO Blog Article on AI Error Exams", label: "SEO Blog" },
    ],
    featuredDeliverables: [
      "Girls NEET residential campus promotional campaign",
      "NEET Challenge of the Day interactive daily quiz series",
      "4 ranking on-page SEO strategy guides",
      "NoPaperForms CRM pipeline setup and parent enquiry tracking",
    ],
  },
  {
    id: "neet-guide",
    number: "03",
    name: "NEET Guide",
    displayName: "NEET Guide — Preparation Hub",
    industry: "Educational Technology",
    relationship: "In-house Product (VVT Solutions)",
    relationshipBadge: "In-house Product",
    caseStudySlug: "neet-guide",
    websiteUrl: "https://neet.guide/",
    overview:
      "In-house digital educational platform dedicated to NEET aspirants. Developed educational content, study resources, website content, and organic digital marketing strategy.",
    contentAreas: [
      "Educational Content",
      "Website Content & Architecture",
      "Study Resources & Mock Info",
      "Organic Digital Marketing",
    ],
    platforms: ["Website", "SEO", "Digital Marketing"],
    keyMetric: { value: "Organic Hub", label: "Free Study Destination" },
    previewImages: [
      { src: neetGuideHome.url, alt: "NEET Guide Homepage and Preparation Hub", label: "Portal Home" },
    ],
    featuredDeliverables: [
      "Structured syllabus guides and chapter summaries",
      "Aspirant study resource navigation",
      "Search-first educational content planning",
    ],
  },
  {
    id: "the-artist-mode",
    number: "04",
    name: "The Artist Mode",
    displayName: "The Artist Mode — Men's Grooming Channel",
    industry: "Men's Lifestyle & Grooming",
    relationship: "Personal Brand",
    relationshipBadge: "Personal Brand",
    caseStudySlug: "the-artist-mode",
    websiteUrl: "https://www.youtube.com/@TheArtistMode/shorts",
    overview:
      "Self-built faceless YouTube channel in men's style and grooming. Scripted, edited, and scaled content that achieved 3.9 Crore lifetime views, 82.9K subscribers, and a single viral Short with 19 Million views.",
    contentAreas: [
      "YouTube Shorts Production",
      "Faceless Brand Building",
      "Hook & Retention Strategy",
      "Video Editing & Visual Pacing",
      "Channel Operations & Analytics",
    ],
    platforms: ["YouTube Shorts", "YouTube Studio Analytics"],
    keyMetric: { value: "3.9Cr", label: "Lifetime Channel Views · 82.9K Subs" },
    previewImages: [
      { src: "https://i.ytimg.com/vi/3tl3vXdl5_Y/oar2.jpg", alt: "19M View Short: Finding Your Ideal Fade Haircut", label: "19M Short" },
      { src: "https://i.ytimg.com/vi/ekhq8dEqcNE/oar2.jpg", alt: "3M View Short: Aesthetic Poses for Boys", label: "3M Short" },
      { src: artistStudio.url, alt: "YouTube Studio Lifetime Metrics", label: "Studio Proof" },
      { src: artistChannel.url, alt: "The Artist Mode YouTube Channel", label: "Channel Page" },
    ],
    featuredDeliverables: [
      "19M views on 'Finding Your Ideal Fade Haircut' Short",
      "6 million-plus viral Shorts (3M, 2.3M, 2.2M, 1.5M, 1.2M)",
      "High-retention visual editing without on-camera talent",
      "Consistent 13-phase channel creation, script, and packaging workflow",
    ],
  },
  {
    id: "anna-adarsh-womens-college",
    number: "05",
    name: "Anna Adarsh Women's College",
    displayName: "Anna Adarsh College for Women",
    industry: "Higher Education",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "anna-adarsh-womens-college",
    websiteUrl: "https://annaadarsh.edu.in/",
    overview:
      "Prestigious women's higher education institution in Chennai. Managed Meta advertising campaigns, student-centric Instagram creative strategy, and targeted admission lead generation.",
    contentAreas: [
      "Admission Campaigns",
      "Instagram Management",
      "Meta Ads (Lead Generation)",
      "Creative Concept Development",
    ],
    platforms: ["Instagram", "Meta Ads Manager", "Facebook"],
    keyMetric: { value: "₹160 CPL", label: "24.8L Reach · 1.04Cr Impressions" },
    previewImages: [
      { src: drVikramReel.url, alt: "Campus Social Media Creative", label: "Campus Feed" },
    ],
    featuredDeliverables: [
      "₹160 cost-per-lead achieved in admission campaign",
      "24.8 Lakh accounts reached across targeted demographics",
      "1.04 Crore campaign impressions across Meta platforms",
      "Authentic campus culture visual communication",
    ],
  },
  {
    id: "anna-adarsh-group-of-schools",
    number: "06",
    name: "Anna Adarsh Group of Schools",
    displayName: "Anna Adarsh Group of Schools",
    industry: "School Education (K-12)",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "anna-adarsh-group-of-schools",
    websiteUrl: "https://annaadarsh.edu.in/",
    overview:
      "Reputed Chennai school network. Formulated social media communication for parent reassurance, campus infrastructure, academic milestones, and admission period visibility.",
    contentAreas: [
      "Institutional Branding",
      "Social Media Content",
      "Academic Highlights",
      "Admission Promotion",
    ],
    platforms: ["Instagram", "Facebook", "Meta Campaigns"],
    keyMetric: { value: "Parent Trust", label: "Institutional Storytelling" },
    previewImages: [
      { src: drVikramReel.url, alt: "School Community & Campus", label: "School Life" },
    ],
    featuredDeliverables: [
      "Curriculum, safety, and faculty showcase posts",
      "Parent reassurance creative framework",
      "Admission cycle announcement campaigns",
    ],
  },
  {
    id: "dr-vikram-agarwal-adarsh-college",
    number: "07",
    name: "Dr. Vikram Agarwal Adarsh College",
    displayName: "Dr. Vikram Agarwal Adarsh College",
    industry: "Higher Education",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "dr-vikram-agarwal-adarsh-college",
    websiteUrl: null,
    overview:
      "Co-educational college requiring relatable, student-driven digital presence. Created high-engagement campus reels that resonated organically with prospective applicants.",
    contentAreas: [
      "Student-Focused Content",
      "Relatable Campus Reels",
      "Event Highlights",
      "Audience Engagement Campaigns",
    ],
    platforms: ["Instagram Reels", "Instagram Posts"],
    keyMetric: { value: "11.3K Views", label: "Campus Reel" },
    previewImages: [
      { src: drVikramReel.url, alt: "Dr. Vikram Agarwal College Campus Reel", label: "Campus Reel" },
    ],
    featuredDeliverables: [
      "11.3K view campus life reel 'Open when you are alone'",
      "Relatable peer-to-peer visual hook format",
      "Campus event and student life coverage",
    ],
  },
  {
    id: "asta-properties",
    number: "08",
    name: "Asta Properties",
    displayName: "Asta Properties — Premium Coastal Real Estate",
    industry: "Real Estate & Property Development",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "asta-properties",
    websiteUrl: null,
    overview:
      "Premium property developer. Developed visual social media reels emphasising prime coastal location, connectivity, aerial perspective, and lifestyle appeal to attract high-intent buyers.",
    contentAreas: [
      "Coastal Property Content",
      "Aerial Video Reels",
      "Location Storytelling",
      "Real Estate Social Media",
    ],
    platforms: ["Instagram Reels", "Instagram Posts"],
    keyMetric: { value: "3,431 Views", label: "Aerial Location Reel" },
    previewImages: [
      { src: astaReel.url, alt: "Asta Properties Aerial Coastline Reel", label: "Aerial Reel" },
    ],
    featuredDeliverables: [
      "Drone and aerial coastline lifestyle video reel",
      "Location-first property narrative connecting amenities and lifestyle",
      "High-intent real estate enquiry social creatives",
    ],
  },
  {
    id: "ambrig-homes",
    number: "09",
    name: "Ambrig Homes",
    displayName: "Ambrig Homes — Residential Developments",
    industry: "Residential Real Estate",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "ambrig-homes",
    websiteUrl: null,
    overview:
      "Residential developer in Chennai. Executed location-focused teaser campaigns and carousel creatives for upcoming developments, generating pre-launch curiosity in specific neighbourhoods.",
    contentAreas: [
      "New Launch Teasers",
      "Social Media Carousels",
      "Project Awareness",
      "Real Estate Branding",
    ],
    platforms: ["Instagram Carousels", "Meta Social"],
    keyMetric: { value: "Pre-Launch", label: "Korattur Teaser Campaign" },
    previewImages: [
      { src: ambrigPost.url, alt: "Ambrig Homes Korattur Location Teaser Post", label: "Teaser Post" },
    ],
    featuredDeliverables: [
      "Bold typography location announcement creative ('Something exceptional is coming to Korattur')",
      "Multi-slide carousel explaining neighbourhood connectivity",
      "Pre-launch brand anticipation framework",
    ],
  },
  {
    id: "style-365",
    number: "10",
    name: "Style 365",
    displayName: "Style 365 Studio Salon",
    industry: "Beauty, Grooming & Salon Services",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "style-365",
    websiteUrl: "https://style365.one/",
    overview:
      "Leading unisex salon brand in Bengaluru with 147 posts and 7,500+ followers. Created transformation-focused, before-and-after social creatives that make salon outcomes tangible for neighbourhood booking decisions.",
    contentAreas: [
      "Hair Transformations",
      "Salon Service Promotion",
      "Before-and-After Content",
      "Local Audience Engagement",
    ],
    platforms: ["Instagram", "Meta Ads Planning", "Website"],
    keyMetric: { value: "₹3,00,000", label: "Campaign Budget Reference" },
    previewImages: [
      { src: style365Website.url, alt: "Style 365 Studio Salon Bengaluru Homepage", label: "Official Site" },
    ],
    featuredDeliverables: [
      "Before-and-after transformation creative strategy",
      "Service-first pricing and package visual posts",
      "Local neighbourhood hyper-targeted creative angles",
    ],
  },
  {
    id: "sofa-42",
    number: "11",
    name: "Sofa 42",
    displayName: "Sofa 42 Furniture, Bengaluru",
    industry: "Furniture & Home Interiors",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "sofa-42",
    websiteUrl: null,
    overview:
      "Modern furniture and home interiors showroom in Bengaluru. Crafted product-centric social showcases that let buyers examine sofa fabric, finish, and spatial proportions before stepping into the showroom.",
    contentAreas: [
      "Sofa Collection Showcases",
      "Interior Inspiration",
      "Product-Focused Creatives",
      "Lifestyle Room Styling",
    ],
    platforms: ["Instagram Posts", "Visual Catalog"],
    keyMetric: { value: "159 Posts", label: "Visual Showroom Feed" },
    previewImages: [
      { src: style365Website.url, alt: "Sofa 42 Furniture Interior Showcase", label: "Living Inspiration" },
    ],
    featuredDeliverables: [
      "Product-first creative posts highlighting fabric, texture, and frame",
      "Living room contextual styling that helps buyers visualize at home",
      "Showroom visit conversion copy and location CTAs",
    ],
  },
  {
    id: "colan-infotech",
    number: "12",
    name: "Colan Infotech",
    displayName: "Colan Infotech — Digital Marketing Executive",
    industry: "B2B Technology Services & IT Consulting",
    relationship: "Separate Employer",
    relationshipBadge: "Separate Employer",
    caseStudySlug: "colan-infotech",
    websiteUrl: "https://www.colaninfotech.com/",
    overview:
      "My former employer as Digital Marketing Executive in Madurai. Spearheaded corporate social media channels (LinkedIn, Facebook, Instagram), organic B2B lead generation, regional showcase hubs, technical polls, and client social campaigns.",
    contentAreas: [
      "B2B Social Media Management",
      "LinkedIn Lead Generation",
      "Search Engine Optimization (SEO)",
      "Tech Quizzes & Industry Polls",
      "Client Social Media Accounts",
    ],
    platforms: ["LinkedIn Corporate & Regional", "Facebook", "Instagram", "Corporate Blog"],
    keyMetric: { value: "B2B Reach", label: "3 Regional Hubs & Corporate Channels" },
    previewImages: [
      { src: topallYoutube.url, alt: "B2B Technology and Social Presence", label: "Tech Presence" },
    ],
    featuredDeliverables: [
      "Main corporate LinkedIn & regional showcases (Madurai, Pernambut, Bangalore)",
      "Technical knowledge quizzes, polls, memes, and job openings",
      "Client social media account management and content planning",
      "On-page website SEO and content performance tracking",
    ],
  },
];

export const brandFolderById = (id: string) => brandFolders.find((f) => f.id === id);
