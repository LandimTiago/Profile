import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://seusite.com"; // TROCAR
const siteName = "Tiago Landim";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Software Engineer`,
    template: `%s | ${siteName}`,
  },
  description:
    "Engenheiro de software focado em sistemas robustos, escaláveis e orientados a resultado. Backend, frontend e arquitetura.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Golang",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Arquitetura de Software",
    "Clean Architecture",
    "Microsserviços",
    "Sistemas distribuídos",
    "Sistemas críticos",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    title: `${siteName} | Software Engineer`,
    description:
      "Engenharia de software para sistemas que não podem falhar. Backend, frontend e arquitetura.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteName} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Software Engineer`,
    description:
      "Engenharia de software para sistemas que não podem falhar. Backend, frontend e arquitetura.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className="
          min-h-screen
          bg-[var(--color-background)]
          text-[var(--color-text-primary)]
        "
      >
        <Header />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tiago Landim",
              url: "https://seusite.com", // trocar
              description:
                "Engenheiro de software focado em sistemas robustos, escaláveis e orientados a resultado.",
              author: {
                "@type": "Person",
                name: "Tiago Landim",
                jobTitle: "Software Engineer",
                url: "https://seusite.com",
                sameAs: [
                  "https://www.linkedin.com/in/landim-tiago",
                  "https://github.com/LandimTiago",
                ],
              },
            }),
          }}
        />

        {/* Full width */}
        <main className="w-full py-10">{children}</main>
      </body>
    </html>
  );
}
