import fs from 'fs';
import matter from "gray-matter";
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');


export type Project = {
  slug: string
  title: string
  description: string
  date: string
  content?: string
}


export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const {data} = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
    }
  })
}

export function getProjectBySlug(slug:string): Project | null {
  if (!slug) {
    return null;
  }

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null

  const fileContent = fs.readFileSync(fullPath, 'utf8');

  const {data, content} = matter(fileContent)

  return {
    slug,
    content,
    title: data.title,
    description: data.description,
    date: data.date,
  }
}
