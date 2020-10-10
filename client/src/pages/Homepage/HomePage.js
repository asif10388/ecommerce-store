import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../../components/product/product.component";
import Spinner from "../../components/spinner/spinner.component";

import { getProducts } from "../../redux/reducers/product/product.actions";

const Homepage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {" "}
      <section class="text-gray-700 body-font">
        <div class="container px-5 pt-24 pb-12 mx-auto">
          <div class="flex flex-wrap">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
