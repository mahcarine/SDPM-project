import { useState } from "react";
import RadioCardGroup from "../../components/RadioOptions";

export default function CompetitiveAdvantage({ data, onChange }) {
  const impactOptions = [
    {
        id: "13",
        icon: "🚀",
        title: "Major Advantage",
        description: "Puts us significantly ahead of competitors. A true market leader.",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        borderWidth: "border-2",
        ringColor: "ring-green-100",
      },
      {
        id: "14",
        icon: "⚖️",
        title: "Moderate Advantage",
        description: "Provides a noticeable but not groundbreaking advantage.",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200",
        borderWidth: "border-2",
        ringColor: "ring-orange-100",
      },
      {
        id: "15",
        icon: "🌿",
        title: "No Advantage",
        description: "Neutral. Doesn't significantly impact our market position.",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        borderWidth: "border-2",
        ringColor: "ring-blue-100",
      },
  ];

  return (
    <RadioCardGroup
    label="Choose how much this deliverable will help us stand out in the market."
    options={impactOptions}
    selectedValueId={data.competitiveAdvantage.id}
    // setSelectedValue={setSelectedImpact}
    name="competitiveAdvantage"
    onChange={onChange}
  />
  );
}
