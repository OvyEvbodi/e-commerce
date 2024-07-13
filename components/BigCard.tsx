// card in section 2
import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import Image from "next/image";
import Link from "next/link";

const BigCard: NextPage<BigCardProps> = ({title, description, image, label}) => {
  return (
    <div className="md:w-[320px] w-[275px] sm:w-[280px] lg:w-[300px] xl:w-[320px]">
      <div className="bg-green rounded-[30px] overflow-hidden ">
        <Image src={image} width={490} height={486} alt={label} />
      </div>
      <div className="p-2 md:p-4 flex flex-col flex-wrap  lg:min-h-[20vh]">
        <h3 className="text-[1.4rem] text-grey-text font-bold leading-8">{title}</h3>
        <p className="leading-[25px] text-grey-text font-[500]">{description}</p>
        <Link href="products">
          <SmallButton text='Shop now' />
        </Link>
      </div>
    </div>
  )
};

export default BigCard;
