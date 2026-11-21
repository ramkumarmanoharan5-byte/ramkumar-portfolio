import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageIntro } from "@/components/site/PageIntro";
import { ContentCard } from "@/components/site/ContentCard";
import { ContentDialog } from "@/components/site/ContentDialog";
import { contentItems, type ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "My Work: Every Content Piece Has a Story | Ramkumar M." },
      { name: "description", content: "Individual Reels, Shorts, posts, lesson pages and articles for TopAll, VVT Coaching, The Artist Mode and more, each with its objective, idea, my contribution and the original link." },
      { property: "og:title", content: "Every Content Piece Has a Story" },
      { property: "og:description", content: "Filter by brand, platform, format and category. Open any piece to see the thinking behind it and the original." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));

function FilterRow({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
      <span className="eyebrow w-24 shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2" role="group" aria-label={`Filter by ${label}`}>
        {["All", ...options].map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={cn(
              "border px-3 py-1.5 text-xs font-medium transition-colors",
              value === o ? "border-primary bg-primary text-primary-foreground" : "border-line bg-transparent text-foreground/80 hover:border-primary hover:text-primary",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function WorkIndex() {
  const [brand, setBrand] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [format, setFormat] = useState("All");
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<ContentItem | null>(null);

  const options = useMemo(
    () => ({
      brands: uniq(contentItems.map((c) => c.brand)),
      platforms: uniq(contentItems.map((c) => c.platform)),
      formats: uniq(contentItems.map((c) => c.format)),
      categories: uniq(contentItems.flatMap((c) => c.categories)),
    }),
    [],
  );

  const filtered = contentItems.filter(
    (c) =>
      (brand === "All" || c.brand === brand) &&
      (platform === "All" || c.platform === platform) &&
      (format === "All" || c.format === format) &&
      (category === "All" || c.categories.includes(category as ContentItem["categories"][number])),
  );
  const reset = () => { setBrand("All"); setPlatform("All"); setFormat("All"); setCategory("All"); };

  return (
    <>
      <PageIntro
        eyebrow="My Work"
        title="Every Content Piece Has a Story"
        lede="Each piece here is a real creative with its own link. Open one to see what it was for, who it was for, the idea behind it, what I did and, where I have them, the real numbers."
      />

      <section className="sticky top-16 z-30 border-y border-line bg-ivory/95 backdrop-blur-md">
        <details className="group mx-auto max-w-7xl px-5 md:px-10" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-semibold">
            <span>Filter <span className="ml-2 font-normal text-foreground/60">{filtered.length} of {contentItems.length} pieces</span></span>
            <span className="text-xs text-primary group-open:hidden">Show filters</span>
            <span className="hidden text-xs text-primary group-open:inline">Hide</span>
          </summary>
          <div className="space-y-3 pb-5">
            <FilterRow label="Brand" options={options.brands} value={brand} onChange={setBrand} />
            <FilterRow label="Platform" options={options.platforms} value={platform} onChange={setPlatform} />
            <FilterRow label="Format" options={options.formats} value={format} onChange={setFormat} />
            <FilterRow label="Category" options={options.categories} value={category} onChange={setCategory} />
          </div>
        </details>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-display text-3xl text-primary">Nothing matches those filters.</p>
            <button type="button" onClick={reset} className="mt-4 text-sm font-semibold text-primary underline">Clear filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <ContentCard key={item.slug} item={item} index={i} onOpen={() => setActive(item)} />
            ))}
          </div>
        )}
      </section>

      <ContentDialog item={active} onClose={() => setActive(null)} />
    </>
  );
}
