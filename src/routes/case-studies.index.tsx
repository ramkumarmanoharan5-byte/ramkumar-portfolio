import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — The Artist Mode, Meta Ads & more | Ramkumar M." },
      { name: "description", content: "Case studies: a 19M+ view faceless YouTube brand, a 2,461-lead admission campaign, salon SEO and Meta Ads, B2B LinkedIn, education and real estate marketing." },
      { property: "og:title", content: "Case Studies — Ramkumar M." },
      { property: "og:description", content: "How each project was approached, what was done and what it taught me." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <>
      <PageIntro
        eyebrow="Case Studies"
        title="The thinking behind the work."
        lede="Personal projects, client projects and employer work — each clearly labelled, each explained from objective to learning."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <ul className="border-t border-line">
          {caseStudies.map((cs) => (
            <li key={cs.slug} className="border-b border-line">
              <Link to="/case-studies/$slug" params={{ slug: cs.slug }} className="group grid gap-4 py-10 md:grid-cols-12 md:items-center md:gap-8">
                <span className="font-display text-5xl text-primary/25 md:col-span-1">{cs.number}</span>
                <div className="md:col-span-6">
                  <p className="eyebrow">{cs.kind} · {cs.industry}</p>
                  <h2 className="mt-2 font-display text-4xl text-foreground transition-colors group-hover:text-primary md:text-5xl">{cs.title}</h2>
                  <p className="mt-2 text-foreground/70">{cs.headline}</p>
                </div>
                <div className="md:col-span-4">
                  {cs.heroStat ? (
                    <p><span className="font-display text-5xl text-primary">{cs.heroStat.value}</span> <span className="text-sm text-foreground/70">{cs.heroStat.label}</span></p>
                  ) : cs.dashboard?.[1] ? (
                    <p><span className="font-display text-5xl text-primary">{cs.dashboard[1].value}</span> <span className="text-sm text-foreground/70">{cs.dashboard[1].label.toLowerCase()}</span></p>
                  ) : (
                    <p className="text-sm text-foreground/70">{cs.formats.join(" · ")}</p>
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
