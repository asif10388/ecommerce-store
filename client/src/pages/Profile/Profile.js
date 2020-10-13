import React from "react";
import { Link } from "react-router-dom";
import "./Profile.styles.scss";

const Profile = () => {
  return (
    <>
      <div className="flex">
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
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
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
        <div class="w-full overflow-scroll border-t flex flex-col min-h-screen">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Id
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Paid
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <p class="text-gray-900 whitespace-no-wrap">
                      #1585102651425
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">43000</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">Yes</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">Active</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
