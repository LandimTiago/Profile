import { getAllProjects, getProjectBySlug } from "@/lib/getProjects";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.id);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ id: project.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Case header */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {project.context ? (
              <span
                className="
                  w-fit
                  text-xs
                  px-3 py-1 rounded-full
                  border border-[var(--color-border)]
                  text-[var(--color-text-secondary)]
                  bg-black/20
                "
              >
                {project.context}
              </span>
            ) : null}

            <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>

            <p className="text-[var(--color-text-secondary)] max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="
                rounded-lg
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-5
              "
            >
              <p className="text-xs text-[var(--color-text-secondary)]">
                Papel
              </p>
              <p className="mt-1 font-medium">{project.role ?? "—"}</p>
            </div>

            <div
              className="
                rounded-lg
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-5
              "
            >
              <p className="text-xs text-[var(--color-text-secondary)]">Data</p>
              <p className="mt-1 font-medium">{project.date ?? "—"}</p>
            </div>

            <div
              className="
                rounded-lg
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-5
              "
            >
              <p className="text-xs text-[var(--color-text-secondary)]">
                Links
              </p>
              <div className="mt-2 flex gap-3 text-sm">
                {project.links?.repo ? (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    className="text-[var(--color-magenta)] hover:text-[var(--color-magenta-hover)]"
                  >
                    Repo
                  </a>
                ) : (
                  <span className="text-[var(--color-text-secondary)]">—</span>
                )}

                {project.links?.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="text-[var(--color-magenta)] hover:text-[var(--color-magenta-hover)]"
                  >
                    Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Stack */}
          {(project.stack ?? []).length > 0 ? (
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Stack</p>
              <div className="flex flex-wrap gap-2">
                {(project.stack ?? []).map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs
                      px-3 py-1 rounded-full
                      border border-[var(--color-border)]
                      text-[var(--color-text-secondary)]
                      bg-black/10
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* Highlights */}
          {(project.highlights ?? []).length > 0 ? (
            <div
              className="
                rounded-lg
                border border-[var(--color-border)]
                bg-black/20
                p-6
              "
            >
              <p className="text-sm font-semibold">Destaques</p>
              <ul className="mt-3 grid gap-2 text-sm text-[var(--color-text-secondary)]">
                {(project.highlights ?? []).map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </header>

        {/* Body */}
        <article
          className="
            mt-12
            rounded-lg
            border border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-6
          "
        >
          <div className="prose prose-invert max-w-none">{project.content}</div>
        </article>
      </div>
    </section>
  );
}
