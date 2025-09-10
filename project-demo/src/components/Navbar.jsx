import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">HyperMarket/Flavour Fleet</a>
        </div>
        <div className="flex-grow flex justify-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-1/2 px-4 py-2 rounded-md text-gray-900  border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-green-200">
            Home
          </Link>
          <li className="relative list-none">
            <Link to="/cart" className="hover:text-green-200">
              Cart
            </Link>
            {quantity > 0 && (
              <span className="absolute bottom-3 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-x">
                {quantity}
              </span>
            )}
          </li>
          <Link to="/login" className="hover:text-green-200">
            Login
          </Link>
          <Link to="/signup" className="hover:text-green-200">
            Signup
          </Link>
          <Link to="/account" className="hover:text-green-200">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
