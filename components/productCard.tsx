// card in section 2
import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import Image from "next/image";

const ProductCard: NextPage<BigCardProps> = ({title, image, label, price}) => {
  return (
    <div className="w-[250px] sm:w-[280px] md:w-[300px] xl:w-[320px]">
      <div className="bg-green rounded-[6px] border border-[3px] border-green w-full overflow-hidden h-[320px]">
        <Image src={image} width={350} height={600} alt={label} />
      </div>
      <div className="p-2 md:p-4 text-left w-full lg:min-h-[20vh]">
        <h5 className="text-[1.05rem] text-grey-text leading-8">{title}</h5>
        {/* <p className="font-bold text-[1.4rem]">{price}</p> */}
        <SmallButton text='Shop now' />
      </div>
    </div>
  )
};

export default ProductCard;