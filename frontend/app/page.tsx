"use client";
import { useEffect } from "react";
import { Features, Hero, TopRated, PlatformFeatures } from "../Components";
import { useSelector } from "react-redux";
export default function Home() {
  const currentUser = useSelector((state) => state.user.userData);

  return (
    <main
      className={`min-h-screen ${
        currentUser ? " text-black" : "bg-dark-black"
      } overflow-hidden`}
    >
      <Hero />
      <Features />
      <TopRated />
      <PlatformFeatures />
    </main>
  );
}
