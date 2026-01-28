import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
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
    canonical: "/",
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
        url: `${siteUrl}og.png`,
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
    images: [`${siteUrl}og.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:image" content={`${siteUrl}og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
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
              url: siteUrl,
              description:
                "Engenheiro de software focado em sistemas robustos, escaláveis e orientados a resultado.",
              author: {
                "@type": "Person",
                name: "Tiago Landim",
                jobTitle: "Software Engineer",
                url: siteUrl,
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
