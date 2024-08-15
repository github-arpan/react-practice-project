import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../store/CartSlice";

function CardTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeToCart(product.id));
  };
  return (
    <div className=" md:w-48 w-40 border flex flex-col items-center space-y-2 p-5 shadow-lg rounded-lg hover:scale-110 transition-all ">
      <div className="h-36 w-36 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full"
        />
      </div>
      <div className="">
        <h3 className="truncate w-32">{product.title}</h3>
        <p>Price : {product.price}</p>
      </div>
      <button
        onClick={
          cart.some((item) => item.id === product.id)
            ? handleRemove
            : handleAddToCart
        }
        className="px-2 py-1 text-[14px] md:text-xl font-semibold uppercase border bg-slate-100"
      >
        {cart.some((item) => item.id === product.id) ? (
          <span className="text-red-600">X remove</span>
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
}

export default CardTile;
