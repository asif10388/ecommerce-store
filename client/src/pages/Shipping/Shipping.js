import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveShippingAddress } from '../../redux/reducers/cart/cart.actions';

import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component"

const Shipping = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [shippingData, setShippingData] = useState({
    address: shippingAddress.address,
    city: shippingAddress.city,
    postalCode: shippingAddress.postalCode,
    country: shippingAddress.country,
  });

  const { address, city, postalCode, country } = shippingData;

  const onChange = (e) =>
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment')
  };

  return (
    <>
      <CheckoutSteps step1 step2 />
      <div class="leading-loose">
        <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={(e) => onSubmit(e)}>
          <p class="text-gray-800 font-medium">Shipping Address</p>
          <div class="mt-2">
            <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Street"
              name="address"
              value={address}
              onChange={(e) => onChange(e)} />
          </div>
          <div class="mt-2">
            <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="City" name="city"
              value={city}
              onChange={(e) => onChange(e)} />
          </div>
          <div class="inline-block mt-2 w-1/2 pr-1">
            <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Country" name="country"
              value={country}
              onChange={(e) => onChange(e)} />
          </div>
          <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
            <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Zip" name="postalCode"
              value={postalCode}
              onChange={(e) => onChange(e)} />
          </div>
          <div class="mt-4">
            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Proceed To Payment</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Shipping
