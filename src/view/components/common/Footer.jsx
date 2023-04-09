import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-10 mt-20 bg-gray-900 text-gray-400 h-6">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-around">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="w-8 mr-2" />
          <span className="font-bold text-xl">My Ecommerce Store</span>
        </div>
        <div className="flex items-center">
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline mr-4"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline mr-4"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline mr-4"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline mr-4"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline mr-4"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white hover:underline"
          >
            <FaInstagram />
          </Link>
        </div>
        {/* &copy; {new Date().getFullYear()} My Awesome Website */}
      </div>
    </footer>
  );
};

export default Footer;
