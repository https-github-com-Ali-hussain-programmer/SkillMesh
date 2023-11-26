"use client";
import React from "react";
import { Navbar, Footer } from "../../Components";
import { usePathname } from "next/navigation";
import { ConditionalRendering } from "@/utils/data";
function Client({ children }) {
  const currentPath = usePathname();
  const shouldRenderNavbarFooter = !ConditionalRendering.includes(currentPath);
  return (
    <>
      {shouldRenderNavbarFooter ? <Navbar /> : null}
      {children}
      {shouldRenderNavbarFooter ? <Footer /> : null}
    </>
  );
}

export default Client;
