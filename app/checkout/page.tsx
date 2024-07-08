// checkout 

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import Link from "next/link";

interface CheckoutFormRowProps {
  text: string;
  placeholder: string;
  type: string;
}
const CheckoutFormRow: NextPage<CheckoutFormRowProps> = ({text, placeholder, type}) => {
  return (
    <div className="flex flex-col p-2 sm:min-w-[40vw] lg:min-w-[0vw]">
      <label className="text-[0.95rem] md:text-[1.05rem] font-[600]"
        htmlFor={text}>
          {text}
      </label>
      <input className="placeholder:text-grey-text text-[0.7rem] bg-grey-bg px-2 py-[10px] md:py-4 rounded-[8px]"
        type={type} placeholder={placeholder}
      />
    </div>
  )
};

const Checkout = () => {
  return (
    <main className="mb-6 lg:mb-16">
      <div className="p-6 lg:px-12 text-orange font-normal text-[1.05rem]">
        <span>&larr; </span>
        <Link href="products">Back to products</Link>
      </div>
      <h6 className="text-[1.2rem] md:text-[2.1rem] font-[500] md:font-bold px-6 lg:px-12 capitalize">Billing details</h6>
      <div className="flex flex-wrap ">
        <div  className="md:min-w-[700px] lg:w-2/3  p-4 lg:px-12">
          <form className="w-full min-h-[40vh]">
            <div className=" flex ">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="first name" placeholder="Ovy" type="text" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="last name" placeholder="Evbodi" type="text" />
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="phone number" placeholder="9023334455" type="tel" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="email address" placeholder="evbodiovo@gmail.com" type="email" />
              </div>
            </div>
            <div className="capitalize">
              <CheckoutFormRow text="country" placeholder="Nigeria" type="text" />
            </div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="state" placeholder="Lagos state" type="text" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="zip code" placeholder="012345" type="number" />
              </div>
            </div>
            <div className="capitalize">
              <CheckoutFormRow text="billing address" placeholder="123 Not Secure street" type="text" />
            </div>         
          </form>
          <h6 className="text-[1.2rem] md:text-[2.1rem] font-[500] md:font-bold lg:py-8 capitalize">Payment method</h6>
          <form className="w-full min-h-[40vh]">
            <div className="bg-blue-200">payment block</div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="name on card" placeholder="Ovy Evbodi" type="text" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="card number" placeholder="5399 0123 4567 8912" type="number" />
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="expiry date" placeholder="07/26" type="date" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="CVV" placeholder="321" type="number" />
              </div>
            </div>
            <div className="bg-blue-200">shipping block</div>
          </form>
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
    </main>
  )
};

export default Checkout;