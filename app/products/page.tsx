// product listing page

import { product_cards } from "@/api/data.json";
import ProductCard from "@/components/productCard";

const ProductsPage = () => {
  return (
    <main className="flex flex-wrap">
      <div className="bg-slate-200 p-4 min-w-[100vw] lg:min-w-[26vw] lg:w-[26vw] lg:min-h-[100vh]">
        filter
      </div>
      <div className="p-4 min-w-[100vw] lg:min-w-[74vw] lg:w-[74vw] lg:min-h-[100vh]">
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