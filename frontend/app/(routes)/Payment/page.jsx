"use client";
import React from "react";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

function Payment() {
  const steps = [
    { title: "Order Details", description: "Contact Info" },
    { title: "Confirm & Pay", description: "Date & Time" },
    { title: "Submit Requirement", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 3,
    count: steps.length,
  });

  return (
    <>
      <div className=" min-h-screen bg-white  shadow-sm">
        <div className="2xl:w-[1400px]">
          <div className="   p-5 flex items-center gap-6 border-solid border-gray-300 border-b-[1px]">
            <h1 className="text-[#404145]  text-3xl font-bold">
              SkillMesh.
            </h1>
            <div className=" w-full">
              <Stepper
                size="md"
                width={"xl"}
                index={activeStep}
                colorScheme="whatsapp"
                
                
              >
                {steps.map((step, index) => (
                  <Step key={index} >
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>

                    <Box flexShrink="0">
                      <StepTitle >{step.title}</StepTitle>
                    </Box>

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

export default Payment;
