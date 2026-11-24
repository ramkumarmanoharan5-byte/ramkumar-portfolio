import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
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
          "Portfolio of Ramkumar M.: TopAll product marketing, VVT Coaching, a 19M view YouTube Short, 3.9Cr channel views, Meta Ads admission campaigns and B2B growth.",
      },
      { property: "og:title", content: "Ramkumar M. | Social Media & Content Strategist" },
      {
        property: "og:description",
        content:
          "Creating content that captures attention, builds brands, and drives meaningful results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const outcomes = ["Attention", "Engagement", "Enquiries", "Leads", "Admissions", "Growth"];

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

const countWord = (n: number) =>
  ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"][n] ??
  String(n);

function Home() {
  const shorts = contentItems.filter((c) => c.viral).slice(0, 4);
  const hero = shorts[0];
  const anna = caseStudyBySlug("anna-adarsh-womens-college");
  const topall = caseStudyBySlug("topall");
  const vvt = caseStudyBySlug("vvt-coaching");
  const artist = caseStudyBySlug("the-artist-mode");
  const vvtPieces = contentItems
    .filter((c) => c.brand === "VVT Coaching" && c.image.orientation === "portrait")
    .slice(0, 3);
  const annaReel = anna?.links.find((l) => l.url.includes("instagram.com"));

  return (
    <>
      {/* HERO */}
      <section className="hero-columns relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:px-10 md:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-7">
            <p className="eyebrow rise flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Portfolio · Social Media &amp; Content
            </p>
            <h1 className="display-xl mt-6 text-primary" aria-label={profile.name}>
              <span className="split-mask" aria-hidden>
                <span className="split-word" style={{ animationDelay: "80ms" }}>
                  Ramkumar
                </span>
              </span>
              <br />
              <span className="split-mask" aria-hidden>
                <span className="split-word" style={{ animationDelay: "220ms" }}>
                  M<span className="text-rose">.</span>
                </span>
              </span>
            </h1>
            <p
              className="rise mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
              style={{ animationDelay: "350ms" }}
            >
              {profile.title}
              <span className="mx-2 text-rose">/</span>
              {profile.secondaryTitle}
            </p>
            <p
              className="rise mt-8 max-w-2xl font-display text-2xl leading-snug text-foreground md:text-[2rem]"
              style={{ animationDelay: "450ms" }}
            >
              {profile.headline}
            </p>
            <p
              className="prose-editorial rise mt-6 text-foreground/75"
              style={{ animationDelay: "550ms" }}
            >
              {profile.supporting}
            </p>
            <div
              className="rise mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "650ms" }}
            >
              <Button asChild size="lg">
                <Link to="/work">
                  Explore My Work <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">
                  View Projects <ArrowRight />
                </Link>
              </Button>
              <Link
                to="/video"
                className="link-draw ml-2 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Shorts &amp; Reels <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rise relative lg:col-span-5" style={{ animationDelay: "300ms" }}>
            {/* Rotating badge */}
            <a
              href={headlineStat.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the 19M view Short on YouTube"
              className="group absolute -right-3 -top-10 z-20 hidden h-28 w-28 place-items-center rounded-full bg-ivory shadow-[var(--shadow-print)] md:grid"
            >
              <svg
                viewBox="0 0 100 100"
                className="spin-slow absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text
                  className="fill-primary"
                  style={{ fontSize: "9.2px", letterSpacing: "0.28em", fontWeight: 600 }}
                >
                  <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">
                    WATCH THE SHORT · 19M VIEWS ·
                  </textPath>
                </text>
              </svg>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
            </a>

            <div
              data-spotlight
              className="relative overflow-hidden bg-primary p-7 text-primary-foreground shadow-[0_40px_80px_-40px_var(--burgundy)] md:p-9"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                Key achievement
              </p>
              <p
                data-count
                className="mt-4 font-display text-[6.5rem] leading-[0.85] md:text-[8.5rem]"
              >
                {headlineStat.value}
              </p>
              <p className="mt-3 max-w-xs font-display text-2xl leading-tight">
                {headlineStat.label}
              </p>
              <div className="mt-8 flex items-end gap-5">
                {hero && (
                  <a
                    href={headlineStat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tilt
                    className="relative block w-28 shrink-0 overflow-hidden shadow-2xl md:w-32"
                  >
                    <img
                      src={hero.image.src}
                      alt={hero.image.alt}
                      className="aspect-[9/16] w-full object-cover"
                    />
                    <span className="tilt-glare" aria-hidden />
                  </a>
                )}
                <div>
                  <p className="text-sm text-primary-foreground/80">{headlineStat.detail}</p>
                  <a
                    href={headlineStat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw mt-3 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    Watch the Short <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <p className="mt-3 text-[0.7rem] text-primary-foreground/60">
                    One Short. The whole channel has 3.9Cr lifetime views.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-cream py-6" aria-hidden>
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-2xl text-foreground/80"
            >
              {d}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee marquee-reverse mt-3 flex w-max gap-12 whitespace-nowrap">
          {[...outcomes, ...outcomes, ...outcomes, ...outcomes].map((d, i) => (
            <span key={i} className="text-outline font-display text-5xl md:text-6xl">
              {d}
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
            <p key={p} className="text-lg leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
          <dl className="grid grid-cols-1 gap-px bg-line pt-px sm:grid-cols-3">
            {[
              { k: "Experience", v: "Nearly 3 years" },
              { k: "Industries", v: "EdTech, education, real estate, salon, B2B tech" },
              { k: "Platforms", v: "Instagram, YouTube, Facebook, LinkedIn" },
            ].map((f) => (
              <div key={f.k} className="bg-ivory py-5 sm:pr-5">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-2 text-sm font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/about"
            className="link-draw inline-flex items-center gap-2 pt-2 font-semibold text-primary"
          >
            More about me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* MAIN PROJECT: TOPALL */}
      {topall && (
        <section className="border-t border-line bg-cream">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">
                Project {topall.number} · Main project · What I'm working on now
              </p>
              <h2 className="display-lg mt-5 text-primary">TopAll</h2>
              <p className="mt-4 font-display text-2xl leading-snug">{topall.headline}</p>
              <p className="mt-5 leading-relaxed text-foreground/80">
                A NEET and JEE preparation product with a free practice portal and an upgraded
                AI-powered app. I work on the content and marketing that bring students in for free
                and give them a reason to go further.
              </p>
              <ol className="mt-8 space-y-2 text-sm">
                {(topall.journey?.steps ?? []).map((s, i) => (
                  <li key={s.title} className="flex items-baseline gap-4 border-b border-line pb-2">
                    <span className="font-display text-xl text-primary/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{s.title}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/case-studies/$slug" params={{ slug: "topall" }}>
                    Read the case study <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://prep.topall.app/" target="_blank" rel="noopener noreferrer">
                    Explore free resources <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              {topall.images[0] && (
                <img
                  src={topall.images[0].src}
                  alt={topall.images[0].alt}
                  loading="lazy"
                  className="w-full border border-line object-cover shadow-sm"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* PROJECT 02: VVT COACHING */}
      {vvt && (
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow">
              Project {vvt.number} · {vvt.kind} · {vvt.industry}
            </p>
            <h2 className="display-lg mt-5 text-primary">{vvt.title}</h2>
            <p className="mt-4 font-display text-2xl leading-snug">{vvt.headline}</p>
            {vvt.highlight && (
              <p className="mt-8 flex items-baseline gap-3 border-y border-line py-5">
                <span data-count className="font-display text-6xl leading-none text-primary">
                  {vvt.highlight.value}
                </span>
                <span className="text-sm text-foreground/75">{vvt.highlight.label}</span>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/case-studies/$slug" params={{ slug: vvt.slug }}>
                  Read the case study <ArrowRight />
                </Link>
              </Button>
              {vvt.ctas?.[0] && (
                <Button asChild size="lg" variant="outline">
                  <a href={vvt.ctas[0].url} target="_blank" rel="noopener noreferrer">
                    {vvt.ctas[0].label} <ArrowUpRight />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:col-span-7">
            {vvtPieces.map((p, i) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className={`group block ${i === 1 ? "mt-8" : ""}`}
              >
                <div
                  data-tilt
                  className="relative aspect-[9/16] overflow-hidden border border-line bg-paper shadow-[var(--shadow-print)]"
                >
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="tilt-glare" aria-hidden />
                </div>
                <p className="mt-3 line-clamp-2 text-xs font-medium text-foreground/80 group-hover:text-primary">
                  {p.title}
                </p>
                {p.metrics[0] && (
                  <p className="font-display text-xl text-primary">
                    <span data-count>{p.metrics[0].value}</span> {p.metrics[0].label.toLowerCase()}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FEATURED: THE ARTIST MODE */}
      <section
        data-spotlight
        className="relative overflow-hidden bg-primary text-primary-foreground"
      >
        <p
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-6 select-none font-display text-[11rem] leading-none text-primary-foreground/[0.06] md:text-[20rem]"
        >
          3.9Cr
        </p>
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                Project {artist?.number ?? "03"} · Personal project
              </p>
              <h2 className="display-lg mt-5">Building a faceless brand. Reaching millions.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/80">
                The Artist Mode is my own faceless YouTube channel for men's style, grooming and
                self-improvement. It has 3.9Cr lifetime views, 32,905 subscribers and six Shorts
                past a million views each.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="onDark" size="lg">
                  <Link to="/case-studies/$slug" params={{ slug: "the-artist-mode" }}>
                    Read the case study <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outlineOnDark" size="lg">
                  <Link to="/video">
                    Watch in Shorts &amp; Reels <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outlineOnDark" size="lg">
                  <a href={profile.contact.youtube} target="_blank" rel="noopener noreferrer">
                    Visit channel <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
              {shorts.map((s, i) => (
                <Link
                  key={s.slug}
                  to="/work/$slug"
                  params={{ slug: s.slug }}
                  className={`group block ${i % 2 === 1 ? "sm:mt-10" : ""}`}
                >
                  <div
                    data-tilt
                    className="relative aspect-[9/16] overflow-hidden bg-primary-deep shadow-[0_30px_50px_-25px_oklch(0.15_0.05_28)]"
                  >
                    <img
                      src={s.image.src}
                      alt={s.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="tilt-glare" aria-hidden />
                  </div>
                  <p data-count className="mt-3 font-display text-3xl leading-none">
                    {s.metrics[0]?.value}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-primary-foreground/75">{s.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 04: ANNA ADARSH NUMBERS */}
      {anna?.results && (
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow">
                  Project {anna.number} · {anna.kind} · Meta Ads
                </p>
                <h2 className="display-lg mt-5 text-primary">{anna.title}</h2>
                <p className="mt-4 max-w-2xl font-display text-2xl leading-snug">
                  Admission lead generation that kept the cost per lead at{" "}
                  {anna.highlight?.value ?? "₹286"}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <Button asChild size="lg">
                  <Link to="/case-studies/$slug" params={{ slug: anna.slug }}>
                    See how it was run <ArrowRight />
                  </Link>
                </Button>
                {annaReel && (
                  <Button asChild size="lg" variant="outline">
                    <a href={annaReel.url} target="_blank" rel="noopener noreferrer">
                      Watch the Reel <ArrowUpRight />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <dl className="mt-14 grid gap-5 sm:grid-cols-3">
              {anna.results.metrics.map((m) => (
                <div
                  key={m.label}
                  className="border-t-4 border-primary bg-cream p-7 shadow-[var(--shadow-print)]"
                >
                  <dd
                    data-count
                    className="font-display text-6xl leading-none text-primary md:text-7xl"
                  >
                    {m.value}
                  </dd>
                  <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                    {m.label}
                  </dt>
                  {m.note && <p className="mt-1 text-xs text-foreground/65">{m.note}</p>}
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-muted-foreground">{anna.results.note}</p>
          </div>
        </section>
      )}

      {/* BRANDS */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Brands and audiences</p>
              <h2 className="display-lg mt-4 max-w-3xl text-primary">
                {countWord(brands.length)} brands, {countWord(brands.length).toLowerCase()} very
                different audiences.
              </h2>
            </div>
            <Link
              to="/brands"
              className="link-draw inline-flex items-center gap-2 font-semibold text-primary"
            >
              All brand showcases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((b) => (
              <Link
                key={b.slug}
                to="/brands"
                hash={b.slug}
                data-tilt
                className="group relative flex flex-col border border-line bg-paper shadow-[var(--shadow-print)] transition-colors hover:border-primary"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                  {b.images[0] ? (
                    <img
                      src={b.images[0].src}
                      alt={b.images[0].alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-primary font-display text-5xl text-primary-foreground">
                      {b.name}
                    </div>
                  )}
                  <span className="absolute left-3 top-3 bg-primary px-2 py-0.5 font-display text-sm text-primary-foreground">
                    {b.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-3xl text-primary">{b.name}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{b.industry}</p>
                  <div className="mt-6 border-t border-line pt-4">
                    {b.snapshot.followers ? (
                      <>
                        <p className="text-sm">
                          <strong
                            data-count
                            className="font-display text-3xl font-normal text-foreground"
                          >
                            {b.snapshot.followers}
                          </strong>{" "}
                          followers
                        </p>
                        <p className="mt-1 text-[0.7rem] italic text-rose">
                          Account snapshot, not a growth claim
                        </p>
                      </>
                    ) : b.keyStat ? (
                      <p className="text-sm">
                        <strong
                          data-count
                          className="font-display text-3xl font-normal text-foreground"
                        >
                          {b.keyStat.value}
                        </strong>{" "}
                        {b.keyStat.label}
                      </p>
                    ) : (
                      <p className="text-sm text-foreground/70">Pre-launch teaser campaign</p>
                    )}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                    View showcase{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
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
            {
              to: "/work" as const,
              n: "01",
              t: "Work, organised by brand",
              d: "Eleven company and brand project folders with deliverables and case studies.",
            },
            {
              to: "/video" as const,
              n: "02",
              t: "Made to Move: Shorts & Reels",
              d: "Vertical Shorts and Reels with over 3.9 Crore views and retention hooks.",
            },
            {
              to: "/experience" as const,
              n: "03",
              t: "Professional Experience",
              d: "VVT Solutions Pvt. Ltd. and Colan Infotech with verified links.",
            },
            {
              to: "/ai-production" as const,
              n: "04",
              t: "AI educational video production",
              d: "How I turn an NCERT chapter into videos with NotebookLM.",
            },
            {
              to: "/why-me" as const,
              n: "05",
              t: "Why work with me",
              d: "Five reasons backed by real results, and the seven steps I follow.",
            },
          ].map((row) => (
            <li key={row.to} className="border-b border-line">
              <Link
                to={row.to}
                className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-rose md:col-span-1">
                  {row.n}
                </span>
                <span className="font-display text-3xl text-foreground transition-colors group-hover:text-primary md:col-span-6 md:text-4xl">
                  {row.t}
                </span>
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
