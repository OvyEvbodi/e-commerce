import Link from "next/link";
import SearchBar from "@/components/SearchBar";

// nav
const Nav = () => {
  return (
    <nav className="bg-off-white text-green px-6 md:px-12 flex justify-between w-full lg:min-h-[14vh]">
      <div className=" flex flex-wrap items-center">
        <h1 className="md:font-[600] md:tracking-wider uppercase text-green text-[2.1rem]">Timble<span className="text-[1rem] capitalize">Store</span></h1>
      </div>
      <div className="flex gap-6 flex-wrap items-center justify-between lg:w-1/2">
        <div className="flex gap-2">
          <Link href="/">Home</Link>
          <Link href="products">Products</Link>
          <Link href="cart">Cart</Link>
        </div>
        <SearchBar /> 
      </div>
    </nav>
  )
};

export default Nav;