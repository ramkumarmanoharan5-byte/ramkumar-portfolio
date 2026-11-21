import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { ContactBand } from "@/components/site/ContactBand";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "My Creative Process — Research to Analysis | Ramkumar M." },
      { name: "description", content: "A seven-stage content creation process: research, strategy, ideation, creation, distribution, engagement and analysis." },
      { property: "og:title", content: "My Creative Process — Ramkumar M." },
      { property: "og:description", content: "Seven stages, from understanding the audience to learning from the results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Process,
});

const stages = [
  { n: "01", t: "Research", q: "Who are we talking to?", d: "Understand the brand, audience, industry, competitors and the content opportunities available." },
  { n: "02", t: "Strategy", q: "What are we trying to achieve?", d: "Define objectives, content pillars, platform strategy and brand voice." },
  { n: "03", t: "Ideation", q: "Why would anyone stop scrolling?", d: "Develop concepts, hooks, campaign ideas and creative angles." },
  { n: "04", t: "Creation", q: "How do we make it real?", d: "Creative briefs, captions, scripts, Reels, static posts and visual concepts." },
  { n: "05", t: "Distribution", q: "Where does it belong?", d: "Adapt content for Instagram, Facebook, YouTube, LinkedIn and other relevant platforms." },
  { n: "06", t: "Engagement", q: "What are people saying?", d: "Monitor comments, messages, mentions and audience reactions." },
  { n: "07", t: "Analysis", q: "What do we do next?", d: "Review reach, engagement and content performance, and find opportunities to keep improving." },
];

function Process() {
  return (
    <>
      <PageIntro
        eyebrow="My Process"
        title="My Creative Process"
        lede="Seven stages I move through for every brand. Each one starts with a question — and the last one feeds straight back into the first."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <ol>
          {stages.map((s, i) => (
            <li key={s.n} className="group grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
              <p className="font-display text-7xl leading-none text-primary/20 transition-colors group-hover:text-primary md:col-span-2 md:text-8xl">{s.n}</p>
              <div className="md:col-span-4">
                <h2 className="display-md text-primary">{s.t}</h2>
                <p className="mt-3 font-script text-4xl text-rose">{s.q}</p>
              </div>
              <p className="prose-editorial text-foreground/85 md:col-span-5 md:col-start-8 md:pt-3">{s.d}</p>
              {i === stages.length - 1 && (
                <p className="text-sm font-semibold text-primary md:col-span-10 md:col-start-3">↺ Insights go back into Research for the next cycle.</p>
              )}
            </li>
          ))}
        </ol>
      </section>
      <ContactBand />
    </>
  );
}
