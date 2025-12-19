import { Achievement } from "@/data/achievements";

export default function AchievementCard({
  achievement
}: {
  achievement: Achievement;
}) {
  return (
    <div className="bg-surface border border-white/10 rounded-2xl p-6">
      <p className="text-xs text-muted mb-2">
        {achievement.category} · {achievement.year}
      </p>

      <h3 className="text-xl font-semibold mb-1">
        {achievement.title}
      </h3>

      <p className="text-sm text-muted mb-3">
        {achievement.event}
      </p>

      <p className="text-sm text-muted">
        {achievement.description}
      </p>
    </div>
  );
}
