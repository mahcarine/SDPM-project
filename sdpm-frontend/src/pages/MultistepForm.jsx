import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessValue from "./steps/BusinessValue";
import EngineeringEffort from "./steps/EngineeringEffort";
import FinancialImpact from "./steps/FinancialImpact";
import SecurityCompliance from "./steps/SecurityCompliance";
import CompetitiveAdvantage from "./steps/CompetitiveAdvantage";
import CriticalPriority from "./CriticalPriority";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faDollar } from "@fortawesome/free-solid-svg-icons";
import {
  faChartLine,
  faCode,
  faDollarSign,
  faShieldAlt,
  faTrophy,
  faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";


const steps1 = [
  {
    title: "What's the business value?",
    description: "How big of an impact will this deliverable have?",
    icon: faChartLine,
  },
  {
    title: "How complex is this deliverable?",
    description: "Estimate how much engineering time this will take?",
    icon: faChartLine,
  },
  {
    title: "What's the financial impact of this deliverable?",
    description: "Estimate how this deliverable will impact revenue and cost",
    icon: faChartLine,
  },
  {
    title: "How secure and compliant is this deliverable?",
    description:
      "Evaluate the level of security and compliance this deliverable requires",
    icon: faChartLine,
  },
  {
    title: "Will this deliverable give us a competitive advantage?",
    description:
      "Evaluate the level of security and compliance this deliverable requires?",
    icon: faChartLine,
  },
  {
    title: "Summary of your Assessment?",
    description: "Here's a quick review before submission",
    icon: faChartLine,
  },
];

const steps2 = [
  { label: "Business Value", icon: faChartLine, color: "bg-blue-500" },
  { label: "Engineering Effort", icon: faCode, color: "bg-purple-400" },
  { label: "Financial Impact", icon: faDollarSign, color: "bg-indigo-400" },
  { label: "Security & Compliance", icon: faShieldAlt, color: "bg-teal-400" },
  { label: "Competitive Advantage", icon: faTrophy, color: "bg-orange-400" },
  { label: "Summary", icon: faFlagCheckered, color: "bg-pink-400" },
];

export default function StepLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImpact, setSelectedImpact] = useState("");
  const navigate = useNavigate();

  
  const stepContent = [
    <BusinessValue
      selectedImpact={selectedImpact}
      setSelectedImpact={setSelectedImpact}
    />,
    <EngineeringEffort
      selectedImpact={selectedImpact}
      setSelectedImpact={setSelectedImpact}
    />,
    <FinancialImpact
      selectedImpact={selectedImpact}
      setSelectedImpact={setSelectedImpact}
    />,
    <SecurityCompliance
      selectedImpact={selectedImpact}
      setSelectedImpact={setSelectedImpact}
    />,
    <CompetitiveAdvantage
      selectedImpact={selectedImpact}
      setSelectedImpact={setSelectedImpact}
    />,
  ];

  const next = () =>
    setCurrentStep((prev) =>
      Math.min(prev + 1, steps2.length - 1, steps1.length - 1)
    );
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen mx-auto bg-blue-50">
      {/* Step Navigation */}
      <div className="w-full bg-white p-2 shadow-lg">
        {/* Progress Bar */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl bg-gray-200 h-1 rounded mb-2">
            <div
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded h-full transition-all duration-300"
              style={{ width: `${(currentStep / (steps2.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          {steps2.map((step, index) => (
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
                    ? "text-blue-500 font-bold"
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
      <div className="mx-auto p-6 rounded-md mt-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xl mx-auto flex flex-col items-center bg-blue-600 mb-6 p-4 text-white rounded-md">
            <div className="font-bold text-md ">
              <FontAwesomeIcon
                icon={steps1[currentStep].icon}
                className="mr-2"
              />
              {steps1[currentStep].title}
            </div>
            <div className="text-xs">{steps1[currentStep].description}</div>
          </div>

          {currentStep < steps2.length - 1 ? (
             <div className="max-w-2xl border border-blue-700 rounded-md p-6">
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
                 disabled={currentStep === steps2.length - 1}
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
          ) : (
            <div className="max-w-2xl border border-blue-700 rounded-md px-12 py-6">
              <div className="w-full min-w-sm grid grid-rows-5 gap-3 mb-10">
                <div className="flex justify-between items-center bg-white p-4 text-xs rounded-md shadow-2xs">
                  <div>
                    <p className="mb-1">Business Value</p>
                    <p className="text-green-600">High Impact</p>
                  </div>
                  <FontAwesomeIcon
                   icon={faChartLine}
                   className="text-green-500 pl-2"
                 />
                </div>
                <div className="flex justify-between items-center bg-white p-4 text-xs rounded-md shadow-2xs">
                <div>
                    <p className="mb-1">Engineering Effort</p>
                    <p className="text-orange-600">Medium Effort</p>
                  </div>
                  <FontAwesomeIcon
                   icon={faCode}
                   className="text-orange-500 pl-2"
                 />
                </div>
                <div className="flex justify-between items-center bg-white p-4 text-xs rounded-md shadow-2xs">
                <div>
                    <p className="mb-1">Financial Impact</p>
                    <p className="text-blue-600">High Gain/Low Loss</p>
                  </div>
                  <FontAwesomeIcon
                   icon={faDollarSign}
                   className="text-blue-500 pl-2"
                 />
                </div>
                <div className="flex justify-between items-center bg-white p-4 text-xs rounded-md shadow-2xs">
                <div>
                    <p className="mb-1">Security and Compliance</p>
                    <p className="text-red-600">Critical Requirement</p>
                  </div>
                  <FontAwesomeIcon
                   icon={faShieldAlt}
                   className="text-red-500 pl-2"
                 />
                </div>
                <div className="flex justify-between items-center bg-white p-4 text-xs rounded-md shadow-2xs">
                <div>
                    <p className="mb-1">Competitive Advantage</p>
                    <p className="text-purple-600">Major Advantage</p>
                  </div>
                  <FontAwesomeIcon
                   icon={faTrophy}
                   className="text-purple-500 pl-2"
                 />
                </div>
              </div>
              {/* Summary content goes here */}
              <div className="w-40 flex flex-col justify-center text-sm text-gray-600">
              <button
                 onClick={() => navigate("/criticalpriority")}
                 className="px-2 py-1 my-2 text-white text-xs bg-blue-600 rounded-sm border border-blue-600 cursor-pointer"
               >
                 Submit Assessment
               </button>
               <button
                 onClick={prev}
                 className="px-2 py-1 my-2 text-black text-xs rounded-sm border border-blue-600 disabled:opacity-50"
               >
                 Edit Previous Steps
               </button>
               <button
                 onClick={prev}
                 disabled={currentStep === 0}
                 className="px-2 py-1 text-black text-xs rounded-sm border border-blue-600 disabled:opacity-50"
               >
                 Cancel
               </button>
              </div>
            </div>
          )}
         
        </div>
      </div>
    </div>
  );
}
