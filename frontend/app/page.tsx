import { Metadata } from "next";
import { Features, Hero, TopRated, PlatformFeatures } from "../Components";

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
