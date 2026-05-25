import React, { useState, useEffect, useRef } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({ options, selectedValue, onChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((opt) => opt.value === selectedValue) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOptionClick = (option: SelectOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative shrink-0" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex min-w-[160px] items-center justify-between gap-3 rounded-brutal border-2 border-ink bg-white px-3.5 py-2 text-sm font-bold text-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:min-w-[180px]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="truncate">{selectedOption.label}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-ink transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1.5 min-w-full overflow-hidden rounded-brutal border-2 border-ink bg-white py-1 shadow-brutal"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedOption.value === option.value}
            >
              <button
                type="button"
                onClick={() => handleOptionClick(option)}
                className={`w-full px-3.5 py-2 text-left text-sm font-medium transition-colors hover:bg-cream ${
                  selectedOption.value === option.value
                    ? "bg-sunny-yellow font-bold text-ink"
                    : "text-dark-4"
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
