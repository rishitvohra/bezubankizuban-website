# Bezubankizuban — NGO Website

A one-page site for **Bezubankizuban**, a dog-welfare NGO: mission, programs, impact numbers,
contact details, and a UPI QR donation box.

## ⚠️ Before you publish — update your real details

This site ships with **placeholder** contact and payment info so it's safe to preview.
You must replace these before going live:

| What | File | What to change |
|---|---|---|
| **UPI ID** (for the donation QR) | `script.js` (top) | `const UPI_ID = "bezubankizuban@upi";` → your real UPI ID |
| Payee name shown in UPI apps | `script.js` (top) | `const PAYEE_NAME = "Bezubankizuban";` |
| Instagram handle | `script.js` (top) | `const INSTAGRAM_HANDLE = "bezubankizuban";` |
| Phone / WhatsApp number | `index.html` → search for `tel:+91` and `+91 98765 43210` | your real number |
| Email address | `index.html` → search for `hello@bezubankizuban.org` | your real email |
| Impact numbers (dogs rescued, etc.) | `index.html` → section `id="impact"`, the `data-count="..."` values | your real stats |

The donation QR is generated automatically from the `UPI_ID` you set — no image editing needed.
It builds a standard `upi://pay?pa=...&pn=...&cu=INR` link and renders it as a scannable code.

## 🚀 Publish it for free with GitHub Pages

1. **Create a GitHub account** if you don't have one: https://github.com/join
2. **Create a new repository**
   - Go to https://github.com/new
   - Name it anything, e.g. `bezubankizuban-website`
   - Set it to **Public**
   - Click **Create repository**
3. **Upload these files**
   - On the new repo's page, click **"uploading an existing file"**
   - Drag in `index.html`, `styles.css`, `script.js`, and this `README.md`
   - Scroll down, click **Commit changes**
4. **Turn on GitHub Pages**
   - In your repo, go to **Settings → Pages** (left sidebar)
   - Under "Build and deployment" → **Source**, choose **Deploy from a branch**
   - Under **Branch**, choose `main` and folder `/ (root)`, then **Save**
5. **Wait about 1 minute**, then refresh that Pages settings page — it will show your live URL:
   ```
   https://YOUR-USERNAME.github.io/bezubankizuban-website/
   ```
   That's your live site. Share it anywhere.

### Using a custom domain (optional)
If you own a domain like `bezubankizuban.org`, add it under **Settings → Pages → Custom domain**,
then create a `CNAME` record at your domain registrar pointing to `YOUR-USERNAME.github.io`.

## 🛠 Editing later
Every time you change a file in the repo (directly on GitHub, or via `git push`), GitHub Pages
automatically redeploys the live site within about a minute — no extra steps needed.

## 📁 File structure
```
index.html    — page content and structure
styles.css    — all visual design (colors, type, layout, animation)
script.js     — mobile menu, scroll animations, stat counters, donation QR + modal
README.md     — this file
```
