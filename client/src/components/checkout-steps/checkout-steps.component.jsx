import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div class="container px-5 py-4 mx-auto flex flex-wrap flex-col">
      <div class="flex mx-auto flex-wrap">
        {
          step1 ? (
            <Link to='/login' class="sm:px-6 py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-green-500 tracking-wider text-green-500">
              <i class="fas fa-sign-in-alt mr-1 "></i>Sign In
            </Link>) :
            (<Link to='/login' class="pointer-events-none  sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-gray-200 tracking-wider">
              <i class="fas fa-sign-in-alt mr-1"></i>Sign In
            </Link>)
        }

        {
          step2 ? (
            <Link to='/shipping' class="sm:px-6 py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-green-500 hover:text-gray-900 tracking-wider text-green-500">
              <i class="fas fa-shipping-fast mr-1"></i>Shipping
            </Link>) :
            (<Link to='/shipping' class="pointer-events-none  sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <i class="fas fa-shipping-fast mr-1"></i>Shipping
            </Link>)
        }

        {
          step3 ? (
            <Link to='/payment' class="sm:px-6 py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-green-500 hover:text-gray-900 tracking-wider text-green-500">
              <i class="far fa-credit-card mr-1"></i>Payment
            </Link>) :
            (<Link to='/payment' class="pointer-events-none  sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <i class="far fa-credit-card mr-1"></i>Payment
            </Link>)
        }

        {
          step4 ? (
            <Link to='/placeorder' class="sm:px-6 py-3 w-1/2  sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-green-500 hover:text-gray-900 tracking-wider text-green-500">
              <i class="fas fa-check-circle mr-1"></i>Place Order
            </Link>) :
            (<Link to='/placeorder' class="pointer-events-none  sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <i class="fas fa-check-circle mr-1"></i>Place Order
            </Link>)
        }




      </div>
    </div>
  )
}

export default CheckoutSteps
