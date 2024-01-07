import React from "react";
import ActiveLinks from "../Shared/ActiveLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Category } from "../../utils/data";
function CategoryModal() {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`z-50  container mx-auto ${
          pathname === "/"
            ? "bg-[#fcfcfc] text-black"
            : "bg-dark-black text-secondary-white"
        }  p-6 py-8 rounded-md shadow-xl`}
      >
        <div className=" sm:flex   lg:gap:0  flex-wrap lg:gap-14 md:gap-5 hidden">
          {Category.map((c, index) => {
            return (
              <div key={index} className="item flex gap-5 flex-col">
                <Link
                  href={`/Categories/${c.category}`}
                  className="text-md font-bold"
                >
                  {c.category}
                </Link>
                {c.subfields.map((subcategory, index) => {
                  return (
                    <span className="text-lightGrey" key={index}>
                      {" "}
                      <ActiveLinks
                        pathname={pathname}
                        url={`/Categories/${c.category}?subcategory=${subcategory}`}
                      >
                        {subcategory}
                      </ActiveLinks>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryModal;
