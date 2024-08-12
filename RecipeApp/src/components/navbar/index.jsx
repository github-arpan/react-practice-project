import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../utils/context/GlobalContext";

function Navbar() {
  const { handleSubmit, searchParam, setSearchParam } =
    useContext(GlobalContext);
  return (
    <div className="fixed top-0 z-10 w-full ">
      <div className="flex justify-between items-center px-4  bg-white shadow-gray-500 shadow h-16 outline-none border-none focus:border-none  ">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              RecipeBooks
            </span>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter food name "
            className="px-3 py-1 rounded-l-lg border-none outline-none  shadow-gray-600 shadow "
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <button className="px-2  py-1 bg-blue-700 rounded-r-lg text-white shadow-gray-600 shadow  ">
            Search
          </button>
        </form>
        <ul className="flex gap-5">
          <Link to="">
            <li className="self-center  font-semibold whitespace-nowrap dark:text-white">
              Home
            </li>
          </Link>
          <Link to="/favourites">
            <li className="self-center  font-semibold whitespace-nowrap dark:text-white">
              Favorites
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
