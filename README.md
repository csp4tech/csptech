# CSP4TECH — Zoho Reseller Site

A static site for CSP4TECH (Shyphan AI Middle East LLC) as an Authorised Zoho Partner.
Visitors browse the Zoho product catalogue, click modules to build a "stack," and send
an enquiry pre-filled with their selection.

## Files

```
index.html        the page structure
css/style.css     all styling
js/data.js        <-- edit THIS to change any content
js/script.js      rendering + interaction logic (rarely needs edits)
```

## Editing content

Everything editable lives in `js/data.js`:

- `PRODUCTS` — one object per Zoho product (name, description, feature bullets, starting price)
- `INDUSTRIES` — the verticals shown in the Industries section
- `PROCESS` — the 5-step delivery process
- `STATS` — the three numbers in the strip under the hero

Add, remove, or reorder array entries and the page rebuilds itself automatically —
no need to touch `index.html`.

## Deploying to GitHub Pages

1. Create a new GitHub repository (public, or private with Pages enabled on a paid plan).
2. Push these files to the repo root (or to a `docs/` folder — your choice).
3. In the repo: **Settings → Pages → Build and deployment → Source** → select the branch
   and folder you pushed to (e.g. `main` / `root`).
4. Wait a minute for Pages to build — your URL will appear at the top of that same
   Settings page, typically `https://<username>.github.io/<repo-name>/`.

No build step is required — this is plain HTML/CSS/JS with ES modules, which GitHub
Pages serves natively over HTTPS.

## The contact form

The form has no backend — it composes a `mailto:` link on submit, pointed at
`info@csp4tech.com` inside `js/script.js`. Change that address to your real inbox,
or swap it later for a form service (e.g. Formspree) once you want submissions
logged somewhere instead of opening the visitor's mail client.

## Next steps (for a later session)

This is deliberately scoped to a first version. Natural additions we can layer on next:
case studies/testimonials, a real quote-request backend, per-industry landing pages,
or a blog/insights section.
