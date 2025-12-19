import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team";

export default function TeamGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-16">
        Meet the Team
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
