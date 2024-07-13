// cart
'use client'
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";
import CartItem from "@/app/cart/CartItem";
import Link from "next/link";

const Cart = () => {
  const storeCart = useSelector((state: RootState) => state.shop.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  };


  return (
    <div className="w-full min-h-[40vh]">
      { storeCart.length >= 1 ? 
        <div>
          <div onClick={handleClearCart} className="border border-orange max-w-max rounded-sm p-2 px-4 text-[1rem] font-bold text-orange cursor-pointer hover:bg-orange hover:text-white transition-all duration-300">Clear Cart </div>
          <div>
            {storeCart.map(item => (
              <div key={item.id}>
                <CartItem { ...item }/>
              </div>
            ))
            } 
          </div>
        </div> 
        :
        <div className="mt-6 flex flex-col justify-center items-center font-bold text-lg">It looks like you haven&apos;t made a choice yet 
          <button className="max-w-max my-1 py-1 px-8 text-sm hover:text-green rounded-[3px] border border-2 border-green hover:bg-white bg-green text-white transition-all duration-300">
        <Link href="products" >Shop now</Link>
      </button>
        </div>
      }
    </div>
  )
};

export default Cart;