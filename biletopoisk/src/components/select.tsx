import React, { useState, useEffect } from "react";

type Option = {
  value: string;
  label: string;
};

type ControlledSelectProps = {
  name: string;
  label: string;
  emptyLabel: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<ControlledSelectProps> = ({
  name,
  label,
  emptyLabel,
  options,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onChange(event);
  };

  return (
    <label className="flex flex-col">
      {label}
      <select name={name} value={selectedValue} onChange={handleSelectChange}>
        <option value={""}>{emptyLabel}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </label>
  );
};
