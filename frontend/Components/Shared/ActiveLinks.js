import Link from "next/link";
import React from "react";

export default function ActiveLinks({ pathname, url, children }) {
  return (
    <>
      <Link
        href={url}
        prefetch
        className={`${
          pathname === url
            ? "border-b-2   border-solid border-[#A835C4]  "
            : null
        } ${
          url !== "/" && pathname !== url
            ? "hover:border-solid hover:border-b-4 rounded-md  hover:border-[#A835C4] "
            : null
        } py-2`}
      >
        {children}
      </Link>
    </>
  );
}
