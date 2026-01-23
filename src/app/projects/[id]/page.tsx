import { getAllProjects, getProjectBySlug } from "@/lib/getProjects";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({ id: project.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return <h1>Projeto não encontrado</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
