import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import http from "node:http";
import worker from "../dist/server/index.js";

const root = path.resolve(fileURLToPath(new URL("../dist/client/", import.meta.url)));
const host = "127.0.0.1";
const port = 4173;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
};

const assets = {
  async fetch(request) {
    const url = new URL(request.url);
    const relative = url.pathname.startsWith("/assets/")
      ? url.pathname.slice(1)
      : url.pathname.slice(1);
    const file = path.resolve(root, relative);
    if (!file.startsWith(`${root}${path.sep}`)) return new Response("Not found", { status: 404 });
    try {
      await stat(file);
      const bytes = await import("node:fs/promises").then(({ readFile }) => readFile(file));
      return new Response(bytes, {
        headers: {
          "content-type": contentTypes[path.extname(file)] || "application/octet-stream",
          "cache-control": "no-store",
        },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

const server = http.createServer(async (req, res) => {
  try {
    const request = new Request(`http://${host}:${port}${req.url}`, {
      method: req.method,
      headers: req.headers,
    });
    const response = await worker.fetch(request, { ASSETS: assets });
    res.statusCode = response.status;
    for (const [key, value] of response.headers) res.setHeader(key, value);
    if (req.method === "HEAD") return res.end();
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    res.statusCode = 500;
    res.end("Preview error");
    console.error(error);
  }
});

server.listen(port, host, () => {
  console.log(`Local URL: http://${host}:${port}`);
});
