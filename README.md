# Sheriff Abdullateef — Portfolio (Chakra UI)

Built from scratch with **React + Vite + Chakra UI**, matching your existing
dark/purple brand — with a working light/dark mode toggle.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel/Netlify exactly like
your current site.

## Personalize before you publish

1. **Photo** — drop your headshot in `public/profile.jpg` (square image,
   at least 600×600px works best; it's cropped into a circle automatically).
2. **Resume** — drop your PDF in `public/resume.pdf` so the "Resume" button
   downloads it directly.
3. **Social links** — update the `href`s in `src/components/Navbar.jsx` and
   `src/components/Footer.jsx` (GitHub, LinkedIn, X, Instagram).
4. **Email** — update `EMAIL` at the top of `src/components/Contact.jsx`.
5. **Projects** — edit `src/data/projects.js`. Each project has `title`,
   `tagline`, `description`, `stack` (array of tags), `liveUrl`, and
   `codeUrl`. Fill in real links and tighten the copy where it's generic.
6. **Skills** — edit `src/data/skills.js` to add/remove technologies
   (icons come from `react-icons/si`, search "react-icons Simple Icons"
   for more).
7. **Project cover images** — right now each project card uses a gradient
   placeholder (`gradient` field in `projects.js`). To use real screenshots
   instead, add an `image` field with the path and swap the gradient `Box`
   in `src/components/ProjectCard.jsx` for an `<Image>`.

## Notes

- Dark mode is the default (matches your current site); the toggle in the
  navbar switches to light mode, matching your ShopStore project's light
  theme.
- The brand purple lives in `src/theme.js` under `colors.brand` — change
  `brand.500` there if you ever want a different accent.
- Fonts: Sora for headings, Inter for body (loaded via Google Fonts in
  `index.html`).
