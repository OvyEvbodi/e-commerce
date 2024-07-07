// Categories
import { category_cards } from "@/api/data.json";
import CategoryCard from "@/components/CategoryCard";
import ArrowButton from "@/components/ArrowButton";

const Categories = () => {
  return (
    <div id="categories" className="p-4 lg:p-12 lg:min-h-[64vh] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 ">
        <h3 className="font-bold text-[1.5rem]">Featured Categories</h3>
        <div className="flex gap-4">
          <ArrowButton text="&#8606;" flag="left"/>
          <ArrowButton text="&#8608;" flag="right"/>

        </div>
      </div>
      <div className="flex-wrap md:flex-nowrap md:overflow-x-scroll flex gap-4 items-stretch justify-evenly min-h-[300px]">
        {
          category_cards.map(item => (
            <div key={item.id}>
              <CategoryCard { ...item }/>
            </div>
          ))
        }
      </div>
      <div className="p-2 text-center text-orange">
        0 0 0 0 
      </div>
    </div>
  )
}

export default Categories;