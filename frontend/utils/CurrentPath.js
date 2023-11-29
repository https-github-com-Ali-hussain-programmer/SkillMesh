"use client";
import React from "react";
import { usePathname } from "next/navigation";
function CurrentPath() {
  const path = usePathname();
  return path;
}

export default CurrentPath;
