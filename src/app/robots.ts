export const dynamic = "force-static";

export default function robots() {
  const baseUrl = "https://seusite.com"; // TROCAR

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
