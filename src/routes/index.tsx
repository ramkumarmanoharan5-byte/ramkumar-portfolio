import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, headlineStat } from "@/data/profile";
import { contentItems } from "@/data/content";
import { brands } from "@/data/brands";
import { caseStudyBySlug } from "@/data/caseStudies";
import { ContactBand } from "@/components/site/ContactBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramkumar M. | Social Media & Content Strategist Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ramkumar M.: TopAll product marketing, VVT Coaching social media, a 19M view YouTube Short, 3.9Cr channel views and a 2,461 lead Meta Ads campaign.",
      },
      { property: "og:title", content: "Ramkumar M. | Social Media & Content Strategist" },
      { property: "og:description", content: "Creating content that captures attention, builds brands, and drives meaningful results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const disciplines = [
  "Social Media Management",
  "Content Strategy",
  "Short-Form Video",
  "Faceless Brand Building",
  "Meta Ads",
  "Lead Generation",
  "SEO",
  "AI-Assisted Content",
];

function Home() {
  const shorts = contentItems.filter((c) => c.viral).slice(0, 4);
  const hero = shorts[0];
  const anna = caseStudyBySlug("anna-adarsh-womens-college");
  const topall = caseStudyBySlug("topall");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:px-10 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">Portfolio · Social Media &amp; Content</p>
            <h1 className="display-xl rise mt-6 text-primary">
              Ramkumar
              <br />
              M<span className="text-rose">.</span>
            </h1>
            <p className="rise mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              {profile.title}
              <span className="mx-2 text-rose">/</span>
              {profile.secondaryTitle}
            </p>
            <p className="rise mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-[2rem]">
              {profile.headline}
            </p>
            <p className="prose-editorial rise mt-6 text-foreground/75">{profile.supporting}</p>
            <div className="rise mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/work">Explore My Work <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View My Case Studies</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/contact">Let's Connect</Link>
              </Button>
            </div>
          </div>

          <aside className="relative lg:col-span-5">
            <div className="relative bg-primary p-7 text-primary-foreground md:p-9">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Key achievement</p>
              <p className="mt-4 font-display text-[6.5rem] leading-[0.85] md:text-[8.5rem]">{headlineStat.value}</p>
              <p className="mt-3 max-w-xs font-display text-2xl leading-tight">{headlineStat.label}</p>
              <div className="mt-8 flex items-end gap-5">
                {hero && (
                  <a href={headlineStat.url} target="_blank" rel="noopener noreferrer" className="group block w-28 shrink-0 overflow-hidden md:w-32">
                    <img src={hero.image.src} alt={hero.image.alt} className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </a>
                )}
                <div>
                  <p className="text-sm text-primary-foreground/80">{headlineStat.detail}</p>
                  <a href={headlineStat.url} target="_blank" rel="noopener noreferrer" className="link-draw mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                    Watch the Short <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-[0.7rem] text-primary-foreground/60">One Short. The whole channel has 3.9Cr lifetime views.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-cream py-5" aria-hidden>
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl text-foreground/80">
              {d}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-script text-6xl text-primary">Hello,</p>
          <p className="eyebrow mt-4">A short introduction</p>
        </div>
        <div className="space-y-5 lg:col-span-7">
          {profile.intro.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-foreground/85">{p}</p>
          ))}
          <dl className="grid grid-cols-1 gap-px bg-line pt-px sm:grid-cols-3">
            {[
              { k: "Experience", v: "Nearly 3 years" },
              { k: "Industries", v: "EdTech, education, real estate, B2B tech" },
              { k: "Platforms", v: "Instagram, YouTube, Facebook, LinkedIn" },
            ].map((f) => (
              <div key={f.k} className="bg-ivory py-5 sm:pr-5">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-2 text-sm font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
          <Link to="/about" className="link-draw inline-flex items-center gap-2 pt-2 font-semibold text-primary">
            More about me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* MAIN PROJECT: TOPALL */}
      {topall && (
        <section className="border-t border-line bg-cream">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">Project 01 · Main project · What I'm working on now</p>
              <h2 className="display-lg mt-5 text-primary">TopAll</h2>
              <p className="mt-4 font-display text-2xl leading-snug">{topall.headline}</p>
              <p className="mt-5 leading-relaxed text-foreground/80">
                A NEET and JEE preparation product with a free practice portal and an upgraded AI-powered app. I work on the content and marketing that bring students in for free and give them a reason to go further.
              </p>
              <ol className="mt-8 space-y-2 text-sm">
                {(topall.journey?.steps ?? []).map((s, i) => (
                  <li key={s.title} className="flex items-baseline gap-4 border-b border-line pb-2">
                    <span className="font-display text-xl text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{s.title}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/case-studies/$slug" params={{ slug: "topall" }}>Read the case study <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://prep.topall.app/" target="_blank" rel="noopener noreferrer">Explore free resources <ArrowUpRight /></a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              {topall.images[0] && (
                <img src={topall.images[0].src} alt={topall.images[0].alt} loading="lazy" className="w-full border border-line object-cover shadow-sm" />
              )}
            </div>
          </div>
        </section>
      )}

      {/* FEATURED: THE ARTIST MODE */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Project 03 · Personal project</p>
              <h2 className="display-lg mt-5">Building a faceless brand. Reaching millions.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/80">
                The Artist Mode is my own faceless YouTube channel for men's style, grooming and self-improvement. It has 3.9Cr lifetime views, 32,905 subscribers and six Shorts past a million views each.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="onDark" size="lg">
                  <Link to="/case-studies/$slug" params={{ slug: "the-artist-mode" }}>Read the case study <ArrowRight /></Link>
                </Button>
                <Button asChild variant="outlineOnDark" size="lg">
                  <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer">Visit channel <ArrowUpRight /></a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
              {shorts.map((s, i) => (
                <Link key={s.slug} to="/work/$slug" params={{ slug: s.slug }} className={`group block ${i % 2 === 1 ? "sm:mt-10" : ""}`}>
                  <div className="aspect-[9/16] overflow-hidden bg-primary-deep">
                    <img src={s.image.src} alt={s.image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 font-display text-3xl leading-none">{s.metrics[0]?.value}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-primary-foreground/75">{s.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANNA ADARSH NUMBERS */}
      {anna?.results && (
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Case study · Meta Ads</p>
              <h2 className="display-md mt-4 max-w-2xl text-primary">Anna Adarsh Women's College: admission lead generation</h2>
            </div>
            <Link to="/case-studies/$slug" params={{ slug: anna.slug }} className="link-draw inline-flex items-center gap-2 font-semibold text-primary">
              See how it was run <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 border-t border-line md:grid-cols-5">
            {anna.results.metrics.map((m) => (
              <div key={m.label} className="border-b border-line py-8 pr-4 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                <dd className="font-display text-5xl leading-none text-primary md:text-6xl">{m.value}</dd>
                <dt className="mt-3 text-xs uppercase tracking-[0.16em] text-foreground/70">{m.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs text-muted-foreground">Reported campaign totals. L = lakh, Cr = crore.</p>
        </section>
      )}

      {/* BRANDS */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <p className="eyebrow">Brands and audiences</p>
          <h2 className="display-md mt-4 max-w-3xl text-primary">Two brands, two very different audiences.</h2>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-2">
            {brands.map((b) => (
              <Link key={b.slug} to="/brands" hash={b.slug} className="group bg-cream p-8 transition-colors hover:bg-paper">
                <p className="font-display text-sm text-rose">{b.number}</p>
                <h3 className="mt-6 font-display text-3xl text-primary">{b.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{b.industry}</p>
                <div className="mt-8 flex gap-6 text-sm">
                  <span><strong className="font-display text-2xl font-normal text-foreground">{b.snapshot.followers}</strong> followers</span>
                  <span><strong className="font-display text-2xl font-normal text-foreground">{b.snapshot.posts}</strong> posts</span>
                </div>
                <p className="mt-2 text-[0.7rem] italic text-rose">Account snapshot, not a growth claim</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View showcase <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE INDEX */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <p className="eyebrow">Continue exploring</p>
        <ul className="mt-8 border-t border-line">
          {[
            { to: "/work" as const, n: "01", t: "Every content piece has a story", d: "Individual creatives, the thinking behind them and their original links." },
            { to: "/experience" as const, n: "02", t: "Experience", d: "VVT Solutions and Colan Infotech." },
            { to: "/ai-production" as const, n: "03", t: "AI educational video production", d: "How I turn an NCERT chapter into videos with NotebookLM." },
            { to: "/process" as const, n: "04", t: "My creative process", d: "Seven stages from research to analysis." },
          ].map((row) => (
            <li key={row.to} className="border-b border-line">
              <Link to={row.to} className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-rose md:col-span-1">{row.n}</span>
                <span className="font-display text-3xl text-foreground transition-colors group-hover:text-primary md:col-span-6 md:text-4xl">{row.t}</span>
                <span className="text-sm text-foreground/70 md:col-span-4">{row.d}</span>
                <ArrowRight className="hidden h-5 w-5 text-primary transition-transform group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactBand />
    </>
  );
}
