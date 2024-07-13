// products list

import { NextPage } from "next";
import { productCardProps } from "@/interfaces/BigCardProps";
import ProductCard from "@/components/productCard";

interface AllProductsProps {
  prodList: productCardProps[];
}

const ProductsPagination: NextPage<AllProductsProps> = ({prodList}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
        {
          prodList.map((item: productCardProps ) => (
            <div key={item.id}>
              <ProductCard { ...item } />
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default ProductsPagination;
