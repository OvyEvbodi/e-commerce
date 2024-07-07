// card in section 2
import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import Image from "next/image";

const ProductCard: NextPage<BigCardProps> = ({title, image, label, price}) => {
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
        <SmallButton text='Shop now' />
      </div>
    </div>
  )
};

export default ProductCard;