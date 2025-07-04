import React, { useState, useEffect } from "react";
import { mockProducts } from "../utils/mockData";
import { ProductCard } from "../components/ProductCard";
import { FilterSidebar } from "../components/FilterSidebar";
import FilterBar from "../components/FilterBar";

export default function Shop() {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [filters, setFilters] = useState({
    customizable: false,
    category: "all",
    priceRange: [0, 200],
    inStock: false,
  });
  const [sortBy, setSortBy] = useState("recommended");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let filtered = [...products];
    if (filters.customizable) {
      filtered = filtered.filter((product) => product.isNew);
    }

    if (filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleToggleLike = (productId) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isLiked: !product.isLiked }
          : product
      )
    );
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
    if (window.innerWidth < 1024) {
      setIsFilterOpen(!isFilterOpen);
    }
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="text-center mb-6 sm:mb-8 lg:mb-12 mt-4 sm:mt-6 lg:mt-8">
        <h1 className="font-simplon text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#252020] mb-3 sm:mb-4 lg:mb-6 tracking-wider px-2 sm:px-4">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-[#252020] mx-auto leading-6 sm:leading-8 lg:leading-10 px-4 sm:px-6 lg:px-8 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <FilterBar
        sortBy={sortBy}
        onSortChange={handleSortChange}
        isFilterVisible={isFilterVisible}
        onToggleFilter={toggleFilterVisibility}
        itemCount={filteredProducts.length}
      />

      <div className="mt-4 sm:mt-6">
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <div className="lg:hidden">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            isVisible={true}
          />
        </div>

        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleLike={handleToggleLike}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <div className="max-w-md mx-auto px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Try adjusting your filters or search criteria.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleLike={handleToggleLike}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <div className="max-w-md mx-auto px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  Try adjusting your filters or search criteria.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <div
            className={`flex ${
              filteredProducts.length <= 3
                ? "min-h-[calc(100vh-300px)]"
                : ""
            }`}
          >
            <div
              className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                isFilterVisible
                  ? "w-56 xl:w-64 2xl:w-72 opacity-100 transform translate-x-0"
                  : "w-0 opacity-0 transform -translate-x-full overflow-hidden"
              }`}
            >
              <div className="h-full">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  isOpen={false}
                  onClose={() => setIsFilterOpen(false)}
                  isVisible={isFilterVisible}
                  productCount={filteredProducts.length}
                />
              </div>
            </div>

            <div
              className={`flex-1 transition-all duration-500 ease-in-out ${
                isFilterVisible ? "pl-3 xl:pl-4 2xl:pl-6" : "pl-0"
              }`}
            >
              <div
                className={`grid gap-3 xl:gap-4 2xl:gap-6 transition-all duration-500 ease-in-out h-full ${
                  isFilterVisible
                    ? "grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3"
                    : "grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onToggleLike={handleToggleLike}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-8 sm:py-12 lg:py-16 h-full flex items-center justify-center">
                  <div className="max-w-md mx-auto px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base">
                      Try adjusting your filters or search criteria.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}