import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component"

import { createOrder } from '../../redux/reducers/order/order.actions';

const PlaceOrder = ({ history }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const { shippingAddress, cartItems, paymentMethod } = cart;

    //Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }

    cart.itemsPrice = addDecimals(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    cart.shippingPrice = addDecimals(cart.itemsPrice > 3000 ? 0 : 80)

    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2)

    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line
    }, [history, success])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 class="text-3xl text-gray-900">Shipping</h1>
                    <p class="leading-relaxed my-4">Address: {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}</p>
                    <h1 class="text-3xl text-gray-900">Payment Method</h1>
                    <p class="leading-relaxed my-4">Method: {paymentMethod}</p>
                    <h1 class="text-3xl text-gray-900">Order Items</h1>
                    {
                        cartItems.length === 0 ? (<h1 class="text-xl text-gray-900">Your cart is empty</h1>) : (
                            <>{
                                cartItems.map((item, index) => (
                                    <div key={index} class="py-8 mx-auto flex md:items-center sm:flex-row flex-col">
                                        <a class="flex md:items-center md:justify-start text-gray-900 flex flex-col md:flex-row">
                                            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 mb-2 md:mb-0" src={item.image} alt={item.name} />
                                            <span class="md:ml-1 text-md">{item.name}</span>
                                        </a>
                                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 sm:justify-start">
                                            {item.qty} x {item.price} ৳ = {item.qty * item.price} ৳
                                        </span>
                                    </div>
                                ))
                            }

                            </>

                        )
                    }

                </div>
                <div class="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div class="bg-gray-200 p-8">
                        <div class="flex flex-col text-center w-full mb-2">
                            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Order Summary</h1>
                        </div>
                        <table class="table-auto w-full text-left whitespace-no-wrap ">
                            <tbody>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Item Price</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{cart.itemsPrice} ৳</td>
                                </tr>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Shipping</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{cart.shippingPrice} ৳</td>

                                </tr>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Tax</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{cart.taxPrice} ৳</td>

                                </tr>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Total</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{cart.totalPrice}৳</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="mt-4">
                            <button class="w-full text-white bg-gray-900 hover:bg-gray-700 border-0 py-2 px-6 rounded" disabled={cartItems === 0} onClick={placeOrderHandler}>Place Order</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PlaceOrder
