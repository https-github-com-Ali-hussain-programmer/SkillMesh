"use client";
import React, { useContext } from "react";
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
} from "@chakra-ui/react";
import Link from "next/link";
import { FormContext } from "../../context/Form";

function StepperForm() {
  const { activeStep } = useContext(FormContext);
  const steps = [
    { title: "Order Details" },
    { title: "Submit Requirement" },
    { title: "Confirm & Pay" },
  ];
  return (
    <>
      <div className="  bg-white">
        <div className="flex flex-col gap-2 sm:gap-5 justify-center ">
          <div className=" px-12 py-5  flex items-center gap-6 border-solid border-gray-300 border-b-[1px]">
            <h1 className="text-[#404145]  text-4xl font-bold">
              {" "}
              <Link href="/">SkillMesh.</Link>
            </h1>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default StepperForm;
