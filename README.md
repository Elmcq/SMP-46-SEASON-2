# Project SMP 46 — Season 2 legacy archive

Project SMP 46 Season 2 is a Minecraft community project preserved as a legacy archive. The project is discontinued for now, but may return in the future when the community is ready and the timing is right.

## Tech stack

- React 19
- TypeScript
- Vite
- TanStack Router and React Start
- Tailwind CSS 4
- Radix UI components
- Cloudflare Wrangler configuration

## Requirements

- Node.js 22 or newer
- npm

The repository includes an `.nvmrc` file. With nvm, run:

```bash
nvm use
```

## Development setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site is a single-page legacy archive with the original SMP 46 Minecraft visual identity, project status, clan archive, team information, rules, FAQ, and community links.

## Quality checks

Run formatting, linting, and the production build before submitting changes:

```bash
npm run format
npm run lint
npm run build
```

## Project data

Content is separated from the page component under `src/config/`:

- `project.ts` — season and project status message
- `server.ts` — archived server records and community links
- `content.ts` — clans, team, rules, FAQs, and feature descriptions

Update these files when project information changes instead of editing the page layout directly.

## Deployment notes

The project includes `wrangler.jsonc` for Cloudflare deployment and uses TanStack React Start's server entry. The deployment environment should use Node.js 22 or newer and run the same `npm run build` command used by CI.

Before publishing a deployment, verify that community invite links and archived server information are still appropriate for public display. The Season 2 page must remain clearly marked as discontinued for now; do not add a launch countdown or automatic live status without an intentional project-status update.
