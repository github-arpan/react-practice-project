import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../store/CartSlice";

function CardTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleClick = () => {
    dispatch(addtoCart(product));
    console.log(cart);
  };
  return (
    <div className=" w-48 border flex flex-col items-center space-y-2 p-5 border-black">
      <div className="h-36 w-36">
        {" "}
        <img
          src={product.image}
          alt={product.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <h3 className="truncate w-32">{product.title}</h3>
        <p>Price : {product.price}</p>
      </div>
      <button
        onClick={handleClick}
        className="px-2 py-1 bg-blue-900 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CardTile;
