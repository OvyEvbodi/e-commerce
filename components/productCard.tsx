// card in section 2
'use client'

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import { productCardProps } from "@/interfaces/BigCardProps";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import Image from "next/image";
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useState } from "react";


const ProductCard: NextPage<productCardProps> = ({id, title, image, label, price}) => {

  const displayImage: string = image && image[0] ? `https://api.timbu.cloud/images/${image[0].url}` : "" ;
  const dispatch = useDispatch();
  const storeCart = useSelector((state: RootState) => state.shop.cart);
  const shopList = useSelector((state: RootState) => state.shop.products);
  const [ viewCart, setViewCart ] = useState(false);
  const cartTimeOut = () => {
    setTimeout(() => {setViewCart(false)}, 3000)
  };

  const addNewItem = () => {

    const index = storeCart.findIndex((item => id === item.id));
    const shopIndex = shopList.findIndex((item => id === item.id));
    console.log(id)


    if (shopList[shopIndex].quantity === 0) {
      toast.info('We hate that you missed this product, we should restock soon.', {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else if (index === -1) {
    setViewCart(true)
    dispatch(addToCart({id, title, price, quantity: 1, image}))
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
    cartTimeOut()
    } else {
    console.log('item already in cart!')
    console.log(index)
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
  
  return (
    <div className="w-[240px] md:w-[280px] lg:w-[320px] xl:w-[350px]">
      <Link href={`products/${id}`} >
        <div className="overflow-hidden ">
          <Image src={displayImage} width={350} height={600} alt={label} />
        </div>
      </Link>
      <div className="py-2 md:py-4 text-left]">
        <Link href={`products/${id}`} >
          <h5 className="text-[1.4rem] text-grey-text font-[400] leading-8">{title}</h5>
        </Link>
        <div className="flex">
          <span className="font-bold text-[1.4rem]">${price}</span>
          <span className="text-[0.7rem] line-through">${price}</span>
        </div>
        { viewCart && <Link href='/cart' className='text-xs p-2 text-gray-500 underline hover:text-accent/80 duration-300 block'>View cart</Link>}
        <SmallButton text='Add to cart' onClick={addNewItem}/>
      </div>
    </div>
  )
};

export default ProductCard;