import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface PageProps {
  params: { slug: string };
}

export default function ProjectDetailsPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="py-24 px-6 max-w-4xl mx-auto">
      <p className="text-sm text-muted mb-4">{project.category}</p>

      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-2xl mb-10"
      />

      <p className="text-lg text-muted mb-8">{project.description}</p>

      <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
      <ul className="flex flex-wrap gap-3 mb-8">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="px-4 py-2 bg-surface border border-white/10 rounded-xl text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.outcome && (
        <>
          <h3 className="text-xl font-semibold mb-3">Outcome</h3>
          <p className="text-muted">{project.outcome}</p>
        </>
      )}
    </main>
  );
}
