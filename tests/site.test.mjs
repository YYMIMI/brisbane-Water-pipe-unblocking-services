import assert from "node:assert/strict";
import test from "node:test";
import vercelHandler from "../api/render.mjs";
import worker from "../dist/server/index.js";

const paths = [
  "/",
  "/blocked-drains-brisbane/",
  "/drain-cleaning-brisbane/",
  "/toilet-sink-blockages/",
  "/stormwater-drain-cleaning/",
  "/service-areas-brisbane/",
  "/about/",
  "/contact/",
];

const assets = { fetch: async () => new Response("asset", { status: 200 }) };
const fetchPath = (path) => worker.fetch(new Request(`https://melone.example${path}`), { ASSETS: assets });

test("every public page renders with unique metadata and one useful heading", async () => {
  const titles = new Set();
  for (const path of paths) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") || "", /^text\/html/);
    const html = await response.text();
    assert.match(html, /<html lang="en-AU">/);
    assert.match(html, /0403 202 949/);
    assert.match(html, /handyman\.kevinlee@gmail\.com/);
    assert.match(html, /\/melone-logo\.png/);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://melone\\.example${path.replaceAll("/", "\\/")}">`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path} should contain one h1`);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|keyword strategy|SEO strategy/i);
    assert.doesNotMatch(html, /melonerenovations\.com\.au/i);
    const visibleText = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ");
    assert.doesNotMatch(
      visibleText,
      /\bsymptoms?\b|affected fixture|practical next step|drainage point|sewage-like|bigger restriction/i,
      `${path} should use plain Australian English`,
    );
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title);
    assert.ok(!titles.has(title), `duplicate title: ${title}`);
    titles.add(title);
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
    assert.ok(json, `${path} should contain JSON-LD`);
    assert.doesNotThrow(() => JSON.parse(json));
    assert.doesNotMatch(json, /AggregateRating|\"@type\":\"Review\"/);
    if (path === "/") {
      assert.match(html, /Why choose MelOne/);
      assert.match(html, /data-review-carousel/);
      assert.match(html, /Ingrid Gao/);
      assert.match(html, /Kong Tran/);
      assert.match(html, /Kevin Song/);
      assert.match(html, /What customers say about MelOne/);
    }
    if (path === "/about/") {
      assert.match(html, /data-review-carousel/);
      assert.match(html, /What customers say about MelOne/);
      assert.match(html, /Ingrid Gao/);
      assert.match(html, /Kong Tran/);
      assert.match(html, /Kevin Song/);
    }
    if (path === "/service-areas-brisbane/") {
      assert.match(html, /Indicative map of the MelOne Brisbane service area/);
      assert.match(html, /Mel One Property Maintenance Pty Ltd/);
      assert.match(html, /39 666 325 408/);
      assert.match(html, /no walk-in shopfront/);
      assert.doesNotMatch(html, /streetAddress|postalCode|aggregateRating/);
    }
  }
});

test("crawl routes and redirects are complete", async () => {
  const sitemap = await (await fetchPath("/sitemap.xml")).text();
  for (const path of paths) assert.match(sitemap, new RegExp(`https://melone\\.example${path.replaceAll("/", "\\/")}`));

  const robots = await (await fetchPath("/robots.txt")).text();
  assert.match(robots, /Allow: \/\n/);
  assert.match(robots, /https:\/\/melone\.example\/sitemap\.xml/);

  const redirect = await fetchPath("/about");
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.get("location"), "https://melone.example/about/");
});

test("unknown pages return a helpful 404", async () => {
  const response = await fetchPath("/missing-page/");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /wrong drain/);
});

test("Vercel catch-all renders the requested public route", async () => {
  const chunks = [];
  const headers = new Map();
  const response = {
    statusCode: 0,
    setHeader: (name, value) => headers.set(name.toLowerCase(), value),
    end: (chunk) => {
      if (chunk) chunks.push(Buffer.from(chunk));
    },
  };

  await vercelHandler(
    {
      method: "GET",
      headers: {
        host: "melone.example",
        "x-forwarded-proto": "https",
      },
      query: { path: "blocked-drains-brisbane/" },
    },
    response,
  );

  const html = Buffer.concat(chunks).toString("utf8");
  assert.equal(response.statusCode, 200);
  assert.match(headers.get("content-type") || "", /^text\/html/);
  assert.match(html, /A blocked drain needs a clear next step/);
  assert.match(html, /https:\/\/melone\.example\/blocked-drains-brisbane\//);
});
