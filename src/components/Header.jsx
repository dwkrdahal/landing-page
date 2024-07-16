import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
          <span>Jawalakhel, Lalitpur, Nepal</span>
          <span>24 x 7</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#doctors" className="hover:text-gray-300">
            Doctors
          </a>
          <a href="#packages" className="hover:text-gray-300">
            Packages
          </a>
          <a href="#departments" className="hover:text-gray-300">
            Departments
          </a>
          <a href="#activities" className="hover:text-gray-300">
            Activities
          </a>
          <a href="#vacancy" className="hover:text-gray-300">
            Vacancy
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
        <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
          Reports
        </button>
      </div>
    </header>
  );
};

export default Header;
