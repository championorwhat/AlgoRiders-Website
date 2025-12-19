import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition"
    >
      <div className="h-48 bg-zinc-800 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      <div className="p-6">
        <p className="text-xs text-muted mb-2">{project.category}</p>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted">{project.shortDescription}</p>
      </div>
    </Link>
  );
}
