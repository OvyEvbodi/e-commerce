// search bar

import Link from "next/link";
import Image from "next/image";
import greenCartIcon from "@/public/green_cart.png";

const SearchBar = () => {
  return ( 
    <div className="flex items-center flex-wrap gap-4">
      <Link href="/cart" className="hover:opacity-80">
        <Image src={greenCartIcon} width={30} height={30} alt="green cart icon" />
      </Link>
      <button className="hidden md:block my-1 py-1 px-8 text-sm hover:text-green rounded-[3px] border border-2 border-green hover:bg-white bg-green text-white transition-all duration-300">
        <Link href="/products" >Shop now</Link>
      </button>
    </div>
  )
};

export default SearchBar;