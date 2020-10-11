import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import { logout } from "../../redux/reducers/auth/auth.actions";

const Header = () => {
  const [toggle, isToggled] = useState(false);
  const [toggleDropdownButton, isToggledDropdown] = useState(false);

  const toggleButton = () => isToggled(!toggle);
  const toggleDropdown = () => isToggledDropdown(!toggleDropdownButton);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="nav-body shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link
                  className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                  to="/"
                >
                  Store Name
                </Link>

                {/* Search input on desktop screen */}
                <div className="mx-10 hidden md:block">
                  <input
                    type="text"
                    className="w-32 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border-2 border-yellow-600 focus:outline-none focus:bg-white desktop-search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                  onClick={toggleButton}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`${toggle ? "block" : "hidden"} md:flex items-center`}
            >
              <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                <Link
                  className="my-1 text-lg text-black leading-5 hover:text-yellow-900 md:mx-4 md:my-0"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="my-1 text-lg text-black leading-5 hover:text-yellow-900 md:mx-4 md:my-0"
                  to="/"
                >
                  Blog
                </Link>
                <Link
                  className="my-1 text-lg text-black leading-5 hover:text-yellow-900 md:mx-4 md:my-0"
                  to="/cart"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="20"
                      r="1"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                    <circle
                      cx="18"
                      cy="20"
                      r="1"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                    <path
                      d="M2 3H5.5C5.5 3 5.91294 4.82843 6.17753 6C6.70622 8.34099 7.43235 11.5562 7.85836 13.4425C8.0643 14.3543 8.87398 15 9.8088 15H18.3957C19.3331 15 20.1447 14.3489 20.348 13.4339L22 6"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22 6H6.5"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              {userInfo ? (
                <div class="relative md:mt-2">
                  <button
                    class="block md:p-2 rounded overflow-hidden focus:outline-none transition-none md:hover:bg-yellow-800 md:hover:text-white"
                    onClick={toggleDropdown}
                  >
                    {userInfo.name} <i class="fas fa-caret-down"></i>
                  </button>

                  <div
                    class={` ${
                      toggleDropdownButton ? "absolute" : "hidden"
                    } sm:right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl`}
                  >
                    <Link
                      to="/profile"
                      class="transition-colors w-full duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                    >
                      Profile
                    </Link>
                    <div class="py-2">
                      <hr></hr>
                    </div>
                    <Link
                      class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white"
                      onClick={logOutHandler}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex items-center py-2 -mx-1 md:mx-0">
                  <Link
                    className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm font-bold text-black leading-5 md:mx-2 md:w-auto login"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm font-medium text-white leading-5 md:mx-0 md:w-auto signup"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Search input on mobile screen */}
              <div className="mt-3 md:hidden">
                <input
                  type="text"
                  className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white border-2 border-yellow-600"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
