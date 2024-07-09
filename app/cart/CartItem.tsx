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
      <div className="flex flex-col-reverse md:flex-row flex-wrap items-center justify-center gap-1 md:gap-4">
        <div>
          <Image src={image} width={100} height={100} alt={title} />
        </div>
        <h3 className="text-[1.2rem]">{title}</h3>
      </div>
      <div className="md:w-3/5 text-[1.15rem] md:text-[1.3rem] gap-6 flex flex-wrap justify-evenly items-center p-2">
        <p className="">${price}</p>
        <p className="bg-grey-bg p-1 px-2 rounded-full">{quantity}</p>
        <p>${quantity! * price!}</p>
        <button onClick={() => dispatch(removeFromCart(id))}>
          <Image src='/close-circle.png' width={30} height={40} alt={title} />
        </button>
      </div>
    </div>
  )
};

export default CartItem;