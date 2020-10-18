import React, { useState } from "react";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="ml-10 mr-5 hidden md:block md:flex">
        <input
          type="text"
          className="w-3/4 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border-2 border-yellow-600 focus:outline-none focus:bg-white desktop-search"
          placeholder="Search"
          aria-label="Search"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          class="w-1/4 inline-block md:mx-2 rounded overflow-hidden focus:outline-none transition-none bg-yellow-800 text-white"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
