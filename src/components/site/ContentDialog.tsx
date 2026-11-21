import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { ContentItem } from "@/data/content";
import { ContentDetail } from "./ContentDetail";

export function ContentDialog({ item, onClose }: { item: ContentItem | null; onClose: () => void }) {
  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-6xl overflow-y-auto border-line bg-ivory p-6 sm:rounded-sm md:p-10">
        {item && (
          <>
            <DialogTitle className="sr-only">{item.title}</DialogTitle>
            <DialogDescription className="sr-only">Details for {item.title} by {item.brand}</DialogDescription>
            <ContentDetail item={item} compact />
            <div className="mt-8 flex justify-end border-t border-line pt-5">
              <Link to="/work/$slug" params={{ slug: item.slug }} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open as a full page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
