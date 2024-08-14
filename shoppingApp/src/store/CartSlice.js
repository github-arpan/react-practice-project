import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];
const CartSlice = createSlice({
  name: "Cart",
  initialState: initialValue,
  reducers: {
    addtoCart(state, action) {
      state.push(action.payload);
    },
  },
});
console.log(initialValue);

export const { addtoCart } = CartSlice.actions;
export default CartSlice.reducer;
