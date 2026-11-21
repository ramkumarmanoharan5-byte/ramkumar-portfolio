<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All portfolio copy and figures live in `src/data/*.ts` (profile, experience, brands, content, caseStudies, skills); pages only render that data — so new pieces, brands or case studies are added by editing data, not pages.
- Missing facts are `null` in data and render through `Pending` ("… to be added") — the portfolio is used in real interviews, so nothing is invented.
- Content pieces get their own page at `/work/$slug`; case studies at `/case-studies/$slug` — each piece needs a shareable URL.
- Colors, fonts and editorial utilities (eyebrow, display-*, placeholder-hatch) are tokens in `src/styles.css`; components use semantic classes only.
- `src/test/portfolio-data.test.ts` guards the key verified figures; update it when those facts change.
