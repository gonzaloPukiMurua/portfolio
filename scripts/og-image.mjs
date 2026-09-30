// Generates the social share images (1200×630) in public/og/, one per locale.
// The headline is read from the built pages, so run `npm run build` first,
// and re-run this after any change to the hero copy: `npm run og`.
import { chromium } from '@playwright/test';
import { mkdir, readFile } from 'node:fs/promises';

const pages = { en: 'out/index.html', es: 'out/es/index.html' };

function headline(html) {
  const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!match) throw new Error('No h1 found; run `npm run build` first.');
  return match[1].replace(/<[^>]+>/g, '').trim();
}

const template = (title) => `<!doctype html>
<html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@600&family=Geist+Mono:wght@500&display=block" rel="stylesheet" />
    <style>
      body { margin: 0; width: 1200px; height: 630px; background: #f6f5f1; color: #14161a;
        font-family: Geist, sans-serif; display: flex; flex-direction: column; justify-content: space-between;
        padding: 72px 80px; box-sizing: border-box; border-bottom: 12px solid #0b6e78; }
      .label { font-family: 'Geist Mono', monospace; font-size: 24px; letter-spacing: 0.06em;
        text-transform: uppercase; color: #0b6e78; }
      h1 { margin: 0; font-size: 68px; line-height: 1.05; letter-spacing: -0.03em; font-weight: 600; max-width: 20ch; }
      .url { font-family: 'Geist Mono', monospace; font-size: 24px; color: #5b6068; }
    </style>
  </head>
  <body>
    <div class="label">Gelum Digital</div>
    <h1>${title}</h1>
    <div class="url">gelumdigital.online</div>
  </body>
</html>`;

await mkdir('public/og', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [locale, file] of Object.entries(pages)) {
  const title = headline(await readFile(file, 'utf8'));
  await page.setContent(template(title), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og/${locale}.png` });
  console.log(`public/og/${locale}.png: ${title}`);
}
await browser.close();
