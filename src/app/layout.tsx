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
        <div className="mx-auto max-w-5xl px-6 py-12">
          {children}
        </div>
      </body>
    </html>
  );
}
