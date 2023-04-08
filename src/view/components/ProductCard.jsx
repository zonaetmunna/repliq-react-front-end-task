import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Link as div, useLocation } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // handle add product cart
  const handleAddProductCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4 ">
      <div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={product.image}
            alt={product.name}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium uppercase mb-1">
              {product.name}
            </h2>

            <p className="leading-relaxed mb-3">{product.description}</p>
            <div className="flex items-center flex-wrap ">
              <span className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">
                ${product.price}
              </span>
              <Link
                to={`/product/${product.id}`}
                className="text-indigo-600 hover:underline mx-4"
              >
                Details
              </Link>
            </div>
            <button
              onClick={() => handleAddProductCart(product)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to cart
              <FaShoppingCart
                className="-ml-1 mr-2 h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
