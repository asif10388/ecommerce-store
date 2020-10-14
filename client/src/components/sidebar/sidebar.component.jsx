import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xs admin-sidebar">
            <div className="p-6">
                <Link
                    to="/profile"
                    className="text-black text-3xl font-semibold uppercase hover:text-gray-300"
                >
                    Dashboard
          </Link>
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-md hover:shadow-lg hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-plus mr-3"></i> Add Product
          </button>
            </div>
            <nav className="text-black text-base font-semibold pt-3">
                <Link
                    to="/profile"
                    className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                >
                    <i class="fas fa-shopping-basket mr-3"></i>
            Orders
          </Link>
                <Link
                    to="/profile/update"
                    className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                >
                    <i className="fas fa-align-left mr-3"></i>
            Update Your Info
          </Link>
            </nav>
        </aside>
    )
}

export default SideBar
