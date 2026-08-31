// app/sitemap.ts
// Generated at build time by walking the app directory, so new pages are
// picked up automatically. Dynamic segments ([slug]) and API routes are
// skipped; add dynamic entries explicitly once those slugs come from a CMS.
import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

function collectRoutes(dir: string, route: string, out: string[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  if (entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name))) {
    out.push(route || "/");
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    // Skip API routes, dynamic segments, and private folders
    if (entry.name === "api" || entry.name.startsWith("[") || entry.name.startsWith("_")) continue;
    const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
    collectRoutes(path.join(dir, entry.name), `${route}${segment}`, out);
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];
  collectRoutes(appDir, "", routes);

  return routes.sort().map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
