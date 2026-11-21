import type { ContentItem } from "@/data/content";
import { MediaFrame } from "./MediaFrame";
import { ContentLinks } from "./ContentLinks";

const aspectFor = (o: ContentItem["image"]["orientation"]) =>
  o === "portrait" ? "aspect-[9/16]" : o === "square" ? "aspect-square" : "aspect-[4/3]";

export function ContentDetail({ item, compact = false }: { item: ContentItem; compact?: boolean }) {
  const facts = [
    { k: "Brand", v: item.brand },
    { k: "Project type", v: item.projectType },
    { k: "Platform", v: item.platform },
    { k: "Format", v: item.format },
  ];
  const story = [
    { k: "Objective", v: item.objective },
    { k: "Audience", v: item.audienceInsight },
    { k: "The idea", v: item.idea },
    { k: "How it works", v: item.execution },
  ];
  const portrait = item.image.orientation === "portrait";
  return (
    <div className={compact ? "grid gap-8 md:grid-cols-12" : "grid gap-10 md:grid-cols-12 md:gap-14"}>
      <div className={portrait ? "md:col-span-5" : "md:col-span-6"}>
        <div className="md:sticky md:top-24">
          <MediaFrame src={item.image.src} alt={item.image.alt} aspect={aspectFor(item.image.orientation)} imgClassName={portrait ? "" : "object-top"} eager />
          <dl className="mt-6 grid grid-cols-2 gap-px bg-line">
            {facts.map((f) => (
              <div key={f.k} className="bg-cream p-3">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-1 text-sm font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={portrait ? "md:col-span-7" : "md:col-span-6"}>
        <p className="eyebrow">{item.brand}</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-primary md:text-4xl">{item.title}</h2>
        <div className="mt-6"><ContentLinks item={item} /></div>

        <div className="mt-8 divide-y divide-line border-y border-line">
          {story.map((s) => (
            <section key={s.k} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <h3 className="eyebrow pt-1">{s.k}</h3>
              <p className="leading-relaxed text-foreground/85">{s.v}</p>
            </section>
          ))}
          <section className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <h3 className="eyebrow pt-1">My contribution</h3>
            <ul className="flex flex-wrap gap-2">
              {item.contribution.map((c) => (
                <li key={c} className="border border-primary/30 px-2.5 py-1 text-xs font-medium text-primary">{c}</li>
              ))}
            </ul>
          </section>
          {item.metrics.length > 0 && (
            <section className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <h3 className="eyebrow pt-1">Performance</h3>
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
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
