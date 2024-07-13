// checkout card
'use client'

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SmallButton from "@/components/SmallButton";
import CheckoutButton, { CheckoutButtonProps } from "@/app/checkout/CheckoutButton"
import Link from "next/link"
import { NextPage } from "next";


const CheckoutCard:NextPage<CheckoutButtonProps> = ({text, pageUrl, type}) => {
  const storeCart = useSelector((state: RootState) => state.shop.cart);
  const total = storeCart.reduce((prev, curr) => prev + (curr.quantity! * curr.price!), 0);

  return (
    <div className="text-[1.15rem] font-[500] md:text-[1.2rem] md:font-bold lg:h-[50vh] lg:w-1/3 p-4 lg:px-12">
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
            <p className="cursor-pointer text-orange font-normal text-[1.05rem] hover:opacity-85">Add Coupon Code</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <div className="text-center">
            <CheckoutButton text={text} pageUrl={pageUrl} type={type} />
          </div>
        </div>
  )
};

export default CheckoutCard;