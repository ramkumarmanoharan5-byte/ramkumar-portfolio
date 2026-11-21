import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { MediaFrame } from "@/components/site/MediaFrame";
import { Pending } from "@/components/site/Pending";
import { ContactBand } from "@/components/site/ContactBand";

export const Route = createFileRoute("/ai-production")({
  head: () => ({
    meta: [
      { title: "AI-Assisted Educational Video Production with NotebookLM | Ramkumar M." },
      { name: "description", content: "From research and prompt engineering to educational video production — how I use structured prompts and NotebookLM to create learning content." },
      { property: "og:title", content: "AI Educational Video Production — Ramkumar M." },
      { property: "og:description", content: "Structured prompts that give AI tools a clear audience, purpose, narrative and learning outcome." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiProduction,
});

const stages = [
  { n: "01", t: "Topic & objective", d: "Understand the subject, the target audience and what they should be able to do or understand after watching." },
  { n: "02", t: "Source selection", d: "Collect and organise relevant source documents and reference material so the output is grounded in reliable content." },
  {
    n: "03",
    t: "Prompt engineering",
    d: "Write a detailed prompt that tells the tool exactly what to make.",
    list: ["Target audience", "Learning objectives", "Tone of voice", "Narrative structure", "Topics to cover", "Examples and explanations", "Content depth", "Visual direction"],
  },
  { n: "04", t: "Video generation", d: "Use NotebookLM with the structured sources and prompt instructions to produce the educational video." },
  { n: "05", t: "Review & refinement", d: "Check the output for clarity, accuracy, relevance, structure and learning value — and refine where needed." },
  {
    n: "06",
    t: "Content repurposing",
    d: "Explore how long-form learning material can become shorter social formats.",
    list: ["Reels", "YouTube Shorts", "Educational carousels", "Short explainers", "Social media posts"],
  },
];

function AiProduction() {
  return (
    <>
      <PageIntro
        eyebrow="AI Content Production"
        title="From research and prompt engineering to educational video production."
        lede="I've created detailed, structured prompts and used them with NotebookLM to produce educational videos. Here's how I approach it."
      />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-10">
          <p className="font-display text-3xl leading-snug md:text-[2.6rem]">
            “I don't simply use AI to generate content. I develop structured prompts that guide AI tools to produce educational content with a clear audience, purpose, narrative and learning outcome.”
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <p className="eyebrow">The six stages</p>
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

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
          <p className="eyebrow">Examples</p>
          <h2 className="display-md mt-4 text-primary">Prompts, sources and finished videos</h2>
          <p className="mt-3 text-sm italic text-rose">These spaces are ready for real examples. No results are shown until they're supplied.</p>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="eyebrow mb-4">Example prompt</h3>
              <div className="placeholder-hatch border border-dashed border-rose/60 p-6 font-mono text-sm leading-relaxed text-foreground/70">
                <p>Audience: <Pending>to be added</Pending></p>
                <p className="mt-2">Learning objective: <Pending>to be added</Pending></p>
                <p className="mt-2">Tone & narrative: <Pending>to be added</Pending></p>
                <p className="mt-2">Topics & depth: <Pending>to be added</Pending></p>
                <p className="mt-2">Visual direction: <Pending>to be added</Pending></p>
              </div>
            </div>
            <MediaFrame alt="NotebookLM workspace" aspect="aspect-[16/10]" placeholderLabel="NotebookLM screenshot to be added" />
            <MediaFrame alt="Generated educational video" aspect="aspect-video" placeholderLabel="Generated educational video to be added" />
            <div className="space-y-4">
              <h3 className="eyebrow">Source documents & video links</h3>
              <ul className="divide-y divide-line border-y border-line">
                {["Source document", "Video link", "Repurposed short-form version"].map((l) => (
                  <li key={l} className="flex items-center justify-between gap-4 py-4">
                    <span className="font-medium">{l}</span>
                    <Pending>To be added</Pending>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
