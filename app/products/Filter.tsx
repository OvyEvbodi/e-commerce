// filter component on products page
'use client'

import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import filterIcon from "@/public//filter_icon.png";
import { useState } from "react";

const Filter = () => {

  const categoryList = ["bedroom", "living room", "dining room", "outdoor", "office", "decor"];
  const materialList = ["cloth", "wood", "upholstered", "glass", "rattan", "plastic"];
  const colourList = ["red", "orange", "green", "blue", "brown", "white"];
  const availabilityList = ["in stock", "out of stock"];
  const [ showMobileFilter, setShowMobileFilter ] = useState(false);
  console.log(showMobileFilter)


  return (
    <div>
      <div className=" block sm:hidden">
        <div className="p-4" onClick={() => setShowMobileFilter(!showMobileFilter) }>
        <Image src={filterIcon} width={24} height={24} alt="filter icon" />
        </div>
        <div className={showMobileFilter ? "px-10 py-2 flex flex-wrap gap-4 justify-between items-start" : " gap-4 flex flex-wrap px-10 py-2 hidden"} >
          <Dropdown text="category" icon="yes" filters={categoryList} />
          <Dropdown text="material" icon="no" filters={materialList} />
          <Dropdown text="colour" icon="yes"filters={colourList}  />
          <Dropdown text="availability" icon="yes" filters={availabilityList} />
        </div>
      </div>
      <section className="capitalize p-4 lg:max-w-[340px] hidden sm:block">
        <h2 className="font-bold mb-2 text-[1.7rem]">filter options</h2>
        <div className="sm:flex sm:flex-wrap sm:gap-6 sm:items-start lg:flex-col lg:items-stretch">
          <Dropdown text="category" icon="yes" filters={categoryList} />
          <Dropdown text="material" icon="no" filters={materialList} />
          <Dropdown text="colour" icon="yes"filters={colourList}  />
          <Dropdown text="availability" icon="yes" filters={availabilityList} />
        </div>
      </section>
    </div>
  )
};

export default Filter;