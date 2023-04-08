import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../features/auth/authSlice";

const SignUp = () => {
  const { user, isLoading, isError, error } = useSelector(
    (state) => state.auth
  );
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // password match
  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = async (data) => {
    const formData = {
      number: data.phone,
      password: data.password,
    };
    console.log(formData);
    dispatch(signup({ ...formData, role: "admin" }));
    reset();
  };

  // redirect
  useEffect(() => {
    if (user.number) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="phone-number" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border 
                  border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                  focus:z-10 sm:text-sm`}
                placeholder="Phone Number"
                {...register("phone", {
                  required: true,
                  pattern: /^01[3-9][0-9]{8}$/,
                })}
              />
              {errors.phone && (
                <p className="text-red-500">
                  Please enter a valid Bangladeshi phone number.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border 
                  border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                  focus:z-10 sm:text-sm`}
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              />
              <input
                id="password"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border 
                  border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md 
                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                  focus:z-10 sm:text-sm`}
                placeholder="Confirm-Password"
                {...register("confirmPassword")}
              />
              {errors.password && (
                <p className="text-red-500">
                  Password must be 8-20 characters long.
                </p>
              )}
            </div>
          </div>

          <div className="!mt-8 ">
            <button
              type="submit"
              className="font-bold text-white py-3 rounded-full bg-yellow-500 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={disabled}
            >
              Sign up
            </button>
            {error && <span>{error}</span>}
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
