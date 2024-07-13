// single product Summary 
'use client'

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import Image from "next/image";
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ProductSummaryProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  inStock: boolean;
  rating?: number;
  quantity: number;
  code: number;
  image: string;
}

const ProdSummary:NextPage<ProductSummaryProps> = (props) => {

  const router = useRouter();
  const dispatch = useDispatch();
  const storeCart = useSelector((state: RootState) => state.shop.cart);

  const addNewItem = () => {
    
  const index = storeCart.findIndex((item => props.id === item.id));
  if (index === -1) {
    dispatch(addToCart({id: props.id, title: props.title, price: props.price, quantity: 1, image: props.image}))
    toast.success('Item added to cart',  {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      })
  } else {
    console.log('item already in cart!')
    // console.log(index)
    toast.error("You've already picked this",  {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      })
  }

};

  const handleBuyNow = () => {
    addNewItem();
    router.push("/cart");
  };


  return (
    <div className="capitalize min-w-[250px]  max-w-[420px] min-h-[300px] lg:min-w-[400px] flex flex-col gap-6">
      <div className="bg-grey-bg font-bold text-[0.8rem] flex flex-col items-start justify-center rounded-[8px] p-4 px-2">
        <p>save ${Math.floor(0.1 * props.price)}</p>
      </div>
      <div className="flex flex-col items-start justify-center p-1 px-2">
        <p className="font-bold text-[1.1rem]">{props.title}</p>
        <p className="text-[0.8rem]">{props.description}</p>
      </div>
      <div className="flex flex-col items-start justify-center p-1 px-2">
        <div className="flex gap-2">
          <p className="text-[1.4rem] font-bold">${props.price}</p>
          <p className="text-[0.7rem]  line-through">${Math.floor(0.1 * props.price +  props.price)}</p>
        </div>
        <div className="flex gap-2">
          <p>Product code: {props.code}</p>
          <p className="bg-grey-bg rounded-[8px] px-4">In stock: {JSON.stringify(props.inStock)}</p>
        </div>
        <div  className="flex gap-2">
          {/* <p>something here</p> */}
          <p>{props.rating}</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center p-1 px-2">
        <div className="text-[1.75rem]">{props.quantity} <span className="text-[1.1rem]">pieces left</span></div>
      </div>
      <div className="flex items-start justify-start gap-4 p-1 px-2">
        <SmallButton text="Add to cart" flag="fill" onClick={addNewItem} />
        <SmallButton text="Buy now" onClick={handleBuyNow}/>
        {/* <div>love</div> */}
      </div>
    </div>
  )
};

export default ProdSummary;