import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
function CertificationBox({ e, onclick }) {
  const [deletebutton, setDelete] = useState(false);
  return (
    <>
      <div className=" text-[17px] flex-col flex gap-5 p-5 rounded-md shadow-md border-[1px] border-solid border-[#eeeeee]">
        <div className="flex justify-between items-center">
          <span className="text-[#333333] font-bold">{e?.certificateName}</span>
          <div className="relative">
            <span
              onClick={() => {
                setDelete(!deletebutton);
              }}
            >
              <BsThreeDots />
            </span>
            {deletebutton ? (
              <span
                onClick={() => {
                  onclick();
                  setDelete(false);
                }}
                className=" text-sm bg-sky-500 cursor-pointer absolute right-0 p-3 text-white rounded-md shadow-lg"
              >
                Delete
              </span>
            ) : null}
          </div>
        </div>

        <span className="text-[#333333] font-bold">{e?.platform}</span>

        <span className="text-[#333333] font-bold">{e?.certficateDate}</span>

        <div className="w-full">
          <Accordion allowToggle={true}>
            <AccordionItem className="border-none">
              {({ isDisabled }) => (
                <>
                  <h2 className="text-sm font-medium text-sky-500">
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Show More
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <div className="w-full h-[200px] ">
                      <img
                        src={e?.certificationImage}
                        alt="error"
                        className="h-full w-full  rounded-md shadow-md"
                      />
                    </div>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default CertificationBox;
