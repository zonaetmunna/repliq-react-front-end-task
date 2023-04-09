import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../features/cart/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products.json`);
        const data = response.data;
        const singleProduct = data.find((item) => item.id === parseInt(id));
        setProduct(singleProduct);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);
  console.log(products);

  const handleAddProductCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-gray-50">
      {products?.id}
      {products ? (
        <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex">
            <div className="lg:w-1/2 flex flex-col items-center justify-center">
              <img
                src={products?.image}
                alt={products?.name}
                className="h-96 w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-10 px-2 sm:px-0 lg:mt-0 lg:px-10 lg:w-1/2">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {products?.name}
              </h1>
              <div className="mt-4">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">${products?.price}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Description
                </h3>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => handleAddProductCart(products)}
                  className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center mt-12">Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
