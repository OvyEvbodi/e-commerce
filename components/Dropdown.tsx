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
          
          <div onClick={toggle} className="mt-4 cursor-pointer flex items-center p-2 bg-grey-bg rounded-[33px] mb-4 font-[600] lg:text-[1.05rem]">
            { !optionToggle ? 
              <label htmlFor="filter_check" className="custom_uncheck mr-2 text-[#becbce]">
                <input type="" id="filter_check" name="filter_check"/>
                <span className="ball"></span>
              </label>
            :  
              <label htmlFor="filter_check" className="custom_check mr-2">
                  <input type="" id="filter_check" name="filter_check"/>
                  <span className="ball"></span>
              </label>
            }
            {
              !optionToggle ? 
                <span >{text}</span>
              :
                <span className="text-orange">{text}</span>

            }
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
    <div className="bg-white mb-2 max-w-[250px] md:mb-6 lg:mb-1 py-4 lg:py-4 lg:px-7 border rounded-[20px] border-2 border-black">
      <div onClick={ toggle } className="pl-4 cursor-pointer hover:opacity-85 font-bold text-[1.05rem] flex justify-between">{text}
        {
            selectToggle ? 
              <span className="px-4 text-orange text-md">&#9206;</span> 
            :
              <span className="px-4 text-orange text-md">&#9207;</span>
        }
        {/* <span className="px-4 text-orange text-sm">&#9206;</span> */}
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