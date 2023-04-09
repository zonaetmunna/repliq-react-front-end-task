import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, error } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const formData = {
      number: data.phone_number,
      password: data.password,
    };
    console.log(formData);
    dispatch(login(formData));
    reset();
  };

  useEffect(() => {
    if (user.number) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-gray-900">Login</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <input
              className={`w-full px-4 py-2 border rounded-lg outline-none text-gray-700 ${
                errors.phone_number ? "border-red-500" : ""
              }`}
              type="tel"
              id="phone_number"
              name="phone_number"
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^01[0-9]{9}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone_number && (
              <span className="text-red-500 text-sm mt-1">
                {errors.phone_number.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full px-4 py-2 border rounded-lg outline-none text-gray-700 ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
              id="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg font-semibold"
            >
              Login
            </button>
          </div>

          <div>
            <p>
              Already have an account?{" "}
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
