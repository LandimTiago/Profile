import { getAllProjects } from "@/lib/getProjects";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="flex flex-col gap-10">
      <header>
        <h1 className="text-3xl font-bold">Projetos</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Alguns projetos selecionados e experiências relevantes.
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="
              block rounded
              border border-[var(--color-border)]
              p-6
              hover:border-[var(--color-text-primary)]
            "
          >
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
