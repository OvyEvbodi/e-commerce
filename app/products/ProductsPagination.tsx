// products list
'use client'

import { NextPage } from "next";
import { productCardProps } from "@/interfaces/BigCardProps";
import ProductCard from "@/components/productCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { changePage, calculateTotal, updateProducts } from "@/redux/cart.slice";
import { useState, useEffect } from "react";
import ArrowButton from "@/components/ArrowButton";

// this needs to have all the fields returned from the api
// and Timbu is really shitty, so don't bother, just use any

// remember to switch to a better api after HNG
interface AllProductsProps {
  apiResponse: productCardProps[];
}

const ProductsPagination: NextPage<any> = (apiResponse) => {
  const size = useSelector((state: RootState) => state.shop.size);
  const page = useSelector((state: RootState) => state.shop.page);
  const total = useSelector((state: RootState) => state.shop.total);
  const shopList = useSelector((state: RootState) => state.shop.products);

  const [ productSet, setProductsSet ] = useState<productCardProps[]>([]);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const productList: productCardProps[] = apiResponse && apiResponse.items.map((item: any) => {
    return {
      title: item.name,
      price: item.current_price[0].NGN[0],
      description: item.description,
      category: item.category,
      quantity: item.available_quantity,
      image: item.photos,
      label: item.name,
      id: item.id
    }
  })


  const handlePagination = (page: number, idx: number) => {
    if ( page <= 0 ) return
    if (page > Math.floor(total / size) && page !== 1) return
    setIndex(idx)
    dispatch(changePage(page))
    setProductsSet(productList.slice(Math.floor(((size * page) - size)), Math.floor((((size * page) - size) + size))));
  }
  useEffect( () => {
    dispatch(calculateTotal(apiResponse.total))
    handlePagination(1, 0)
    console.log(total)
    console.log(productSet)
    dispatch(updateProducts(productList))
  }, [])
  
  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
        {
          productSet.map((item: productCardProps ) => (
            <div key={item.id}>
              <ProductCard { ...item } />
            </div>
          ))
        }
      </div>
      <div className="flex gap-6 absolute left-[50%] translate-x-[-50%] ">
        <ArrowButton text="<" type="button" flag="left" onClick={() => handlePagination(page - 1, index - 1)}/>
        <div className="flex gap-2 text-3xl">
          {
            [...Array(Math.floor(total/size))].map((_, idx) => (
              idx === index ? <span className='text-orange cursor-pointer' key={idx}>&spades;</span> :
              <span className="cursor-pointer" onClick={() => handlePagination(idx + 1, idx)} key={idx}>&spades;</span>
            ))
          }
        </div>
        <ArrowButton text=">" type="button" flag="right" onClick={() => handlePagination(page + 1, index + 1)}/>
        <p>Page {page} of { Math.floor(total / size) }</p>
      </div>
    </div>
  )
};

export default ProductsPagination;
