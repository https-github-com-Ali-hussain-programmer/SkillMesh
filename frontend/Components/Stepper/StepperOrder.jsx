import React from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  useSteps,
} from "@chakra-ui/react";

const StepperOrder = () => {
  const steps = [
    { title: "Order Placed"},
    { title: "Requirmnet Submitted"},
    { title: "Order in Progress"},
    { title: "Review delivery"},
    { title: "Payment"},
  ];

  return (
    <div>
      {" "}
      <Stepper  orientation="vertical" height="250px" gap="0" colorScheme="whatsapp">
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
              <StepTitle className="text-gray-400">{step.title}</StepTitle>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperOrder;
