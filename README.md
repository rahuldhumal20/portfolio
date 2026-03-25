# 🚀 Portfolio — React + Vite

Dark cyber-themed personal portfolio with **inline editing** — click any text to edit it directly.

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## ✏️ How to Edit Your Content

### Option A — Inline (recommended for quick tweaks)
1. Run the dev server
2. Click the **✎ Edit** button in the top-right nav
3. Click **any text** — name, bio, project descriptions, skills, links — to edit
4. Changes auto-save to `localStorage` instantly

### Option B — Edit the source data directly
Open `src/App.jsx` and find the `INITIAL` object at the top of the file:

```js
const INITIAL = {
  meta: {
    name: "Your Name",        // ← change this
    role: "Full Stack Developer",
    email: "you@email.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/you",
    resumeUrl: "/resume.pdf", // put your resume in /public/
    ...
  },
  projects: [...],  // add/edit projects
  skills: [...],    // add/edit skill cards
}
```

---

## 🌐 Deploy

### Netlify (easiest)
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```
Or connect your GitHub repo:
1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy! ✅

### Render
1. Push to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy! ✅

---

## 📁 Structure

```
portfolio-react/
├── public/           ← static assets (resume PDF, favicon, etc.)
├── src/
│   ├── App.jsx       ← EVERYTHING is here (data + components + styles)
│   └── main.jsx      ← entry point
├── index.html
├── vite.config.js
├── netlify.toml      ← SPA routing fix for Netlify
└── package.json
```

---

## 🎨 Customization Tips

| What | Where in App.jsx |
|------|-----------------|
| Name / role / bio | `INITIAL.meta` object |
| Stats (15+ projects etc.) | `INITIAL.stats` array |
| Skill cards & tags | `INITIAL.skills` array |
| Projects | `INITIAL.projects` array |
| Color accents | `:root` CSS variables at top |
| Fonts | `index.html` Google Fonts link |

---

Built with React 18 + Vite 5. No external UI libraries — pure CSS-in-JS.