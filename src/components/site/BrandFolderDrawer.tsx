import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Facebook,
  Folder,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  Play,
  Sparkles,
  Target,
  Youtube,
  X,
} from "lucide-react";
import type { BrandFolder, OfficialLink } from "@/data/folders";
import { contentItems, type ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";

interface BrandFolderDrawerProps {
  folder: BrandFolder | null;
  onClose: () => void;
  onSelectContent?: (item: ContentItem) => void;
}

function getLinkIcon(type: OfficialLink["type"]) {
  switch (type) {
    case "website":
    case "portal":
      return <Globe className="h-4 w-4 text-primary" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4 text-[#0077b5]" />;
    case "instagram":
      return <Instagram className="h-4 w-4 text-[#E4405F]" />;
    case "youtube":
      return <Youtube className="h-4 w-4 text-[#FF0000]" />;
    case "facebook":
      return <Facebook className="h-4 w-4 text-[#1877F2]" />;
    default:
      return <ExternalLink className="h-4 w-4 text-primary" />;
  }
}

export function BrandFolderDrawer({ folder, onClose }: BrandFolderDrawerProps) {
  useEffect(() => {
    if (!folder) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
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

  const handleCreativeClick = (item: ContentItem) => {
    if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else if (item.internalLink) {
      window.location.href = item.internalLink.to;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-ink/75 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label={`${folder.name} Project Folder`}
      onClick={onClose}
    >
      <div
        className="relative flex h-full max-h-screen w-full max-w-2xl flex-col bg-cream shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* DRAWER TOP BAR (FIXED/SHRINK-0) */}
        <div className="shrink-0 flex items-center justify-between border-b border-line bg-ivory px-6 py-4 z-20">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center bg-primary font-mono text-xs font-semibold text-primary-foreground">
              {folder.number}
            </span>
            <div>
              <span className="eyebrow block">{folder.relationship}</span>
              <h2 className="font-display text-xl text-primary md:text-2xl leading-none mt-0.5">
                {folder.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-line bg-paper text-foreground/80 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Close folder"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* DRAWER SCROLLABLE BODY (ROCK-SOLID SCROLL WITH MIN-H-0) */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8 space-y-8 min-h-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* OVERVIEW & METRICS BANNER */}
          <div className="border border-line bg-ivory p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-3">
              <span className="eyebrow text-primary font-bold">{folder.industry}</span>
              {folder.keyMetric && (
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl text-primary">{folder.keyMetric.value}</span>
                  <span className="text-xs text-foreground/70">{folder.keyMetric.label}</span>
                </div>
              )}
            </div>

            <h3 className="mt-4 font-display text-xl text-foreground md:text-2xl leading-snug">
              {folder.displayName}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              {folder.overview}
            </p>

            {folder.deepDive && (
              <p className="mt-3 text-xs leading-relaxed text-foreground/75 border-l-2 border-primary/40 pl-3">
                {folder.deepDive}
              </p>
            )}

            {/* AUDIENCE & STRATEGY */}
            <div className="mt-6 grid gap-4 border-t border-line/60 pt-4 sm:grid-cols-2 text-xs">
              {folder.targetAudience && (
                <div className="border border-line/70 bg-paper p-3">
                  <span className="eyebrow block mb-1">Target Audience</span>
                  <p className="text-foreground/85">{folder.targetAudience}</p>
                </div>
              )}
              {folder.strategySummary && (
                <div className="border border-line/70 bg-paper p-3">
                  <span className="eyebrow block mb-1">Strategy Summary</span>
                  <p className="text-foreground/85">{folder.strategySummary}</p>
                </div>
              )}
            </div>

            {/* METRICS DETAIL CHIPS */}
            {folder.metricsDetail && folder.metricsDetail.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {folder.metricsDetail.map((m, idx) => (
                  <div key={idx} className="border border-line bg-paper/90 p-2.5">
                    <span className="font-display text-lg text-primary block leading-tight">{m.value}</span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-foreground/80 block mt-0.5">{m.label}</span>
                    {m.note && <span className="text-[0.62rem] text-rose block mt-1 line-clamp-1">{m.note}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* OFFICIAL WORKING LINKS */}
          {folder.officialLinks && folder.officialLinks.length > 0 && (
            <div className="border border-line bg-paper p-5">
              <span className="eyebrow block mb-3">Official Verified Links</span>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {folder.officialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-line bg-cream/70 p-3 text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-cream hover:text-primary hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      {getLinkIcon(link.type)}
                      <div>
                        <span className="block leading-tight">{link.label}</span>
                        {link.badge && (
                          <span className="text-[0.65rem] font-normal text-foreground/60 block mt-0.5">
                            {link.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* DETAILED PROJECT SECTIONS / CHAPTERS */}
          {folder.sections && folder.sections.length > 0 && (
            <div className="space-y-4">
              <h3 className="eyebrow">Project Execution &amp; Strategy Breakdown</h3>
              {folder.sections.map((sec, idx) => (
                <div key={idx} className="border border-line bg-ivory p-5 space-y-2">
                  <h4 className="font-display text-lg text-foreground">{sec.title}</h4>
                  <p className="text-xs leading-relaxed text-foreground/80">{sec.description}</p>
                  {sec.points && (
                    <ul className="mt-3 space-y-1.5 border-l border-primary/30 pl-3 text-xs text-foreground/75">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          • {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* KEY FOCUS AREAS & DELIVERABLES */}
          <div>
            <h3 className="eyebrow mb-3">Content Areas &amp; Capabilities</h3>
            <div className="flex flex-wrap gap-2">
              {folder.contentAreas.map((area) => (
                <span
                  key={area}
                  className="border border-line bg-paper px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            {folder.featuredDeliverables.length > 0 && (
              <div className="mt-4 border-t border-line/60 pt-4">
                <span className="eyebrow block mb-2">Key Deliverables</span>
                <ul className="space-y-2 text-xs text-foreground/80">
                  {folder.featuredDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✦</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* CREATIVE PIECES SECTION (CLICK REDIRECTS STRAIGHT TO SOURCE PAGE) */}
          {brandCreatives.length > 0 && (
            <div>
              <div className="flex items-center justify-between border-b border-line pb-2 mb-4">
                <h3 className="eyebrow">Creative Pieces ({brandCreatives.length})</h3>
                <span className="text-xs text-primary font-semibold">Click any piece to open original source ↗</span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {brandCreatives.map((item) => (
                  <div
                    key={item.slug}
                    onClick={() => handleCreativeClick(item)}
                    className="group border border-line bg-paper p-3.5 transition-all hover:border-primary hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory border border-line/60">
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-2 left-2 bg-paper/95 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-primary shadow-sm">
                          {item.format}
                        </span>
                        {item.metrics[0] && (
                          <span className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-2 py-0.5 font-display text-xs shadow-sm">
                            {item.metrics[0].value}
                          </span>
                        )}
                        {/* Play button overlay that clearly signals external redirect */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="h-4 w-4 fill-current ml-0.5" />
                          </span>
                        </div>
                      </div>
                      <h4 className="mt-3 font-display text-base text-foreground group-hover:text-primary line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[0.7rem] text-rose line-clamp-1">{item.platform} · {item.categories[0]}</p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>{item.url ? `Open on ${item.platform} ↗` : "View Details ↗"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CASE STUDY LINK CARD */}
          <div className="bg-primary p-6 text-primary-foreground shadow-sm">
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
                className="inline-flex items-center gap-2 bg-paper px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-cream"
              >
                Read Full Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* DRAWER FOOTER (FIXED/SHRINK-0) */}
        <div className="shrink-0 flex items-center justify-between border-t border-line bg-ivory px-6 py-4 z-20">
          <span className="eyebrow">Folder {folder.number} of 12</span>
          <button
            type="button"
            onClick={onClose}
            className="border border-line bg-paper px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            Close Folder
          </button>
        </div>
      </div>
    </div>
  );
}
