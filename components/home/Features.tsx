import { Trophy, Rocket, Users } from "lucide-react";

const features = [
  {
    title: "Hackathon Driven",
    desc: "We thrive in high-pressure environments, rapidly building production-ready prototypes.",
    icon: Trophy
  },
  {
    title: "Elite Engineering",
    desc: "Strong foundations in AI, backend systems, and scalable architecture.",
    icon: Rocket
  },
  {
    title: "Team First",
    desc: "Collaboration, speed, and ownership define how we work.",
    icon: Users
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-surface p-8 rounded-2xl border border-white/10"
          >
            <f.icon className="mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-muted text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
