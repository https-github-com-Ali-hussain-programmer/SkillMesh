import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MetaMask from "../../public/MetaMask.png";
import { Badge } from "@chakra-ui/react";
import useMetaMask from "../../utils/MetaMaskAuth";
import AlertComp from "../../utils/Alert";
import { Spinner } from "@chakra-ui/react";
function MetaModal({ setModal }) {
  const [alertContent, setAlertContent] = useState(null);
  const [loader, setLoader] = useState(false);
  const { connectMetaMask } = useMetaMask();

  const showAlertAndHideLoader = (alert) => {
    setLoader(false);
    setAlertContent(alert);
    setTimeout(() => {
      setAlertContent(null);
      setModal();
    }, 2000);
  };

  const handleMetaMask = async () => {
    setLoader(true);
    const alert = await connectMetaMask();
    showAlertAndHideLoader(alert);
  };

  return (
    <>
      <div className="metaModal">
        <div className="mt-[12px] bg-white rounded-[24px] flex flex-col p-5 gap-3 md:w-[35vw] ">
          <div className="flex items-center justify-between">
            <h1 className="text-[#151619] font-[900]  text-2xl"> Sign in</h1>
            <span
              className="text-[#151619] font-[900] text-xl"
              onClick={() => {
                setModal();
              }}
            >
              <RxCross2 />
            </span>
          </div>
          <p className="text-[#151619] font-[400]  text-sm py-1">
            Connect a wallet that you want to connect.
          </p>

          <button
            onClick={handleMetaMask}
            className="hover:bg-[rgba(208,209,215,0.5)] flex justify-between items-center text-sm  outline-none w-full  cursor-pointer border border-solid border-[rgb(208,209,215)] px-[0.95rem] py-[1rem] h-[52px] rounded-[26px]"
          >
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
          {loader ? (
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#3182CE] font-bold text-[17px]">
                Connecting...{" "}
              </span>
              <Spinner color="blue.500" />{" "}
            </div>
          ) : null}
        </div>
        <div className="absolute top-2">
          {alertContent && (
            <div className="z-50 text-[#151619]">
              <AlertComp
                status={alertContent?.status}
                description={alertContent?.description}
                title={alertContent?.title}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MetaModal;
