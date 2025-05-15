import { useState } from "react";
import RadioCardGroup from "../../components/RadioOptions";

export default function EngineeringEffort({ data, onChange }) {
  const impactOptions = [
    {
        id: "4",
        icon: "🚀",
        title: "Low Effort",
        description1: "<80 Hours ",
        description: "Quick and easy, minimal resources required",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        borderWidth: "border-2",
        ringColor: "ring-green-100",
      },
      {
        id: "5",
        icon: "⚖️",
        title: "Medium Effort",
        description1: "80-320 Hours ",
        description: "Manageable but requires steady focus",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        borderWidth: "border-2",
        ringColor: "ring-orange-100",
      },
      {
        id: "6",
        icon: "🌿",
        title: "High Effort",
        description1: ">320 Hours ",
        description: "Complex and time consuming, requires significant planning",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        borderWidth: "border-2",
        ringColor: "ring-blue-100",
      },
  ];

  return (
    <RadioCardGroup
    label="Choose the effort level that matches the deliverable."
    options={impactOptions}
    selectedValueId={data.engineeringEffort.id}
    // setSelectedValue={setSelectedImpact}
    name="engineeringEffort"
    // onChange={selectedImpact => {onChange("engineeringEffort", selectedImpact); console.log("engineeringEffort", selectedImpact)} }
    onChange={onChange}
  />
  );
}
