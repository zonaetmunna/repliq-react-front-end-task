import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products.json`)
      .then((response) => {
        const foundProduct = response.find(
          (product) => product.id === parseInt(id)
        );
        setProduct(foundProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  <div className="bg-gray-50">
    {product ? (
      <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 w-full object-cover rounded-lg shadow-lg"
            />
            <div className="mt-6 flex space-x-4">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-20 w-20 object-cover rounded-lg shadow-lg"
                />
              )}
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-20 w-20 object-cover rounded-lg shadow-lg"
                />
              )}
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-20 w-20 object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
          <div className="mt-10 px-2 sm:px-0 lg:mt-0 lg:px-10 lg:w-1/2">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.title}
            </h1>
            <div className="mt-4">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div
                className="mt-2 text-gray-600 text-sm"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </div>
            <div className="mt-10">
              <button className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p className="text-center mt-12">Loading...</p>
    )}
  </div>;
};

export default SingleProduct;
