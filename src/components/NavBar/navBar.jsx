import React from "react";
import { Link } from "react-router-dom";
import popcorn from "../../assets/images/popcorn.png";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="cursor-pointer">
              <img className="h-12 w-12" src={popcorn} alt="Logo" />
            </a>
          </div>
          <div className="ml-4 flex items-center">
            <form className="max-w-md mx-auto flex items-center">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Movies"
                  required
                  style={{ width: "500px", height: "44px" }}
                  onChange={handleInputChange}
                />
                <Link
                  to={`/searchmovies/${inputValue}`}
                  className="text-blue-500"
                >
                  <button
                    type="submit"
                    className="ml-2 text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute right-0 top-0 bottom-0"
                    style={{ height: "100%" }}
                  >
                    Search
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              <Link to="/" className="text-blue-500">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
              </Link>
              <Link to="/toprated" className="text-blue-500">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Top Rated
                </a>
              </Link>
              <Link to="/nowplaying" className="text-blue-500">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Now Playing
                </a>
              </Link>
              <Link to="/upcoming" className="text-blue-500">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Upcoming
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
