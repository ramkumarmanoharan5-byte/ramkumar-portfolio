/**
 * Personal details. Leave a value as `null` until you have the real detail;
 * the site then shows a visible "to be added" note instead of inventing anything.
 */
import portrait from "@/assets/ramkumar-portrait.jpg.asset.json";

export const profile = {
  name: "Ramkumar M.",
  monogram: "RM",
  title: "Social Media & Content Strategist",
  secondaryTitle: "Digital Marketing Specialist",
  location: "Chennai, Tamil Nadu",
  experience: "Nearly 3 years of hands-on digital marketing",
  portrait: { src: portrait.url, alt: "Portrait of Ramkumar M." },
  headline: "Creating content that captures attention, builds brands, and drives meaningful results.",
  supporting:
    "I build content people actually want to watch and use, and follow it all the way to meaningful business outcomes: an enquiry, a lead, a sign-up or an admission.",
  intro: [
    "I am a digital marketing specialist and content strategist based in Chennai, with nearly three years of hands-on experience across social media management, content creation, performance marketing, SEO, and B2B marketing.",
    "My work spans in-house product marketing for the EdTech platform TopAll, brand campaigns for VVT Coaching, educational institutions, real estate projects, and local service businesses. Before that, I handled corporate and client LinkedIn, Facebook, and Instagram channels at Colan Infotech.",
    "On my own time, I conceived, built, and scaled The Artist Mode, a faceless men's lifestyle and grooming YouTube channel that has crossed 3.9 crore lifetime views with six individual Shorts exceeding one million views each.",
    "I focus on understanding what the audience is actively searching for, producing useful and engaging creative content, and tracking conversion journeys through clear analytics and lead follow-up workflows.",
  ],
  philosophy:
    "Attention is only the first step. What matters is what happens next: the click, the conversation, the enquiry, and the trust that brings people back.",
  contact: {
    email: "ramkumarmanoharan5@gmail.com" as string | null,
    phone: "+91 88382 60761" as string | null,
    linkedin: "https://www.linkedin.com/in/ramkumar-m-940791209/" as string | null,
    youtube: "https://www.youtube.com/@TheArtistMode./featured",
  },
} as const;

export const headlineStat = {
  value: "19M",
  label: "views on a single YouTube Short",
  detail: "Finding Your Ideal Fade Haircut! on The Artist Mode",
  url: "https://www.youtube.com/shorts/3tl3vXdl5_Y",
};
