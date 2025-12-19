import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata = {
  title: "Projects | AlgoRiders",
  description: "Explore hackathon, freelance, and internal projects by AlgoRiders."
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectGrid />
    </main>
  );
}
