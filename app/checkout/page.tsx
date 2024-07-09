// checkout 

import SmallButton from "@/components/SmallButton";
import { NextPage } from "next";
import Link from "next/link";
import CheckoutCard from "@/app/cart/CheckoutCard";

export const metadata = { title: 'Checkout Helendo' };


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
      <input className="text-[0.7rem] bg-grey-bg opacity-50 px-2 py-[10px] md:py-4 rounded-[8px]"
        type={type} placeholder={placeholder} name={text}
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
                <CheckoutFormRow text="first name" placeholder="enter first name" type="text" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="last name" placeholder="enter last name" type="text" />
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="phone number" placeholder="enter phone number" type="tel" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="email address" placeholder="enter email" type="email" />
              </div>
            </div>
            <div className="capitalize">
              <CheckoutFormRow text="country" placeholder="enter country" type="text" />
            </div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="state" placeholder="enter state" type="text" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="zip code" placeholder="enter zip code" type="number" />
              </div>
            </div>
            <div className="capitalize">
              <CheckoutFormRow text="billing address" placeholder="enter billing address" type="text" />
            </div>         
          </form>
          <h6 className="text-[1.2rem] md:text-[2.1rem] font-[500] md:font-bold lg:py-8 capitalize">Payment method</h6>
          <form className="w-full min-h-[40vh]">
            {/* <div className="bg-blue-200">
              <div className="flex gap-2">
                <input type="radio" name="payment_type"/>
                <label htmlFor="payment_type">Pay with Credit Card</label>
              </div>
            </div> */}
                      
            <label className="container">Pay with Credit Card
              <input type="radio" name="payment_type" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Pay with PayPay
              <input type="radio" name="payment_type" />
              <span className="checkmark"></span>
            </label>
            <label className="container">Pay with gift cards
              <input type="radio" name="payment_type" />
              <span className="checkmark"></span>
            </label>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="name on card" placeholder="enter card name" type="text" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="card number" placeholder="enter card number" type="number" />
              </div>
            </div>
            <div className="flex">
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="expiry date" placeholder="enter expiry date" type="date" />
              </div>
              <div className="md:w-1/2 capitalize">
                <CheckoutFormRow text="CVV" placeholder="enter cvv" type="number" />
              </div>
            </div>
            <div className="mt-4">
            <label className="c-container">Use shipping address as billing address
              <input type="checkbox" name="payment_type" />
              <span className="c-checkmark"></span>
            </label>
            <label className="c-container">Accept terms and conditions
              <input type="checkbox" name="" />
              <span className="c-checkmark"></span>
            </label>
            </div>
          </form>
        </div>
        <CheckoutCard />
      </div>
    </main>
  )
};

export default Checkout;