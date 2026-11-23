import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { headlineStat } from "@/data/profile";
import { caseStudyBySlug } from "@/data/caseStudies";

export const Route = createFileRoute("/why-me")({
  head: () => ({
    meta: [
      { title: "Why Me: Content That Reaches People and Brings Results | Ramkumar M." },
      {
        name: "description",
        content:
          "Why work with Ramkumar M.: a 3.9Cr-view channel built from zero, admission campaigns tracked to cost per lead, organic B2B growth, and a seven-step way of working.",
      },
      { property: "og:title", content: "Why Me | Ramkumar M." },
      {
        property: "og:description",
        content: "Proof from real work, and the way I work, from research to results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyMe,
});

const stages = [
  {
    n: "01",
    t: "Research",
    d: "Understand the brand, the audience, competitors and what people are already searching for.",
  },
  { n: "02", t: "Strategy", d: "Set the objective, content pillars, platforms and brand voice." },
  {
    n: "03",
    t: "Ideation",
    d: "Find the hook: the reason someone stops scrolling in the first few seconds.",
  },
  { n: "04", t: "Creation", d: "Briefs, scripts, captions, Reels, Shorts, posts and brochures." },
  {
    n: "05",
    t: "Distribution",
    d: "Adapt each piece for Instagram, YouTube, Facebook and LinkedIn.",
  },
  {
    n: "06",
    t: "Engagement",
    d: "Reply, listen and move interested people into enquiries and the CRM.",
  },
  {
    n: "07",
    t: "Analysis",
    d: "Look past reach to clicks, leads and sign-ups, and feed it into the next cycle.",
  },
];

function WhyMe() {
  const anna = caseStudyBySlug("anna-adarsh-womens-college");
  const colan = caseStudyBySlug("colan-infotech");

  const reasons = [
    {
      n: "01",
      t: "I've built an audience from zero myself",
      d: `The Artist Mode is my own faceless YouTube channel. No budget, no face on camera, just research, hooks and editing. It has 3.9Cr lifetime views, 32,905 subscribers, and one Short reached ${headlineStat.value} views.`,
      proof: { label: "The Artist Mode case study", slug: "the-artist-mode" },
    },
    {
      n: "02",
      t: "I follow content through to the lead",
      d: `Views are the start, not the goal. For Anna Adarsh Women's College the admission campaign ran at a ${anna?.highlight?.value ?? "₹286"} cost per lead across 2,461 leads, and at VVT Coaching I set up the CRM workflow that every enquiry moves through.`,
      proof: { label: "Anna Adarsh case study", slug: "anna-adarsh-womens-college" },
    },
    {
      n: "03",
      t: "I grow brands organically, not only with ads",
      d: `At Colan Infotech, LinkedIn content brought in ${colan?.highlight?.value ?? "300+"} organic B2B leads and the page grew from 45K to 60K followers in six months. At VVT Solutions I've published and optimised 300+ SEO blogs.`,
      proof: { label: "Colan Infotech case study", slug: "colan-infotech" },
    },
    {
      n: "04",
      t: "I've worked across very different audiences",
      d: "Students and parents in EdTech and education, buyers in real estate and furniture, salon customers, and enterprise decision-makers in B2B tech. I adapt the message to who is actually deciding.",
      proof: { label: "See all projects", slug: null },
    },
    {
      n: "05",
      t: "I use AI to produce more, faster",
      d: "For TopAll I turn a single NCERT chapter into a set of focused educational videos with NotebookLM, so one piece of research becomes many pieces of content.",
      proof: { label: "TopAll case study", slug: "topall" },
    },
  ] as const;

  return (
    <>
      <PageIntro
        eyebrow="Why Me"
        title="Content that gets watched, and work that gets results."
        lede="Five reasons to work with me, each backed by real work, and the seven steps I follow on every brand."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <ol>
          {reasons.map((r) => (
            <li
              key={r.n}
              className="group grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <p className="font-display text-7xl leading-none text-primary/20 transition-colors group-hover:text-primary md:col-span-2 md:text-8xl">
                {r.n}
              </p>
              <h2 className="display-md text-primary md:col-span-5">{r.t}</h2>
              <div className="md:col-span-5">
                <p className="prose-editorial text-foreground/85">{r.d}</p>
                {r.proof.slug ? (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: r.proof.slug }}
                    className="link-draw mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    {r.proof.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <Link
                    to="/case-studies"
                    className="link-draw mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    {r.proof.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <p className="eyebrow">How I work</p>
          <h2 className="display-lg mt-4 max-w-3xl text-primary">Seven steps, on every brand.</h2>
          <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <li key={s.n} className="bg-cream p-7">
                <p className="font-display text-4xl text-primary/30">{s.n}</p>
                <h3 className="mt-3 font-display text-2xl text-primary">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{s.d}</p>
              </li>
            ))}
            <li className="flex items-end bg-primary p-7 text-primary-foreground">
              <p className="font-display text-2xl leading-snug">
                What I learn in step 07 goes straight back into step 01.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
