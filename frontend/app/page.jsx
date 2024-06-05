"use client";
import { Features, Hero, TopRated, PlatformFeatures } from "../Components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/slice/categorySlice";
import { useCurrencyRate } from "../Api/useCurrencyRate";
import useSmartContract from "../utils/useSmartContract";
export default function Home() {

  const currentUser = useSelector((state) => state.user?.userData);
  useCurrencyRate();
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
