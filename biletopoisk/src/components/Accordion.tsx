"use client";

import React, { useState } from "react";

export const Accordion = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((s) => !s);
  };

  return (
    <details
      className="p-6 bg-white rounded-lg"
      open={isOpen}
      onToggle={toggleAccordion}
    >
      <summary className="flex justify-between list-none text-2xl cursor-pointer transition hover:text-orange">
        {title}
        <svg
          className={`transition ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11 29.333h8c7.24 0 10.333-3.093 10.333-10.333v-8C29.333 3.76 26.24.667 19 .667h-8C3.76.667.667 3.76.667 11v8C.667 26.24 3.76 29.333 11 29.333ZM2.667 11c0-6.147 2.186-8.333 8.333-8.333h8c6.147 0 8.333 2.186 8.333 8.333v8c0 6.147-2.186 8.333-8.333 8.333h-8c-6.147 0-8.333-2.186-8.333-8.333v-8Zm11.626 7.587c.2.2.454.293.707.293a.989.989 0 0 0 .707-.293l4.706-4.707a1.006 1.006 0 0 0 0-1.413 1.006 1.006 0 0 0-1.413 0l-4 4-4-4a1.006 1.006 0 0 0-1.413 0 1.006 1.006 0 0 0 0 1.413l4.706 4.707Z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <p className="mt-4">{description}</p>
    </details>
  );
};
