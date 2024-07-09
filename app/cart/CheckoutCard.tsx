// checkout card
'use client'

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, increment, decrement } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";
import SmallButton from "@/components/SmallButton"
import Link from "next/link"


const CheckoutCard = () => {
  const total = useSelector((state: RootState) => state.shop.total);

  return (
    <div className="text-[1.15rem] font-[500] md:text-[1.3rem] md:font-bold lg:h-[50vh] lg:w-1/3 p-4 lg:px-12">
          <div className="bg-grey-bg  p-4 rounded-[8px] flex flex-wrap justify-between items-center p-2">
            Order Summary
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Subtotal</p>
            <p>${total}</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p className="text-orange font-normal text-[1.05rem]">Add Coupon Code</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <div className="text-center">
            <Link href="checkout">
              <SmallButton text="Proceed to checkout" flag="fill" />
            </Link>
          </div>
        </div>
  )
};

export default CheckoutCard;