import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  saveShippingAddress,
  savePaymentMethod,
} from "../../redux/reducers/cart/cart.actions";

import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component";

const Payment = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <div class="leading-loose min-h-screen">
        <form
          class="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
          onSubmit={(e) => onSubmit(e)}
        >
          <p class="text-gray-800 font-medium">Payment Method</p>
          <div class="mt-2">
            {/* <label class=" block text-sm text-gray-600" for="cus_email">Select Payment Method</label>
                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="radio" label="Paypal or Credit Card" id="Paypal"
                            name="paymentMethod"
                            value='Paypal'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)} /> */}
            <label class="inline-flex items-center mt-3">
              <input
                type="radio"
                class="h-5 w-5 text-gray-600"
                checked
                label="Paypal or Credit Card"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span class="ml-2 text-gray-700">Paypal</span>
            </label>
          </div>
          <div class="mt-4">
            <button
              class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
              type="submit"
            >
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
