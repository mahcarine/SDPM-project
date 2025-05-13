import { useState } from "react";
import RadioCardGroup from "../../components/RadioOptions";

export default function SecurityCompliance({ selectedImpact, setSelectedImpact }) {
  const impactOptions = [
    {
        id: "high",
        icon: "🚀",
        title: "Critical Requirement",
        description: "Essential for security or regulatory compliance. Must meet strict guidelines.",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        borderWidth: "border-2",
        ringColor: "ring-green-100",
      },
      {
        id: "medium",
        icon: "⚖️",
        title: "Moderate Importance",
        description: "Important but flexible. Compliance is required but not urgent.",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        borderWidth: "border-2",
        ringColor: "ring-orange-100",
      },
      {
        id: "low",
        icon: "🌿",
        title: "Low Priority",
        description: "Security and compliance are not critical for the deliverable",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        borderWidth: "border-2",
        ringColor: "ring-blue-100",
      },
  ];

  return (
    <RadioCardGroup
    label="Select the level that accuately reflects the security and compliance needs of this deliverable."
    options={impactOptions}
    selectedValue={selectedImpact}
    setSelectedValue={setSelectedImpact}
    name="impact"
  />
  );
}
