import React from "react";
import Link from "next/link";
import p1 from "../../public/people-01.png";
const user = {
  name: "hamza111233445456",
  category: "AI",
};
function Orderlist() {
  return (
    <>
      <Link
        href="/"
        className="h-fit text-[#404145] p-2 border-b-[1px] border-solid  border-gray-300 flex   items-center flex-row "
      >
        <img
          src={p1.src}
          alt="error"
          className="h-[40px] w-[40px] object-cover"
        />

        <div className="flex flex-col gap-2 h-full w-full p-2 text-[#62646A] text-sm">
          <p>
            <strong className="tracking-wider">
              Congrats, You Have been Placed to{" "}
            </strong>
            <span className="tracking-wider"> {user.name}  in {user.category} Category
            </span>
          </p>
          <p className="font-semibold text-sm text-[#B5b6ba]">1d</p>
        </div>
      </Link>
    </>
  );
}

export default Orderlist;
