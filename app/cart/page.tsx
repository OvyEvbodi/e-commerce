// Carts page

import CartItem from "@/app/cart/CartItem";
import { cart_list } from "@/api/data.json";
import SmallButton from "@/components/SmallButton";
import ProductSlide from "@/components/ProductSlide";
import Link from "next/link";

export const metadata = { title: 'Cart Helendo' };

const Cart = () => {
  return (
    <main className="mb-6 lg:mb-16">
      <div className="p-6 lg:px-12 text-orange font-normal text-[1.05rem]">
        <span>&larr; </span>
        <Link href="products">Back to products</Link>
      </div>
      <div className="flex flex-wrap ">
        <div  className="md:min-w-[700px] lg:w-2/3  p-4 lg:px-12">
          <div className="bg-grey-bg rounded-[8px] text-[1.2rem] flex flex-wrap justify-between items-center p-2">
            <h6 className="font-[500] md:font-bold">Item</h6>
            <div className="md:font-[600] lg:font-bold md:w-3/5 text-[1.15rem] md:text-[1.3rem] gap-4 flex flex-wrap justify-evenly items-center p-2">
              <h6>Price</h6>
              <h6>Quantity</h6>
              <h6>Subtotal</h6>
            </div>
          </div>
          <div className="w-full min-h-[40vh]">
            {
              cart_list.map(item => (
                <div key={item.id}>
                  <CartItem { ...item }/>
                </div>
              ))
            }
          </div>
        </div>
        <div className="text-[1.15rem] font-[500] md:text-[1.3rem] md:font-bold lg:h-[50vh] lg:w-1/3 p-4 lg:px-12">
          <div className="bg-grey-bg  p-4 rounded-[8px] flex flex-wrap justify-between items-center p-2">
            Order Summary
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Subtotal</p>
            <p>$.00</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p className="text-orange font-normal text-[1.05rem]">Add Coupon Code</p>
          </div>
          <div className="flex flex-wrap justify-between items-center p-4">
            <p>Total</p>
            <p>$.00</p>
          </div>
          <div className="text-center">
            <Link href="checkout">
              <SmallButton text="Proceed to checkout" flag="fill" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ProductSlide />
      </div>
    </main>
  )
};

export default Cart;