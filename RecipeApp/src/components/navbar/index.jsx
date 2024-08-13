import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GlobalContext } from "../../utils/context/GlobalContext";

function Navbar() {
  const { handleClick, isWideScreen, showInput, favouriteLists } =
    useContext(GlobalContext);

  return (
    <div className="fixed top-0 z-10 w-full ">
      <div className="flex justify-between items-center md:px-10 px-6  bg-[#a78262] shadow-gray-500 shadow h-16 outline-none border-none focus:border-none text-black  ">
        <div>
          <Link to="">
            <span className="md:text-xl font-semibold whitespace-nowrap dark:text-white">
              RecipeBooks
            </span>
          </Link>
        </div>
        <div className="relative flex items-center justify-center">
          {isWideScreen ? (
            <Input />
          ) : (
            <>
              <div className="cursor-pointer" onClick={handleClick}>
                {!showInput ? <IoSearch /> : <RxCross2 />}
              </div>
              {showInput && (
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <Input />
                </div>
              )}
            </>
          )}
        </div>

        <ul className="flex gap-5">
          <Link to="">
            <li className="self-center  font-semibold whitespace-nowrap dark:text-white">
              Home
            </li>
          </Link>
          <Link to="/favourites">
            <li className="self-center  font-semibold whitespace-nowrap dark:text-white">
              Favorites (<span>{favouriteLists.length}</span>)
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
