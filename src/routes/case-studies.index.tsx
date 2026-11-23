import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Projects and Case Studies: TopAll, VVT, The Artist Mode | Ramkumar M." },
      { name: "description", content: "Twelve projects, led by TopAll: an AI-powered NEET and JEE product funnel, VVT Coaching, The Artist Mode (3.9Cr views), Anna Adarsh Women's College, Sofa 42 Furniture, Colan Infotech and more." },
      { property: "og:title", content: "Projects and Case Studies | Ramkumar M." },
      { property: "og:description", content: "How each project was approached, what I did and what it taught me, from first view to lead or sign-up." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  const [lead, ...rest] = caseStudies;
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="The thinking behind the work."
        lede="Twelve projects, from the product I work on now to my own YouTube channel. Each one is labelled for what it is, and explained from the goal to what I learned."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        {lead && (
          <Link to="/case-studies/$slug" params={{ slug: lead.slug }} className="group mb-6 grid gap-8 bg-primary p-8 text-primary-foreground md:grid-cols-12 md:p-12">
            <div className="md:col-span-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">{lead.number} · Main project · {lead.kind}</p>
              <h2 className="mt-4 font-display text-6xl leading-none md:text-8xl">{lead.title}</h2>
              <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{lead.headline}</p>
            </div>
            <div className="flex items-end justify-between gap-4 md:col-span-4 md:flex-col md:items-end">
              <p className="text-sm text-primary-foreground/75 md:text-right">{lead.industry}</p>
              <span className="inline-flex items-center gap-2 font-semibold">Read the case study <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
            </div>
          </Link>
        )}
        <ul className="border-t border-line">
          {rest.map((cs) => (
            <li key={cs.slug} className="border-b border-line">
              <Link to="/case-studies/$slug" params={{ slug: cs.slug }} className="group grid gap-4 py-10 md:grid-cols-12 md:items-center md:gap-8">
                <span className="font-display text-5xl text-primary/25 md:col-span-1">{cs.number}</span>
                <div className="md:col-span-6">
                  <p className="eyebrow">{cs.kind} · {cs.industry}</p>
                  <h2 className="mt-2 font-display text-4xl text-foreground transition-colors group-hover:text-primary md:text-5xl">{cs.title}</h2>
                  <p className="mt-2 text-foreground/70">{cs.headline}</p>
                </div>
                <div className="md:col-span-4">
                  {cs.highlight ? (
                    <p><span className="font-display text-5xl text-primary">{cs.highlight.value}</span> <span className="text-sm text-foreground/70">{cs.highlight.label}</span></p>
                  ) : (
                    <p className="text-sm text-foreground/70">{cs.formats.join(", ")}</p>
                  )}
                </div>
                <ArrowRight className="hidden h-6 w-6 justify-self-end text-primary transition-transform group-hover:translate-x-1 md:col-span-1 md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactBand />
    </>
  );
}
