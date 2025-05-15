import { useState } from "react";
import RadioCardGroup from "../../components/RadioOptions";

export default function BusinessValue({ data,  onChange }) {
  const impactOptions = [
    {
        id: "1",
        icon: "🚀",
        title: "High Impact",
        description: "Significant business value",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        borderWidth: "border-2",
        ringColor: "ring-green-100",
      },
      {
        id: "2",
        icon: "⚖️",
        title: "Medium Impact",
        description: "Moderate business value",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        borderWidth: "border-2",
        ringColor: "ring-orange-100",
      },
      {
        id: "3",
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
    selectedValueId={data.businessValue.id}
    // setSelectedValue={setSelectedImpact}
    name="businessValue"
    // onChange={selectedImpact => {onChange("businessValue", data.businessValue.value); console.log("businessValue",  data.businessValue.value)} }
    onChange={onChange}
  />
  );
}
