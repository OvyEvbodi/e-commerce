// search bar

const SearchBar = () => {
  return (
    <div className="hidden md:block">
      <span >
        <input className="py-1 border border-green rounded-[3px] mx-2 lg:w-[21vw]" type="text" />
        <span className=" "></span>
      </span>
      <button className="my-1 py-1 px-8 text-sm hover:text-green rounded-[3px] border border-2 border-green hover:bg-white bg-green text-white transition-all duration-300">Shop now</button>
    </div>
  )
};

export default SearchBar;