# Abhishek Kumar Pandey — Portfolio Website

A modern, single-page portfolio site built with plain **HTML, CSS, and JavaScript** (no build step required), designed to be deployed directly on **GitHub Pages**.

## 🚀 Features

- Responsive, mobile-first layout
- Dark / light theme toggle (persisted via `localStorage`)
- Animated hero section with a typewriter effect and counting stats
- Scroll-reveal animations, active-section nav highlighting, and a scroll progress bar
- Sections: Home, About, Skills, Experience (timeline), Education, Achievements, Contact
- Downloadable résumé (PDF) button
- Zero dependencies / zero build tools — just static files

## 📁 Project Structure

```
portfolio_website/
├── index.html              # Main page markup
├── css/
│   └── style.css            # All styling, theming, animations
├── js/
│   └── script.js             # Interactivity (theme toggle, nav, typing effect, reveals)
└── assets/
    └── Abhishek_Kumar_Pandey_Resume.pdf   # Downloadable résumé
```

## 🖥️ Local Preview

No build step is required. From this folder, run any static server, for example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## 🌐 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio` or `<your-username>.github.io`).
2. Push this folder's contents to the repository's default branch (e.g. `main`):
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder, then save.
5. Your site will be published at:
   - `https://<your-username>.github.io/<repo-name>/` (regular repo), or
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`).

## ✏️ Customizing

- **Content**: edit the text directly in [index.html](index.html) — all resume content (experience, skills, education, achievements, contact info) lives there.
- **Colors/theme**: tweak the CSS custom properties at the top of [css/style.css](css/style.css) (`--accent`, `--accent-2`, `--accent-3`, etc.).
- **Résumé file**: replace `assets/Abhishek_Kumar_Pandey_Resume.pdf` with an updated résumé, keeping the same filename (or update the `href`/`download` links in `index.html`).
- **Typed roles**: edit the `roles` array in [js/script.js](js/script.js) to change the rotating job-title text in the hero section.

## 📄 License

Personal portfolio content — feel free to fork the structure/styling for your own portfolio, but please replace the personal content with your own.
