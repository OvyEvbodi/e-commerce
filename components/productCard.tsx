// card in section 2
'use client'

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, increment, decrement } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

const ProductCard: NextPage<BigCardProps> = ({title, image, label, price}) => {

  const total = useSelector((state: RootState) => state.shop.total);
  const storeCart = useSelector((state: RootState) => state.shop.cart);
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] sm:w-[280px] md:w-[300px] xl:w-[320px]">
      <div className="overflow-hidden ">
        <Image src={image} width={350} height={600} alt={label} />
        {/* <img src={image} className="h-full w-full"/> */}
      </div>
      <div className="p-2 md:p-4 text-left]">
        <h5 className="text-[1.05rem] text-grey-text leading-8">{title}</h5>
        <div className="flex">
          <span className="font-bold text-[1.4rem]">${price}</span>
          <span className="text-[0.7rem] line-through">${price}</span>
        </div>
        <SmallButton text='Add to cart' onClick={() => dispatch(addToCart({title, price, quantity: 1, image}))}/>
      </div>

      <div>{JSON.stringify(storeCart)}</div>

    </div>
  )
};

export default ProductCard;