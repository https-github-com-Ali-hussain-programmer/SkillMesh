import { Features, Hero, TopRated, PlatformFeatures } from "@/Components";
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <TopRated />
      <PlatformFeatures />
    </main>
  );
}
