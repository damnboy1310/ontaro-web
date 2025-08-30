# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` with `app/` (Next.js App Router), `components/` (reusable UI in PascalCase, `.tsx`), and `lib/` (utilities).
- Public assets: `public/` (served from root, respects `assetPrefix`).
- Config: `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json` (path alias `@/*`).

## Build, Test, and Development Commands
- `npm run dev`: Start dev server on `0.0.0.0:10111` with Turbopack. Example: visit via proxy path `/proxy/10111` when behind a gateway.
- `npm run build`: Production build with Turbopack.
- `npm run start`: Serve the built app on `0.0.0.0:10111`.
- `npm run lint`: Lint with Next + TypeScript rules.
- Env: `NEXT_ASSET_PREFIX` can override `assetPrefix` (default `/proxy/10111`). Place environment values in `.env.local`.

## Coding Style & Naming Conventions
- Language: TypeScript (strict mode). Prefer typed props and `React.FC`-free function components.
- Linting: ESLint extends `next/core-web-vitals` and `next/typescript`. Fix issues before PRs.
- Components: PascalCase file and component names (e.g., `AvatarGrid.tsx`). Utilities live in `src/lib` and use named exports.
- Imports: Use alias `@/` for `src` (e.g., `import { cn } from "@/lib/utils"`).
- Styling: Tailwind CSS v4 via PostCSS. Keep global styles in `src/app/globals.css` and favor utility classes over custom CSS.

## Testing Guidelines
- Status: No test runner configured yet. When adding tests, prefer Vitest or Jest + React Testing Library.
- Location: Co-locate as `*.test.ts(x)` next to the file or under `src/__tests__/`.
- Goals: Cover critical rendering, routing, and utility logic. Aim for fast unit tests and minimal mocks.

## Commit & Pull Request Guidelines
- Commits: Follow Conventional Commits. Examples: `feat: add bottom navigation`, `fix(header): correct mobile layout`, `chore: bump next to 15.5.0`.
- PRs: Provide clear description, link issues, include screenshots for UI changes, and list testing steps. Ensure `npm run lint` passes and app starts locally.

## Security & Configuration Tips
- Do not commit secrets; use `.env.local`.
- Be aware of `assetPrefix` and proxy paths in non-local environments.
- Keep `allowedDevOrigins` in `next.config.ts` in sync with dev domains.
