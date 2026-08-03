import worker from "../site/worker.mjs";

const missingAsset = {
  fetch: async () => new Response("Not found", { status: 404 }),
};

const first = (value) => (Array.isArray(value) ? value[0] : value);

const requestHeaders = (headers = {}) => {
  const result = new Headers();
  for (const [name, value] of Object.entries(headers)) {
    if (Array.isArray(value)) {
      for (const item of value) result.append(name, item);
    } else if (value !== undefined) {
      result.set(name, String(value));
    }
  }
  return result;
};

export default async function handler(request, response) {
  const protocol = first(request.headers?.["x-forwarded-proto"]) || "https";
  const host = first(request.headers?.["x-forwarded-host"]) || request.headers?.host;
  const routedPath = first(request.query?.path);
  const pathname = routedPath ? `/${String(routedPath).replace(/^\/+/, "")}` : "/";
  const url = new URL(pathname, `${protocol}://${host}`);

  const rendered = await worker.fetch(
    new Request(url, {
      method: request.method || "GET",
      headers: requestHeaders(request.headers),
    }),
    { ASSETS: missingAsset },
  );

  response.statusCode = rendered.status;
  rendered.headers.forEach((value, name) => response.setHeader(name, value));

  if ((request.method || "GET") === "HEAD") {
    response.end();
    return;
  }

  response.end(Buffer.from(await rendered.arrayBuffer()));
}
