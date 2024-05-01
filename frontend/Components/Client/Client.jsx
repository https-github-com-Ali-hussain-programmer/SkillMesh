"use client";

import { Navbar, Footer } from "../../Components";
import { usePathname } from "next/navigation";
import { ConditionalRendering } from "@/utils/data";
import { useEffect } from "react";
import useMetaMask from "../../utils/MetaMaskAuth";
function Client({ children }) {
  const currentPath = usePathname();
  const { handleMetaMaskChange } = useMetaMask();
  const shouldRenderNavbarFooter = !ConditionalRendering.includes(currentPath);

  // useEffect(() => {
  //   if (window.ethereum) {
  //     window?.ethereum?.on("accountsChanged", handleMetaMaskChange);
  //   }
  // }, []);
  return (
    <>
      <>
        {shouldRenderNavbarFooter ? <Navbar /> : null}
        {children}
        {shouldRenderNavbarFooter ? <Footer /> : null}
      </>
    </>
  );
}

export default Client;
