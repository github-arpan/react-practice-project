import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";

function Input() {
  const { handleSubmit, searchParam, setSearchParam } =
    useContext(GlobalContext);
  return (
    <form onSubmit={handleSubmit} className="flex flex-shrink-0  ">
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
  );
}

export default Input;
