import style365Website from "@/assets/style365-website.jpg.asset.json";
import astaReel from "@/assets/asta-properties-aerial-reel.jpg.asset.json";
import ambrigPost from "@/assets/ambrig-homes-korattur-post.jpg.asset.json";

/** `null` = not supplied yet; the page shows "to be added" instead of a number. */
export interface BrandSnapshot {
  posts: string | null;
  followers: string | null;
  following: string | null;
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
  /** A verified figure from the work itself, shown alongside the account snapshot. */
  keyStat?: { value: string; label: string };
  /** A specific piece of work to open on the platform. */
  featuredLink?: { label: string; url: string };
  images: { src: string; alt: string; caption: string; aspect?: string; frameClass?: string }[];
  caseStudy?: string;
}

export const brands: Brand[] = [
  {
    slug: "style-365",
    number: "01",
    name: "Style 365",
    displayName: "Style 365 Studio Salon",
    industry: "Beauty, grooming and salon services",
    instagramHandle: "@style365studio",
    instagramUrl: "https://www.instagram.com/style365studio/",
    website: "https://style365.one/",
    snapshot: { posts: "147", followers: "7,505", following: "71" },
    featuredLink: {
      label: "Watch a salon Reel on Instagram",
      url: "https://www.instagram.com/reel/DZfDErthSCj/",
    },
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
    featuredLink: {
      label: "Watch a Sofa 42 Reel on Instagram",
      url: "https://www.instagram.com/reel/DeTfw_NR7IK/",
    },
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
    caseStudy: "sofa-42",
  },
  {
    slug: "asta-properties",
    number: "03",
    name: "Asta Properties",
    displayName: "Asta Properties",
    industry: "Real estate",
    instagramHandle: null,
    instagramUrl: null,
    website: null,
    snapshot: { posts: null, followers: null, following: null },
    keyStat: { value: "3,431", label: "views on the aerial location Reel" },
    featuredLink: {
      label: "Watch the location Reel on Instagram",
      url: "https://www.instagram.com/reel/DSSPWyUku9g/",
    },
    overview:
      "A property brand where the location is the product. Buyers want to understand the area, the roads and what's nearby before they ever visit, so the content tells the story of the place first and the project second.",
    contentAreas: [
      "Aerial location Reels",
      "Location-led storytelling",
      "Real estate promotional creatives",
      "Paid advertising campaigns",
      "Campaign creative planning",
    ],
    approach: [
      {
        title: "Sell the place first",
        body: "Aerial, location-led footage shows the coast and surroundings, so people fall for the area before they look at plots.",
      },
      {
        title: "Warm up, then ask",
        body: "Engaging location content builds familiarity before lead enquiry ads ask for a phone number.",
      },
      {
        title: "Make the value clear",
        body: "Copy points to connectivity and development potential, the questions investors ask first.",
      },
    ],
    images: [
      {
        src: astaReel.url,
        alt: "Aerial view of a city coastline and beach in an Asta Properties Reel",
        caption: "Aerial location Reel, 3,431 views",
        aspect: "aspect-[9/16]",
        frameClass: "mx-auto max-w-xs lg:mx-0",
      },
    ],
    caseStudy: "asta-properties",
  },
  {
    slug: "ambrig-homes",
    number: "04",
    name: "Ambrig Homes",
    displayName: "Ambrig Homes, Chennai",
    industry: "Residential real estate",
    instagramHandle: null,
    instagramUrl: null,
    website: "https://ambrighomes.com/",
    snapshot: { posts: null, followers: null, following: null },
    featuredLink: {
      label: "View the Korattur launch teaser on Instagram",
      url: "https://www.instagram.com/p/DaCtOoOjbeW/?img_index=1",
    },
    overview:
      "A residential developer launching a new project in Korattur, Chennai. Before site visits open, the job is to build anticipation in the neighbourhood and get the right buyers waiting for the launch.",
    contentAreas: [
      "New launch teasers",
      "Instagram carousels",
      "Project awareness",
      "SEO for residential launches",
      "Meta Ads",
    ],
    approach: [
      {
        title: "Tease, don't tell",
        body: "The launch post reveals only the location, Korattur, and asks people to stay tuned, so buyers in the area want to be first to know.",
      },
      {
        title: "Built for the feed",
        body: "Big, confident type with the brand red on the word LOCATION reads instantly on a phone screen.",
      },
      {
        title: "Search and social together",
        body: "Teaser content on Instagram is backed by local search visibility, so interested buyers find the project when they look it up.",
      },
    ],
    images: [
      {
        src: ambrigPost.url,
        alt: "Ambrig Homes post reading We've found our location, something exceptional is coming to Korattur",
        caption: "Korattur location teaser",
        aspect: "aspect-square",
        frameClass: "mx-auto max-w-md lg:mx-0",
      },
    ],
    caseStudy: "ambrig-homes",
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
