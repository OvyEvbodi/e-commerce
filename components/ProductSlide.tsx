// Categories
import { cart_page_cards } from "@/api/data.json";
import ArrowButton from "@/components/ArrowButton";
import ProductCard from "./productCard";
import TrendingCard from "@/components/TrendingCard";

const ProductSlide = () => {
  return (
    <div id="product_slide" className="p-4 lg:p-12 lg:min-h-[64vh] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 ">
        <h3 className="font-bold text-[1.5rem]">Discover Similar Products</h3>
        {/* <div className="flex gap-4">
          <ArrowButton text="&#8606;" flag="left"/>
          <ArrowButton text="&#8608;" flag="right"/>
        </div> */}
      </div>
      <div className="flex-wrap md:flex-nowrap md:overflow-x-scroll flex gap-4 items-stretch justify-evenly min-h-[300px]">
        {
          cart_page_cards.map(item => (
            <div key={item.id}>
              <TrendingCard { ...item }/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductSlide;