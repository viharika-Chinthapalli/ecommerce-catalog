import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrowDown from "../assets/arrow-up.svg";

export const MobileNav = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="px-6 py-4">
          <nav className="flex flex-col space-y-8">
            <Link
              to="/shop"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-xl py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 pb-6 ${
                isActive('/shop') ? 'text-blue-600 bg-blue-50' : ''
              }`}
              onClick={onClose}
            >
              SHOP
            </Link>
            <Link
              to="/skills"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-xl py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 pb-6 ${
                isActive('/skills') ? 'text-blue-600 bg-blue-50' : ''
              }`}
              onClick={onClose}
            >
              SKILLS
            </Link>
            <Link
              to="/stories"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-xl py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 pb-6 ${
                isActive('/stories') ? 'text-blue-600 bg-blue-50' : ''
              }`}
              onClick={onClose}
            >
              STORIES
            </Link>
            <Link
              to="/about"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-xl py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 pb-6 ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : ''
              }`}
              onClick={onClose}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`text-black hover:text-gray-600 font-bold tracking-widest text-xl py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 ${
                isActive('/contact') ? 'text-blue-600 bg-blue-50' : ''
              }`}
              onClick={onClose}
            >
              CONTACT US
            </Link>
          </nav>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Language</span>
              <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
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
      </div>
    </>
  );
};