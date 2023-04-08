import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, removeFromCart } from "../../../features/cart/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {cart.length > 0 ? (
          <div>
            <ul className="border-t border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="w-2/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-3/5 flex flex-col justify-between pl-4">
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                      <p className="text-gray-700 mt-2">${item.price}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => handleRemove(item)}
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        Remove
                      </button>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-8">
              <button
                onClick={handleClearCart}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Clear Cart
              </button>
            </div>
            <div className="mt-5">
              <Link
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-3"
                to="/checkout"
              >
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

/* */
