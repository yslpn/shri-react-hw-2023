import React from "react";

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
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };

  return (
    <label className="flex flex-col">
      {label}
      <select className="mt-1 mb-4 py-2 px-4 rounded-lg border" name={name} value={value} onChange={handleSelectChange}>
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
