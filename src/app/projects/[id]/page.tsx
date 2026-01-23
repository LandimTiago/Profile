import { getAllProjects, getProjectBySlug } from "@/lib/getProjects";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
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
    notFound(); // importante
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
