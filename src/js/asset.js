// Resolve a path inside public/ against the deploy base.
//
// GitHub Pages serves a project site from https://<user>.github.io/<repo>/,
// so a root-absolute '/img/x.png' resolves to the domain root and 404s.
// import.meta.env.BASE_URL is Vite's configured base ('./' here), which keeps
// these correct on the dev server, on Pages, and at a domain root alike.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
