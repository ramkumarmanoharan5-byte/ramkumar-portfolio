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
    "I build content that people actually want to watch and use, then follow it all the way to the result: a lead, a sign-up, a booking or a paying user.",
  intro: [
    "I'm a digital marketer based in Chennai with close to three years of hands-on work across social media, content, Meta Ads, SEO and product marketing.",
    "Right now most of my time goes into TopAll, a NEET and JEE preparation product, and VVT Coaching. Before that I handled LinkedIn and social media at Colan Infotech. On the side I built The Artist Mode, a faceless YouTube channel that has crossed 3.9 crore lifetime views.",
    "I like starting with what the audience is already looking for, making something genuinely useful for them, and then checking the numbers to see what to do next.",
  ],
  philosophy:
    "Views are where it starts. I care about what happens after: the click, the enquiry, the sign-up and the people who come back.",
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
