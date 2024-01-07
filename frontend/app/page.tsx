import { Metadata } from "next";
import { Features, Hero, TopRated, PlatformFeatures } from "../Components";
export const metadata: Metadata = {
  title: "SkillMesh |Web3 FrreLancing Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
};
export default function Home() {
  return (
    <main
      className={`min-h-screen bg-dark-black
       overflow-hidden text-white`}
    >
      <Hero />
      <Features />
      <TopRated />
      <PlatformFeatures />
    </main>
  );
}
