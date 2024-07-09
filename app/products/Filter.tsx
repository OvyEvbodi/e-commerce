// filter component on products page

import Dropdown from "@/components/Dropdown";

const Filter = () => {

  const categoryList = ["bedroom", "living room", "dining room", "outdoor", "office", "decor"];
  const materialList = ["cloth", "wood", "upholstered", "glass", "rattan", "plastic"];
  const colourList = ["red", "orange", "green", "blue", "brown", "white"];
  const availabilityList = ["in stock", "out of stock"];

  return (
    <section className="capitalize p-4 lg:max-w-[340px] relative">
      <h2 className="font-bold mb-2 text-[1.7rem]">filter options</h2>
      <div className="sm:flex sm:flex-wrap sm:gap-6 sm:items-start sm:absolute lg:static lg:block">
        <Dropdown text="category" icon="yes" filters={categoryList} />
        <Dropdown text="material" icon="no" filters={materialList} />
        <Dropdown text="colour" icon="yes"filters={colourList}  />
        <Dropdown text="availability" icon="yes" filters={availabilityList} />
      </div>
    </section>
  )
};

export default Filter;