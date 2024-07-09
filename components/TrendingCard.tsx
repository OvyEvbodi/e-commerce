// card in section 2
'use client'

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import Image from "next/image";

const TrendingCard: NextPage<BigCardProps> = ({id, title, image, label, price}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[250px] sm:w-[280px] md:w-[300px] xl:w-[330px]">
      <div className="rounded-[6px] w-full overflow-hidden h-[321px]">
        <Image src={image} width={1753} height={1709} alt={label} />
      </div>
      <div className="p-2 md:p-4 text-left w-full lg:min-h-[20vh]">
        <h5 className="text-[1.05rem] text-grey-text leading-8">{title}</h5>
        <p className="font-bold text-[1.4rem]"><span>$</span>{price}</p>
        <SmallButton text='Add to cart' onClick={() => dispatch(addToCart({id, title, price, quantity: 1, image}))}/>
      </div>
    </div>
  )
};

export default TrendingCard;