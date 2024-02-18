"use client";
import { Features, Hero, TopRated, PlatformFeatures } from "../Components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../redux/slice/categorySlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
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
