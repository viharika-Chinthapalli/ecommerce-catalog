import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../assets/Logo.svg";
import searchIcon from "../assets/search-normal.svg";
import profileIcon from "../assets/profile.svg";
import heartIcon from "../assets/heart.svg";
import arrowDown from "../assets/arrow-up.svg";
import shoppingBagIcon from "../assets/shopping-bag.svg";

export const Header = ({ onMenuToggle, isMenuOpen }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[#E5E5E5]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={LogoIcon} className="w-6 h-6" alt="Logo" />
            </div>
          </div>

          <Link to="/">
            <h1 className="text-black font-black tracking-widest text-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer">
              LOGO
            </h1>
          </Link>

          <div className="flex items-center space-x-1">
            <div className="p-2 cursor-pointer">
              <img
                src={searchIcon}
                alt="search-icon"
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
              />
            </div>
            <div className="p-2 cursor-pointer">
              <img
                src={heartIcon}
                alt="heart-icon"
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
              />
            </div>
            <div className="p-2 cursor-pointer">
              <img
                src={shoppingBagIcon}
                alt="shopping-icon"
                className="w-5 h-5 hover:opacity-80 transition-opacity duration-200"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block py-6 lg:py-8">
          <div className="flex items-center mb-6 lg:mb-8">
            {/* Left side - Logo icon */}
            <div className="flex-1">
              <div className="w-12 h-12 flex items-center justify-start">
                <img src={LogoIcon} className="w-10 h-10" alt="Logo" />
              </div>
            </div>

            {/* Center - Logo text */}
            <div className="flex-1 flex justify-center">
              <Link to="/">
                <h1 className="text-black font-black tracking-widest text-3xl lg:text-4xl hover:scale-105 duration-300 cursor-pointer">
                  LOGO
                </h1>
              </Link>
            </div>

            {/* Right side - Icons and language selector */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="p-2 cursor-pointer">
                  <img
                    src={searchIcon}
                    alt="search-icon"
                    className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
                <div className="p-2 cursor-pointer">
                  <img
                    src={heartIcon}
                    alt="heart-icon"
                    className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
                <div className="p-2 cursor-pointer">
                  <img
                    src={shoppingBagIcon}
                    alt="shopping-icon"
                    className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>
                <div className="p-2 cursor-pointer">
                  <img
                    src={profileIcon}
                    alt="Profile-icon"
                    className="w-6 h-6 hover:opacity-80 transition-opacity duration-200"
                  />
                </div>

                <div className="flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <span className="text-base text-gray-700 font-bold tracking-wide">
                    ENG
                  </span>
                  <img
                    src={arrowDown}
                    alt="arrow-icon"
                    className="w-4 h-4 transform rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>

          <nav className="font-simplon flex justify-center space-x-6 lg:space-x-8">
            <Link
              to="/shop"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-lg lg:text-xl py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                isActive('/shop') ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              SHOP
            </Link>
            <Link
              to="/skills"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-lg lg:text-xl py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                isActive('/skills') ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              SKILLS
            </Link>
            <Link
              to="/stories"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-lg lg:text-xl py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                isActive('/stories') ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              STORIES
            </Link>
            <Link
              to="/about"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-lg lg:text-xl py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-lg lg:text-xl py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                isActive('/contact') ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};