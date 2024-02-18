import React from "react";
import ActiveLinks from "../Shared/ActiveLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
function CategoryModal() {
  const pathname = usePathname();
  const Category = useSelector((state) => state?.category);
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
          {Category?.data?.map((c, index) => {
            return (
              <div key={index} className="item flex gap-5 flex-col">
                <Link
                  href={`/Categories/${c.categoryName}`}
                  className="text-md font-bold"
                >
                  {c.categoryName}
                </Link>
                {c.subField.map((subcategory, index) => {
                  return (
                    <span className="text-lightGrey" key={index}>
                      {" "}
                      <ActiveLinks
                        pathname={pathname}
                        url={`/Categories/${c?.categoryName}?subcategory=${subcategory?.name}`}
                      >
                        {subcategory?.name}
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
