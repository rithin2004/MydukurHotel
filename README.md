# Mydukur Hotel

Website for Mydukur Hotel, built with React 19, Vite, TypeScript and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:8080
pnpm build      # outputs static site to dist/
pnpm preview    # serve the production build locally
pnpm typecheck
```

## Project structure

```
client/
├── App.tsx         # entry point and routes
├── pages/          # Index (home), Privacy, Terms and NotFound
├── components/     # shared pieces (language switch, shop status, ...)
├── i18n/           # English and Telugu text (translations.ts)
├── lib/            # opening hours, contact details, helpers
├── assets/         # images
└── global.css      # Tailwind theme tokens
public/             # static files served as-is
```

## Common updates

- **Text (English or Telugu):** edit `client/i18n/translations.ts`.
- **Holidays:** add the date to `CLOSED_DATES` in `client/lib/hours.ts`
  (e.g. `"2026-10-20"`); the site then shows "Closed today" on that day.

## Deployment

Deployed to Netlify as a static site (see `netlify.toml`).
