// dropdown component

import { NextPage } from "next";
import { useState } from "react";


interface DropdownOptionProps {
  text: string;
  icon: string;
  filters?: string [];
}

const DropdownOption:NextPage<DropdownOptionProps> = ({ icon, text }) => {
  return (
    <div>
      { icon == "yes" ? 
        (
          <div className="flex p-2 bg-grey-bg rounded-[33px] mb-4 font-[600] lg:text-[1.05rem]">
            <p className="bg-[#becbce] w-[15.64px] h-[15.64px] rounded-full mr-2"></p>
            <span className="text-orange box-border text-xs border border-orange rounded-full py-[3px] px-[7px] mr-2">&#9210;</span>
            <span>{text}</span>
          </div>
        ) 
      : 
        (
          <div className="bg-slate-200 p-1 ">
            <span>{text}</span>
          </div>
        ) }
    </div>
  )
};

const Dropdown:NextPage<DropdownOptionProps> = ({ text, icon, filters }) => {
  return (
    <div className="mb-4 md:mb-6 lg:mb-8 py-4 lg:py-6 lg:px-7 border rounded-[20px] border-2 border-black">
      <div className="font-bold text-[1.05rem] flex justify-between">{text}
        <span className="text-orange text-sm">&#9206;</span>
      </div>
      <div className="">
        {
          filters!.map( (option, index) => (
            <DropdownOption text={option} icon={icon} key={index}/>
          ))
        }
      </div>
    </div>
  )
};

export default Dropdown;