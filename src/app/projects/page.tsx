import { getAllProjects } from "@/lib/getProjects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos e estudos de caso",
  description:
    "Estudos de caso reais envolvendo sistemas críticos, alta concorrência e soluções completas do backend ao frontend.",
};

export default function ProjectsPage() {
  const projects = getAllProjects().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold">Projetos</h1>
          <p className="text-[var(--color-text-secondary)] max-w-3xl">
            Estudos de caso e entregas relevantes. Foco em sistemas críticos,
            alta concorrência e soluções completas do backend ao frontend.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                group
                rounded-lg
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-6
                hover:border-[var(--color-text-primary)]
                transition
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold">{project.title}</h2>

                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {project.description}
                  </p>
                </div>

                <span
                  className="
                    shrink-0
                    text-xs
                    px-3 py-1 rounded-full
                    border border-[var(--color-border)]
                    text-[var(--color-text-secondary)]
                    group-hover:border-[var(--color-text-primary)]
                    transition
                  "
                >
                  {project.context ?? "Case study"}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.role ? (
                  <span
                    className="
                      text-xs
                      px-3 py-1 rounded-full
                      bg-black/20
                      border border-[var(--color-border)]
                      text-[var(--color-text-secondary)]
                    "
                  >
                    {project.role}
                  </span>
                ) : null}

                {(project.stack ?? []).slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs
                      px-3 py-1 rounded-full
                      border border-[var(--color-border)]
                      text-[var(--color-text-secondary)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.highlights ?? []).length > 0 ? (
                <ul className="mt-4 grid gap-2 text-sm text-[var(--color-text-secondary)]">
                  {(project.highlights ?? []).slice(0, 2).map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5 text-sm font-medium text-white">
                <span className="text-[var(--color-magenta)] group-hover:text-[var(--color-magenta-hover)] transition">
                  Ver detalhes →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
