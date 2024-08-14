import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeToCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    orderPlaced(state) {
      state.length = 0;
    },
  },
});

export const { addToCart, removeToCart, orderPlaced } = cartSlice.actions;
export default cartSlice.reducer;
