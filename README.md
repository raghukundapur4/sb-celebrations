# SB Celebrations

React/Vite site for SB Celebration's.

## GitHub Pages Deployment

This project is a Vite app and must be deployed from the built `dist` folder.
GitHub Pages should use the repository workflow, not the raw source files.

Repository settings:

1. Go to `Settings` -> `Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.
3. Push to `main` or run the `Deploy static content to Pages` workflow manually.

If Pages is set to `Deploy from a branch` with `main / (root)`, GitHub serves
the development `index.html` directly. The live site will then try to load
`/src/main.jsx`, which is not available on GitHub Pages and causes a blank page.

Local checks:

```sh
npm ci
npm run build
```
