import { Trophy } from "lucide-react";

const achievements = [
  "Winner – National Level Hackathon (AI Track)",
  "Top 5 – Smart India Hackathon (Prototype Stage)",
  "Delivered 15+ freelance projects globally",
  "Built multiple production-grade AI systems"
];

export default function Achievements() {
  return (
    <section className="py-24 bg-black px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Achievements
      </h2>

      <ul className="max-w-3xl mx-auto space-y-6 text-muted">
        {achievements.map((a, i) => (
          <li key={i} className="flex gap-4 items-center">
            <Trophy className="text-yellow-400" />
            {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
