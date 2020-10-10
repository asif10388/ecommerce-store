import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../redux/reducers/product/product.actions";

import Rating from "../../components/rating/rating.component";
import Spinner from "../../components/spinner/spinner.component";

import "./SingleProductPage.styles.scss";

const SingpleProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, product } = productDetails;

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section class="text-gray-700 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.image}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {product.brand}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <Rating value={product.rating} />
                    <span class="text-gray-600 ml-3">
                      {product.numReviews} Reviews
                    </span>
                  </span>
                </div>
                <p class="leading-relaxed">{product.description}</p>
                <div class="flex mt-6 items-center pb-5 mb-5">
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Quantity</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex border-t-2 border-gray-300 py-2">
                  <span class="text-gray-500">Availability:</span>
                  <span
                    class={`ml-auto text-gray-900 ${
                      product.countInStock > 0
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    {product.price} ৳
                  </span>
                  <button
                    class="flex ml-auto text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded add-to-cart"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingpleProductPage;
