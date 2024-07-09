import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';
import BigCardProps from '@/interfaces/BigCardProps';

const cart: BigCardProps[] = [];

const cartSlice = createSlice({
  name: 'shop',
  initialState: {
    cart,
    total: 0
  },
  reducers: {
    addToCart : ( state, action ) => {
      state.cart.push(action.payload);
    },
    removeFromCart : ( state, action ) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    increment : ( state ) => {
      
    },
    decrement: ( state, action ) => {}

  }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions;
