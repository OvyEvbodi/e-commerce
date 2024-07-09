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
          <div className="bg-slate-300 p-1 ">
            <span>0 </span>
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
    <div>
      <div className="font-bold text-[1.05rem]">{text}</div>
      <div>
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