# How the published load times were measured

* **Date:** 3 November 2026 (UTC).
* **Tool:** Lighthouse 12.8.2, command line, default configuration, from a single home connection in Argentina.
* **Device and network:** Lighthouse's default mobile emulation with simulated throttling: 150 ms round trip, about 1.6 Mbps, 4× CPU slowdown.
* **Metric:** Largest Contentful Paint, published as "load time". It marks when the main content appears.
* **Runs:** 3 per site, in sequence. Each site's figure is its median; the comparison figure is the median across sites.
* **Sites:** our 2 demos, and 8 Australian electrical, refrigeration and heating businesses found while researching the demos.

## Limits

* It is a small sample chosen for the demos' research, not a survey of the market.
* A home connection adds noise: the same page can vary by several points between runs. All sites went through the same setup on the same day.
* Results differ from PageSpeed Insights, which runs on Google's servers.

## Privacy

The list of sites (`sites.private.csv`) and the per-site results (`results.private.json`) are git-ignored and never published. Only `results.json`, which is aggregate and anonymous for the comparison sites, feeds the site.

## Run it again

```bash
cd tools/benchmark
npm install
npm start
```

Don't run builds or tests at the same time: the extra load skews the measurements.
