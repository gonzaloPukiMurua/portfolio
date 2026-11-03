// Measures our demos and a private list of real sites with Lighthouse:
// mobile, default config, 3 runs per site, median. Writes only aggregate,
// anonymous figures to results.json; per-site data stays in the git-ignored
// results.private.json. See METHOD.md. Usage: npm install && npm start
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';

const run = promisify(execFile);
const here = import.meta.dirname;
const RUNS = 3;
const demos = [
  { name: 'Sparkline Electrical', url: 'https://sparkline.gelumdigital.online/' },
  { name: 'Voltline Electrical & Refrigeration', url: 'https://voltline.gelumdigital.online/' },
];

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const seconds = (ms) => Math.round(ms / 100) / 10;

async function lighthouseOnce(url, dir) {
  const output = join(dir, 'report.json');
  await run(
    process.execPath,
    [
      join(here, 'node_modules/lighthouse/cli/index.js'),
      url,
      '--quiet',
      '--only-categories=performance,accessibility',
      '--chrome-flags=--headless=new',
      '--output=json',
      `--output-path=${output}`,
    ],
    { timeout: 180_000 },
  );
  return JSON.parse(await readFile(output, 'utf8'));
}

/** Median of RUNS runs; failed runs are recorded, never filled in. */
async function measure(url) {
  const dir = await mkdtemp(join(tmpdir(), 'lh-'));
  const runs = [];
  let meta = null;
  let failures = 0;
  for (let i = 0; i < RUNS; i++) {
    try {
      const report = await lighthouseOnce(url, dir);
      const lcp = report.audits['largest-contentful-paint'].numericValue;
      if (lcp == null) throw new Error('no LCP');
      runs.push({
        performance: Math.round(report.categories.performance.score * 100),
        accessibility: Math.round(report.categories.accessibility.score * 100),
        lcp,
      });
      meta = {
        lighthouseVersion: report.lighthouseVersion,
        formFactor: report.configSettings.formFactor,
        throttlingMethod: report.configSettings.throttlingMethod,
        throttling: report.configSettings.throttling,
      };
    } catch (error) {
      failures++;
      console.error(`  run ${i + 1} failed: ${String(error.message).slice(0, 120)}`);
    }
  }
  await rm(dir, { recursive: true, force: true });
  if (runs.length < RUNS) return { failures, runs: runs.length, meta };
  return {
    failures,
    runs: runs.length,
    meta,
    performance: median(runs.map((r) => r.performance)),
    accessibility: median(runs.map((r) => r.accessibility)),
    lcpSeconds: seconds(median(runs.map((r) => r.lcp))),
    all: runs.map((r) => ({ ...r, lcp: seconds(r.lcp) })),
  };
}

const list = (await readFile(join(here, 'sites.private.csv'), 'utf8'))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'));

const date = new Date().toISOString().slice(0, 10);
const demoResults = [];
for (const demo of demos) {
  console.log('demo', demo.url);
  const result = await measure(demo.url);
  console.log('  ', result.performance, result.accessibility, result.lcpSeconds, 'failures', result.failures);
  demoResults.push({ ...demo, ...result });
}
const compared = [];
for (const [index, url] of list.entries()) {
  console.log(`site ${index + 1}/${list.length}`);
  const result = await measure(url);
  console.log('  ', result.performance, result.lcpSeconds, 'failures', result.failures);
  compared.push({ url, ...result });
}

const measured = compared.filter((site) => site.lcpSeconds != null);
const meta = demoResults.find((demo) => demo.meta)?.meta ?? null;
await writeFile(
  join(here, 'results.json'),
  `${JSON.stringify(
    {
      date,
      runsPerSite: RUNS,
      ...meta,
      demos: demoResults.map(({ name, url, performance, accessibility, lcpSeconds, failures }) => ({
        name,
        url,
        performance,
        accessibility,
        lcpSeconds,
        failures,
      })),
      // Anonymous on purpose: no names or URLs of real businesses here.
      comparison: {
        sites: measured.length,
        sitesThatFailed: compared.length - measured.length,
        medianLcpSeconds: measured.length ? Math.round(median(measured.map((site) => site.lcpSeconds)) * 10) / 10 : null,
      },
    },
    null,
    2,
  )}\n`,
);
await writeFile(join(here, 'results.private.json'), `${JSON.stringify({ date, demoResults, compared }, null, 2)}\n`);
console.log('done');
