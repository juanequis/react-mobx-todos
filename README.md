# MobX Todo Lab

A small React todo app scaffold with the MobX wiring removed so you can add it yourself. The UI is ready; no state implementation is provided.

## Quick start

```bash
npm install
npm run dev
```
Then open the printed localhost URL. It will error until you provide a store (see below).

## Current structure

- `src/stores/TodoStore.ts` defines the store contract (`TodoStore` interface) and the `Todo`/`TodoFilter` types.
- `src/stores/TodoContext.tsx` only wires context; it expects you to pass a real `TodoStore` instance.
- Components pull state through `useTodoStore()`; styling lives in `src/styles.css`.

## What to implement with MobX

1. Create a MobX store in `src/stores/TodoStore.ts` (e.g., a `TodoStore` class using `makeAutoObservable`) and instantiate it in `src/main.tsx`, passing it to `TodoStoreProvider`.
2. Wrap components that read store data (`App`, filters, list, stats, items) with `observer` from `mobx-react-lite` so they respond to observable changes.
3. Optionally add persistence with `reaction`, split stores, or introduce async flows to explore more advanced features.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run typecheck` — run TypeScript without emitting files
