import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import FinalStep from "./FinalStep";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Final form data is available here
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      {step === 1 && <StepOne data={formData} onChange={handleChange} onNext={handleNext} />}
      {step === 2 && <StepTwo data={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <FinalStep data={formData} onSubmit={handleSubmit} onBack={handleBack} />}
    </>
  );
};

export default MultiStepForm;


