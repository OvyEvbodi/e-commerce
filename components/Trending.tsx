// Trending

import SmallButton from "@/components/SmallButton";
import {trending_cards} from "@/api/data.json";
import TrendingCard from "@/components/TrendingCard";

const Trending = () => {
  return (
    <div id="trending" className="bg-off-white lg:min-h-[100vh] w-[100vw]">
      <div className="flex flex-wrap justify-between items-center p-4 lg:py-6 lg:px-12">
        <h3 className="font-bold leading-8 text-[1.5rem]">Trending products for you </h3>
        <SmallButton text="View all products" flag="fill" />
      </div>
      <div className="min-h-[80vh] p-4 lg:py-6 lg:px-12 flex flex-wrap justify-evenly items-stretch gap-4 lg:gap-6">
        {
          trending_cards.map(item => (
            <div key={item.id}>
              <TrendingCard { ...item }/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Trending;