import AchievementCard from "./AchievementCard";
import { achievements } from "@/data/achievements";

export default function AchievementGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-16">
        Achievements
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {achievements.map((a) => (
          <AchievementCard key={a.id} achievement={a} />
        ))}
      </div>
    </section>
  );
}
