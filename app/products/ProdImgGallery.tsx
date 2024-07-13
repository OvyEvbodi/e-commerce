// single product Gallery 
'use client'

import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";

interface imageString {
  url: string;
}
export interface ProdGalleryProps {
  images: imageString[];
}

const ProdGallery: NextPage<ProdGalleryProps> = ({ images }) => {

  // takes an array of objects that each have a src and a title attribute
  const [index, setIndex] = useState(0);
  const [onDisplay, setOnDisplay ] = useState(false);

  const handlePrev = (idx: number) => {
    if (idx !== 0) {
      setIndex(idx - 1)
    } else {setIndex(images.length-1)}
  }

  const handleNext = (idx: number) => {
    if (idx + 1 !== images.length)  {
      setIndex(idx + 1)
    } else {setIndex(0)}
  }
  // console.log(images)
  
  return (
    <div className="bg-grey-bg min-w-[250px] min-h-[300px] lg:min-w-[400px]">
      {
        <div className="p-6 flex flex-col gap-6 items-center">
        {/* <span>{images[index].title}</span> */}
        <div className=" relative overflow-hidden border border-4 rounded-[8px] border-green w-[350px] h-[300px] flex gap-4 justify-center items-center">
          <Image src={`https://api.timbu.cloud/images/${images[index].url}`} width={350} height={350} alt="product image" className="" />
          <button id='left' className='control left' onClick={() => handlePrev(index)}>&larr;</button>
          <button id='right' className='control right' onClick={() => handleNext(index)}>&rarr;</button>
        </div>
        <div className="flex gap-2 text-3xl">
          {
            [...Array(images.length)].map((_, idx) => (
              idx === index ? <span className='text-red-600 cursor-pointer' key={idx}>&spades;</span> :
              <span className="cursor-pointer" onClick={() => setIndex(idx)}  key={idx}>&spades;</span>
            ))
          }
        </div>
        </div>
      }
    </div>
  )
};

export default ProdGallery;