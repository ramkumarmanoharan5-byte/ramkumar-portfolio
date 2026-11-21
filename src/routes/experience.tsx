import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { Pending } from "@/components/site/Pending";
import { ContactBand } from "@/components/site/ContactBand";
import { employment } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ramkumar M. | Colan Infotech & VVT Solutions" },
      { name: "description", content: "Professional experience in B2B social media at Colan Infotech and education marketing at VVT Solutions Pvt. Ltd." },
      { property: "og:title", content: "Experience — Ramkumar M." },
      { property: "og:description", content: "B2B social media, LinkedIn strategy, education marketing and SEO content." },
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
        lede="Two roles that shaped how I think about content: one in B2B technology, one in education. Different audiences, the same discipline — plan it, publish it, learn from it."
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
                {job.location ? (
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                ) : (
                  <Pending>Location to be added</Pending>
                )}
                {job.start ? <span>{job.start} — {job.end ?? "Present"}</span> : <Pending>Dates to be added</Pending>}
              </div>
              <p className="mt-6 inline-block bg-cream px-3 py-1.5 text-sm font-medium text-primary">{job.positioning}</p>
              <p className="prose-editorial mt-6 text-foreground/85">{job.summary}</p>

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
              {job.caseStudy && (
                <Link to="/case-studies/$slug" params={{ slug: job.caseStudy }} className="link-draw mt-10 inline-flex items-center gap-2 font-semibold text-primary">
                  Related case study <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>
      <ContactBand />
    </>
  );
}
