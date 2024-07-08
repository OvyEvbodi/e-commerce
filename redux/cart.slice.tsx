import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';

const cartSlice = createSlice({
  name: 'shop',
  initialState: {
    cart: [],
    total: 34
  },
  reducers: {
    addToCart : ( state, action ) => {},
    removeFromCart : ( state, action ) => {},
    increment : ( state ) => {
      state.cart
    },
    decrement: ( state, action ) => {}

  }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
