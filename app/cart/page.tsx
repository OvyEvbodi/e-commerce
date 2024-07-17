// Carts page

import CartItem from "@/app/cart/CartItem";
import { cart_list } from "@/api/data.json";
import SmallButton from "@/components/SmallButton";
import ProductSlide from "@/components/ProductSlide";
import Link from "next/link";
import CheckoutCard from "@/app/cart/CheckoutCard";
import Cart from "@/app/cart/Cart";


export const metadata = { title: 'Cart Helendo' };

const CartPage = () => {
  return (
    <main className="mb-6 lg:mb-16">
      <div className="p-6 lg:px-12 text-orange font-normal text-[1.05rem]">
        <span>&larr; </span>
        <Link href="products" className=" hover:opacity-80">Back to products</Link> 
      </div>
      <div className="flex flex-wrap ">
        <div  className="md:min-w-[700px] lg:w-2/3  p-4 lg:px-12">
          <div className="bg-grey-bg rounded-[8px] text-[1.2rem] flex flex-wrap justify-between items-center p-2">
            <h6 className="font-[500] md:font-bold">Item</h6>
            <div className="hidden md:flex md:font-[600] lg:font-bold md:w-3/5 text-[1rem] sm:text-[1.15rem] md:text-[1.3rem] gap-4 flex-wrap justify-evenly items-center p-2">
              <h6>Price</h6>
              <h6>Quantity</h6>
              <h6>Subtotal</h6>
            </div>
          </div>
          <Cart />
        </div>
        <CheckoutCard text="Proceed to checkout" pageUrl="/checkout"/>
      </div>
      <div>
        <ProductSlide />
      </div>
    </main>
  )
};

export default CartPage;