import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/home" className="text-xl font-bold text-gray-800">
              Ecommerce
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link
              to="/home"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="cart"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              Cart
            </Link>
            {user.role === "admin" && (
              <Link
                to="dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            )}
            {user.role === "admin" && (
              <Link
                to="/register"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              >
                Register
              </Link>
            )}
            {user.number ? (
              <button onClick={handleSignOut}>logout</button>
            ) : (
              <li>
                <Link
                  className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                  to="/"
                >
                  Login
                </Link>
              </li>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white px-2 pt-2 pb-3`}
        id="mobile-menu"
      >
        <Link
          to="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-600 hover:bg-gray-100"
        >
          Home
        </Link>
        <Link to="/" className="block px-3 py-2 rounded-md text-base font">
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
