// card in category section
import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import Image from "next/image";

const CategoryCard: NextPage<BigCardProps> = ({title, description, image, label}) => {
  return (
    <div className="w-[200px] flex flex-col items-center">
      <div className="bg-grey-bg rounded-[50%] w-[200px] h-[200px] overflow-hidden flex justify-center item-center">
        <Image src={image} width={140} height={200} alt={label} />
      </div>
      <div className="p-2 md:p-4 flex flex-col justify-center items-center lg:min-h-[20vh]">
        <h3 className="text-[1.2rem] text-grey-text font-bold leading-6">{title}</h3>
        <p className="leading-[25px] text-grey-text font-[400]">{description}</p>
      </div>
    </div>
  )
};

export default CategoryCard;