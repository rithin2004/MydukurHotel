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
├── pages/          # Index (home) and NotFound
├── assets/         # images
└── global.css      # Tailwind theme tokens
public/             # static files served as-is
```

## Deployment

Deployed to Netlify as a static site (see `netlify.toml`).
