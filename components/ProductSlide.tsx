// Categories
import { cart_page_cards } from "@/api/data.json";
import AllProducts from "@/app/products/AllProducts";
import ArrowButton from "@/components/ArrowButton";
import ProductCard from "@/components/productCard";
import TrendingCard from "@/components/TrendingCard";

const ProductSlide = () => {
  return (
    <div id="product_slide" className="p-4 lg:p-12 lg:min-h-[64vh] w-full">
      <div className="flex flex-wrap justify-between items-center p-2 ">
        <h3 className="font-bold text-[1.5rem]">Discover Other Products</h3>
        {/* <div className="flex gap-4">
          <ArrowButton text="&#8606;" flag="left"/>
          <ArrowButton text="&#8608;" flag="right"/>
        </div> */}
      </div>
      <div className="flex-wrap md:flex-nowrap md:overflow-x-scroll flex gap-4 items-stretch justify-evenly min-h-[300px]">
        <AllProducts />
      </div>
    </div>
  )
}

export default ProductSlide;