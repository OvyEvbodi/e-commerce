// card in section 2
import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import Image from "next/image";

const BigCard: NextPage<BigCardProps> = ({title, description, image, label}) => {
  return (
    <div className="md:w-[320px] w-[280px] sm:w-[300px] lg:w-[340px] xl:w-[400px]">
      <div className="bg-green rounded-[30px] w-full overflow-hidden h-[60%]">
        <Image src={image} width={400} height={300} alt={label} />
      </div>
      <div className="p-2 md:p-4 text-leftmd:w-[320px] w-[280px] sm:w-[300px] lg:w-[340px] xl:w-[400px] lg:min-h-[20vh]">
        <h3 className="text-[1.4rem] text-grey-text leading-8">{title}</h3>
        <p className="leading-[25px] text-grey-text font-[500]">{description}</p>
        <SmallButton text='Shop now' />
      </div>
    </div>
  )
};

export default BigCard;