import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/products.json");
      setProducts(response.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto my-4">
        <h1 className="text-center text-3xl font-bold mb-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
