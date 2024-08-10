import React from "react";

function Input({ search, setSearch, handleSearch }) {
  return (
    <div className="my-3">
      <input
        type="text"
        placeholder="Type city name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" px-3 py-2 rounded-l-lg w-full max-w-[60%] bg-blue-500/30 placeholder:text-gray-500 "
      />
      <button
        onClick={handleSearch}
        className="px-3 py-2 bg-red-700 text-white rounded-r-lg active:scale-95"
      >
        Search
      </button>
    </div>
  );
}

export default Input;
