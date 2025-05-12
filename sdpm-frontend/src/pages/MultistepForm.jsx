import { useState } from "react";
import StepAccount from "./steps/BusinessValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faChartLine,
  faCode,
  faDollarSign,
  faShieldAlt,
  faTrophy,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  { label: "Business Value", icon: faChartLine, color: "bg-blue-500" },
  { label: "Engineering Effort", icon: faCode, color: "bg-purple-400" },
  { label: "Financial Impact", icon: faDollarSign, color: "bg-indigo-400" },
  { label: "Security & Compliance", icon: faShieldAlt, color: "bg-teal-400" },
  { label: "Competitive Advantage", icon: faTrophy, color: "bg-orange-400" },
  { label: "Summary", icon: faFlagCheckered, color: "bg-pink-400" },
];

const blueField = [
  "blue field 1",
  "blue field 2",
  "blue field 3",
  "blue field 4",
  "blue field 5",
  "blue field 6",
];
// Example step contents

const StepProfile = () => <p>This is the Profile step content.</p>;
const StepReview = () => <p>This is the Review step content.</p>;
const StepFinish = () => <p>You're all done. Thank you!</p>;

export default function StepLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImpact, setSelectedImpact] = useState("");

  const stepContent = [
    <StepAccount
      selectedImpact={selectedImpact}
      setSelectedImpact={setSelectedImpact}
    />,
    <StepProfile />,
    <StepReview />,
    <StepProfile />,
    <StepReview />,
    <StepFinish />,
  ];

  const next = () =>
    setCurrentStep((prev) =>
      Math.min(prev + 1, steps.length - 1, blueField.length - 1)
    );
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen mx-auto bg-blue-50">
      {/* Step Navigation */}
      <div className="w-full bg-white p-2 shadow-lg">
        {/* Progress Bar */}
        <div className="bg-gray-200 h-1 rounded mb-2">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded h-full transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-1 text-center"
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full mb-1 p-2 ${
                  index === currentStep
                    ? `${step.color} text-white shadow-lg`
                    : `${step.color} text-white`
                }`}
              >
                <FontAwesomeIcon icon={step.icon} className="text-xs" />
              </div>
              <span
                className={`text-xs ${
                  index === currentStep
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content Placeholder */}
      <div className="max-w-2xl mx-auto p-6 rounded-md mt-6">
        <div className="bg-blue-600 mb-6 p-4 rounded-md">
          <p>{blueField[currentStep]}</p>
        </div>
        <div className="border border-blue-700 rounded-md p-6">
          {/* 👇 Render dynamic content for each step */}
          <div className="mb-6 text-gray-700">{stepContent[currentStep]}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className="px-2 py-1 text-blue-700 text-xs rounded-sm border border-blue-500 disabled:opacity-50"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-blue-500 pr-2"
              />
              Back
            </button>
            <button
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="px-2 py-1 text-blue-700 text-xs rounded-sm border border-blue-500 disabled:opacity-50"
            >
              Next
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-blue-500 pl-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
