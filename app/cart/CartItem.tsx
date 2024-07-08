// Cart item component
import { NextPage } from "next";
import Image from "next/image";

export interface CartItemProps {
  thumbnail: string;
  name: string;
  price: number;
  quantity: number;
}
const CartItem:NextPage<CartItemProps> = ({thumbnail, name, price, quantity }) => {
  return (
    <div className="py-4 flex flex-wrap items-center justify-between border-t">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <Image src={thumbnail} width={100} height={100} alt={name} />
        </div>
        <h3 className="lg:text-[1.2rem]">{name}</h3>
      </div>
      <div className="w-3/5 text-[1.3rem] flex flex-wrap justify-evenly items-center p-2">
        <p className="">${price}</p>
        <p>{quantity}</p>
        <p>${quantity * price}</p>
        <Image src='/delete.png' width={30} height={40} alt={name} />
      </div>
    </div>
  )
};

export default CartItem;