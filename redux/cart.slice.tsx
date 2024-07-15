import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { productCardProps } from '@/interfaces/BigCardProps';

const cart: productCardProps[] = [];
const products: productCardProps[] = [];

const cartSlice = createSlice({
  name: 'shop',
  initialState: {
    products,
    cart,
    page: 1,
    size: 10,
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
    clearCart: ( state ) => {
      state.cart = [];
    },
    increment : ( state, action ) => {
      const index = state.cart.findIndex((item => item.id === action.payload));
      state.cart[index].quantity = state.cart[index].quantity! + 1;
    },
    decrement: ( state, action ) => {
      if (action.payload.quantity !== 0) {
        const index = state.cart.findIndex((item => item.id === action.payload.id));
        state.cart[index].quantity = state.cart[index].quantity! - 1;
      } else state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    changePage: ( state, action ) => {
      state.page = action.payload;
    },
    calculateTotal: ( state, action ) => {
      state.total = action.payload;
    },
    updateProducts: ( state, action ) => {
      state.products = action.payload;
    }
  }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, increment, decrement, changePage, calculateTotal, updateProducts } = cartSlice.actions;
