import { useState } from "react";
import RadioCardGroup from "../../components/RadioOptions";

export default function FinancialImpact({ data, onChange }) {
  const impactOptions = [
    {
        id: "7",
        icon: "🚀",
        title: "Low gain/High loss",
        description: "Minimal level opportunity but significant risk if delayed",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        borderWidth: "border-2",
        ringColor: "ring-green-100",
      },
      {
        id: "8",
        icon: "⚖️",
        title: "Medium gain/Medium loss",
        description: "Balanced outcome with moderate gains and risks",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        borderWidth: "border-2",
        ringColor: "ring-orange-100",
      },
      {
        id: "9",
        icon: "🌿",
        title: "High gain/Low loss",
        description: "Significant revenue potential with minimal risk",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        borderWidth: "border-2",
        ringColor: "ring-blue-100",
      },
  ];

  return (
    <RadioCardGroup
    label="Choose the option that best describes the balance of potential gains and risks for this deliverable."
    options={impactOptions}
    selectedValueId={data.financialImpact.id}
    // setSelectedValue={setSelectedImpact}
    name="financialImpact"
    onChange={onChange}
  />
  );
}
