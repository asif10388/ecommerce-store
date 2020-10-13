import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../../components/product/product.component";
import Spinner from "../../components/spinner/spinner.component";

import { getProducts } from "../../redux/reducers/product/product.actions";

const Homepage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {" "}
      <section className="text-gray-700 body-font min-h-screen">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <div className="flex flex-wrap">
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
