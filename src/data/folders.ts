import topallPrep from "@/assets/topall-prep-portal.jpg.asset.json";
import topallApp from "@/assets/topall-app.jpg.asset.json";
import topallChon from "@/assets/topall-chondrichthyes-guide.jpg.asset.json";
import topallYoutube from "@/assets/topall-youtube-channel.jpg.asset.json";
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

export interface OfficialLink {
  label: string;
  url: string;
  type: "website" | "linkedin" | "instagram" | "youtube" | "facebook" | "portal";
  badge?: string;
}

export interface FolderSection {
  title: string;
  description: string;
  points?: string[];
}

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
  deepDive: string;
  targetAudience: string;
  strategySummary: string;
  contentAreas: string[];
  platforms: string[];
  keyMetric?: { label: string; value: string };
  metricsDetail?: { label: string; value: string; note?: string }[];
  previewImages: { src: string; alt: string; label?: string }[];
  featuredDeliverables: string[];
  sections: FolderSection[];
  officialLinks: OfficialLink[];
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
    deepDive:
      "TopAll addresses a fundamental bottleneck in medical and engineering entrance prep: students struggle to bridge NCERT theory and high-speed MCQ application. By building an open, indexed repository of chapter-level video lessons and free practice questions, we attract organic search traffic and establish trust before inviting students to upgrade into the full mobile application.",
    targetAudience: "NEET and JEE aspirants in Class 11, Class 12, and repeat years seeking chapter-wise revision and instant doubt resolution.",
    strategySummary: "Search-first educational content distribution paired with AI workflows (NotebookLM) and targeted acquisition campaigns.",
    contentAreas: [
      "Social Media Management",
      "AI Content Workflows (NotebookLM)",
      "Educational Video Lessons",
      "Product Brochures & Collateral",
      "Google Search Ads Support",
      "App Installation Campaigns",
    ],
    platforms: ["YouTube", "Website", "Google Ads", "NotebookLM", "Android / iOS"],
    keyMetric: { value: "Full Funnel", label: "Free Portal to App Upgrade" },
    metricsDetail: [
      { label: "Core Proposition", value: "Free to Paid", note: "Zero-friction practice portal funnelling into paid AI app" },
      { label: "AI Production", value: "Multi-Video", note: "Single NCERT chapter transformed into targeted sub-topic lessons" },
    ],
    previewImages: [
      { src: topallPrep.url, alt: "TopAll Free Preparation Portal", label: "Prep Portal" },
      { src: topallApp.url, alt: "TopAll Mobile App", label: "AI App" },
      { src: topallChon.url, alt: "TopAll Biology Video Lesson", label: "Lesson Page" },
      { src: topallYoutube.url, alt: "TopAll YouTube Channel", label: "YouTube" },
    ],
    featuredDeliverables: [
      "Free NCERT chapter MCQ and lesson hub (prep.topall.app)",
      "NotebookLM prompt-engineered video explainers for Physics and Biology",
      "Digital product brochure for school, coaching institute, and student outreach",
      "Assistance on Google Search and Mobile App Install advertising campaigns",
    ],
    sections: [
      {
        title: "The Free Preparation Portal Architecture",
        description: "Built chapter-level lesson pages that deliver focused conceptual explanations followed by direct MCQ practice links. Every page is structured to satisfy student search intent during exam prep cycles.",
        points: [
          "NCERT-aligned video embeds with structured chapter notes",
          "One-click transition from revision to practice MCQs",
          "SEO-optimized naming conventions for YouTube and Web search discoverability",
        ],
      },
      {
        title: "AI Video Production via NotebookLM",
        description: "Formulated rigorous prompts utilizing NCERT textbooks as primary sources to generate high-fidelity, pedagogically sound educational videos for complex Class 12 Physics chapters.",
        points: [
          "Precise prompt framing for audience level, tone, and pacing",
          "Generated sub-topic videos including Dipole in Uniform Field and Diamagnetism",
          "Production pipeline for rapid syllabus coverage without compromising accuracy",
        ],
      },
    ],
    officialLinks: [
      { label: "TopAll Mobile App", url: "https://topall.app/", type: "website", badge: "Official App" },
      { label: "Free Prep Portal", url: "https://prep.topall.app/", type: "portal", badge: "Free Learning Hub" },
      { label: "TopAll YouTube Channel", url: "https://www.youtube.com/@topallapplication/videos", type: "youtube", badge: "Video Library" },
      { label: "Class Chondrichthyes Lesson", url: "https://prep.topall.app/neet/biology/animal-kingdom/videos/class-chondrichthyes-guide-topall", type: "website", badge: "Lesson Page" },
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
    deepDive:
      "Medical entrance coaching is an intense, high-trust decision for families. Content had to balance high academic credibility with approachable, student-driven storytelling. We developed a multi-channel presence combining daily quiz engagement, campus life transparency, and structured SEO guides that answer anxious parent questions.",
    targetAudience: "Class 11, Class 12, and NEET repeater students and their parents across Chennai and Tamil Nadu.",
    strategySummary: "Combines authentic campus video reels, daily interactive story polls, long-form SEO guides, and NoPaperForms CRM pipeline management.",
    contentAreas: [
      "Instagram Page Management",
      "Admission Campaigns & Lead Generation",
      "Interactive Quizzes & Daily Challenges",
      "Educational Blog Articles & On-Page SEO",
      "NoPaperForms CRM Setup & Pipeline Handling",
    ],
    platforms: ["Instagram", "Meta Ads", "Website / SEO", "NoPaperForms CRM"],
    keyMetric: { value: "5.6K+ Views", label: "Single Campus Reel" },
    metricsDetail: [
      { label: "Campus Video", value: "5,671 Views", note: "Girls NEET Residential Campus reel" },
      { label: "SEO Content", value: "4 Strategy Guides", note: "Published ranking articles on NEET preparation" },
      { label: "Lead Tracking", value: "NoPaperForms", note: "End-to-end CRM lead status monitoring" },
    ],
    previewImages: [
      { src: vvtGirlsReel.url, alt: "VVT Coaching Centre Girls NEET Campus Reel", label: "Campus Reel" },
      { src: vvtAiReel.url, alt: "VVT AI Performance Analysis Reel", label: "AI Feature Reel" },
      { src: vvtChemQuiz.url, alt: "NEET Chemistry Quiz Challenge", label: "Quiz Series" },
      { src: vvtArticle1.url, alt: "VVT SEO Blog Article on AI Error Exams", label: "SEO Blog" },
    ],
    featuredDeliverables: [
      "Girls NEET residential campus promotional campaign at Pallikaranai",
      "NEET Challenge of the Day interactive daily quiz and MCQ series",
      "4 ranking on-page SEO strategy guides answering student search intent",
      "NoPaperForms CRM pipeline setup, qualification tagging, and enquiry tracking",
    ],
    sections: [
      {
        title: "Instagram Community & Interactive Engagement",
        description: "Replaced one-directional flyers with interactive challenge reels. Chemistry quizzes and Botany challenges encouraged comments and saves, expanding organic reach within student peer groups.",
        points: [
          "Four-option MCQ reels with answers pinned in comments",
          "Student testimonials filmed on campus providing authentic peer social proof",
          "Campus facility walkthroughs addressing parent safety priorities",
        ],
      },
      {
        title: "Search-Engine Optimized Thought Leadership",
        description: "Drafted and published four in-depth strategy guides addressing practical student anxieties: morning-of exam routines, 45-minute chemistry pacing, and AI error analysis.",
        points: [
          "Targeted long-tail search queries during key exam revision months",
          "Clear structural headers, actionable time breakdowns, and syllabus tips",
          "Internal cross-links directing readers toward admission counseling",
        ],
      },
    ],
    officialLinks: [
      { label: "Official Institute Website", url: "https://www.vvtcoaching.com/", type: "website", badge: "Website" },
      { label: "Instagram Channel", url: "https://www.instagram.com/vvtcoaching/", type: "instagram", badge: "Instagram" },
      { label: "Girls NEET Campus Reel", url: "https://www.instagram.com/reel/DMuMKBtJuaT/", type: "instagram", badge: "Reel · 5.6K" },
      { label: "AI Analysis Reel", url: "https://www.instagram.com/reel/DM2lwC9pwzN/", type: "instagram", badge: "Reel" },
      { label: "AI Error Exams SEO Article", url: "https://www.vvtcoaching.com/featured/how-vvt-ai-error-exams-improve-neet-scores/", type: "website", badge: "SEO Article" },
    ],
  },
  {
    id: "the-artist-mode",
    number: "03",
    name: "The Artist Mode",
    displayName: "The Artist Mode — Men's Grooming Channel",
    industry: "Men's Lifestyle & Grooming",
    relationship: "Personal Brand",
    relationshipBadge: "Personal Brand",
    caseStudySlug: "the-artist-mode",
    websiteUrl: "https://www.youtube.com/@TheArtistMode/shorts",
    overview:
      "Self-built faceless YouTube channel in men's style and grooming. Scripted, edited, and scaled content that achieved 3.9 Crore lifetime views, 32,905 subscribers, 82.9K watch hours, and a single viral Short with 19 Million views.",
    deepDive:
      "The Artist Mode proved that massive digital reach does not require celebrity talent or expensive camera gear. By mastering audience psychology, immediate 0.8-second dilemma hooks, and rapid visual pacing, I transformed everyday grooming dilemmas into hyper-retainable vertical video loops.",
    targetAudience: "Young men (16–28) interested in modern haircuts, fashion styling, aesthetic photography, and self-improvement.",
    strategySummary: "Faceless visual storytelling, retention loops, rapid visual cuts every 1.5 seconds, and choice-driven hooks.",
    contentAreas: [
      "YouTube Shorts Production",
      "Faceless Brand Building",
      "Hook & Retention Strategy",
      "Video Editing & Visual Pacing",
      "Channel Operations & Analytics",
    ],
    platforms: ["YouTube Shorts", "YouTube Studio Analytics"],
    keyMetric: { value: "3.9Cr", label: "Lifetime Channel Views · 32,905 Subscribers" },
    metricsDetail: [
      { label: "Lifetime Views", value: "3.9Cr", note: "39,000,000+ organic channel views" },
      { label: "Single Peak Video", value: "19M", note: "Fade haircut comparison Short" },
      { label: "Million+ Hits", value: "6 Shorts", note: "19M, 3M, 2.3M, 2.2M, 1.5M, 1.2M" },
      { label: "Subscribers", value: "32,905", note: "Built entirely through organic Shorts" },
      { label: "Watch Hours", value: "82.9K", note: "Lifetime, from YouTube Studio" },
    ],
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
    sections: [
      {
        title: "The 19M Viral Short Architecture",
        description: "Men frequently struggle to articulate fade preferences to barbers. By placing low, mid, and high fades side-by-side with an immediate 'Which suits you best?' hook, viewers looped the video repeatedly to compare, triggering the algorithm's highest viral multiplier.",
        points: [
          "First 0.8 seconds forces visual engagement without voice intro",
          "Side-by-side comparative frames optimize loop completion rates",
          "Comment section ignited debate, propelling international feed distribution",
        ],
      },
      {
        title: "End-to-End 13-Phase Channel Engine",
        description: "Operated every function independently: trend research, scriptwriting, hook ideation, graphic asset preparation, audio mixing, subtitle typography, and studio analytics review.",
        points: [
          "Zero paid promotion or ad boost — 100% organic algorithmic distribution",
          "Repeatable series frameworks ('Finding Your Perfect Hairstyle', 'Glow Up Tips')",
          "Consistent branding identity across thumbnail cards and video title typography",
        ],
      },
    ],
    officialLinks: [
      { label: "The Artist Mode Channel", url: "https://www.youtube.com/@TheArtistMode/shorts", type: "youtube", badge: "YouTube Channel" },
      { label: "19M Short: Ideal Fade Haircut", url: "https://www.youtube.com/shorts/3tl3vXdl5_Y", type: "youtube", badge: "19M Views" },
      { label: "3M Short: Aesthetic Poses", url: "https://www.youtube.com/shorts/ekhq8dEqcNE", type: "youtube", badge: "3M Views" },
      { label: "2.3M Short: Wolf Cut", url: "https://www.youtube.com/shorts/8vhUUeC_vCM", type: "youtube", badge: "2.3M Views" },
      { label: "2.2M Short: Glow Up Tips", url: "https://www.youtube.com/shorts/OwvXNWKr_bA", type: "youtube", badge: "2.2M Views" },
    ],
  },
  {
    id: "anna-adarsh-womens-college",
    number: "04",
    name: "Anna Adarsh Women's College",
    displayName: "Anna Adarsh College for Women",
    industry: "Higher Education",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "anna-adarsh-womens-college",
    websiteUrl: "https://annaadarsh.edu.in/",
    overview:
      "Prestigious women's higher education institution in Chennai. Managed Meta advertising campaigns, student-centric Instagram creative strategy, and targeted admission lead generation.",
    deepDive:
      "College admissions have a strict, highly compressed time window. We designed a full Meta advertising funnel combining thumb-stopping campus culture reels with high-intent lead generation forms, resulting in over 24.8 Lakh accounts reached and a ₹286 cost per lead across 2,461 leads.",
    targetAudience: "Female students completing Class 12, undergraduate aspirants, and their parents across Tamil Nadu and neighbouring regions.",
    strategySummary: "Segmented Meta Ads campaigns pairing authentic campus culture creative hooks with frictionless on-platform lead capture forms.",
    contentAreas: [
      "Meta Ads Campaign Management",
      "Admission Lead Generation",
      "Audience Segmentation & Targeting",
      "Instagram Content Strategy",
      "CPL Optimization & Budget Efficiency",
    ],
    platforms: ["Instagram", "Meta Ads Manager", "Facebook"],
    keyMetric: { value: "₹286 CPL", label: "24.8L Reach · 1.04Cr Impressions" },
    metricsDetail: [
      { label: "Cost Per Lead", value: "₹286", note: "₹7.04 lakh spend ÷ 2,461 leads" },
      { label: "Total Reach", value: "24.8L", note: "Unique prospective student/parent accounts reached" },
      { label: "Impressions", value: "1.04Cr", note: "Total ad impressions delivered across Tamil Nadu" },
    ],
    previewImages: [],
    featuredDeliverables: [
      "₹286 cost per lead across 2,461 admission leads",
      "24.8 Lakh accounts reached across targeted geographic cohorts",
      "1.04 Crore campaign impressions across Meta platforms",
      "Student life and academic empowerment messaging matrix",
    ],
    sections: [
      {
        title: "The Admission Window Campaign Architecture",
        description: "Organized Meta Ads into segmented audience tiers: immediate school-leavers looking for Arts & Science degrees, and parent cohorts evaluating safety, faculty reputation, and placement records.",
        points: [
          "Hyper-targeted geographic parameters covering Chennai and key tier-2 districts",
          "Short-form video creatives showing real campus vibrancy, library, and lab facilities",
          "Automated on-Facebook lead forms to minimize drop-off from external redirects",
        ],
      },
      {
        title: "Cost Per Lead Discipline & Optimization",
        description: "Monitored campaign delivery daily to reallocate budget to top-performing ad sets, keeping CPL at ₹286 while maintaining high lead qualification standards.",
        points: [
          "A/B creative testing between career outcome headlines vs campus culture",
          "Exclusion of non-target demographics to prevent budget dilution",
          "Direct handover of incoming leads to admissions counseling team",
        ],
      },
    ],
    officialLinks: [
      { label: "Watch Admission Campaign Reel", url: "https://www.instagram.com/reel/DZ-OjGvJict/", type: "instagram", badge: "Instagram Reel" },
      { label: "Anna Adarsh Official Website", url: "https://annaadarsh.edu.in/", type: "website", badge: "Official Website" },
      { label: "College LinkedIn Profile", url: "https://www.linkedin.com/school/anna-adarsh-college-for-women/", type: "linkedin", badge: "LinkedIn" },
    ],
  },
  {
    id: "anna-adarsh-group-of-schools",
    number: "05",
    name: "Anna Adarsh Group of Schools",
    displayName: "Anna Adarsh Group of Schools",
    industry: "School Education (K-12)",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "anna-adarsh-group-of-schools",
    websiteUrl: "https://annaadarsh.edu.in/",
    overview:
      "Reputed Chennai school network. Formulated social media communication for parent reassurance, campus infrastructure, academic milestones, and admission period visibility.",
    deepDive:
      "School selection is fundamentally about parent reassurance: safety, faculty warmth, extracurricular breadth, and holistic values. The content strategy highlighted real classroom interactions, science exhibitions, sports achievements, and campus infrastructure.",
    targetAudience: "Parents of nursery, primary, and high school students in Chennai seeking balanced, values-driven schooling.",
    strategySummary: "Values-led visual storytelling focusing on academic excellence, child safety, sports, and holistic development.",
    contentAreas: [
      "Institutional Branding",
      "Parent Reassurance Framework",
      "Academic & Extracurricular Highlights",
      "Admission Season Announcements",
      "Social Media Content Planning",
    ],
    platforms: ["Instagram", "Facebook", "Meta Campaigns"],
    keyMetric: { value: "5 Schools", label: "One Parent-Focused Admission Campaign" },
    metricsDetail: [
      { label: "Focus", value: "K-12 Branding", note: "Nursery through higher secondary parent engagement" },
      { label: "Channel", value: "Social Media", note: "Community updates and admission visibility" },
    ],
    previewImages: [],
    featuredDeliverables: [
      "Curriculum, safety, and faculty showcase posts",
      "Parent reassurance creative framework across social channels",
      "Admission cycle announcement campaigns and open-house visibility",
    ],
    sections: [
      {
        title: "Parent Reassurance & Campus Transparency",
        description: "Engineered content pillars showing daily campus life, safety standards, modern lab spaces, and holistic student achievements to reinforce parent confidence.",
        points: [
          "Showcased faculty guidance, student arts, and science fairs",
          "Clear admission timelines and age eligibility announcements",
          "Consistent visual branding aligning all school branches under one heritage identity",
        ],
      },
    ],
    officialLinks: [
      { label: "Watch School Campaign Reel", url: "https://www.instagram.com/reel/DeGySo9Nswi/", type: "instagram", badge: "Instagram Reel" },
      { label: "School Group Official Website", url: "https://annaadarsh.edu.in/", type: "website", badge: "Official Website" },
    ],
  },
  {
    id: "dr-vikram-agarwal-adarsh-college",
    number: "06",
    name: "Dr. Vikram Agarwal Adarsh College",
    displayName: "Dr. Vikram Agarwal Adarsh College",
    industry: "Higher Education",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "dr-vikram-agarwal-adarsh-college",
    websiteUrl: null,
    overview:
      "Co-educational college requiring relatable, student-driven digital presence. Created high-engagement campus reels that resonated organically with prospective applicants.",
    deepDive:
      "Prospective college students swipe past polished corporate advertisements. For Dr. Vikram Agarwal Adarsh College, we leaned into authentic, relatable campus moments. The standout piece — an Instagram Reel titled 'Open when you are alone' — generated 11.3K views organically by framing campus friendships with curiosity.",
    targetAudience: "Class 12 graduates exploring undergraduate degree courses in commerce, computer science, and management.",
    strategySummary: "Relatable, peer-level short-form video content emphasizing college atmosphere, student camaraderie, and campus energy.",
    contentAreas: [
      "Student-Focused Video Content",
      "Relatable Campus Reels",
      "Event Highlights & College Culture",
      "Audience Engagement & Comment Driving",
    ],
    platforms: ["Instagram Reels", "Instagram Posts"],
    keyMetric: { value: "11.3K Views", label: "Campus Reel" },
    metricsDetail: [
      { label: "Top Reel Views", value: "11.3K", note: "'Open when you are alone' campus life reel" },
      { label: "Creative Hook", value: "Peer-to-Peer", note: "Authentic student scene rather than formal brochure" },
    ],
    previewImages: [
      { src: drVikramReel.url, alt: "Dr. Vikram Agarwal College Campus Reel", label: "Campus Reel" },
    ],
    featuredDeliverables: [
      "11.3K view campus life reel 'Open when you are alone'",
      "Relatable peer-to-peer visual hook format that drove organic sharing",
      "Campus event and student life coverage across the academic year",
    ],
    sections: [
      {
        title: "The 11.3K View Relatable Campus Reel",
        description: "Captured friends hanging out on college steps checking their phones with an intriguing chat-style hook. The simplicity and relatability made prospective students tag their friends.",
        points: [
          "Chat-style intrigue hook that stopped scrolling in feed",
          "Authentic, un-staged campus vibe building positive emotional association",
          "Comment section engagement nudging prospective admissions",
        ],
      },
    ],
    officialLinks: [
      { label: "Watch 11.3K Campus Reel", url: "https://www.instagram.com/p/DdY2cFKztu4/", type: "instagram", badge: "Instagram Reel · 11.3K" },
    ],
  },
  {
    id: "style-365",
    number: "07",
    name: "Style 365",
    displayName: "Style 365 Studio Salon",
    industry: "Beauty, Grooming & Salon Services",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "style-365",
    websiteUrl: "https://style365.one/",
    overview:
      "Leading unisex salon brand in Bengaluru with 147 posts and 7,500+ followers. Created transformation-focused, before-and-after social creatives that make salon outcomes tangible for neighbourhood booking decisions.",
    deepDive:
      "Salon clients do not buy hair products or scissors; they buy personal confidence and visible results. The content strategy centered on authentic hair transformations, keratin treatments, and bridal styling shown in clear before-and-after formats.",
    targetAudience: "Urban professionals, college students, and local residents in Bengaluru seeking dependable hair and skin care.",
    strategySummary: "Show-the-outcome visual proof, service-first pricing transparency, and hyper-local neighbourhood engagement.",
    contentAreas: [
      "Hair and Beauty Services Promotion",
      "Hair Transformations & Makeovers",
      "Before-and-After Creative Concepts",
      "Local Audience Communication & Offers",
    ],
    platforms: ["Instagram", "Meta Ads Planning", "Website"],
    keyMetric: { value: "₹3,00,000", label: "Campaign Budget Reference" },
    metricsDetail: [
      { label: "Instagram Grid", value: "147 Posts", note: "Showcasing services, transformations, and client results" },
      { label: "Community", value: "7,505 Followers", note: "Local Bengaluru customer following" },
      { label: "Budget Framework", value: "₹3,00,000", note: "Campaign planning budget reference" },
    ],
    previewImages: [
      { src: style365Website.url, alt: "Style 365 Studio Salon Bengaluru Homepage", label: "Official Site" },
    ],
    featuredDeliverables: [
      "Before-and-after transformation creative strategy for hair makeovers",
      "Service-first package posts detailing hair spa, colouring, and keratin results",
      "Local neighbourhood hyper-targeted creative angles driving appointment calls",
    ],
    sections: [
      {
        title: "Transformation-First Visual Strategy",
        description: "Documented real client transformations in salon chairs. Showing genuine before-and-after styling helped prospective clients visualize their own makeover.",
        points: [
          "Side-by-side comparison graphics demonstrating hair texture restoration",
          "Clear pricing transparency reducing friction for first-time bookers",
          "Seasonal festive grooming and wedding styling packages",
        ],
      },
    ],
    officialLinks: [
      { label: "Official Salon Website", url: "https://style365.one/", type: "website", badge: "Official Website" },
      { label: "Watch Salon Reel", url: "https://www.instagram.com/reel/DZfDErthSCj/", type: "instagram", badge: "Instagram Reel" },
      { label: "Instagram Profile (@style365studio)", url: "https://www.instagram.com/style365studio/", type: "instagram", badge: "Instagram · 7.5K" },
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
    deepDive:
      "In luxury coastal real estate, location is the primary differentiator. Buyers are investing in sea views, proximity to beaches, and connectivity. We produced an aerial drone video reel that achieved 3,431 views by spotlighting the scenic coastline first, anchoring the development in lifestyle desirability.",
    targetAudience: "High-net-worth home buyers, NRI investors, and families seeking premium coastal apartments.",
    strategySummary: "Aerial drone cinematography, lifestyle-first storytelling, and scenic neighbourhood presentation.",
    contentAreas: [
      "Coastal Property Content",
      "Aerial Video Reels & Drone Cinematography",
      "Location Storytelling",
      "Real Estate Social Media Management",
    ],
    platforms: ["Instagram Reels", "Instagram Posts"],
    keyMetric: { value: "3,431 Views", label: "Aerial Location Reel" },
    metricsDetail: [
      { label: "Aerial Reel", value: "3,431 Views", note: "Organic reach on coastline location reel" },
      { label: "Focus", value: "Luxury Lifestyle", note: "Beachside setting and connectivity showcase" },
    ],
    previewImages: [
      { src: astaReel.url, alt: "Asta Properties Aerial Coastline Reel", label: "Aerial Reel" },
    ],
    featuredDeliverables: [
      "Drone and aerial coastline lifestyle video reel (3,431 views)",
      "Location-first property narrative connecting amenities, road access, and sea views",
      "High-intent real estate enquiry social creatives",
    ],
    sections: [
      {
        title: "Aerial Location Storytelling",
        description: "Instead of standard interior mockups, the footage led with sweeping coastal views. By demonstrating how close the property was to the shoreline, it naturally attracted serious home searchers.",
        points: [
          "Cinematic drone pan emphasizing coastal topography and road links",
          "Concise copy highlighting investment value and serenity",
          "Direct inquiry prompts for private site viewings",
        ],
      },
    ],
    officialLinks: [
      { label: "Watch Aerial Coastline Reel", url: "https://www.instagram.com/reel/DSSPWyUku9g/", type: "instagram", badge: "Instagram Reel · 3.4K" },
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
    deepDive:
      "Announcing a new residential project requires building anticipation before opening site visits. For Ambrig Homes' Korattur project, we designed bold, typography-led teaser carousels announcing 'We've found our location! Something exceptional is coming to Korattur', capturing early waitlist interest.",
    targetAudience: "Families and working professionals looking for new residential apartments in Korattur and West Chennai.",
    strategySummary: "Pre-launch anticipation strategy combining bold typography, geographic familiarity, and curiosity hooks.",
    contentAreas: [
      "New Launch Teasers",
      "Social Media Carousels",
      "Project Awareness & Branding",
      "Real Estate Social Media",
    ],
    platforms: ["Instagram Carousels", "Meta Social"],
    keyMetric: { value: "Pre-Launch", label: "Korattur Teaser Campaign" },
    metricsDetail: [
      { label: "Campaign", value: "Pre-Launch", note: "Curiosity and neighbourhood excitement before launch" },
      { label: "Creative", value: "Carousel", note: "Multi-slide storytelling on location advantages" },
    ],
    previewImages: [
      { src: ambrigPost.url, alt: "Ambrig Homes Korattur Location Teaser Post", label: "Teaser Post" },
    ],
    featuredDeliverables: [
      "Bold typography location announcement creative ('Something exceptional is coming to Korattur')",
      "Multi-slide carousel explaining neighbourhood connectivity and amenities",
      "Pre-launch brand anticipation framework driving early buyer inquiries",
    ],
    sections: [
      {
        title: "The Korattur Location Launch Teaser",
        description: "Used high-contrast red-and-white typography emphasizing 'LOCATION'. Kept details teasingly concise to encourage direct messages and early registry.",
        points: [
          "Minimalist, bold typography built for mobile feed stop-rate",
          "Focus on Korattur's strategic rail and road connectivity",
          "Clear call-to-action inviting followers to stay tuned for floor plans",
        ],
      },
    ],
    officialLinks: [
      { label: "View Korattur Teaser Post", url: "https://www.instagram.com/p/DaCtOoOjbeW/?img_index=1", type: "instagram", badge: "Instagram Carousel" },
    ],
  },
  {
    id: "sofa-42",
    number: "10",
    name: "Sofa 42",
    displayName: "Sofa 42 Furniture, Bengaluru",
    industry: "Furniture & Home Interiors",
    relationship: "Client Project (VVT Solutions)",
    relationshipBadge: "Client Project",
    caseStudySlug: "sofa-42",
    websiteUrl: null,
    overview:
      "Modern furniture and home interiors showroom in Bengaluru with 159 posts and 1,448 followers. Crafted product-centric social showcases that let buyers examine sofa fabric, finish, and spatial proportions before stepping into the showroom.",
    deepDive:
      "Buying a sofa is a major lifestyle and spatial commitment. Customers want to inspect fabric durability, stitch lines, and cushioning resilience. Our content put the product details in high-definition focus, framed within realistic living room spaces.",
    targetAudience: "New homeowners, apartment dwellers, and interior design enthusiasts in Bengaluru looking for modern custom sofas.",
    strategySummary: "Product-first detailing of fabrics and woodwork combined with interior living room lifestyle context.",
    contentAreas: [
      "Sofa Collection Showcases",
      "Interior Inspiration & Room Styling",
      "Product-Focused Detailing & Fabrics",
      "Showroom Footfall Generation",
    ],
    platforms: ["Instagram Posts", "Visual Catalog"],
    keyMetric: { value: "159 Posts", label: "Visual Showroom Feed" },
    metricsDetail: [
      { label: "Curated Posts", value: "159 Posts", note: "Complete visual catalog of sofa models and finishes" },
      { label: "Showroom Audience", value: "1,448 Followers", note: "Bengaluru interior enthusiasts and furniture shoppers" },
    ],
    previewImages: [],
    featuredDeliverables: [
      "Product-first creative posts highlighting fabric, texture, and frame",
      "Living room contextual styling that helps buyers visualize at home",
      "Showroom visit conversion copy and direct location guidance",
    ],
    sections: [
      {
        title: "Product-First Small Screen Presentation",
        description: "Highlighted macro shots of premium fabric weaves, corner cushioning, and wooden legs. Emphasized custom sizing options to fit varying apartment layouts.",
        points: [
          "Close-up craftsmanship details showing stitch quality and foam density",
          "Color palette swatches matching modern minimalist interiors",
          "Direct calls to visit the Bengaluru showroom to test seating comfort",
        ],
      },
    ],
    officialLinks: [
      { label: "Watch Sofa 42 Reel", url: "https://www.instagram.com/reel/DeTfw_NR7IK/", type: "instagram", badge: "Instagram Reel" },
    ],
  },
  {
    id: "colan-infotech",
    number: "11",
    name: "Colan Infotech",
    displayName: "Colan Infotech — Digital Marketing Executive",
    industry: "B2B Technology Services & IT Consulting",
    relationship: "Separate Employer",
    relationshipBadge: "Separate Employer",
    caseStudySlug: "colan-infotech",
    websiteUrl: "https://www.colaninfotech.com/",
    overview:
      "My former employer as Digital Marketing Executive in Madurai. Spearheaded corporate social media channels (LinkedIn, Facebook, Instagram), organic B2B lead generation, regional showcase hubs, technical polls, and client social campaigns.",
    deepDive:
      "In B2B IT consulting, marketing serves two critical engines: business lead credibility for enterprise tech buyers, and employer branding for engineering talent. I managed Colan Infotech's main corporate channels alongside three regional showcase hubs, producing technical quizzes, developer memes, career announcements, and client social campaigns.",
    targetAudience: "Global enterprise software buyers, IT decision-makers, and prospective technology professionals across India.",
    strategySummary: "B2B corporate authority on LinkedIn, interactive tech engagement (quizzes & polls), and search engine optimization.",
    contentAreas: [
      "B2B Social Media Management (LinkedIn, Facebook, IG)",
      "Organic LinkedIn Lead Generation",
      "Search Engine Optimization (SEO) & On-Page Content",
      "Technical Knowledge Quizzes, Polls & Memes",
      "Regional Showcase Pages (Madurai, Pernambut, Bangalore)",
      "Client Social Media Account Management",
    ],
    platforms: ["LinkedIn Corporate & Regional", "Facebook", "Instagram", "Corporate Blog"],
    keyMetric: { value: "300+", label: "Organic B2B Leads · LinkedIn 45K to 60K" },
    metricsDetail: [
      { label: "Corporate Platforms", value: "LinkedIn, FB, IG", note: "Complete corporate social media presence management" },
      { label: "Regional Showcase", value: "3 Hubs", note: "Madurai, Pernambut, and Bangalore showcase pages" },
      { label: "Client Accounts", value: "Multi-Client", note: "Content planning and digital marketing for agency clients" },
    ],
    previewImages: [],
    featuredDeliverables: [
      "Main corporate LinkedIn & regional showcases (Madurai, Pernambut, Bangalore)",
      "Technical knowledge quizzes, polls, memes, and job openings",
      "Client social media account management and content planning",
      "On-page website SEO and content performance tracking",
    ],
    sections: [
      {
        title: "B2B Corporate Voice & LinkedIn Growth",
        description: "Managed the corporate LinkedIn presence with consistent technology updates, company culture celebrations, and thought leadership pieces that established B2B authority.",
        points: [
          "Curated technology insight posts covering cloud, mobile, and AI advancements",
          "Managed regional showcase pages connecting local development centers with regional talent",
          "Job vacancy packaging that increased candidate application velocity",
        ],
      },
      {
        title: "Client Social Media Management & SEO",
        description: "Handled digital marketing initiatives and social media management for Colan Infotech's agency clients, building content calendars, graphics, and search-optimized copy.",
        points: [
          "Developed end-to-end social media calendars for diverse business clients",
          "Conducted keyword research and on-page optimization for web articles",
          "Monitored social performance analytics and engagement KPIs",
        ],
      },
    ],
    officialLinks: [
      { label: "Colan Infotech Website", url: "https://www.colaninfotech.com/", type: "website", badge: "Official Website" },
      { label: "Corporate LinkedIn Page", url: "https://www.linkedin.com/company/colan-infotech-private-limited/home/", type: "linkedin", badge: "Corporate LinkedIn" },
      { label: "Official Facebook Page", url: "https://www.facebook.com/ColanInfotechPvtLtd", type: "facebook", badge: "Facebook" },
      { label: "Official Instagram Page", url: "https://www.instagram.com/colaninfotechpvtltd/", type: "instagram", badge: "Instagram" },
      { label: "LinkedIn Madurai Hub", url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-madurai/", type: "linkedin", badge: "Regional: Madurai" },
      { label: "LinkedIn Pernambut Hub", url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-pernambut-vellore/", type: "linkedin", badge: "Regional: Pernambut" },
      { label: "LinkedIn Bangalore Hub", url: "https://in.linkedin.com/showcase/colan-infotech-pvt-ltd-bangalore/", type: "linkedin", badge: "Regional: Bangalore" },
    ],
  },
];

export const brandFolderById = (id: string) => brandFolders.find((f) => f.id === id);
