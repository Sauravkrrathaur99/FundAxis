# FundAxis (sample mutual fund marketplace)

Demo web app for stakeholder review: public discovery (PolicyBazaar-style journey, MF-focused), SIP calculator, fund compare, and three partner portals (**AMC / company**, **distributor**, **agent**). Authentication is **mocked** (hardcoded users + optional sign-up stored in `localStorage`).

## Run locally

```bash
cd mf-portal
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Free deploy

The app is a static SPA after `npm run build` (output folder: `dist`). Client-side routes need a **rewrite to `index.html`** — configs are included for common hosts.

### Vercel (simplest)

1. Push this project to GitHub (this folder = repo root), or zip it.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework: **Vite** (auto). Build: `npm run build`, output: `dist`.
4. `vercel.json` already includes SPA rewrites so `/funds`, `/portal/...`, etc. work on refresh.

### Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → import from Git, **or** drag-and-drop the `dist` folder after running `npm run build` locally (for drag-drop, add a `_redirects` file in `public` — already covered if you use Git + `netlify.toml`).
2. With Git: `netlify.toml` sets build `npm run build`, publish `dist`, and SPA redirects.

### GitHub Pages (new repo — copy these steps)

This folder is already a **git repo** with an initial commit on branch `main`. You only need a **new empty GitHub repo** and a **push**.

1. On [github.com/new](https://github.com/new): create a repository (e.g. `fundaxis-mf-demo`), **Public**, **without** README / .gitignore / license (keep it empty).

2. In a terminal **inside `mf-portal`** (use **cmd** or `npm.cmd` if PowerShell blocks scripts):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME`. Use the HTTPS URL GitHub shows after you create the repo.

3. On GitHub: open the repo → **Settings** → **Pages** → under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

4. Open the **Actions** tab. The workflow **Deploy to GitHub Pages** should run after the push. If GitHub asks to **approve** workflows for a new repo, approve it and re-run the failed job if needed.

5. When the job succeeds, **Settings → Pages** shows the site URL, usually:

   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

   The build sets `VITE_BASE_URL` to `/<repo-name>/` so assets and routing work on that path.

**Using Cursor / VS Code:** you can also use **Source Control** → **Publish Branch** to create the GitHub repo and push, then still do steps 3–5 for Pages.

**Special case:** if the repo name is `YOUR_USERNAME.github.io` (user site), set `VITE_BASE_URL: /` in `.github/workflows/deploy-github-pages.yml` instead of `/${{ github.event.repository.name }}/`.

**PowerShell note:** if `npm` is blocked, use `npm.cmd run build` or run commands in **cmd**.

## Demo sign-in (hardcoded)

| Role        | Email                 | Password |
| ----------- | --------------------- | -------- |
| AMC/Company | `company@demo.com`    | `demo123` |
| Distributor | `distributor@demo.com` | `demo123` |
| Agent       | `agent@demo.com`      | `demo123` |

**Sign up** creates an additional account only in this browser (`localStorage`); it does not call a server.

## Production content checklist (for your client)

When moving from this sample to a live product, you typically need:

- **Regulatory & trust**: SEBI registration details, ARN/RIA disclosures, risk disclaimers, privacy policy, terms, grievance officer, AMFI code of conduct links.
- **Fund data**: Live NAV, AUM, returns (1Y/3Y/5Y), expense ratio, fund manager, benchmark, portfolio (equity/debt split), exit load, min investment — usually from RTA/AMC feeds or data vendors.
- **Documents**: SID, SAI, KIM, factsheet PDFs, scheme summary / riskometer.
- **Investor journeys**: KYC (CKYC/eKYC), bank mandate, FATCA, suitability / risk profiling, order placement, payment gateway, confirmation and SOA.
- **Partner workflows**: Role-based access control, distributor/agent hierarchy, commission statements, lead routing, audit logs, and optional white-label branding for AMCs.

Built with React, TypeScript, and Vite.
