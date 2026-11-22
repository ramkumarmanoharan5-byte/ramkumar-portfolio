import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { employment } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience: VVT Solutions and Colan Infotech | Ramkumar M." },
      { name: "description", content: "Digital Marketing Specialist at VVT Solutions since Feb 2025, and Digital Marketing Executive at Colan Infotech from Feb 2024 to Jan 2025." },
      { property: "og:title", content: "Experience | Ramkumar M." },
      { property: "og:description", content: "Product marketing, social media, Meta Ads, SEO and B2B LinkedIn lead generation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Where I've put the work in."
        lede="Two roles, most recent first. One in education and EdTech, one in B2B technology. Different audiences, same habit: plan it, publish it, then learn from the numbers."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <ol className="relative border-l border-primary/40 md:ml-[8.5rem]">
          {employment.map((job, i) => (
            <li key={job.id} className="relative pb-20 pl-8 last:pb-0 md:pl-14">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 bg-primary" aria-hidden />
              <p className="absolute -left-[8.5rem] top-1 hidden w-28 text-right font-display text-6xl leading-none text-primary/20 md:block">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="eyebrow">Employment {String(i + 1).padStart(2, "0")}</p>
              <h2 className="display-md mt-3 text-primary">{job.company}</h2>
              <p className="mt-2 text-lg font-semibold">{job.role}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/70">
                {job.location && (
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                )}
                {job.start && <span>{job.start} to {job.end ?? "Present"}</span>}
              </div>
              <p className="mt-6 inline-block bg-cream px-3 py-1.5 text-sm font-medium text-primary">{job.positioning}</p>
              <p className="prose-editorial mt-6 text-foreground/85">{job.summary}</p>
              {job.highlights.length > 0 && (
                <dl className="mt-8 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
                  {job.highlights.map((h) => (
                    <div key={h.label} className="bg-ivory p-5">
                      <dd className="font-display text-3xl leading-none text-primary md:text-4xl">{h.value}</dd>
                      <dt className="mt-2 text-xs leading-snug text-foreground/70">{h.label}</dt>
                    </div>
                  ))}
                </dl>
              )}
              {job.highlights.length > 0 && <p className="mt-2 text-xs text-muted-foreground">From my resume.</p>}

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="eyebrow mb-4">Focus</h3>
                  <ul className="space-y-2">
                    {job.focus.map((f) => (
                      <li key={f} className="flex items-baseline gap-3"><span className="h-px w-4 shrink-0 bg-primary" aria-hidden />{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  {job.details.map((d) => (
                    <div key={d.label}>
                      <h3 className="eyebrow mb-3">{d.label}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {d.items.map((it) => (
                          <li key={it} className="border border-line bg-cream px-3 py-1 text-sm">{it}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {job.caseStudies.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                  {job.caseStudies.map((c) => (
                    <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="link-draw inline-flex items-center gap-2 font-semibold text-primary">
                      {c.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
      <ContactBand />
    </>
  );
}
