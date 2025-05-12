import { useState } from "react";
import RadioCardGroup from "../../components/RadioOptions";

export default function StepAccount({ selectedImpact, setSelectedImpact }) {
  const impactOptions = [
    {
        id: "high",
        icon: "🚀",
        title: "High Impact",
        description: "Significant business value",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        borderWidth: "border-2",
        ringColor: "ring-green-100",
      },
      {
        id: "medium",
        icon: "⚖️",
        title: "Medium Impact",
        description: "Moderate business value",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        borderWidth: "border-2",
        ringColor: "ring-orange-100",
      },
      {
        id: "low",
        icon: "🌿",
        title: "Low Impact",
        description: "Minimal business value",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        borderWidth: "border-2",
        ringColor: "ring-blue-100",
      },
  ];

  return (
    <RadioCardGroup
    label="Choose the option that best fits."
    options={impactOptions}
    selectedValue={selectedImpact}
    setSelectedValue={setSelectedImpact}
    name="impact"
  />
  );
}
