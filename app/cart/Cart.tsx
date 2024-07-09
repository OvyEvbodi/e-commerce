// cart
'use client'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, increment, decrement } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";
import CartItem from "@/app/cart/CartItem";

const Cart = () => {
  const storeCart = useSelector((state: RootState) => state.shop.cart);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-[40vh]">
      {
        storeCart.map(item => (
          <div key={item.id}>
            <CartItem { ...item }/>
          </div>
        ))
      }
    </div>
  )
};

export default Cart;