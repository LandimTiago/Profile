import { getAllProjects } from '@/lib/getProjects';
import Link from "next/link";
import React from 'react';

const ProjectsPage: React.FC = () => {

  const projects = getAllProjects()

  return (
    <div>
      <h1>Projetos</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <strong>{project.title}</strong>
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
