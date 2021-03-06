import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProductDetails,
  createReview,
} from "../../redux/reducers/product/product.actions";

import Rating from "../../components/rating/rating.component";
import Spinner from "../../components/spinner/spinner.component";

import "./SingleProductPage.styles.scss";

import { CREATE_PRODUCT_REVIEW_RESET } from "../../redux/reducers/product/product.types";

const SingpleProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const [review, setReview] = useState({
    rating: 0,
    comment: "",
  });

  const { rating, comment } = review;

  const onChange = (e) =>
    setReview({ ...review, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createProductReview = useSelector((state) => state.createProductReview);
  const {
    error: errorProductReview,
    success: successProductReview,
  } = createProductReview;

  useEffect(() => {
    if (successProductReview) {
      alert("Review successfully created");
      setReview({
        ...review,
        rating: 0,
        comment: "",
      });
      dispatch({ type: CREATE_PRODUCT_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="text-gray-700 body-font overflow-hidden min-h-screen">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <Rating value={product.rating} />
                    <span className="text-gray-600 ml-3">
                      {product.numReviews} Reviews
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>

                {product.countInStock > 0 && (
                  <div className="flex mt-6 items-center pb-5 mb-5">
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Quantity</span>
                      <div className="relative">
                        <select
                          className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex border-t-2 border-gray-300 py-2">
                  <span className="text-gray-500">Availability:</span>
                  <span
                    className={`ml-auto text-gray-900 ${
                      product.countInStock > 0
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {product.price} ৳
                  </span>
                  <button
                    className="flex ml-auto text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded add-to-cart"
                    type="button"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {product.reviews.length === 0 && "No Reviews"}
          {product.reviews.map((review) => (
            <section key={review._id} className="container m-auto px-8 md:px-0">
              <div className="flex py-3">
                <div className="w-7/8">
                  <div className="flex justify-between">
                    <div>
                      <span>
                        <a
                          href="https://www.google.com/"
                          className="text-black"
                        >
                          {review.name}
                        </a>
                      </span>
                      <span className="text-gray-700">·</span>
                      <span className="text-gray-700">
                        {review.createdAt.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="my-3 text-sm">{review.comment}</p>
                    <hr className="border-b w-full" />
                  </div>
                </div>
              </div>
            </section>
          ))}

          {userInfo ? (
            <div className="flex mx-auto items-center justify-center mx-8 mb-4">
              <form
                className="w-full bg-white rounded-lg px-4 pt-2"
                onSubmit={submitHandler}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                    Comment on this post
                  </h2>
                  <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <div className="relative">
                      <select
                        className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10"
                        value={rating}
                        onChange={(e) => onChange(e)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea
                      className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                      placeholder="What are your thoughts on this?"
                      name="comment"
                      value={comment}
                      onChange={(e) => onChange(e)}
                      required
                    ></textarea>
                  </div>
                  <div className="w-full md:w-full flex items-start md:w-full px-3">
                    <button
                      className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                      type="submit"
                    >
                      Post Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            "Please Login to Write a Review"
          )}
        </section>
      )}
    </>
  );
};

export default SingpleProductPage;
