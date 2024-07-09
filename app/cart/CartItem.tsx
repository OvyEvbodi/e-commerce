// Cart item component
'use client'
import { NextPage } from "next";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increment, decrement } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";
import BigCardProps from "@/interfaces/BigCardProps";

const CartItem:NextPage<BigCardProps> = ({id, image, title, price, quantity }) => {
  const total = useSelector((state: RootState) => state.shop.total);
  const storeCart = useSelector((state: RootState) => state.shop.cart);
  const dispatch = useDispatch();


  return (
    <div className="py-4 flex flex-wrap items-center justify-between border-t">
      <div className="flex flex-col-reverse xl:flex-row flex-wrap lg:items-center justify-center gap-1 md:gap-4">
        <div className="">
          <Image className="w-[80px] md:w-[100px]" src={image} width={100} height={100} alt={title} />
        </div>
        <h3 className="text-[0.7rem] md:text-[1.2rem]">{title}</h3>
      </div>
      <div className="md:w-3/5 text-[0.8rem] md:text-[1.3rem] gap-[12px] md:gap-6 flex flex-wrap justify-evenly items-center p-2">
        <p className="">${price}</p>
        <div className="bg-grey-bg w-[100px] px-[12px] rounded-[25px] flex items-center justify-between">
          <div onClick={() => dispatch(decrement({ id, quantity }))} className="w-[25px] h-[25px] cursor-pointer bg-white text-center rounded-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6)] transition-colors hover:bg-green hover:text-white">-</div>
          <p className=" p-1 px-2 ">{quantity}</p>
          <div onClick={() => dispatch(increment(id))}  className="w-[25px] h-[25px] cursor-pointer bg-white text-center rounded-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6)] transition-colors hover:bg-green hover:text-white">+</div>
        </div>
        <p>${quantity! * price!}</p>
        <button onClick={() => dispatch(removeFromCart(id))}>
          <Image src='/close-circle.png' width={30} height={40} alt={title} className=" hover:opacity-80" />
        </button>
      </div>
    </div>
  )
};

export default CartItem;