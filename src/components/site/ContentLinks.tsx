import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ContentItem } from "@/data/content";
import { OriginalLink } from "./OriginalLink";

/** Every working link for one piece: the original, any secondary original, and related pages. */
export function ContentLinks({ item, size = "default" }: { item: ContentItem; size?: "default" | "sm" }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        {item.url && <OriginalLink url={item.url} label={item.ctaLabel ?? "View Original Content"} size={size} />}
        {item.secondaryLinks?.map((l) => <OriginalLink key={l.url} url={l.url} label={l.label} size={size} variant="outline" />)}
      </div>
      {item.privateNote && <p className="text-sm text-foreground/70">{item.privateNote}</p>}
      {item.internalLink && (
        <Link to={item.internalLink.to} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          {item.internalLink.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
