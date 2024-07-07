// stats card component
import StatsCardProps from "@/interfaces/StatsCardProps";
import { NextPage } from "next";

const StatsCard: NextPage<StatsCardProps> = ({ number, symbol, text }) => {
  return (
    <div className=" flex flex-col wrap justify-center items-center md:w-[280px]">
      <div className="flex items-start">
        <p className="text-[4rem] font-bold">{number}</p>
        <p className="text-[1rem]">{symbol}</p>
      </div>
      <p className="text-center leading-6 font-normal">{text}</p>
    </div>
  )
};

export default StatsCard;