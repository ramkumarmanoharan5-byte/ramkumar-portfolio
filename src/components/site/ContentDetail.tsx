import type { ContentItem } from "@/data/content";
import { displayTitle } from "@/data/content";
import { MediaFrame } from "./MediaFrame";
import { OriginalLink } from "./OriginalLink";
import { Pending } from "./Pending";

const facts = (item: ContentItem) => [
  { k: "Brand", v: item.brand },
  { k: "Project type", v: item.projectType },
  { k: "Platform", v: item.platform },
  { k: "Format", v: item.format },
];

export function ContentDetail({ item, compact = false }: { item: ContentItem; compact?: boolean }) {
  const story = [
    { n: "06", k: "Objective", v: item.objective },
    { n: "07", k: "Audience insight", v: item.audienceInsight },
    { n: "08", k: "Content idea", v: item.idea },
    { n: "09", k: "Creative approach", v: item.execution },
  ];
  const portrait = item.image?.orientation === "portrait";
  return (
    <div className={compact ? "grid gap-8 md:grid-cols-12" : "grid gap-10 md:grid-cols-12 md:gap-14"}>
      <div className={portrait || !item.image ? "md:col-span-5" : "md:col-span-6"}>
        <div className="md:sticky md:top-24">
          <MediaFrame
            src={item.image?.src}
            alt={item.image?.alt ?? `${item.brand} creative`}
            aspect={portrait || !item.image ? "aspect-[9/16]" : "aspect-[4/3]"}
            placeholderLabel="Creative preview to be added"
            eager
          />
          <dl className="mt-6 grid grid-cols-2 gap-px bg-line">
            {facts(item).map((f) => (
              <div key={f.k} className="bg-cream p-3">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-1 text-sm font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={portrait || !item.image ? "md:col-span-7" : "md:col-span-6"}>
        <p className="eyebrow">05 · Content title</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-primary md:text-4xl">{displayTitle(item)}</h2>
        {!item.title && <Pending className="mt-3">Exact published title to be added</Pending>}
        {item.status === "awaiting-details" && (
          <p className="mt-5 border-l-2 border-rose bg-cream p-4 text-sm text-foreground/80">
            This entry is ready for the real creative. The thinking below describes the purpose of this content type; the creative, title, link and any results will be added once supplied.
          </p>
        )}

        <div className="mt-8 divide-y divide-line border-y border-line">
          {story.map((s) => (
            <section key={s.k} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <h3 className="eyebrow pt-1"><span className="mr-2 text-primary">{s.n}</span>{s.k}</h3>
              <p className="leading-relaxed text-foreground/85">{s.v}</p>
            </section>
          ))}
          <section className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <h3 className="eyebrow pt-1"><span className="mr-2 text-primary">10</span>My contribution</h3>
            <ul className="flex flex-wrap gap-2">
              {item.contribution.map((c) => (
                <li key={c} className={item.contributionConfirmed ? "border border-primary/30 px-2.5 py-1 text-xs font-medium text-primary" : "text-sm italic text-rose"}>
                  {c}
                </li>
              ))}
            </ul>
          </section>
          <section className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <h3 className="eyebrow pt-1"><span className="mr-2 text-primary">11</span>Performance</h3>
            {item.metrics.length ? (
              <div>
                <div className="flex flex-wrap gap-8">
                  {item.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-5xl leading-none text-primary">{m.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-foreground/70">{m.label}</p>
                      {m.note && <p className="mt-1 text-xs italic text-rose">{m.note}</p>}
                    </div>
                  ))}
                </div>
                {item.metricsSource && <p className="mt-4 text-xs text-muted-foreground">{item.metricsSource}</p>}
              </div>
            ) : (
              <Pending>Verified results to be added</Pending>
            )}
          </section>
          <section className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <h3 className="eyebrow pt-1"><span className="mr-2 text-primary">12</span>Original content</h3>
            <div><OriginalLink url={item.url} /></div>
          </section>
        </div>
      </div>
    </div>
  );
}
