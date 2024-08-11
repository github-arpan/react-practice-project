import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-4  bg-gray-500 h-12 outline-none border-none focus:border-none ">
      <div>
        <h1>Food Recipe</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Enter food name "
          className="px-3 rounded-l-lg "
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
