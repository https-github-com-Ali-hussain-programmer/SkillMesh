"use client";
import { useEffect } from "react";
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
