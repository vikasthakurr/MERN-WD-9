import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Weekdays-9</Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-semibold hover:text-gray-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-semibold hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
