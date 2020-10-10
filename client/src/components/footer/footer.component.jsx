import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="text-gray-700 body-font">
        <div className="px-5 py-12 mx-auto footer-main">
          <div className="flex flex-wrap md:text-left text-center order-first ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-black hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-black hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-black hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start">
                <input
                  className="w-40 sm:w-auto bg-gray-100 rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4"
                  placeholder="Email"
                  type="text"
                />
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none add-to-cart rounded">
                  Sign Up
                </button>
              </div>
              <p className="text-black text-sm mt-2 md:text-left text-center">
                Sign up to our newsletter
                <br className="lg:block hidden" />
                for discouts and offers
              </p>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.22222 6H19.7778L22 9.5V13H2V9.5L4.22222 6Z"
                  stroke="#000"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 13H20V20C20 20.5523 19.5523 21 19 21H11C10.4477 21 10 20.5523 10 20V13Z"
                  stroke="#000"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4 13L4 21"
                  stroke="#000"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19 2L5 2"
                  stroke="#000"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="ml-3 text-xl">Store Name</span>
            </a>
            <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4">
              © 2020 Store Name
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-black">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-black">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
