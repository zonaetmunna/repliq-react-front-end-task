import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../../features/auth/authSlice";

const CustomersList = () => {
  // const { users, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const [user, setUsers] = useState([]);
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const onSubmit = (data) => {
    dispatch(signup({ ...data }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              {...register("number", {
                required: true,
                pattern: /^01[3-9][0-9]{8}$/,
              })}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.number && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", { required: true })}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Customer
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Customers:</h2>
        <ul>
          {user.map((customer, index) => (
            <li key={index} className="mb-4">
              <p>
                <span className="font-medium">Number:</span> {customer.number}
              </p>
              <p>
                <span className="font-medium">Password:</span>{" "}
                {customer.password}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomersList;
