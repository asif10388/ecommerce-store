import React, { useState, useEffect } from 'react';
import axios from "axios";
import { PayPalButton } from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import Spinner from "../../components/spinner/spinner.component";

import { getOrderDetails, payOrder } from '../../redux/reducers/order/order.actions';

import { ORDER_PAY_RESET } from '../../redux/reducers/order/order.types'

const OrderPage = ({ match }) => {
    const orderId = match.params.id

    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch();


    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails

    const orderPay = useSelector((state) => state.orderPay);
    const { loading: loadingPay, success: successPay } = orderPay

    if (!loading) {
        //Calculate prices
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2);
        }

        order.itemsPrice = addDecimals(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0));
    }

    useEffect(() => {
        const addPaypalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal')
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true);
            }
            document.body.appendChild(script)
        }

        if (!order || successPay) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(orderId))
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPaypalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, orderId, successPay, order])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult);
        dispatch(payOrder(orderId, paymentResult))
    }

    return (
        <>{loading ? <Spinner /> : (
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 class="text-4xl">Order Id: {order._id}</h1>
                    <h1 class="text-3xl text-gray-900">Shipping</h1>
                    <strong>Name: </strong>{order.user.name}
                    <br />
                    <strong>Email: </strong>{order.user.email}
                    <p class="leading-relaxed my-4">Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
                    <p class="leading-relaxed my-4">{order.isDelivered ? `Delivered on ${order.paidAt}` : 'Not delivered'}</p>
                    <h1 class="text-3xl text-gray-900">Payment Method</h1>
                    <p class="leading-relaxed my-4">Method: {order.paymentMethod}</p>
                    <p class="leading-relaxed my-4">{order.isPaid ? `Paid on ${order.paidAt}` : 'Not paid'}</p>
                    <h1 class="text-3xl text-gray-900">Order Items</h1>
                    {
                        order.orderItems.length === 0 ? (<h1 class="text-xl text-gray-900">Your cart is empty</h1>) : (
                            <>{
                                order.orderItems.map((item, index) => (
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
                                    <td class="border-2 border-gray-500 px-4 py-3">{order.itemsPrice} ৳</td>
                                </tr>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Shipping</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{order.shippingPrice} ৳</td>

                                </tr>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Tax</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{order.taxPrice} ৳</td>

                                </tr>
                                <tr>
                                    <td class="border-2 border-gray-500 px-4 py-3">Total</td>
                                    <td class="border-2 border-gray-500 px-4 py-3">{order.totalPrice} ৳</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="mt-4">
                            {!order.isPaid && (
                                <>
                                    {loadingPay && <Spinner />}
                                    {!sdkReady ? <Spinner /> : (
                                        <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} />
                                    )}
                                </>
                            )}
                            {/* <button class="w-full text-white bg-gray-900 hover:bg-gray-700 border-0 py-2 px-6 rounded" disabled={orderItems === 0} onClick={placeOrderHandler}>Place Order</button> */}
                        </div>
                    </div>

                </div>
            </div>)}

        </>
    )
}

export default OrderPage
