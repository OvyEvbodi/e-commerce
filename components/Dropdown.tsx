// dropdown component
'use client'

import { NextPage } from "next";
import { useState } from "react";


interface DropdownOptionProps {
  text: string;
  icon: string;
  filters?: string [];
}

const DropdownOption:NextPage<DropdownOptionProps> = ({ icon, text }) => {

  const [ optionToggle, setOptionToggle ] = useState(false);

  const toggle = () => setOptionToggle(!optionToggle);  

  return (
    <div>
      { icon == "yes" ? 
        (
          
          <div onClick={toggle} className="mt-4 cursor-pointer flex p-2 bg-grey-bg rounded-[33px] mb-4 font-[600] lg:text-[1.05rem]">
            { !optionToggle ? 
              <p className="bg-[#becbce] w-[15.64px] h-[15.64px] rounded-full mr-2"></p>
            :  
            <span className="text-orange box-border text-xs border border-orange rounded-full py-[3px] px-[7px] mr-2">&#9210;</span>
            }
            <span >{text}</span>
          </div>
        
        ) 
      : 
        (
          <div onClick={ toggle }  className="mt-4 cursor-pointer bg-grey-bg rounded-[33px] font-[600] lg:text-[1.05rem] max-w-max flex ">
            <span className={ optionToggle ? "text-orange p-1 px-4 " : " p-1 px-4 "}>{text}</span>
          </div>
        ) }
    </div>
  )
};

const Dropdown:NextPage<DropdownOptionProps> = ({ text, icon, filters }) => {

  const [ selectToggle, setselectToggle ] = useState(false);

  const toggle = () => setselectToggle(!selectToggle);  

  return (
    <div className=" mb-2 max-w-[290px] md:mb-6 lg:mb-8 py-4 lg:py-6 lg:px-7 border rounded-[20px] border-2 border-black">
      <div onClick={ toggle } className="pl-4 cursor-pointer hover:opacity-85 font-bold text-[1.05rem] flex justify-between">{text}
        <span className="px-4 text-orange text-sm">&#9206;</span>
      </div>
      <div className={ !selectToggle ? "hidden" : "block" }>
        <div className={icon === "no" ? "flex flex-wrap gap-4 items-stretch" : "flex flex-col items-stretch"}>
          {
            filters!.map( (option, index) => (
              <DropdownOption text={option} icon={icon} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Dropdown;