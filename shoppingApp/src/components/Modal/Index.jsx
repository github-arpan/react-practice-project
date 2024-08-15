import React from "react";

import { HiBadgeCheck } from "react-icons/hi";

function Modal({ setOpenModal }) {
  function handleOrderPlace() {
    setOpenModal(false);
  }
  return (
    <div>
      <div className="flex justify-center items-center flex-col border w-72 p-5 bg-slate-200 space-y-4 rounded-lg">
        <div>
          <HiBadgeCheck className="text-4xl text-green-600" />
        </div>
        <h1>Order placed successfully</h1>
        <button onClick={handleOrderPlace} className="px-3 py-2 bg-green-600">
          Thanks!
        </button>
      </div>
    </div>
  );
}

export default Modal;
