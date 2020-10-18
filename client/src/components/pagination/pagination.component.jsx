import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ page, pages, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {[...Array(pages).keys()].map((x) => (
              <li key={x + 1}>
                <Link
                  to={
                    !isAdmin
                      ? keyword
                        ? `/search/${keyword}/page/${x + 1}`
                        : `/page/${x + 1}`
                      : `/admin/productlist/${x + 1}`
                  }
                  className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 ${
                    x + 1 === page
                      ? `text-white bg-orange-500`
                      : `bg-white text-orange-500`
                  }`}
                >
                  {x + 1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};

export default Pagination;
