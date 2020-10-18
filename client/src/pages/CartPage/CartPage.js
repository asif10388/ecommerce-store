import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";

import {
  addToCart,
  removeFromCart,
} from "../../redux/reducers/cart/cart.actions";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = (id) => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <div class="container px-5 py-8 mx-auto flex flex-wrap min-h-screen">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          {cartItems.length === 0 ? (
            <h1 class="text-xl text-gray-900">Your cart is empty</h1>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  class="py-8 mx-auto flex md:items-center sm:flex-row flex-col"
                >
                  <a class="flex md:items-center md:justify-start text-gray-900 flex flex-col md:flex-row">
                    <img
                      alt="team"
                      class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 mb-2 md:mb-0"
                      src={item.image}
                      alt={item.name}
                    />
                    <span class="md:ml-1 text-md">{item.name}</span>
                    <span class="md:ml-5 text-md">{item.price} ৳</span>
                  </a>
                  <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 sm:justify-start">
                    <div className="relative">
                      <select
                        className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.productId, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
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
                    <button
                      type="button"
                      className="px-6 py-2 transition font-bold ease-in duration-200 uppercase rounded-full border-2 border-yellow-900 focus:outline-none add-to-cart ml-2"
                      onClick={() => removeFromCartHandler(item.productId)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
        <div class="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div class="bg-gray-200 p-8">
            <h2 class="text-gray-900 text-3xl font-medium title-font mb-5">
              Subtotal ({cartItems.reduce((total, item) => total + item.qty, 0)}
              ) Items
            </h2>
            <p class="my-2">
              {cartItems
                .reduce((total, item) => total + item.qty * item.price, 0)
                .toFixed(2)}{" "}
              ৳
            </p>

            <button
              class="text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg"
              disabled={cartItems.length === 0}
              onClick={checkOutHandler}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
