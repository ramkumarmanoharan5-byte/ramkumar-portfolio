export interface BrandSnapshot {
  posts: string;
  followers: string;
  following: string;
}

export interface Brand {
  slug: string;
  number: string;
  name: string;
  displayName: string;
  industry: string;
  instagramHandle: string | null;
  instagramUrl: string | null;
  website: string | null;
  /** Figures transcribed from a profile screenshot. A snapshot, not growth results. */
  snapshot: BrandSnapshot;
  overview: string;
  contentAreas: string[];
  approach: { title: string; body: string }[];
  images: { src: string; alt: string; caption: string }[];
  caseStudy?: string;
}

export const brands: Brand[] = [
  {
    slug: "sofa-42",
    number: "01",
    name: "Sofa 42",
    displayName: "Sofa 42 Furniture, Bengaluru",
    industry: "Furniture and home interiors",
    instagramHandle: null,
    instagramUrl: null,
    website: null,
    snapshot: { posts: "159", followers: "1,448", following: "84" },
    overview:
      "A furniture brand where the product has to sell itself on a small screen. The content focuses on making sofas and collections feel like part of a real, liveable home.",
    contentAreas: [
      "Furniture showcases",
      "Sofa collections",
      "Product-focused creatives",
      "Interior inspiration",
      "Showroom content",
      "Lifestyle-oriented product presentation",
    ],
    approach: [
      {
        title: "Product first",
        body: "Clear, product-focused creatives that show shape, fabric and finish: the details people zoom in on before visiting a showroom.",
      },
      {
        title: "Room, not catalogue",
        body: "Interior inspiration and lifestyle framing help buyers imagine the piece in their own living room.",
      },
      {
        title: "Bring the showroom online",
        body: "Showroom content gives people a reason to visit in person and makes the collection feel real.",
      },
    ],
    images: [],
  },
  {
    slug: "shoutout-campus",
    number: "02",
    name: "Shoutout Campus",
    displayName: "Shoutout Campus",
    industry: "Influencer marketing and social media promotions",
    instagramHandle: "@shoutout_campus",
    instagramUrl: "https://www.instagram.com/shoutout_campus/",
    website: null,
    snapshot: { posts: "350", followers: "16.9K", following: "605" },
    overview:
      "A promotions-led account built around creators and brand collaborations, where content needs to feel native to the feed while still delivering a clear promotional message.",
    contentAreas: [
      "Influencer marketing",
      "Social media promotions",
      "Creator-led content",
      "Brand collaborations",
      "Campaign showcases",
      "Promotional communication",
    ],
    approach: [
      {
        title: "Creator-native",
        body: "Promotional messages work best when they sound like the creator, not an advert. So the content follows the creator's voice.",
      },
      {
        title: "Show the campaign",
        body: "Campaign showcases give brands and creators a clear picture of what a collaboration looks like.",
      },
      {
        title: "Keep it clear",
        body: "Even playful promotions need a clear message and a clear next step for the audience.",
      },
    ],
    images: [],
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
