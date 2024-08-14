import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="flex items-center justify-between h-24 px-10 bg-[#386790]  ">
        <div>
          <Link to={"/"}>
            <h1 className="font-semibold text-2xl">ShopNow</h1>
          </Link>
        </div>
        <ul className="flex gap-6 font-semibold text-xl">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/cart"}>
            <li>Cart({cart.length})</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
