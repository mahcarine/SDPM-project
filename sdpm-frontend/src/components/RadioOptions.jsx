import React from "react";

export default function RadioCardGroup({
  label,
  options,
  selectedValue,
  setSelectedValue,
  name = "radio-group",
}) {
  return (
    <div className="space-y-4">
      {label && <p className="text-sm text-gray-700">{label}</p>}
      <div className="flex gap-3">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className={`flex-1 cursor-pointer rounded-lg border p-2 transition-all duration-200 ${
              selectedValue === option.id
                ? `ring-2 ring-offset-1 ${option.ringColor} ${option.bgColor} ${option.borderColor}`
                : `${option.ringColor} ${option.bgColor} ${option.borderColor} ${option.borderWidth} hover:border-gray-200`
            }`}
          >
            <div className="flex items-start gap-2">
              <input
                type="radio"
                id={option.id}
                name={name}
                value={option.id}
                checked={selectedValue === option.id}
                onChange={() => setSelectedValue(option.id)}
                className="mt-1"
              />
              <div>
                <div className="text-sm font-medium">
                  {option.icon}
                </div>
                <div className="text-sm font-medium my-2">
                  {option.title}
                  </div>
                <div className="text-xs text-gray-600">{option.description}</div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
