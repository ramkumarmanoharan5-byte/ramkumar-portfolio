import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/PageIntro";
import { MediaFrame } from "@/components/site/MediaFrame";
import { ContactBand } from "@/components/site/ContactBand";
import notebooklm from "@/assets/notebooklm-magnetism-and-matter.jpg.asset.json";

export const Route = createFileRoute("/ai-production")({
  head: () => ({
    meta: [
      { title: "AI Educational Video Production with NotebookLM | Ramkumar M." },
      { name: "description", content: "How I turn an NCERT chapter like Magnetism and Matter into educational videos and Shorts with NotebookLM, from source selection and prompts to review and repurposing." },
      { property: "og:title", content: "AI Educational Video Production | Ramkumar M." },
      { property: "og:description", content: "A real NotebookLM workflow: one Physics chapter, many focused educational videos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiProduction,
});

const stages = [
  { n: "01", t: "Research and source selection", d: "I start with the right source, usually the NCERT chapter, so everything the AI produces is grounded in what students actually study." },
  { n: "02", t: "Understanding the subject", d: "I go through the chapter myself first and break it into sub-topics that are worth a video on their own." },
  {
    n: "03",
    t: "Writing detailed prompts",
    d: "Each prompt tells NotebookLM exactly what to make.",
    list: ["Topic and scope", "Tone of voice", "Narrative structure", "Examples to use", "Depth", "Visual direction"],
  },
  { n: "04", t: "Audience and learning outcome", d: "Every prompt names who the video is for, for example JEE or NEET students, and what they should understand by the end." },
  { n: "05", t: "Generating the videos", d: "NotebookLM produces the video from the source and the prompt. Longer explainers for understanding, and short ones for quick revision." },
  { n: "06", t: "Review and refinement", d: "I check each output for accuracy, clarity and structure, and rework the prompt when something isn't right." },
  {
    n: "07",
    t: "Repurposing",
    d: "The same chapter then becomes other formats.",
    list: ["YouTube Shorts", "Slide decks", "Infographics", "Lesson pages", "Social posts"],
  },
];

const outputs = [
  { t: "The Dipole in a Uniform Magnetic Field", f: "Cinematic explainer" },
  { t: "Diamagnetism: From Atomic Orbits to Levitation", f: "Cinematic explainer" },
  { t: "Decoding Ferromagnetism for JEE", f: "Cinematic explainer" },
  { t: "Unlocking Solenoids and Bar Magnets", f: "Cinematic explainer" },
  { t: "Paramagnetism: The Tug-of-War Behind Magnetism", f: "Cinematic explainer" },
  { t: "Why Magnetic Monopoles Cannot Exist", f: "Short" },
  { t: "Why Soft Iron Can't Make a Compass", f: "Short" },
];

function AiProduction() {
  return (
    <>
      <PageIntro
        eyebrow="AI Content Production"
        title="One chapter in. A set of educational videos out."
        lede="I use NotebookLM to produce educational videos for TopAll. The tool does the generating, but the quality comes from the source I choose, the prompts I write and the review afterwards. Here's a real example."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-10">
        <MediaFrame
          src={notebooklm.url}
          alt="My NotebookLM workspace for Magnetism and Matter, with the source chapter and generated video outputs"
          caption="My NotebookLM workspace for Magnetism and Matter, Class 12 Physics"
          aspect="aspect-[1900/1000]"
          imgClassName="object-contain object-top"
          eager
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">What came out of this notebook</p>
            <h2 className="display-md mt-3 text-primary">Magnetism and Matter</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              One source, the NCERT chapter, and a separate prompt for each idea. Each video focuses on one concept, so students can find exactly what they're stuck on.
            </p>
            <Link to="/case-studies/$slug" params={{ slug: "topall" }} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">
              See how this fits into TopAll <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line lg:col-span-7">
            {outputs.map((o) => (
              <li key={o.t} className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-display text-xl">{o.t}</span>
                <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-rose">{o.f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-10">
          <p className="font-display text-3xl leading-snug md:text-[2.6rem]">
            “I don't just ask AI for content. I give it a clear source, a clear audience and a clear goal, then check what it gives back.”
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <p className="eyebrow">My workflow, in seven steps</p>
        <ol className="mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => (
            <li key={s.n} className="flex flex-col bg-ivory p-8">
              <p className="font-display text-6xl leading-none text-primary">{s.n}</p>
              <h2 className="mt-6 font-display text-3xl">{s.t}</h2>
              <p className="mt-3 leading-relaxed text-foreground/80">{s.d}</p>
              {s.list && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.list.map((l) => <li key={l} className="border border-primary/30 px-2.5 py-1 text-xs text-primary">{l}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>
      <ContactBand />
    </>
  );
}
