import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { materials } from "@/data/materials";
import { applications } from "@/data/applications";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/materials",
    "/applications",
    "/projects",
    "/trade-program",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const materialRoutes = materials.map((m) => ({
    url: `${site.url}/materials/${m.slug}`,
    lastModified: new Date(),
  }));

  const applicationRoutes = applications.map((a) => ({
    url: `${site.url}/applications/${a.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...materialRoutes, ...applicationRoutes, ...projectRoutes];
}
