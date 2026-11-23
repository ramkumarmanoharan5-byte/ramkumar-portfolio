import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/site/MediaFrame";
import { ContactBand } from "@/components/site/ContactBand";
import { ContentCard } from "@/components/site/ContentCard";
import { ContentDetail } from "@/components/site/ContentDetail";
import { ContentDialog } from "@/components/site/ContentDialog";
import { caseStudies, caseStudyBySlug, type CaseStudy } from "@/data/caseStudies";
import { contentItems, type ContentItem } from "@/data/content";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const cs = caseStudyBySlug(params.slug);
    if (!cs) throw notFound();
    return { cs };
  },
  head: ({ loaderData }) => {
    const cs = loaderData?.cs;
    if (!cs) return { meta: [{ title: "Case study not found | Ramkumar M." }, { name: "robots", content: "noindex" }] };
    const title = `${cs.title} Case Study | Ramkumar M.`;
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

function SectionTitle({ label, eyebrow, title, intro, dark }: { label?: string | undefined; eyebrow?: string | undefined; title: string; intro?: string | undefined; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      {label && <p className={`font-display text-7xl leading-none ${dark ? "text-primary-foreground/25" : "text-primary/20"}`}>{label}</p>}
      {eyebrow && <p className={`mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${dark ? "text-primary-foreground/70" : "text-rose"}`}>{eyebrow}</p>}
      <h2 className={`display-md mt-3 ${dark ? "" : "text-primary"}`}>{title}</h2>
      {intro && <p className={`mt-5 leading-relaxed ${dark ? "text-primary-foreground/80" : "text-foreground/80"}`}>{intro}</p>}
    </div>
  );
}

function Journey({ journey }: { journey: NonNullable<CaseStudy["journey"]> }) {
  const n = journey.steps.length;
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <SectionTitle label={journey.label} title={journey.title} intro={journey.intro} dark />
        <ol className="mt-14 space-y-2" aria-label={journey.title}>
          {journey.steps.map((s, i) => {
            const width = 100 - (i * 40) / Math.max(1, n - 1);
            return (
              <li key={s.title} className="mx-auto md:w-[var(--w)]" style={{ "--w": `${width}%` } as React.CSSProperties}>
                <div className="grid gap-3 border border-primary-foreground/25 bg-primary-deep/40 p-5 md:grid-cols-[4rem_1fr_auto] md:items-center md:gap-6 md:px-8">
                  <span className="font-display text-4xl leading-none text-primary-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">{s.body}</p>
                  </div>
                  {s.link && (
                    <a href={s.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline">
                      {s.link.label} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
        {journey.note && <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-primary-foreground/75">{journey.note}</p>}
      </div>
    </section>
  );
}

function Creatives({ items, title, intro, cta, onOpen }: { items: ContentItem[]; title: string; intro?: string | undefined; cta?: { label: string; url: string } | undefined; onOpen: (i: ContentItem) => void }) {
  const single = items.length === 1 ? items[0] : undefined;
  return (
    <section id="content-and-creatives" className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Real work, with original links" title={title} intro={intro} />
          {cta && (
            <Button asChild size="lg">
              <a href={cta.url} target="_blank" rel="noopener noreferrer">{cta.label} <ArrowUpRight /></a>
            </Button>
          )}
        </div>
        {single ? (
          <div className="mt-12"><ContentDetail item={single} compact /></div>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => <ContentCard key={item.slug} item={item} onOpen={() => onOpen(item)} />)}
          </div>
        )}
      </div>
    </section>
  );
}

function CaseStudyPage() {
  const { cs } = Route.useLoaderData();
  const [active, setActive] = useState<ContentItem | null>(null);
  const brandPieces = cs.creatives ? contentItems.filter((c) => c.brand === cs.creatives?.brand) : [];
  const viral = cs.viralGallery ? brandPieces.filter((p) => p.viral) : [];
  const pieces = cs.viralGallery ? brandPieces.filter((p) => !p.viral) : brandPieces;
  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  const dark = !!cs.heroStat || cs.number === "01";

  return (
    <article>
      {/* HERO */}
      <header className={dark ? "bg-primary text-primary-foreground" : ""}>
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-10 md:pb-24">
          <Link to="/case-studies" className={`inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-primary-foreground/80" : "text-primary"}`}>
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className={cs.heroStat ? "lg:col-span-7" : "lg:col-span-9"}>
              <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${dark ? "text-primary-foreground/70" : "text-rose"}`}>
                Project {cs.number} · {cs.kind}
              </p>
              <h1 className={`display-lg mt-5 ${dark ? "" : "text-primary"}`}>{cs.headline}</h1>
              <p className={`mt-6 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-primary-foreground/80" : "text-foreground"}`}>
                {cs.title} <span className="mx-2 opacity-50">/</span> {cs.industry}
              </p>
              <p className={`prose-editorial mt-6 ${dark ? "text-primary-foreground/85" : "text-foreground/80"}`}>{cs.summary}</p>
              {cs.ctas && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {cs.ctas.map((c, i) => (
                    <Button key={c.url} asChild size="lg" variant={dark ? (i === 0 ? "onDark" : "outlineOnDark") : i === 0 ? "default" : "outline"}>
                      <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label} <ArrowUpRight /></a>
                    </Button>
                  ))}
                </div>
              )}
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

      {/* RESULTS */}
      {cs.results && (
        <section className="bg-ink text-cream">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
            <p className="eyebrow">{cs.results.title}</p>
            {cs.results.intro && <p className="mt-3 text-cream/75">{cs.results.intro}</p>}
            <dl className={`mt-8 grid grid-cols-2 gap-px bg-cream/15 ${cs.results.metrics.length >= 5 ? "md:grid-cols-5" : "md:grid-cols-4"}`}>
              {cs.results.metrics.map((m, i) => (
                <div key={m.label} className={`bg-ink p-6 ${i === 0 || (cs.results?.metrics.length === 5 && i === 1 && cs.slug.startsWith("anna")) ? "md:bg-primary" : ""}`}>
                  <dd className="font-display text-4xl leading-none md:text-5xl">{m.value}</dd>
                  <dt className="mt-3 text-xs uppercase tracking-[0.16em] text-cream/70">{m.label}</dt>
                  {m.note && <p className="mt-1 text-xs text-cream/55">{m.note}</p>}
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-3xl text-sm text-cream/70">{cs.results.note}</p>
            {cs.results.image && (
              <div className="mt-10">
                <MediaFrame src={cs.results.image.src} alt={cs.results.image.alt} caption={cs.results.image.caption} aspect="aspect-[1900/1046]" imgClassName="object-contain" />
              </div>
            )}
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
            <p className="eyebrow mb-4">My role</p>
            <ul className="flex flex-wrap gap-2">{cs.responsibilities.map((f) => <li key={f} className="border border-primary/30 px-3 py-1 text-sm text-primary">{f}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      {cs.images.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
          <div className={`grid gap-6 ${cs.images.length > 1 ? "md:grid-cols-2" : ""}`}>
            {cs.images.map((img) => <MediaFrame key={img.src} src={img.src} alt={img.alt} caption={img.caption} aspect="aspect-[16/10]" imgClassName="object-top" />)}
          </div>
        </section>
      )}

      {/* VIRAL GALLERY */}
      {cs.viralGallery && viral.length > 0 && (
        <section className="bg-ink text-cream">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <SectionTitle title={cs.viralGallery.title} intro={cs.viralGallery.intro} dark />
            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {viral.map((p) => (
                <a key={p.slug} href={p.url ?? undefined} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="aspect-[9/16] overflow-hidden bg-primary-deep">
                    <img src={p.image.src} alt={p.image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 font-display text-4xl leading-none text-primary-foreground">{p.metrics[0]?.value}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-cream/75">{p.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold">Watch <ArrowUpRight className="h-3 w-3" /></span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs text-cream/55">View counts as displayed on YouTube. Each one belongs to that Short only.</p>
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
                <div className={ch.items.length > 1 ? "grid gap-x-10 gap-y-8 sm:grid-cols-2" : ""}>
                  {ch.items.map((it) => (
                    <div key={it.title} className="border-t border-line pt-5">
                      <h3 className="font-display text-2xl">{it.title}</h3>
                      <p className="mt-2 leading-relaxed text-foreground/80">{it.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* JOURNEY / FUNNEL */}
      {cs.journey && <Journey journey={cs.journey} />}

      {/* MEASUREMENT */}
      {cs.measurement && (
        <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
          <SectionTitle eyebrow="Conversion and performance" title={cs.measurement.title} intro={cs.measurement.intro} />
          <ol className="mt-10 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {cs.measurement.items.map((m, i) => (
              <li key={m} className="bg-ivory p-5">
                <span className="font-display text-2xl text-primary/40">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-medium">{m}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm italic text-rose">{cs.measurement.note}</p>
        </section>
      )}

      {/* CONVERSION LENS */}
      {cs.conversionLens && (
        <section className={cs.measurement ? "border-t border-line" : "bg-cream"}>
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <SectionTitle eyebrow="Beyond views" title="From attention to outcome" />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {cs.conversionLens.map((r) => (
                <li key={r.stage} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
                  <p className="font-display text-2xl text-primary md:col-span-3">{r.stage}</p>
                  <p className="text-foreground/85 md:col-span-9">{r.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* BUDGET REFERENCE */}
      {cs.budgetReference && (
        <section className="bg-ink text-cream">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-10">
            <div>
              <p className="eyebrow">{cs.budgetReference.label}</p>
              <p className="mt-3 font-display text-6xl leading-none md:text-7xl">{cs.budgetReference.value}</p>
            </div>
            <p className="max-w-md text-sm text-cream/70">{cs.budgetReference.note}</p>
          </div>
        </section>
      )}

      {/* CONTENT & CREATIVES */}
      {cs.creatives && pieces.length > 0 && (
        <Creatives items={pieces} title={cs.creatives.title} intro={cs.creatives.intro} cta={cs.creatives.cta} onOpen={setActive} />
      )}

      {/* PAGES */}
      {cs.pages && (
        <section className="border-t border-line">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
            <SectionTitle title={cs.pages.title} intro={cs.pages.intro} />
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {cs.pages.items.map((p) => (
                <li key={p.url}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="group grid gap-1 py-5 md:grid-cols-12 md:items-baseline md:gap-8">
                    <span className="eyebrow md:col-span-3">{p.group}</span>
                    <span className="font-display text-2xl transition-colors group-hover:text-primary md:col-span-8">{p.label}</span>
                    <ArrowUpRight className="hidden h-5 w-5 text-primary md:col-span-1 md:block md:justify-self-end" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* LEARNINGS + LINKS */}
      <section className="mx-auto grid max-w-7xl gap-12 border-t border-line px-5 py-20 md:px-10 lg:grid-cols-12">
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
        {cs.links.length > 0 && (
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow">Links</p>
            <ul className="mt-6 space-y-3">
              {cs.links.map((l) => (
                <li key={l.label} className="border-b border-line pb-3">
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 font-semibold text-primary">
                    {l.label} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {next && (
        <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="group block border-t border-line bg-cream">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 py-14 md:px-10">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-3 font-display text-4xl transition-colors group-hover:text-primary md:text-6xl">{next.title}</p>
            </div>
            <ArrowRight className="h-8 w-8 shrink-0 text-primary transition-transform group-hover:translate-x-2" />
          </div>
        </Link>
      )}
      <ContentDialog item={active} onClose={() => setActive(null)} />
      <ContactBand />
    </article>
  );
}
