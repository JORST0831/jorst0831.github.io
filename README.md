# Jorilyn Uy: Resume Website

A one-page resume and portfolio site for remote bookkeeping, administrative
support, and e-commerce work. It is plain HTML, CSS and JavaScript, so it runs
on GitHub Pages for free with no setup or build step.

- **Live site:** <https://jorst0831.github.io>
- **Repository:** <https://github.com/JORST0831/jorst0831.github.io>

---

## 1. What's in this folder

| File | What it is | Do you edit it? |
| --- | --- | --- |
| `data.js` | **All the text on your site** (about, jobs, skills, email...) | **Yes, this is the one** |
| `index.html` | Page structure + Google / LinkedIn preview tags | Only once (step 3.3) |
| `styles.css` | Colors, fonts, layout, print layout | Only to change colors |
| `script.js` | Builds the page from `data.js`, dark mode, menu | No |
| `resume.pdf` | The file behind the "Download Resume (PDF)" buttons | Replace when your resume changes |
| `og-image.png` | The picture shown when your link is shared on LinkedIn/Upwork | No |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | The "JU" icon in browser tabs and on phones | No |
| `photo.jpg` | Your headshot (**not included yet**, add it yourself) | Add it (see section 5) |

---

## 2. Preview on your computer

Double-click `index.html`. It opens in your web browser. That's it.

After you change a file, save it and press **F5** (or **Ctrl + F5**) in the
browser to see the change.

---

## 3. Put it online with GitHub Pages (first time only)

> **Already done** for your account (JORST0831). Your site is published from
> the repository above. These steps are kept for reference, in case you ever
> need to set it up again. To publish changes, skip to section 7.

Your website address will be `https://YOUR-USERNAME.github.io`, so pick your
GitHub username carefully. Something simple and professional like
`jorilynuy` works best.

### 3.1 Create a free GitHub account
1. Go to <https://github.com/signup>.
2. Enter your email, create a password, and choose your **username**.
3. Complete the puzzle check and enter the code GitHub emails you.
4. If asked about plans, choose **Free**. You can skip the personalization questions.

### 3.2 Create your website repository
A *repository* ("repo") is just a folder on GitHub.
1. Click the **+** button in the top-right corner → **New repository**.
2. **Repository name:** type exactly `YOUR-USERNAME.github.io`
   (use your real username, e.g. `jorilynuy.github.io`, all lowercase).
3. Choose **Public** (required for free GitHub Pages).
4. Leave "Add a README file" **unchecked** (you already have one).
5. Click **Create repository**.

### 3.3 Put your username into `index.html`
This makes the LinkedIn/Upwork link preview work.
1. Right-click `index.html` → **Open with** → **Notepad**.
2. Press **Ctrl + H** (Replace).
3. Find what: `YOUR-GITHUB-USERNAME` · Replace with: your username (e.g. `jorilynuy`).
4. Click **Replace All** (it should replace 4 places), then **File → Save**.

### 3.4 Upload your files
1. On your new repository page, click the link **"uploading an existing file"**
   (or **Add file → Upload files**).
2. Open this folder in File Explorer, select **all the files** (Ctrl + A)
   and drag them into the GitHub page.
   Upload the files themselves, not the folder that contains them.
   `index.html` must sit at the top level of the repository.
3. At the bottom, in the message box, type something like `First version of my website`.
4. Click **Commit changes** and wait for the upload to finish.

### 3.5 Turn on GitHub Pages
1. In your repository, click **Settings** (top menu, gear icon).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.

### 3.6 Visit your site
Wait 1–3 minutes, then open `https://YOUR-USERNAME.github.io`.
You can watch progress in the **Actions** tab of your repository; a green
check mark means your site is live. Refresh the **Settings → Pages** screen
and it will show "Your site is live at ...".

---

## 4. Update your content (`data.js`)

Open `data.js` in Notepad (or the free editor
[VS Code](https://code.visualstudio.com/), which colors the text and makes
mistakes easier to spot).

**Golden rules:** keep the `"double quotes"` around text and the `,` comma
at the end of each line.

**Change some text**: just edit the words between the quotes:
```js
title: "Banker & Aspiring Virtual Assistant",
```

**Add a bullet point to a job**: copy a line, paste it below, edit it:
```js
points: [
  "Ensure item accuracy by verifying size, color, brand, and measurements.",
  "My new bullet point goes here.",
],
```

**Add a new job**: copy a whole block from `{` to `},` inside
`experience: [ ... ]` and edit it. Jobs appear in the same order as in the file.
```js
{
  role: "Bookkeeper",
  company: "Company Name",
  start: "2026",
  end: "Present",
  points: [
    "What you did.",
  ],
},
```

**Add a skill**: add a line to the `skills` list: `"Google Sheets",`

**Show your LinkedIn / Upwork / OnlineJobs.ph profile**: paste the full link:
```js
{ label: "LinkedIn", url: "https://www.linkedin.com/in/your-name" },
```
Links left as `""` stay hidden.

**Still to fill in:**
- Your duties at **WCI Web Design** (search `data.js` for `TODO`). Until you
  add them, that job shows just the title, company and years.
- Social Media service tasks (the second `TODO`).

**Something broke?** If the page shows "The site content could not load", there
is a typo in `data.js`, usually a missing quote or comma near the last thing
you changed. Undo it (Ctrl + Z) and try again.

---

## 5. Add your photo

1. Choose a clear, friendly, professional headshot (portrait/vertical works best).
2. Rename it to exactly `photo.jpg`.
3. Put it in this folder (next to `index.html`) and upload it to GitHub (section 7).

It appears automatically in place of the "JU" initials. Keep it under about
500 KB so the site stays fast on phones (you can shrink it free at
<https://squoosh.app>).

---

## 6. Update your resume PDF

The included `resume.pdf` was made from this website, so it always matches it.
To make a new one after editing `data.js`:

1. Open your site in Chrome or Edge.
2. Press **Ctrl + P**.
3. Destination: **Save as PDF**. Under **More settings**, turn **off**
   "Headers and footers".
4. Save it as `resume.pdf` (replace the old one) and upload it (section 7).

You can also use your own resume file. Just name it `resume.pdf`.

---

## 7. Redeploy (publish your changes)

Any time you change a file, you upload the new version to GitHub:

1. Go to your repository on GitHub.
2. Click **Add file → Upload files**.
3. Drag in the files you changed (e.g. `data.js`, `photo.jpg`, `resume.pdf`).
   Files with the same name are replaced.
4. Click **Commit changes**.

Your site updates in 1–3 minutes. If you still see the old version, press
**Ctrl + F5** to refresh without the cache.

**Quick edits without uploading:** on GitHub, click `data.js` → the
**pencil icon** (Edit) → make your change → **Commit changes**. Remember to
make the same change in the copy on your computer, or download the file again,
so the two don't get out of sync.

---

## 8. Check your link preview (LinkedIn / Upwork)

After your site is live, paste your address into the
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to see
(and refresh) how your link preview looks.

If you change your name or headline, also update the text in the
`<title>` and `<meta ... content="...">` lines near the top of `index.html`.
Google and LinkedIn read those lines, not `data.js`.

---

## 9. Change the colors (optional)

Open `styles.css`. The colors are at the very top (section 1 for light mode,
"Dark mode colors" just below). Change a value like `--primary: #0f7472;` to
another color code (you can pick one at <https://htmlcolorcodes.com>), save,
and refresh.

---

## Features at a glance

- Works on phones, tablets and computers
- Light / dark mode button (remembers the visitor's choice)
- Sticky menu with smooth scrolling and gentle fade-in animations
  (turned off automatically for visitors who prefer reduced motion)
- "Hire Me", "Email Me" (opens an email with the subject pre-filled),
  "Download Resume (PDF)" and "Copy email" buttons
- Prints as a clean one-page resume
- Google and LinkedIn/Upwork preview tags, plus a "JU" favicon
- Built for keyboard and screen-reader users (skip link, labels, focus outlines)
