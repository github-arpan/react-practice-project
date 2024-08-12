import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/context/GlobalContext";

function Navbar() {
  const { handleSubmit, searchParam, setSearchParam } =
    useContext(GlobalContext);
  return (
    <div className="flex justify-between items-center px-4  bg-gray-500/50 shadow-gray-500 shadow h-12 outline-none border-none focus:border-none ">
      <div>
        <h1>Food Recipe</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter food name "
          className="px-3 rounded-l-lg border-none outline-none "
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button className="px-2  bg-blue-700 rounded-r-lg text-white ">
          Search
        </button>
      </form>
      <ul className="flex gap-5">
        <Link to="">
          <li>Home</li>
        </Link>
        <Link to="/favourites">
          <li>Favorites</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
