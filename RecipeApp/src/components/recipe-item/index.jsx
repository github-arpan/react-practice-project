import React from "react";
import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div
      key={item.id}
      className=" md:w-56 w-44  border p-3  shadow-lg rounded-lg hover:scale-110 transition-all duration-100 "
    >
      <div className=" md:h-36 h-24 rounded-lg object-cover">
        <img
          src={item.image_url}
          alt="recipe"
          className=" h-full w-full rounded-lg object-cover"
        />
      </div>
      <h3 className="text-sm  py-1   font-bold truncate">{item.title}</h3>
      <p className="text-[10px]">{item.publisher}</p>
      <Link to={`/recipe-item/${item?.id}`}>
        <button className="w-full bg-[#bc8741] hover:bg-[#7b5422] text-white text-xs py-1 my-1 rounded-md uppercase">
          Recipe details
        </button>
      </Link>
    </div>
  );
}

export default RecipeItem;
