import React from "react";
import { Link } from "react-router-dom";

import Rating from "../rating/rating.component";
import "./product.styles.scss";

const Product = ({ product }) => {
  return (
    <>
      <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
        <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div className="prod-title">
            <Link to={`/product/${product._id}`}>
              <p className="text-lg uppercase text-gray-900 font-bold">
                {product.name}
              </p>
            </Link>
          </div>
          <div className="prod-img">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover object-center"
              />
            </Link>
          </div>
          <div className="prod-info grid gap-10">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <div className="flex item-center">
                <Rating value={product.rating} />
              </div>
              <p className="font-bold text-xl">{product.numReviews} Reviews</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">{product.price} ৳</p>
              <button className="px-6 py-2 transition font-bold ease-in duration-200 uppercase rounded-full border-2 border-yellow-900 focus:outline-none add-to-cart">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
