// product listing page

import { product_cards } from "@/api/data.json";
import ProductCard from "@/components/productCard";
import Filter from "@/app/products/Filter";

export const metadata = { title: 'Products Helendo' };

const ProductsPage = () => {
  return (
    <main className="flex flex-wrap">
      <div className="p-4 min-w-[100vw] lg:min-w-[28vw] lg:w-[28vw] lg:min-h-[100vh]">
        <Filter />
      </div>
      <div className="p-4 min-w-[100vw] lg:min-w-[72vw] lg:w-[72vw] lg:min-h-[100vh]">
        <h4 className="text-[1.05rem] font-[500]"></h4>
        <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
          {
            product_cards.map(item => (
              <div key={item.id}>
                <ProductCard { ...item } />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
};

export default ProductsPage;