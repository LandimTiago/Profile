import { getAllProjects } from "@/lib/getProjects";

export default function sitemap() {
  const baseUrl = "https://seusite.com"; // TROCAR

  const staticPages = ["", "/about", "/projects", "/contact"];

  const projectPages = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.date,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date().toISOString(),
    })),
    ...projectPages,
  ];
}
