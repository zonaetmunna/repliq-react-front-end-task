import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Link as div, useLocation } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  // handle add product cart
  const handleAddProductCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4 ">
      <div>
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
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
              <button
                onClick={() => handleAddProductCart(product)}
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                Add to cart
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <Link to={`/product/${product.id}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
