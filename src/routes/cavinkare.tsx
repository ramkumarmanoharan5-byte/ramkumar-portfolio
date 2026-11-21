import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, SectionHead } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";

export const Route = createFileRoute("/cavinkare")({
  head: () => ({
    meta: [
      { title: "How I Approach Social Media Management — CavinKare Fit | Ramkumar M." },
      { name: "description", content: "How my experience maps to the Social Media Marketing role in CavinKare's Digital Marketing & D2C team, with a proposed 30-day approach." },
      { property: "og:title", content: "How I Approach Social Media Management — Ramkumar M." },
      { property: "og:description", content: "Platform-native strategy, community management, trends, influencers, analytics and a proposed first 30 days." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CavinKare,
});

const ProposedTag = () => (
  <span className="inline-block border border-primary px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">Proposed approach</span>
);

const jdFit = [
  { jd: "Platform-specific strategy & content calendars", me: "Content calendars for multi-branch LinkedIn pages and education brands across Instagram, YouTube, Facebook and Telegram." },
  { jd: "Reels, Stories & platform-native content", me: "Built a faceless YouTube brand; one Short passed 19M views." },
  { jd: "Trend-based, quick-turnaround content", me: "Trend round-ups and timely hairstyle content on The Artist Mode; memes and topical posts for a B2B page." },
  { jd: "Influencer coordination", me: "Worked on Shoutout Campus, an influencer-marketing and promotions account." },
  { jd: "Analytics & performance tracking", me: "Tracked leads, CPL, reach and impressions on a 2,461-lead Meta Ads campaign; GA4 and Search Console." },
  { jd: "Brand voice adaptation", me: "Adapted tone across B2B tech, education, salon, furniture and men's lifestyle audiences." },
];

const platforms = [
  { p: "Instagram", format: "Reels, carousels, Stories", style: "Visual-first, quick, personal", behaviour: "Scroll, save, share to friends", goal: "Discovery & engagement" },
  { p: "Facebook", format: "Short video, image posts, community posts", style: "Warm, conversational, family-friendly", behaviour: "Comment, share in groups", goal: "Community & reach" },
  { p: "YouTube", format: "Shorts + long-form how-to", style: "Useful, demonstrative", behaviour: "Search, watch to learn", goal: "Education & search discovery" },
  { p: "LinkedIn", format: "Text + image, behind-the-scenes", style: "Professional, story-led", behaviour: "Read, react, follow brands", goal: "Corporate reputation" },
  { p: "X / Twitter", format: "Short posts, replies, threads", style: "Witty, timely", behaviour: "Real-time conversation", goal: "Brand conversation & response" },
];

const scenarios = [
  { s: "General questions", a: "Answer quickly and warmly in the brand's voice; point to helpful resources." },
  { s: "Product enquiries", a: "Give accurate product information; guide to where to buy or learn more." },
  { s: "Negative feedback", a: "Acknowledge publicly without being defensive; show willingness to fix it." },
  { s: "Customer complaints", a: "Apologise for the experience, move details to DM, track until resolved." },
  { s: "Urgent or sensitive issues", a: "Hold the public reply to a holding statement; escalate immediately to the right stakeholders." },
];

const steps = ["Acknowledge the concern", "Respond in the brand's voice", "Understand the issue", "Move sensitive discussions to a private channel", "Escalate to relevant stakeholders", "Track resolution"];

const metrics = ["Reach", "Impressions", "Engagement rate", "Saves", "Shares", "Video views", "Watch time", "Audience growth", "Profile visits", "Clicks", "Leads", "Conversions", "Sentiment"];

function CavinKare() {
  return (
    <>
      <PageIntro
        eyebrow="CavinKare Fit · Social Media Marketing · Digital Marketing & D2C, Chennai"
        title="How I Approach Social Media Management"
        lede="How my experience translates to the role — and how I'd approach it. Everything below that's marked as proposed is my thinking for the role, not past work for CavinKare. I haven't worked with CavinKare or managed its accounts."
      />

      {/* JD fit */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <SectionHead eyebrow="What the role asks for — and where I've done it" title="Role fit" />
        <ul className="mt-10 border-t border-line">
          {jdFit.map((r) => (
            <li key={r.jd} className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8">
              <p className="font-display text-2xl text-primary md:col-span-5">{r.jd}</p>
              <p className="text-foreground/85 md:col-span-7">{r.me}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* A */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <ProposedTag />
          <div className="mt-5">
            <SectionHead number="A" eyebrow="Platform-native strategy" title="One brand message, five platforms." lede="Illustrative example: announcing a new personal-care product. The message stays the same — the format, tone and goal change with the platform." align="split" />
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  {["Platform", "Content format", "Communication style", "Audience behaviour", "Content objective"].map((h) => (
                    <th key={h} className="eyebrow py-4 pr-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {platforms.map((r) => (
                  <tr key={r.p} className="border-b border-line align-top">
                    <th scope="row" className="py-5 pr-4 font-display text-2xl font-normal text-primary">{r.p}</th>
                    <td className="py-5 pr-4">{r.format}</td>
                    <td className="py-5 pr-4">{r.style}</td>
                    <td className="py-5 pr-4">{r.behaviour}</td>
                    <td className="py-5 pr-4 font-medium">{r.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* B */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <ProposedTag />
        <div className="mt-5">
          <SectionHead number="B" eyebrow="Community management" title="A response framework" lede="A proposed working framework for day-to-day comments and messages — not a record of a past crisis-management case." align="split" />
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-6">
          {steps.map((s, i) => (
            <li key={s} className="bg-primary p-5 text-primary-foreground">
              <p className="font-display text-4xl leading-none">{i + 1}</p>
              <p className="mt-4 text-sm font-medium leading-snug">{s}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {scenarios.map((s) => (
            <li key={s.s} className="grid gap-2 py-5 md:grid-cols-12 md:gap-8">
              <p className="font-display text-2xl md:col-span-4">{s.s}</p>
              <p className="text-foreground/85 md:col-span-8">{s.a}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* C + D */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:px-10 lg:grid-cols-2">
          <div>
            <ProposedTag />
            <div className="mt-5"><SectionHead number="C" eyebrow="Trend & real-time content" title="Fast, but on-brand." /></div>
            <ol className="mt-8 space-y-4">
              {["Monitor relevant cultural conversations", "Identify trend opportunities", "Check brand relevance before jumping in", "Adapt the trend to the brand's voice", "Develop quick-turnaround creative concepts", "Measure how the audience responds"].map((t, i) => (
                <li key={t} className="flex gap-4 border-b border-line pb-4"><span className="font-display text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span><span className="pt-1">{t}</span></li>
              ))}
            </ol>
          </div>
          <div>
            <ProposedTag />
            <div className="mt-5"><SectionHead number="D" eyebrow="Influencer & UGC strategy" title="Creators who fit the audience." /></div>
            <ol className="mt-8 space-y-4">
              {["Identify relevant micro-influencers", "Check audience relevance, not just follower count", "Develop creator content concepts", "Find UGC opportunities and encourage participation", "Keep brand consistency across creators", "Evaluate each campaign against its goal"].map((t, i) => (
                <li key={t} className="flex gap-4 border-b border-line pb-4"><span className="font-display text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span><span className="pt-1">{t}</span></li>
              ))}
            </ol>
            <p className="mt-4 text-xs italic text-rose">A proposed approach — no undocumented creator relationships are implied.</p>
          </div>
        </div>
      </section>

      {/* E + F */}
      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:px-10 lg:grid-cols-2">
        <div>
          <SectionHead number="E" eyebrow="Analytics & reporting" title="What I'd watch." />
          <ul className="mt-8 flex flex-wrap gap-2">
            {metrics.map((m) => <li key={m} className="border border-primary/30 px-3 py-1.5 text-sm text-primary">{m}</li>)}
          </ul>
          <p className="prose-editorial mt-8 text-foreground/85">
            Numbers only matter if they change what we make next. Saves and shares show what people value, watch time shows what holds attention, and sentiment shows how people feel about the brand. I'd use these to decide which formats to repeat, which hooks to test and where to shift effort across platforms.
          </p>
        </div>
        <div>
          <SectionHead number="F" eyebrow="Competitor analysis" title="Learning from the category." />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {["Competitor content themes", "Creative formats they use", "Messaging and tone", "Posting frequency", "How audiences react", "Emerging content opportunities"].map((c) => (
              <li key={c} className="py-3">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* G */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <span className="inline-block border border-primary-foreground/60 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">Proposed approach for the role</span>
          <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">G · My first 30 days</p>
          <h2 className="display-lg mt-4 max-w-3xl">Listen, organise, then test.</h2>
          <ol className="mt-14 grid gap-px bg-primary-foreground/20 md:grid-cols-3">
            {[
              { d: "Days 1–10", t: "Understand", b: "Brand positioning, audiences, historical content performance, brand guidelines, platform presence and competitors." },
              { d: "Days 11–20", t: "Organise", b: "Content pillars, platform-specific calendars, the community response process and creative opportunities." },
              { d: "Days 21–30", t: "Test & recommend", b: "Test selected formats, monitor audience reactions, review results and recommend creative and platform optimisations." },
            ].map((s) => (
              <li key={s.d} className="bg-primary p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">{s.d}</p>
                <h3 className="mt-4 font-display text-4xl">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-primary-foreground/85">{s.b}</p>
              </li>
            ))}
          </ol>
          <Link to="/work" className="mt-14 inline-flex items-center gap-2 font-semibold">
            See the work behind this <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
