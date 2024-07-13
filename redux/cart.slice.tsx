import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { productCardProps } from '@/interfaces/BigCardProps';

const cart: productCardProps[] = [];

const cartSlice = createSlice({
  name: 'shop',
  initialState: {
    cart,
    page: 1,
    size: 2,
    total: 0
  },
  reducers: {
    addToCart : ( state, action ) => {
      const index = state.cart.findIndex((item => item.id === action.payload.id));
      console.log(index);
      if ( index === -1 ) state.cart.push(action.payload);
    },
    removeFromCart : ( state, action ) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    increment : ( state, action ) => {
      const index = state.cart.findIndex((item => item.id === action.payload));
      state.cart[index].quantity = state.cart[index].quantity! + 1;
    },
    decrement: ( state, action ) => {
      if (action.payload.quantity !== 0) {
        const index = state.cart.findIndex((item => item.id === action.payload.id));
        state.cart[index].quantity = state.cart[index].quantity! - 1;
      }
    },
    changePage: ( state, action ) => {
      state.page = action.payload;
    }
  }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, changePage } = cartSlice.actions;
