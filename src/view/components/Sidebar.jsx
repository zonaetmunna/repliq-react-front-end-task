import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-yellow-400 h-[calc(100vh-25px)] p-5 rounded-lg shadow-md hover:bg-amber-200">
      <ul className="flex gap-3 flex-col h-full">
        <li className="font-bold text-lg text-center hover:text-sky-500 px-2 ">
          Admin Dashboard
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="product-list" className="text-lg text-black">
            Products-List
          </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="product-add"> Add-Product </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="customer-list"> Customer-list </Link>
        </li>
        <li className="text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="order-list"> Order-list </Link>
        </li>
        <li className="mt-auto text-center font-normal text-gray-900 rounded-lg hover:bg-gray-100">
          <Link to="/home"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
