import { getAllProjects } from "@/lib/getProjects";

export const dynamic = "force-static";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/";

  const staticPages = ["", "about", "projects", "contact"];

  const projectPages = getAllProjects().map((project) => ({
    url: `${siteUrl}projects/${project.slug}`,
    lastModified: project.date,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page}`,
      lastModified: new Date().toISOString(),
    })),
    ...projectPages,
  ];
}
