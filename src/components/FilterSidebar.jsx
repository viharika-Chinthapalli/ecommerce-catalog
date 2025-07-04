import React, { useState } from "react";
import { X } from "lucide-react";
import arrowDown from "../assets/arrow-down.svg";
import arrowUp from "../assets/arrow-up.svg";

export const FilterSidebar = ({
  filters,
  onFilterChange,
  isOpen,
  onClose,
  isVisible,
  productCount = 0,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
  });

  const idealFor = ["All", "Men", "Women", "Baby & Kids"];
  const occasions = ["All", "Casual", "Formal", "Party"];
  const work = ["All"];
  const fabrics = ["All", "Cotton", "Silk", "Leather", "Synthetic"];
  const segment = ["All"];
  const suitableFor = ["All"];
  const rawMaterials = ["All"];
  const pattern = ["All"];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterSection = ({ title, items, sectionKey }) => {
    const isExpanded = expandedSections[sectionKey];

    return (
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full py-2 text-left hover:bg-gray-50 transition-colors duration-200 rounded px-2"
        >
          <h3 className="font-simplon font-bold text-[#252020] text-sm sm:text-base lg:text-lg uppercase tracking-wide">
            {title}
          </h3>
          <img
            src={isExpanded ? arrowUp : arrowDown}
            alt={isExpanded ? "collapse" : "expand"}
            className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300"
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="font-simplon text-sm sm:text-base lg:text-lg text-[#252020] mt-1 px-2">
            {items[0]}
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 mt-3 px-2">
            {sectionKey === "idealFor" && (
              <button className="font-simplon text-sm sm:text-base lg:text-lg text-[#BFC8CD] hover:text-blue-700 underline mb-2 transition-colors duration-200">
                Unselect all
              </button>
            )}
            {items.map((item, index) => (
              <label
                key={item}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded p-1 transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-2 border-black bg-white checked:bg-black checked:border-black focus:outline-none focus:ring-0 focus:ring-offset-0 appearance-none relative cursor-pointer transition-all duration-200 checked:after:content-['✓'] checked:after:absolute checked:after:top-0 checked:after:left-0.5 checked:after:text-white checked:after:text-xs checked:after:font-bold"
                />
                <span className="font-simplon text-sm sm:text-base lg:text-lg text-gray-700">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (!isVisible && !isOpen) return null;

  const shouldMatchHeight = productCount <= 3;

  return (
    <div
      className={`fixed md:static inset-y-0 left-0 z-30 w-80 sm:w-96 md:w-64 bg-white transform transition-all duration-500 ease-in-out shadow-xl md:shadow-none ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } ${isVisible ? "md:opacity-100" : "md:opacity-0"}`}
    >
      <div
        className={`h-full flex flex-col ${
          shouldMatchHeight
            ? "md:h-auto md:min-h-[calc(100vh-200px)]"
            : "md:h-auto"
        }`}
      >
        <div className="flex-shrink-0 pt-4 sm:pt-6 px-4 sm:px-6 md:px-0">
          <div className="flex items-center justify-between md:hidden border-b border-gray-200 pb-4 mb-4">
            <h2 className="font-simplon text-xl font-bold text-[#252020] uppercase tracking-wide">
              Filters
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div
          className={`flex-1 overflow-y-auto px-4 sm:px-6 md:px-0 pb-6 ${
            shouldMatchHeight ? "md:max-h-[calc(100vh-250px)]" : ""
          }`}
        >
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded p-2 transition-colors duration-200">
                <input
                  type="checkbox"
                  checked={filters?.customizable || false}
                  onChange={(e) =>
                    onFilterChange &&
                    onFilterChange("customizable", e.target.checked)
                  }
                  className="w-4 h-4 rounded border-2 border-black bg-white checked:bg-black checked:border-black focus:outline-none focus:ring-0 focus:ring-offset-0 appearance-none relative cursor-pointer transition-all duration-200 checked:after:content-['✓'] checked:after:absolute checked:after:top-0 checked:after:left-0.5 checked:after:text-white checked:after:text-xs checked:after:font-bold"
                />
                <span className="font-simplon text-[#252020] text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wide">
                  CUSTOMIZABLE
                </span>
              </label>
            </div>

            <FilterSection
              title="IDEAL FOR"
              items={idealFor}
              sectionKey="idealFor"
            />
            <FilterSection
              title="OCCASION"
              items={occasions}
              sectionKey="occasion"
            />
            <FilterSection title="WORK" items={work} sectionKey="work" />
            <FilterSection title="FABRIC" items={fabrics} sectionKey="fabric" />
            <FilterSection
              title="SEGMENT"
              items={segment}
              sectionKey="segment"
            />
            <FilterSection
              title="SUITABLE FOR"
              items={suitableFor}
              sectionKey="suitableFor"
            />
            <FilterSection
              title="RAW MATERIALS"
              items={rawMaterials}
              sectionKey="rawMaterials"
            />
            <FilterSection
              title="PATTERN"
              items={pattern}
              sectionKey="pattern"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
