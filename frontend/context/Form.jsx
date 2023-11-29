"use client"
import React, { createContext } from "react";
import { useSteps } from "@chakra-ui/react";

export const FormContext = createContext();
const steps = [
  { title: "Order Details" },
  { title: "Submit Requirement" },
  { title: "Confirm & Pay" },
];
function FormProvider({ children }) {
 

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length
  });

  const context = {
    activeStep,
    setActiveStep,
  };

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
