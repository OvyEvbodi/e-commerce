// card in section 2
'use client'

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import Image from "next/image";
import Link from "next/link";

const ProductCard: NextPage<BigCardProps> = ({id, title, image, label, price}) => {

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
        <SmallButton text='Add to cart' onClick={() => dispatch(addToCart({id, title, price, quantity: 1, image}))}/>
      </div>
    </div>
  )
};

export default ProductCard;