import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/product/product.component";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      {" "}
      <section class="text-gray-700 body-font">
        <div class="container px-5 pt-24 pb-12 mx-auto">
          <div class="flex flex-wrap">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
