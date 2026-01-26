import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tiago Landim | Software Engineer",
    template: "%s | Tiago Landim",
  },
  description:
    "Engenheiro de software focado em sistemas robustos, escaláveis e orientados a resultado. Backend, frontend e arquitetura.",
  metadataBase: new URL("https://seusite.com"), // TROCAR
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Tiago Landim",
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

        {/* Full width */}
        <main className="w-full py-10">{children}</main>
      </body>
    </html>
  );
}
