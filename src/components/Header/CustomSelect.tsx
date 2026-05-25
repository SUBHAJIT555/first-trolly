"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface CustomSelectProps {
  options: Array<{ label: string; value: string }>;
  onSelectChange?: (value: string) => void;
}

const CustomSelect = ({ options, onSelectChange }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updateMenuPosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setMenuStyle({
      position: "fixed",
      top: rect.bottom + 6,
      left: rect.left,
      width: Math.max(rect.width, 220),
      zIndex: 100001,
    });
  };

  const openDropdown = () => {
    updateMenuPosition();
    setIsOpen(true);
  };

  const closeDropdown = () => setIsOpen(false);

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const handleOptionClick = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    onSelectChange?.(option.value);
    closeDropdown();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      closeDropdown();
    };

    const handleReposition = () => updateMenuPosition();

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (options[0] && !options.find((o) => o.value === selectedOption.value)) {
      setSelectedOption(options[0]);
    }
  }, [options, selectedOption.value]);

  const dropdownMenu =
    isOpen &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        ref={menuRef}
        style={menuStyle}
        className="max-h-[280px] overflow-y-auto rounded-brutal border-2 border-ink bg-white py-1.5 shadow-brutal"
        role="listbox"
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="option"
            aria-selected={selectedOption.value === option.value}
            onClick={() => handleOptionClick(option)}
            className={`block w-full cursor-pointer px-4 py-2.5 text-left text-custom-sm font-medium transition-colors hover:bg-cream ${
              selectedOption.value === option.value
                ? "bg-cream font-bold text-green-600"
                : "text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>,
      document.body
    );

  return (
    <div className="header-search-select relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex w-full min-w-[130px] max-w-[165px] items-center justify-between gap-2 rounded-l-brutal bg-white py-2.5 pl-3.5 pr-3 text-left text-custom-sm font-semibold text-ink transition-colors hover:bg-cream sm:min-w-[150px] sm:max-w-[180px] ${
          isOpen ? "bg-cream" : ""
        }`}
      >
        <span className="truncate">{selectedOption.label}</span>
        <svg
          className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {dropdownMenu}
    </div>
  );
};

export default CustomSelect;
