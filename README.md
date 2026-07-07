# Clean academic CV website

A simple GitHub Pages CV template. No Jekyll theme, no build step, no animation.

## Files

```txt
.nojekyll
index.html
styles.css
cv-data.js
favicon.svg
README.md
```

## What to edit

Most updates should happen in:

```txt
cv-data.js
```

Edit your name, links, projects, publications, talks, software, education, and service entries there.

## Deploy on GitHub Pages

1. Put all files directly in the root of your `i-m-iron-man.github.io` repository.
2. Delete old files such as `_config.yml`, `script.js`, and old animated templates.
3. Go to GitHub: `Settings -> Pages`.
4. Use: `Deploy from a branch -> main -> / root`.
5. Commit and wait for the Pages deployment to finish.

## Adding a publication

In `cv-data.js`, add a new object to the `publications` list:

```js
{
  year: "2026",
  title: "Your paper title",
  venue: "Conference or journal name",
  description: "One sentence summary.",
  link: "https://example.com",
  linkLabel: "Paper"
}
```

## Printing / saving as PDF

Use the `Print / save as PDF` button at the bottom of the site, or use your browser's print command.
