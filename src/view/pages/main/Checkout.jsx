import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../../../features/cart/cartSlice";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const total = cart.reduce((acc, crr) => acc + crr.price, 0);

  const onSubmit = (data) => {
    /* const orderData = {
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      number: user.number,

      total: total,
    };
    console.log(data);
    localStorage.setItem("order", JSON.stringify(orderData)); */
  };

  const handleCheckout = () => {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      number: user.number,

      total: total,
    };
    orders.push(newOrder);
    console.log(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));
    dispatch(clearCart());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-100 py-4">
          <div className="max-w-screen-lg mx-auto px-4">
            <h1 className="text-2xl font-semibold">Checkout</h1>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-2xl font-medium">Billing details</h2>
              <div className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first-name"
                      autoComplete="given-name"
                      {...register("first_name", { required: true })}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.first_name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last-name"
                      autoComplete="family-name"
                      {...register("last_name", { required: true })}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {errors.last_name && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email-address"
                    autoComplete="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/" className="text-blue-500">
            Continue shopping
          </Link>
          .
        </p>
      ) : (
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th className="text-left">Price</th>
                <th className="text-left">Quantity</th>
                <th className="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-200">
                <td></td>
                <td></td>
                <td className="font-semibold">Total:</td>
                <td className="font-semibold">${total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-3"
              onClick={handleCheckout}
            >
              Place-order
            </button>
            <Link to="/" className="text-blue-500">
              Continue shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
