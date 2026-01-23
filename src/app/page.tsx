import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-12">
      {/* Hero */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Tiago Landim
        </h1>

        <h2 className="text-xl text-[var(--color-text-secondary)]">
          Software Engineer • Backend • Blockchain • Golang
        </h2>

        <p className="max-w-2xl text-[var(--color-text-secondary)]">
          Desenvolvedor de software com foco em backend, sistemas distribuídos
          e aplicações de alta confiabilidade. Experiência com Golang,
          arquiteturas limpas e ambientes críticos.
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-6">
        <Link
          href="/projects"
          className="
            px-6 py-3 rounded
            bg-[var(--color-purple)]
            hover:bg-[var(--color-purple-hover)]
            text-white
            text-sm font-medium
          "
        >
          Ver projetos
        </Link>

        <a
          href="https://github.com/LandimTiago"
          target="_blank"
          className="
            px-6 py-3 rounded
            border border-[var(--color-border)]
            text-sm font-medium
            hover:border-[var(--color-text-primary)]
          "
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
