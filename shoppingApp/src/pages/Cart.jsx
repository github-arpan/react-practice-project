import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../components/Modal/Index";
import CartTile from "../components/Cart-tile";
import { orderPlaced } from "../store/CartSlice";

function Cart() {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    setOriginalPrice(
      Math.floor(cart.reduce((acc, curr) => acc + curr.price, 0))
    );
  }, [cart]);

  function handlePlaced() {
    dispatch(orderPlaced());
    setOpenModal(true);
  }

  return (
    <div className="flex md:flex-row flex-col p-5 md:min-h-[500px] min-h-[300px]">
      {cart && cart.length === 0 && (
        <div
          className="w-full flex justify-center
         md:justify-end"
        >
          <h1 className="text-xl  font-bold">Your Cart is empty.</h1>
        </div>
      )}
      {openModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      )}

      <div className=" md:basis-2/3 m-4">
        {cart && cart.length > 0 && (
          <div className="flex flex-col flex-wrap gap-5">
            {cart.map((item) => (
              <div key={item.id}>
                <CartTile product={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      {cart && cart.length > 0 && (
        <div className="md:basis-1/3 px-10 py-3 border m-4 rounded-lg shadow-lg">
          <h1 className="font-bold text-xl my-4">Order summary </h1>
          <div className="my-10  ">
            <div className="flex justify-between ">
              <span>Original price: </span> <span>${originalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax: </span> <span>$10</span>
            </div>
            <div className="flex justify-between font-semibold my-5">
              <span>Total price : </span> <span>${originalPrice + 10}</span>
            </div>
          </div>
          <button
            onClick={handlePlaced}
            className="w-full py-2  bg-blue-700 text-white rounded-lg "
          >
            Place order!
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
