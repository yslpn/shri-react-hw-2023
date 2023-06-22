import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  name: string;
  label: string;
  emptyLabel: string;
  options: Option[];
  value: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({
  name,
  label,
  emptyLabel,
  options,
  value,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const optionsWrapperRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const toggleButtonRect = toggleButtonRef.current?.getBoundingClientRect();

  const currentOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  const handleSelectChange = (value: string) => {
    const fakeEvent = {
      target: {
        value,
        name,
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(fakeEvent);
    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      optionsWrapperRef.current &&
      !optionsWrapperRef.current.contains(event.target as Node) &&
      selectWrapperRef.current &&
      !selectWrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={selectWrapperRef}>
      <label className="flex flex-col">{label}</label>
      <button
        className="flex justify-between items-center w-full mt-1 mb-4 py-2 px-4 rounded-lg border border-gray-lighter cursor-pointer transition hover:border-orange"
        onClick={() => setIsOpen(s => !s)}
        ref={toggleButtonRef}
      >
        {currentOption?.label || (
          <span className="text-gray-light">{emptyLabel}</span>
        )}
        <svg
          className={`transition ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
        >
          <path
            fill="#999FA6"
            fillRule="evenodd"
            d="M7.5 18.958h5c4.525 0 6.458-1.933 6.458-6.458v-5c0-4.525-1.933-6.458-6.458-6.458h-5c-4.525 0-6.458 1.933-6.458 6.458v5c0 4.525 1.933 6.458 6.458 6.458ZM2.292 7.5c0-3.842 1.366-5.208 5.208-5.208h5c3.842 0 5.208 1.366 5.208 5.208v5c0 3.842-1.366 5.208-5.208 5.208h-5c-3.842 0-5.208-1.366-5.208-5.208v-5Zm7.266 4.742a.618.618 0 0 0 .442.183.618.618 0 0 0 .442-.183L13.383 9.3a.629.629 0 0 0 0-.883.629.629 0 0 0-.883 0l-2.5 2.5-2.5-2.5a.629.629 0 0 0-.883 0 .629.629 0 0 0 0 .883l2.941 2.942Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen &&
        createPortal(
          <div
            ref={optionsWrapperRef}
            className={`fixed drop-shadow-md rounded-lg bg-white z-10`}
            style={{
              top: toggleButtonRect?.bottom ?? 0,
              left: toggleButtonRect?.left ?? 0,
              width: toggleButtonRect?.width ?? 0,
            }}
          >
            <button
              className="flex w-full py-2 px-4 cursor-pointer hover:bg-gray-200 transition hover:text-orange"
              onClick={() => handleSelectChange("")}
              ref={firstButtonRef}
            >
              Не выбрано
            </button>
            {options.map((option) => {
              return (
                <button
                  key={option.value}
                  className="flex w-full py-2 px-4 cursor-pointer hover:bg-gray-200 transition hover:text-orange"
                  onClick={() => handleSelectChange(option.value)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
};
