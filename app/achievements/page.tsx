import AchievementGrid from "@/components/achievements/AchievementGrid";

export const metadata = {
  title: "Achievements | AlgoRiders",
  description: "Hackathon wins, milestones, and recognitions by AlgoRiders."
};

export default function AchievementsPage() {
  return (
    <main>
      <AchievementGrid />
    </main>
  );
}
