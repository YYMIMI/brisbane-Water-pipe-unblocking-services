import { copyFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
const dist = path.join(root, "dist");
const server = path.join(dist, "server");
const client = path.join(dist, "client");
const assets = path.join(client, "assets");
const hosting = path.join(dist, ".openai");

if (!dist.startsWith(`${root}${path.sep}`)) {
  throw new Error("Refusing to build outside the project directory");
}

await rm(dist, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await mkdir(assets, { recursive: true });
await mkdir(hosting, { recursive: true });

await Promise.all([
  copyFile(path.join(root, "site", "worker.mjs"), path.join(server, "index.js")),
  copyFile(path.join(root, ".openai", "hosting.json"), path.join(hosting, "hosting.json")),
  copyFile(path.join(root, "site", "site.css"), path.join(assets, "site.css")),
  copyFile(path.join(root, "site", "site.js"), path.join(assets, "site.js")),
  copyFile(path.join(root, "public", "llms.txt"), path.join(client, "llms.txt")),
  copyFile(path.join(root, "public", "og.png"), path.join(client, "og.png")),
  copyFile(path.join(root, "public", "melone-logo.png"), path.join(client, "melone-logo.png")),
  copyFile(path.join(root, "public", "representative-pipe-service.jpg"), path.join(client, "representative-pipe-service.jpg")),
  copyFile(path.join(root, "public", "storm-drain-leaves.jpg"), path.join(client, "storm-drain-leaves.jpg")),
  copyFile(path.join(root, "public", "drain-detail.jpg"), path.join(client, "drain-detail.jpg")),
]);

console.log("Built MelOne Brisbane site");
