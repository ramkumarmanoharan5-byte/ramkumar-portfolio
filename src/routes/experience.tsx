import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";
import { employment, type ManagedLink } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience: VVT Solutions and Colan Infotech | Ramkumar M." },
      {
        name: "description",
        content:
          "Digital Marketing Specialist at VVT Solutions since Feb 2025, and Digital Marketing Executive at Colan Infotech from Feb 2024 to Jan 2025.",
      },
      { property: "og:title", content: "Experience | Ramkumar M." },
      {
        property: "og:description",
        content:
          "In-house product marketing, client brand campaigns, Meta and Google campaign support, SEO, CRM workflows and B2B social media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function PlatformIcon({
  platform,
  className,
}: {
  platform: ManagedLink["platform"];
  className?: string;
}) {
  switch (platform) {
    case "LinkedIn":
      return <Linkedin className={className} />;
    case "Facebook":
      return <Facebook className={className} />;
    case "Instagram":
      return <Instagram className={className} />;
    default:
      return <Globe className={className} />;
  }
}

function Experience() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Where I've put the work in."
        lede="Two employers, most recent first. One in education and EdTech, one in B2B technology. Different audiences, same habit: plan it, publish it, and learn from the numbers."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <ol className="relative border-l border-primary/40 md:ml-[8.5rem]">
          {employment.map((job, i) => (
            <li key={job.id} className="relative pb-24 pl-8 last:pb-0 md:pl-14">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 bg-primary" aria-hidden />
              <p className="absolute -left-[8.5rem] top-1 hidden w-28 text-right font-display text-6xl leading-none text-primary/20 md:block">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="eyebrow">Employment {String(i + 1).padStart(2, "0")}</p>
              <h2 className="display-md mt-3 text-primary">{job.company}</h2>
              <p className="mt-2 text-xl font-semibold">{job.role}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/70">
                {job.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                )}
                {job.start && (
                  <span>
                    {job.start} to {job.end ?? "Present"}
                  </span>
                )}
              </div>
              <p className="mt-6 inline-block bg-cream px-3.5 py-1.5 text-sm font-medium text-primary">
                {job.positioning}
              </p>
              <p className="prose-editorial mt-6 text-lg text-foreground/85">{job.summary}</p>

              {job.highlights.length > 0 && (
                <dl
                  className={`mt-8 grid grid-cols-2 gap-px bg-line max-md:fill-row-2 ${
                    [
                      "",
                      "md:grid-cols-1",
                      "md:grid-cols-2",
                      "md:grid-cols-3 md:fill-row-3",
                      "md:grid-cols-4 md:fill-row-4",
                    ][Math.min(job.highlights.length, 4)]
                  }`}
                >
                  {job.highlights.map((h) => (
                    <div key={h.label} className="bg-ivory p-5">
                      <dd className="font-display text-3xl leading-none text-primary md:text-4xl">
                        {h.value}
                      </dd>
                      <dt className="mt-2 text-xs leading-snug text-foreground/70">{h.label}</dt>
                    </div>
                  ))}
                </dl>
              )}
              {job.highlights.length > 0 && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Reported from active work and resume records.
                </p>
              )}

              {/* BRANDS AND PRODUCTS MANAGED (FOR VVT SOLUTIONS) */}
              {job.brandCategories && (
                <div className="mt-14 border-t border-line pt-10">
                  <div className="max-w-3xl">
                    <p className="eyebrow">Portfolio scope</p>
                    <h3 className="display-sm mt-2 text-primary">{job.brandCategories.title}</h3>
                    <p className="mt-3 text-sm text-foreground/80">{job.brandCategories.intro}</p>
                  </div>

                  {/* In-House Products */}
                  <div className="mt-8">
                    <h4 className="eyebrow mb-4 text-xs tracking-wider text-rose">
                      A. In-House Products
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {job.brandCategories.inHouse.map((b) => (
                        <div key={b.slug} className="border border-line bg-ivory p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h5 className="font-display text-2xl text-primary">{b.name}</h5>
                              {b.url && (
                                <a
                                  href={b.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-rose hover:underline"
                                >
                                  {b.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                  <ArrowUpRight className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                            <Link
                              to="/case-studies/$slug"
                              params={{ slug: b.slug }}
                              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                            >
                              Case Study <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                            {b.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Brands & Campaigns */}
                  <div className="mt-8">
                    <h4 className="eyebrow mb-4 text-xs tracking-wider text-rose">
                      B. Client Brands and Campaigns
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {job.brandCategories.clients.map((b) => (
                        <div
                          key={b.slug}
                          className="flex flex-col justify-between border border-line bg-cream p-5"
                        >
                          <div>
                            <h5 className="font-display text-xl text-primary">{b.name}</h5>
                            <p className="mt-2 text-xs leading-relaxed text-foreground/75">
                              {b.description}
                            </p>
                          </div>
                          <Link
                            to="/case-studies/$slug"
                            params={{ slug: b.slug }}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                          >
                            View Case Study <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SOCIAL PLATFORMS MANAGED (FOR COLAN INFOTECH) */}
              {job.socialPlatforms && (
                <div className="mt-14 border-t border-line pt-10">
                  <div className="max-w-3xl">
                    <p className="eyebrow">Official Channels</p>
                    <h3 className="display-sm mt-2 text-primary">{job.socialPlatforms.title}</h3>
                    <p className="mt-3 text-sm text-foreground/80">
                      {job.socialPlatforms.description}
                    </p>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:fill-row-2 lg:grid-cols-3 lg:fill-row-3">
                    {job.socialPlatforms.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border border-line bg-ivory p-4 transition-colors hover:bg-cream"
                      >
                        <div className="flex items-center gap-3">
                          <PlatformIcon platform={link.platform} className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                              {link.label}
                            </p>
                            {link.note && (
                              <p className="text-[0.7rem] uppercase tracking-wider text-rose">
                                {link.note}
                              </p>
                            )}
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-primary/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* CLIENT SOCIAL MEDIA MANAGEMENT (FOR COLAN INFOTECH) */}
              {job.clientSocial && (
                <div className="mt-10 border-t border-line pt-10">
                  <p className="eyebrow">Client Portfolio</p>
                  <h3 className="display-sm mt-2 text-primary">{job.clientSocial.title}</h3>
                  <p className="prose-editorial mt-3 text-sm text-foreground/80">
                    {job.clientSocial.description}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.clientSocial.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-baseline gap-2.5 text-sm text-foreground/80"
                      >
                        <span className="h-px w-3 shrink-0 bg-primary" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SEO AND CONTENT (FOR COLAN INFOTECH) */}
              {job.seoAndContent && (
                <div className="mt-10 border-t border-line pt-10">
                  <p className="eyebrow">Organic Growth</p>
                  <h3 className="display-sm mt-2 text-primary">{job.seoAndContent.title}</h3>
                  <p className="prose-editorial mt-3 text-sm text-foreground/80">
                    {job.seoAndContent.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.seoAndContent.items.map((it) => (
                      <span
                        key={it}
                        className="border border-line bg-cream px-3 py-1.5 text-xs font-medium"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* FOCUS & RESPONSIBILITIES */}
              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="eyebrow mb-4">Focus &amp; Responsibilities</h3>
                  <ul className="space-y-2.5">
                    {job.focus.map((f) => (
                      <li key={f} className="flex items-baseline gap-3 text-sm text-foreground/85">
                        <span className="h-px w-4 shrink-0 bg-primary" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  {job.details.map((d) => (
                    <div key={d.label}>
                      <h3 className="eyebrow mb-3">{d.label}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {d.items.map((it) => (
                          <li key={it} className="border border-line bg-cream px-3 py-1 text-sm">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {job.responsibilities && (
                    <div>
                      <h3 className="eyebrow mb-3">Key Responsibilities</h3>
                      <ol className="space-y-1.5 text-xs text-foreground/75">
                        {job.responsibilities.map((r, n) => (
                          <li key={r} className="flex gap-2">
                            <span className="font-semibold text-rose">
                              {String(n + 1).padStart(2, "0")}.
                            </span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>

              {job.caseStudies.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
                  <span className="eyebrow">Related Case Studies:</span>
                  {job.caseStudies.map((c) => (
                    <Link
                      key={c.slug}
                      to="/case-studies/$slug"
                      params={{ slug: c.slug }}
                      className="link-draw inline-flex items-center gap-2 font-semibold text-primary"
                    >
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
