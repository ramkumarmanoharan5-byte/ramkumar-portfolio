import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContentDetail } from "@/components/site/ContentDetail";
import { contentBySlug, contentItems } from "@/data/content";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = contentBySlug(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    if (!item) return { meta: [{ title: "Content piece not found | Ramkumar M." }, { name: "robots", content: "noindex" }] };
    const title = `${item.title} | ${item.brand} | Ramkumar M.`;
    const description = `${item.platform} ${item.format}: ${item.objective}`;
    const meta = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ];
    if (item.image.src.startsWith("https://")) {
      meta.push({ property: "og:image", content: item.image.src }, { name: "twitter:image", content: item.image.src });
    }
    return { meta };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="display-md text-primary">This content piece doesn't exist.</h1>
      <Link to="/work" className="mt-6 inline-block font-semibold text-primary underline">Back to all work</Link>
    </div>
  ),
  component: WorkDetail,
});

function WorkDetail() {
  const { item } = Route.useLoaderData();
  const idx = contentItems.findIndex((c) => c.slug === item.slug);
  const next = contentItems[(idx + 1) % contentItems.length];
  return (
    <article className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
      <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft className="h-4 w-4" /> All content pieces
      </Link>
      <p className="eyebrow mt-10">{item.brand} · {item.platform} {item.format}</p>
      <div className="mt-8">
        <ContentDetail item={item} />
      </div>
      {next && next.slug !== item.slug && (
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group mt-24 flex items-end justify-between gap-6 border-t border-line pt-8">
          <div>
            <p className="eyebrow">Next piece</p>
            <p className="mt-2 font-display text-3xl text-foreground transition-colors group-hover:text-primary md:text-4xl">{next.title}</p>
          </div>
          <ArrowRight className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  );
}
