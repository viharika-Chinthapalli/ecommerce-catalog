import React, { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

export const FilterBar = ({
  sortBy,
  onSortChange,
  isFilterVisible,
  onToggleFilter,
  itemCount = 3425,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortOptions = [
    { display: "RECOMMENDED", value: "recommended" },
    { display: "NEWEST FIRST", value: "newest" },
    { display: "MOST POPULAR", value: "popular" },
    { display: "PRICE: HIGH TO LOW", value: "price-high" },
    { display: "PRICE: LOW TO HIGH", value: "price-low" },
  ];

  const handleSortSelect = (option) => {
    onSortChange(option.value);
    setIsDropdownOpen(false);
  };

  const currentSortDisplay =
    sortOptions.find((option) => option.value === sortBy)?.display ||
    "RECOMMENDED";

  const CheckIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <div className="hidden lg:flex items-center justify-between py-10 border-b border-[#E5E5E5] border-t">
        <div className="flex items-center space-x-6">
          <span className="font-simplon text-black font-bold text-lg">
            {itemCount} ITEMS
          </span>

          <button
            onClick={onToggleFilter}
            className="flex items-baseline gap-2 transition-colors duration-200"
          >
            <img
              src={isFilterVisible ? arrowLeft : arrowRight}
              alt={isFilterVisible ? "hide filter" : "show filter"}
              className="w-4 h-4 object-contain self-center"
            />
            <span className="font-caslon text-[#888792] font-medium text-lg tracking-wide underline translate-y-[3px]">
              {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-black font-bold"
          >
            <span className="font-simplon uppercase tracking-wide text-lg">
              {currentSortDisplay}
            </span>
            <img
              src={arrowLeft}
              alt="dropdown arrow"
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-90" : "-rotate-90"
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="font-simplon absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn">
              <div className="py-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortSelect(option)}
                    className={`w-full flex items-center px-4 py-3 text-lg font-sm uppercase tracking-wide hover:bg-gray-50 transition-colors duration-200 ${
                      currentSortDisplay === option.display
                        ? "text-black font-bold"
                        : "text-[#252020]"
                    }`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 mr-2 flex-shrink-0">
                      {currentSortDisplay === option.display && <CheckIcon />}
                    </div>
                    <span className="flex-1 text-left">{option.display}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex lg:hidden items-center justify-between py-8 border-b border-[#E5E5E5] border-t px-4">
        <div className="flex items-center space-x-6">
          <span className="font-simplon text-black font-bold text-lg">
            {itemCount} ITEMS
          </span>

          <button
            onClick={onToggleFilter}
            className="flex items-center gap-2 transition-colors duration-200"
          >
            <span className="font-caslon text-[#888792] font-medium text-lg uppercase tracking-wide underline">
              FILTER
            </span>
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-black font-bold"
          >
            <span className="font-simplon uppercase tracking-wide text-lg">
              {currentSortDisplay}
            </span>
            <img
              src={arrowLeft}
              alt="dropdown arrow"
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-90" : "-rotate-90"
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="font-simplon absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn">
              <div className="py-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortSelect(option)}
                    className={`w-full flex items-center px-4 py-3 text-lg font-sm uppercase tracking-wide hover:bg-gray-50 transition-colors duration-200 ${
                      currentSortDisplay === option.display
                        ? "text-black font-bold"
                        : "text-[#252020]"
                    }`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 mr-2 flex-shrink-0">
                      {currentSortDisplay === option.display && <CheckIcon />}
                    </div>
                    <span className="flex-1 text-left">{option.display}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center py-6 border-b border-[#E5E5E5] border-t px-4">
        <div className="flex-1 flex items-center justify-center">
          <button
            onClick={onToggleFilter}
            className="flex items-center gap-2 transition-colors duration-200"
          >
            <span className="font-simplon font-bold text-m uppercase tracking-wide">
              FILTER
            </span>
          </button>
        </div>

        <div className="w-px h-8 bg-[#E5E5E5] mx-4"></div>

        <div className="flex-1 flex items-center justify-center relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-black font-bold"
          >
            <span className="font-simplon uppercase tracking-wide text-base">
              {currentSortDisplay}
            </span>
            <img
              src={arrowLeft}
              alt="dropdown arrow"
              className={`w-3 h-3 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-90" : "-rotate-90"
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="font-simplon absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeIn">
              <div className="py-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortSelect(option)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-sm uppercase tracking-wide hover:bg-gray-50 transition-colors duration-200 ${
                      currentSortDisplay === option.display
                        ? "text-black font-bold"
                        : "text-[#252020]"
                    }`}
                  >
                    <div className="flex items-center justify-center w-5 h-5 mr-2 flex-shrink-0">
                      {currentSortDisplay === option.display && <CheckIcon />}
                    </div>
                    <span className="flex-1 text-left">{option.display}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
