import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Achievements from "@/components/home/Achievements";
import CallToAction from "@/components/home/CallToAction";
import InstagramFeed from "@/components/social/InstagramFeed";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Achievements />
      <InstagramFeed />
      <CallToAction />
    </main>
  );
}
