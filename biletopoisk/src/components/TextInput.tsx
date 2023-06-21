import React from "react";

type ControlledSelectProps = {
  name: string;
  label: string;
  emptyLabel: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: React.FC<ControlledSelectProps> = ({
  name,
  label,
  emptyLabel,
  value,
  type,
  onChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <label className="flex flex-col">
      {label}
      <input
        name={name}
        className="mt-1 mb-4 py-2 px-4 rounded-lg border-gray-lighter border"
        type={type}
        placeholder={emptyLabel}
        value={value}
        onChange={handleSelectChange}
        autoComplete="off"
        
      />
    </label>
  );
};