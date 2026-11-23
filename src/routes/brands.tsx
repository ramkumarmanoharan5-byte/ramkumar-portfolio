import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { MediaFrame } from "@/components/site/MediaFrame";
import { TextLink } from "@/components/site/OriginalLink";
import { ContactBand } from "@/components/site/ContactBand";
import { brands } from "@/data/brands";
import { contentItems } from "@/data/content";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands: Sofa 42 and Shoutout Campus | Ramkumar M." },
      { name: "description", content: "Brand showcases for Sofa 42 Furniture and Shoutout Campus: their audiences, content areas and approach." },
      { property: "og:title", content: "Brands, Audiences & Content Experiences" },
      { property: "og:description", content: "Furniture and influencer marketing brands, each with its own audience and content approach." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Brands,
});

function Brands() {
  return (
    <>
      <PageIntro
        eyebrow="Brands"
        title="Brands, Audiences & Content Experiences"
        lede="A furniture showroom and an influencer-promotions account. Each needed content shaped around a different audience and a different reason to engage."
      />

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {brands.map((b) => (
            <a key={b.slug} href={`#${b.slug}`} className="group bg-ivory p-8 transition-colors hover:bg-cream">
              <p className="font-display text-6xl text-primary/25">{b.number}</p>
              <h2 className="mt-4 font-display text-3xl text-primary">{b.name}</h2>
              <p className="mt-1 text-sm text-foreground/70">{b.industry}</p>
              <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center">
                {[
                  ["Posts", b.snapshot.posts],
                  ["Followers", b.snapshot.followers],
                  ["Following", b.snapshot.following],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dd className="font-display text-2xl">{v}</dd>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-foreground/60">{k}</dt>
                  </div>
                ))}
              </dl>
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs italic text-rose">
          Figures are transcribed from profile screenshots as account snapshots. They are not current verified figures and do not represent growth I generated.
        </p>
      </section>

      {/* Detailed showcases */}
      {brands.map((b, i) => {
        const pieces = contentItems.filter((c) => c.brand === b.displayName || c.brand === b.name);
        return (
          <section key={b.slug} id={b.slug} className={`scroll-mt-20 ${i % 2 === 0 ? "bg-cream" : ""} mt-24`}>
            <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
              <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="eyebrow">Brand {b.number} · {b.industry}</p>
                  <h2 className="display-lg mt-4 text-primary">{b.displayName}</h2>
                  <p className="prose-editorial mt-6 text-foreground/85">{b.overview}</p>
                  <dl className="mt-8 space-y-3 text-sm">
                    {b.instagramUrl && b.instagramHandle && (
                      <div className="flex flex-wrap gap-2">
                        <dt className="w-24 shrink-0 font-semibold">Instagram</dt>
                        <dd><TextLink url={b.instagramUrl}>{b.instagramHandle}</TextLink></dd>
                      </div>
                    )}
                    {b.website && (
                      <div className="flex flex-wrap gap-2">
                        <dt className="w-24 shrink-0 font-semibold">Website</dt>
                        <dd><TextLink url={b.website}>{b.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</TextLink></dd>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <dt className="w-24 shrink-0 font-semibold">Account</dt>
                      <dd>{b.snapshot.posts} posts, {b.snapshot.followers} followers, {b.snapshot.following} following</dd>
                    </div>
                  </dl>
                </div>
                <div className="space-y-6 lg:col-span-7">
                  {b.images.map((img) => <MediaFrame key={img.src} src={img.src} alt={img.alt} caption={img.caption} aspect="aspect-[16/9]" />)}
                  {b.images.length === 0 && (
                    <div className="grid h-full content-center gap-px bg-line sm:grid-cols-3">
                      {[["Posts", b.snapshot.posts], ["Followers", b.snapshot.followers], ["Following", b.snapshot.following]].map(([k, v]) => (
                        <div key={k} className="bg-ivory p-8 text-center">
                          <p className="font-display text-5xl text-primary">{v}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-foreground/60">{k}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-20 grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="eyebrow mb-5">Content areas</h3>
                  <ul className="space-y-2">
                    {b.contentAreas.map((a) => (
                      <li key={a} className="flex items-baseline gap-3 border-b border-line pb-2"><span className="text-xs text-primary">✦</span>{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-8 md:grid-cols-3 lg:col-span-8">
                  {b.approach.map((ap, n) => (
                    <div key={ap.title}>
                      <p className="font-display text-4xl text-primary/30">{String(n + 1).padStart(2, "0")}</p>
                      <h4 className="mt-2 font-display text-2xl text-primary">{ap.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{ap.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {(pieces.length > 0 || b.caseStudy) && (
              <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
                {pieces.length > 0 && <span className="eyebrow">Content pieces</span>}
                {pieces.map((p) => (
                  <Link key={p.slug} to="/work/$slug" params={{ slug: p.slug }} className="link-draw text-sm font-semibold text-primary">
                    {p.title} →
                  </Link>
                ))}
                {b.caseStudy && (
                  <Link to="/case-studies/$slug" params={{ slug: b.caseStudy }} className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Full case study <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
              )}
            </div>
          </section>
        );
      })}
      <ContactBand />
    </>
  );
}
