import Link from "next/link";
import SearchBar from "@/components/SearchBar";

// nav
const Nav = () => {
  return (
    <nav className="bg-off-white text-green px-6 md:px-16 flex justify-between w-full lg:min-h-[14vh]">
      <div className=" flex flex-wrap items-center">
        <h1 className="md:font-[600] md:tracking-wider uppercase text-green text-[2.1rem]"><Link href="/">Helendo<span className="text-[1rem] capitalize">Store</span></Link></h1>
      </div>
      <div className="flex gap-6 flex-wrap items-center justify-between lg:w-1/2">
        <div className="flex gap-6">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="/products" className="hover:opacity-80">Products</Link>
        </div>
        <SearchBar /> 
      </div>
    </nav>
  )
};

export default Nav;