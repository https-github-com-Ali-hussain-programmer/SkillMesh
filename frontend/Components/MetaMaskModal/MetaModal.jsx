import React from "react";
import { RxCross2 } from "react-icons/rx";
import MetaMask from "../../public/MetaMask.png";
import { Badge } from "@chakra-ui/react";
function MetaModal() {
  return (
    <>
      <div className="metaModal">
        <div className="mt-[12px] bg-white rounded-[24px] flex flex-col p-5 gap-3 w-[30%]">
          <div className="flex items-center justify-between">
            <h1 className="text-[#151619] font-[900]  text-2xl"> Sign in</h1>
            <span className="text-[#151619] font-[900] text-xl">
              <RxCross2 />
            </span>
          </div>
          <p className="text-[#151619] font-[400]  text-sm py-1">
            Connect a wallet that you want to connect.
          </p>

          <button className="hover:bg-[rgba(208,209,215,0.5)] flex justify-between items-center text-sm  outline-none w-full  cursor-pointer border border-solid border-[rgb(208,209,215)] px-[0.95rem] py-[1rem] h-[52px] rounded-[26px]">
            <div className="flex items-center gap-3">
              <span className="bg-[#FED7D7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
                <img src={MetaMask.src} alt="MetaMask" className="h-[25px] " />
              </span>

              <span className="font-bold text-sm text-[#151619]">Metamask</span>
            </div>
            <Badge variant="subtle" colorScheme="green">
              POPULAR
            </Badge>
          </button>
        </div>
      </div>
    </>
  );
}

export default MetaModal;
