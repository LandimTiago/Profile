import Header from "@/components/Header";
import "./globals.css";

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
        <main className="w-full py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
