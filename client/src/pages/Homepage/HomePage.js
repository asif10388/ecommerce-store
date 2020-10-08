import React from "react";
import Product from "../../components/product/product.component";
import products from "../../products";

const Homepage = () => {
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
