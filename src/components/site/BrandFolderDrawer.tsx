import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ExternalLink, Folder, Layers, Sparkles, X } from "lucide-react";
import type { BrandFolder } from "@/data/folders";
import { contentItems, type ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

interface BrandFolderDrawerProps {
  folder: BrandFolder | null;
  onClose: () => void;
  onSelectContent: (item: ContentItem) => void;
}

export function BrandFolderDrawer({ folder, onClose, onSelectContent }: BrandFolderDrawerProps) {
  useEffect(() => {
    if (!folder) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [folder, onClose]);

  if (!folder) return null;

  // Filter content pieces for this brand
  const brandCreatives = contentItems.filter((c) => {
    const brandNameLower = c.brand.toLowerCase();
    const folderNameLower = folder.name.toLowerCase();
    return (
      brandNameLower.includes(folderNameLower) ||
      folderNameLower.includes(brandNameLower) ||
      (folder.id === "the-artist-mode" && brandNameLower.includes("artist")) ||
      (folder.id === "topall" && brandNameLower.includes("topall")) ||
      (folder.id === "vvt-coaching" && brandNameLower.includes("vvt")) ||
      (folder.id === "asta-properties" && brandNameLower.includes("asta")) ||
      (folder.id === "ambrig-homes" && brandNameLower.includes("ambrig")) ||
      (folder.id === "dr-vikram-agarwal-adarsh-college" && brandNameLower.includes("vikram"))
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-ink/70 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label={`${folder.name} Project Folder`}
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-2xl flex-col bg-cream shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* DRAWER TOP BAR */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-ivory/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center bg-primary font-mono text-xs font-semibold text-primary-foreground">
              {folder.number}
            </span>
            <div>
              <span className="eyebrow block">{folder.relationship}</span>
              <h2 className="font-display text-xl text-primary md:text-2xl">{folder.name}</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-foreground/70 hover:border-primary hover:text-primary transition-colors"
            aria-label="Close folder"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* DRAWER BODY */}
        <div className="flex-1 p-6 md:p-8 space-y-8">
          {/* OVERVIEW HERO */}
          <div className="border border-line bg-ivory p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="eyebrow">{folder.industry}</span>
              {folder.keyMetric && (
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl text-primary">{folder.keyMetric.value}</span>
                  <span className="text-xs text-foreground/70">{folder.keyMetric.label}</span>
                </div>
              )}
            </div>

            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              {folder.overview}
            </p>

            {folder.websiteUrl && (
              <div className="mt-4 pt-4 border-t border-line/60">
                <a
                  href={folder.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                >
                  Visit Official Website <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* CONTENT & STRATEGY FOCUS */}
          <div>
            <h3 className="eyebrow mb-3">Key Focus Areas &amp; Deliverables</h3>
            <div className="flex flex-wrap gap-2">
              {folder.contentAreas.map((area) => (
                <span
                  key={area}
                  className="border border-line bg-paper px-3 py-1 text-xs font-medium text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            {folder.featuredDeliverables.length > 0 && (
              <ul className="mt-4 space-y-2 border-l-2 border-primary/40 pl-4 text-xs text-foreground/80">
                {folder.featuredDeliverables.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    ✦ {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CREATIVE PIECES SECTION */}
          {brandCreatives.length > 0 && (
            <div>
              <div className="flex items-center justify-between border-b border-line pb-2 mb-4">
                <h3 className="eyebrow">Creative Pieces in this Folder ({brandCreatives.length})</h3>
                <span className="text-xs text-foreground/60">Click any piece to preview</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {brandCreatives.map((item) => (
                  <div
                    key={item.slug}
                    onClick={() => {
                      onClose();
                      onSelectContent(item);
                    }}
                    className="group border border-line bg-paper p-3 transition-all hover:border-primary cursor-pointer hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-2 left-2 bg-paper/90 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-primary">
                        {item.format}
                      </span>
                      {item.metrics[0] && (
                        <span className="absolute bottom-2 right-2 bg-primary/95 text-primary-foreground px-2 py-0.5 font-display text-xs">
                          {item.metrics[0].value}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-2.5 font-display text-sm text-foreground group-hover:text-primary line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[0.7rem] text-rose line-clamp-1">{item.platform}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CASE STUDY LINK CARD */}
          <div className="bg-primary p-6 text-primary-foreground">
            <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary-foreground/75">
              Comprehensive Strategic Breakdown
            </span>
            <h3 className="mt-2 font-display text-2xl text-primary-foreground">
              Deep-Dive Case Study: {folder.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-primary-foreground/80">
              Read the complete background, target audience psychology, campaign funnel, tactical execution, and strategic learnings for this brand.
            </p>
            <div className="mt-5">
              <Link
                to="/case-studies/$slug"
                params={{ slug: folder.caseStudySlug }}
                className="inline-flex items-center gap-2 bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-cream"
              >
                Read Full Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* DRAWER FOOTER */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between border-t border-line bg-ivory/95 px-6 py-4 backdrop-blur-md">
          <span className="eyebrow">Folder {folder.number} of 12</span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors"
          >
            Close Folder
          </button>
        </div>
      </div>
    </div>
  );
}
