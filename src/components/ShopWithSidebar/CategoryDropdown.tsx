"use client";

import { useState } from "react";

interface CategoryItemProps {
  category: {
    id: number;
    name: string;
    products: number;
    isRefined: boolean;
  };
  isSelected: boolean;
  onToggle: () => void;
}

const CategoryItem = ({ category, isSelected, onToggle }: CategoryItemProps) => {
  return (
    <button
      type="button"
      className={`group flex w-full items-center justify-between transition-colors duration-150 ${
        isSelected ? "text-ink" : "text-dark-4 hover:text-ink"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-2">
        <div
          className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded border-2 ${
            isSelected
              ? "border-ink bg-green-600"
              : "border-ink bg-white"
          }`}
        >
          <svg
            className={isSelected ? "block" : "hidden"}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="text-sm font-medium">{category.name}</span>
      </div>

      <span
        className={`inline-flex rounded-brutal border-2 border-ink px-2 py-0.5 text-xs font-bold transition-all duration-150 ${
          isSelected
            ? "bg-sunny-yellow text-ink"
            : "bg-cream text-ink group-hover:bg-sunny-yellow"
        }`}
      >
        {category.products}
      </span>
    </button>
  );
};

interface CategoryDropdownProps {
  categories: Array<{
    id: number;
    slug: string;
    name: string;
    products: number;
    isRefined: boolean;
  }>;
  selectedCategories: number[];
  onCategoryChange: (categoryIds: number[]) => void;
}

const CategoryDropdown = ({
  categories,
  selectedCategories,
  onCategoryChange,
}: CategoryDropdownProps) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const handleCategoryToggle = (categoryId: number) => {
    const isSelected = selectedCategories.includes(categoryId);

    if (isSelected) {
      onCategoryChange(selectedCategories.filter((id) => id !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal-sm">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className="flex cursor-pointer items-center justify-between border-b-2 border-ink bg-sunny-yellow px-5 py-3.5"
      >
        <p className="text-2xs font-bold uppercase tracking-widest text-ink">
          Category
        </p>
        <button
          type="button"
          aria-label="button for category dropdown"
          className={`text-ink ease-out duration-200 ${
            toggleDropdown && "rotate-180"
          }`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`flex-col gap-3 px-5 py-4 ${
          toggleDropdown ? "flex" : "hidden"
        }`}
      >
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <CategoryItem
              key={category.id}
              category={category}
              isSelected={isSelected}
              onToggle={() => handleCategoryToggle(category.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropdown;
