import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../store/CartSlice";

function CartTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemove = () => {
    dispatch(removeToCart(product.id));
  };
  return (
    <div className=" border flex flex-row items-center justify-between p-5 shadow-lg rounded-lg">
      <div className="h-20 w-20  flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full "
        />
      </div>
      <div className="p-2">
        <h3>{product.title}</h3>
        <p className="font-semibold">Price : ${product.price}</p>
      </div>
      <button
        onClick={
          cart.some((item) => item.id === product.id)
            ? handleRemove
            : handleAddToCart
        }
        className="px-2 font-bold text-xl uppercase"
      >
        {cart.some((item) => item.id === product.id) ? (
          <span className="text-red-600 "> remove</span>
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
}

export default CartTile;
