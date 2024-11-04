import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { navItems } from "./navItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed z-50 w-full py-2 text-white transition-colors duration-300 ${
        scrollPosition > 0
          ? "bg-gradient-to-r from-black via-orange-900 to-black bg-opacity-90"
          : "bg-gradient-to-r from-orange-700 via-black to-orange-900 bg-opacity-60"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-lg font-bold">Create Project</div>
        <div className="hidden space-x-4 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="px-4 py-1 text-blue-200 transition border border-transparent rounded-md shadow-sm bg-gradient-to-r shadow-orange-400 from-black via-orange-900 to-black bg-opacity-60 hover:bg-opacity-100 hover:border-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 pl-10 rounded-md"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-900 bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="py-8 text-white bg-gradient-to-r from-orange-700 via-black to-orange-900">
          <div className="flex items-center justify-between mb-4 ml-3">
            <div className="text-lg font-bold">projet react</div>
            <button onClick={toggleMenu} className="text-white">
              X
            </button>
          </div>
          <div className="flex flex-col mb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2 transition border rounded-md shadow-lg shadow-black bg-gradient-to-r bg-opacity-60 hover:bg-opacity-100 hover:border-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full px-4 py-2 pl-10 rounded-md"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
