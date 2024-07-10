// card in section 2
'use client'

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import BigCardProps from "@/interfaces/BigCardProps";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import Image from "next/image";
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from "@/redux/store";


const ProductCard: NextPage<BigCardProps> = ({id, title, image, label, price}) => {

  const dispatch = useDispatch();
  const storeCart = useSelector((state: RootState) => state.shop.cart);

  const addNewItem = () => {
    
    const index = storeCart.findIndex((item => id === item.id));

    if (index === -1) {
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
    <div className="w-[240px] md:w-[260px] lg:w-[270px] xl:w-[290px]">
      <div className="overflow-hidden ">
        <Image src={image} width={350} height={600} alt={label} />
        {/* <img src={image} className="h-full w-full"/> */}
      </div>
      <div className="p-2 md:p-4 text-left]">
        <h5 className="text-[1.4rem] font-bold text-grey-text leading-8">{title}</h5>
        <div className="flex">
          <span className="font-bold text-[1.4rem]">${price}</span>
          <span className="text-[0.7rem] line-through">${price}</span>
        </div>
        <SmallButton text='Add to cart' onClick={addNewItem}/>
      </div>
    </div>
  )
};

export default ProductCard;