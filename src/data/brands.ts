import style365Website from "@/assets/style365-website.jpg.asset.json";

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
    slug: "style-365",
    number: "01",
    name: "Style 365",
    displayName: "Style 365 Studio Salon",
    industry: "Beauty, grooming and salon services",
    instagramHandle: "@style365official",
    instagramUrl: "https://www.instagram.com/style365official/",
    website: "https://style365.one/",
    snapshot: { posts: "147", followers: "7,505", following: "71" },
    overview:
      "A unisex salon brand where content has one clear job: help a local audience picture the result before they book. Every post has to make a service feel tangible and worth the visit.",
    contentAreas: [
      "Hair and beauty services",
      "Hair transformations",
      "Salon service promotion",
      "Before-and-after concepts",
      "Customer engagement",
      "Service-led creatives",
      "Local audience communication",
    ],
    approach: [
      {
        title: "Show the outcome",
        body: "Transformations and before-and-after concepts let people see the result, which is what they're really buying in a salon.",
      },
      {
        title: "Lead with the service",
        body: "Service-led creatives make it easy to understand what's on offer and who it's for, so the next step, enquiring or booking, feels obvious.",
      },
      {
        title: "Speak locally",
        body: "Salons are chosen close to home, so the communication stays rooted in the local audience and the neighbourhood the salon serves.",
      },
    ],
    images: [
      {
        src: style365Website.url,
        alt: "Style 365 Studio Salon website homepage: Leading Unisex Salon in Bangalore",
        caption: "style365.one, homepage",
      },
    ],
    caseStudy: "style-365",
  },
  {
    slug: "sofa-42",
    number: "02",
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
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
