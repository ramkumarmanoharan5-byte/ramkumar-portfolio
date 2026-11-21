import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { MediaFrame } from "@/components/site/MediaFrame";
import { Pending } from "@/components/site/Pending";
import { ContactBand } from "@/components/site/ContactBand";
import { caseStudies, caseStudyBySlug } from "@/data/caseStudies";
import { contentItems, displayTitle } from "@/data/content";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const cs = caseStudyBySlug(params.slug);
    if (!cs) throw notFound();
    return { cs };
  },
  head: ({ loaderData }) => {
    const cs = loaderData?.cs;
    if (!cs) return { meta: [{ title: "Case study not found — Ramkumar M." }, { name: "robots", content: "noindex" }] };
    const title = `${cs.title} — Case Study | Ramkumar M.`;
    return {
      meta: [
        { title },
        { name: "description", content: cs.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: cs.headline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="display-md text-primary">This case study doesn't exist.</h1>
      <Link to="/case-studies" className="mt-6 inline-block font-semibold text-primary underline">All case studies</Link>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { cs } = Route.useLoaderData();
  const pieces = cs.contentBrand ? contentItems.filter((c) => c.brand === cs.contentBrand) : [];
  const published = pieces.filter((p) => p.status === "published");
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const isArtist = cs.slug === "the-artist-mode";

  return (
    <article>
      {/* HERO */}
      <header className={cs.heroStat ? "bg-primary text-primary-foreground" : ""}>
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-10 md:pb-24">
          <Link to="/case-studies" className={`inline-flex items-center gap-2 text-sm font-semibold ${cs.heroStat ? "text-primary-foreground/80" : "text-primary"}`}>
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${cs.heroStat ? "text-primary-foreground/70" : "text-rose"}`}>
                Case study {cs.number} · {cs.kind}
              </p>
              <h1 className={`display-lg mt-5 ${cs.heroStat ? "" : "text-primary"}`}>{cs.headline}</h1>
              <p className={`mt-6 text-sm font-semibold uppercase tracking-[0.18em] ${cs.heroStat ? "text-primary-foreground/80" : "text-foreground"}`}>
                {cs.title} <span className="mx-2 opacity-50">/</span> {cs.industry}
              </p>
              <p className={`prose-editorial mt-6 ${cs.heroStat ? "text-primary-foreground/85" : "text-foreground/80"}`}>{cs.summary}</p>
            </div>
            {cs.heroStat && (
              <div className="lg:col-span-5 lg:text-right">
                <p className="font-display text-[7rem] leading-[0.85] md:text-[11rem]">{cs.heroStat.value}</p>
                <p className="mt-2 font-display text-2xl">{cs.heroStat.label}</p>
                {cs.heroStat.note && <p className="mt-2 text-xs text-primary-foreground/65">{cs.heroStat.note}</p>}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* DASHBOARD */}
      {cs.dashboard && (
        <section className="bg-ink text-cream">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
            <p className="eyebrow">Reported campaign performance</p>
            <dl className="mt-8 grid grid-cols-2 gap-px bg-cream/15 md:grid-cols-5">
              {cs.dashboard.map((m, i) => (
                <div key={m.label} className={`bg-ink p-6 ${i === 1 ? "md:bg-primary" : ""}`}>
                  <dd className="font-display text-5xl leading-none md:text-6xl">{m.value}</dd>
                  <dt className="mt-3 text-xs uppercase tracking-[0.16em] text-cream/70">{m.label}</dt>
                </div>
              ))}
            </dl>
            {cs.dashboardNote && <p className="mt-6 max-w-3xl text-sm text-cream/70">{cs.dashboardNote}</p>}
            <p className="mt-2 text-xs text-cream/50">L = lakh · Cr = crore. Audience demographics, ad-set and individual creative metrics are not shown.</p>
          </div>
        </section>
      )}

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="grid gap-px bg-line md:grid-cols-3">
          {[
            ["Objective", cs.overview.objective],
            ["Audience", cs.overview.audience],
            ["Strategy", cs.overview.strategy],
          ].map(([k, v]) => (
            <div key={k} className="bg-ivory p-7 md:first:pl-0">
              <p className="eyebrow">{k}</p>
              <p className="mt-3 leading-relaxed text-foreground/85">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Content formats</p>
            <ul className="flex flex-wrap gap-2">{cs.formats.map((f) => <li key={f} className="border border-line bg-cream px-3 py-1 text-sm">{f}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow mb-4">My responsibilities</p>
            <ul className="flex flex-wrap gap-2">{cs.responsibilities.map((f) => <li key={f} className="border border-primary/30 px-3 py-1 text-sm text-primary">{f}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      {cs.images.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
          <div className="grid gap-6">
            {cs.images.map((img) => <MediaFrame key={img.src} src={img.src} alt={img.alt} caption={img.caption} aspect="aspect-[16/9]" />)}
          </div>
        </section>
      )}

      {/* CHAPTERS */}
      {cs.chapters.map((ch, ci) => (
        <section key={ch.title} className={ci % 2 === 0 ? "bg-cream" : ""}>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-display text-7xl leading-none text-primary/20">{ch.label}</p>
                <h2 className="display-md mt-3 text-primary">{ch.title}</h2>
                {ch.intro && <p className="mt-5 leading-relaxed text-foreground/80">{ch.intro}</p>}
              </div>
              <div className="lg:col-span-8">
                {ch.items.length > 0 && (
                  <div className={ch.items.length > 1 ? "grid gap-x-10 gap-y-8 sm:grid-cols-2" : ""}>
                    {ch.items.map((it) => (
                      <div key={it.title} className="border-t border-line pt-5">
                        <h3 className="font-display text-2xl">{it.title}</h3>
                        <p className="mt-2 leading-relaxed text-foreground/80">{it.body}</p>
                      </div>
                    ))}
                  </div>
                )}
                {ch.metrics && (
                  <div className={ch.items.length ? "mt-12" : ""}>
                    <p className="eyebrow mb-4">Figures {ch.metrics.every((m) => !m.value) && "· to be added from verified reports"}</p>
                    <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-3">
                      {ch.metrics.map((m) => (
                        <div key={m.label} className="bg-ivory p-5">
                          <dt className="text-xs uppercase tracking-[0.14em] text-foreground/70">{m.label}</dt>
                          <dd className="mt-2">{m.value ? <span className="font-display text-3xl text-primary">{m.value}</span> : <Pending>To be added</Pending>}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SUB PROJECTS */}
      {cs.subProjects && (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
          <p className="eyebrow">Projects</p>
          <div className="mt-8 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {cs.subProjects.map((sp) => (
              <div key={sp.name} className="bg-ivory p-7">
                <h3 className="font-display text-2xl text-primary">{sp.name}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {sp.points.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">—</span>{p}</li>)}
                </ul>
                {sp.website && (
                  <a href={sp.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {sp.website.replace(/^https?:\/\//, "").replace(/\/$/, "")} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <p className="mt-5 border-t border-line pt-3"><Pending>Creative examples & content links to be added</Pending></p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs italic text-rose">Campaign metrics for these projects are not shown because verified figures haven't been supplied.</p>
        </section>
      )}

      {/* CONTENT PIECES */}
      {(published.length > 0 || pieces.length > 0 || cs.creativeSlots) && (
        <section className={isArtist ? "bg-ink text-cream" : "border-t border-line"}>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <p className="eyebrow">{isArtist ? "Selected Shorts · with original links" : "Content & creatives"}</p>
            {published.length > 0 ? (
              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                {published.map((p) => (
                  <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="aspect-[9/16] overflow-hidden bg-primary-deep">
                      {p.image && <img src={p.image.src} alt={p.image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                    </div>
                    <p className="mt-3 font-display text-3xl leading-none text-primary-foreground">{p.metrics[0]?.value}</p>
                    <p className="mt-1 line-clamp-2 text-xs opacity-75">{displayTitle(p)}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
                {pieces.map((p) => (
                  <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="group block">
                    <MediaFrame alt={displayTitle(p)} aspect="aspect-[4/5]" placeholderLabel="Creative to be added" lightbox={false} />
                    <p className="mt-3 font-display text-xl group-hover:text-primary">{displayTitle(p)}</p>
                  </Link>
                ))}
                {Array.from({ length: Math.max(0, (cs.creativeSlots ?? 0) - pieces.length) }).map((_, i) => (
                  <MediaFrame key={i} alt="Creative slot" aspect="aspect-[4/5]" placeholderLabel="Creative & link to be added" />
                ))}
              </div>
            )}
            {isArtist && (
              <div className="mt-16 grid gap-5 md:grid-cols-3">
                {["YouTube Studio analytics — 19M+ Short", "Audience retention", "Channel overview"].map((l) => (
                  <MediaFrame key={l} alt={l} aspect="aspect-[16/10]" placeholderLabel={`${l} screenshot to be added`} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* LEARNINGS + LINKS */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Key learnings</p>
          <ol className="mt-6 space-y-6">
            {cs.learnings.map((l, i) => (
              <li key={l} className="flex gap-5">
                <span className="font-display text-3xl leading-none text-primary/40">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-2xl leading-snug">{l}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="eyebrow">Links</p>
          <ul className="mt-6 space-y-3">
            {cs.links.length === 0 && <li><Pending>Links to be added</Pending></li>}
            {cs.links.map((l) => (
              <li key={l.label} className="border-b border-line pb-3">
                {l.url ? (
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 font-semibold text-primary">
                    {l.label} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="flex flex-col gap-1"><span className="font-semibold">{l.label}</span><Pending>Link to be added</Pending></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {next && (
        <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="group block border-t border-line bg-cream">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 py-14 md:px-10">
            <div>
              <p className="eyebrow">Next case study</p>
              <p className="mt-3 font-display text-4xl transition-colors group-hover:text-primary md:text-6xl">{next.title}</p>
            </div>
            <ArrowRight className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:translate-x-2" />
          </div>
        </Link>
      )}
      <ContactBand />
    </article>
  );
}
