import React from "react";

export default function RadioCardGroup({
  label,
  options,
  selectedValueId,
  // setSelectedValue,
  onChange,
  name = "radio-group",
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-700">{label}</p>
      <div className="flex gap-3">
        {options.map((option) => (
          <label
            key={option.id}
            className={`flex-1 cursor-pointer rounded-lg border p-2 transition-all duration-200 ${
              selectedValueId === option.id
                ? `ring-2 ring-offset-1 ${option.ringColor} ${option.bgColor} ${option.borderColor}`
                : `${option.ringColor} ${option.bgColor} ${option.borderColor} ${option.borderWidth}`
            }`}
          >
            <div className="flex items-start gap-2">
              <input
                type="radio"
                id={option.id}
                name={name}
                value={option.title}
                checked={selectedValueId === option.id}
                // onClick={() => {setSelectedValue(option.id); console.log("option.id", option.id)} }
                // onChange={e => {onChange(e.target.value); console.log("e.target.value", e.target.value)} }
                onChange={() => onChange(name, option.id, option.title)}
                
              />
              <div>
                <div className="text-sm font-medium">
                  {option.icon}
                </div>
                <div className="text-xs sm:text-sm font-medium my-2">
                  {option.title}
                  </div>
                <div className="text-[10px] text-gray-700 mb-1">{option.description1}</div>
                <div className="text-[10px] text-gray-700">{option.description}</div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
