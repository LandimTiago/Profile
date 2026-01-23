import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-[var(--color-border)]
        bg-[var(--color-background)]
      "
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-lg">
          Tiago Landim
        </span>

        <nav className="flex gap-6 text-sm text-[var(--color-text-secondary)]">
          <Link href="/" className="hover:text-[var(--color-text-primary)]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[var(--color-text-primary)]">
            Sobre
          </Link>
          <Link href="/projects" className="hover:text-[var(--color-text-primary)]">
            Projetos
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-text-primary)]">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
