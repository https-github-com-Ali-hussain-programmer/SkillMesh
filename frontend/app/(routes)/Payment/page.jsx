"use client";
import React from "react";
import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { SiHiveBlockchain } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa6";

function Payment() {
  const steps = [
    { title: "Order Details", description: "Contact Info" },
    { title: "Confirm & Pay", description: "Date & Time" },
    { title: "Submit Requirement", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <div className=" min-h-screen bg-white">
        <div className="flex flex-col gap-2 sm:gap-5 justify-center ">
          <div className=" px-12 py-5  flex items-center gap-6 border-solid border-gray-300 border-b-[1px]">
            <h1 className="text-[#404145]  text-4xl font-bold">SkillMesh.</h1>
            <div className=" hidden md:inline-block">
              <Stepper
                size="md"
                width={"2xl"}
                index={activeStep}
                colorScheme="whatsapp"
              >
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle>{step.title}</StepTitle>
                    </Box>

                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </div>
          </div>
          <div className=" flex sm:inline-block">
            <div className="flex sm:hidden p-5">
              <Stepper
                size="xs"
                height={"400px"}
                index={activeStep}
                colorScheme="whatsapp"
                orientation="vertical"
              >
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <div className="hidden sm:inline-block">
                      <Box flexShrink="0">
                        <StepTitle>{step.title}</StepTitle>
                      </Box>
                    </div>

                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="flex justify-between  px-8 flex-col gap-2 sm:flex-row">
              <div className=" shadow-md flex flex-col  border border-gray-300  w-full sm:w-[40%]  rounded-md h-fit shrink-0 ">
                <h1 className="bg-gray-100 text-lg px-5 py-3 font-semibold flex justify-between items-center ">
                  {" "}
                  Billing Information{" "}
                  <FaMoneyCheck className="text-lg text-gray-500" />
                </h1>
                <div className=" px-5 py-3 flex flex-col gap-3 text-sm">
                  <p>
                    Your Transaction will be issued according to the details
                    listed here.
                  </p>
                  <p className="font-bold">sufyan Ahmed</p>
                  <p>Pakistan</p>
                </div>
              </div>
              <div className="rounded shahdow-md bg-[#fafafa]  border  border-gray-300  max-w-[450px] flex flex-col justify-center gap-4  px-3">
                <div className="flex items-center flex-col sm:flex-row">
                  <img
                    src=""
                    alt="error"
                    className="h-[110px] w-[100px] object-fill rounded shrink-0 sm:shrink"
                  />

                  <h1 className="text-[#404145] font-bold text-[17px]">
                    I will develop mobile app android ios using reactnative
                    cross platform
                  </h1>
                </div>
                <div className="border-gray-300 border-solid border-b-[1px]"></div>
                <Accordion allowToggle={true}>
                  <AccordionItem className="border-none">
                    {({ isDisabled }) => (
                      <>
                        <h2 className="text-sm font-bold">
                          <AccordionButton>
                            <span>Features</span>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <div className=" flex gap-5 flex-col">
                            {["1", "2", "3"].map((c, index) => {
                              return <span key={index}>{c}</span>;
                            })}
                          </div>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
                <div className="border-gray-300 border-solid border-b-[1px]"></div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">Service Fee's</span>{" "}
                  <span className="text-sm">5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">Total Delivery Time</span>
                  <span>5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">Total </span>
                  <span className="text-sm">PKR</span>
                </div>
                <div className="border-gray-300 border-solid border-b-[1px]"></div>
                <button className="hover:bg-black transition-all duration-300 ease-in hover:scale-105 px-[20px] py-[10px] w-full bg-green-600 text-white text-lg font-bold rounded">
                  Confirm Pay
                </button>
                <p className="text-[#62646A]   text-sm pb-2 flex items-center justify-center gap-2">
                  <SiHiveBlockchain className="text-blue-700" /> Secured by
                  Blockchain
                </p>
              </div>
            </div>
          </div>
          <p className=" w-full hidden sm:inline-block tracking-wider border-t-[1px] border-b-[1px] border-gray-300 border-solid text-sm  p-5 text-[#62646A] ">
          Payments are processed by Blockchain Ethreum Ltd., SkillMesh Limited
        </p>
        </div>
       
      </div>
    </>
  );
}

export default Payment;
