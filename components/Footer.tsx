// Footer

const Footer = () => {
  return (
    <div>
      <div id="footer" className="bg-light-green p-4 lg:px-12 lg:min-h-[41vh] w-full">
        <div className="bg-red-100 lg:w-[15vw]">
        <h5 className="md:font-[600] md:tracking-wider uppercase text-green text-[2.1rem]">Timble<span className="text-[1rem] capitalize">Store</span></h5>
          <p>evbodiovo@gmail.com</p>
          <div></div>
        </div>
        <div className="bg-red-200 lg:w-[50vw]">
          <div className="lg:w-[14vw]">
            <h5 className="font-[600] text-[1.05rem]">Product Caterogories</h5>
            <ul>
              <li>Living Room Furniture</li>
              <li>Dining Room Furniture</li>
              <li>Bedroom Furniture</li>
              <li>Office Furniture</li>
              <li>Outdoor Furniture</li>
              <li>Accessories and Decor</li>
            </ul>
          </div>
          <div className="">
            <h5>Help & Information</h5>
            <ul>
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="">
            <h5>About Us</h5>
            <ul>
              <li>About us</li>
              <li>What We Do</li>
              <li>FAQ Page</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="bg-red-300 lg:w-[20vw]">
          <h6>Newsletter</h6>
          <div>
            <input className="py-1 border border-green rounded-[3px] mx-2 lg:w-[21vw]" type="text" placeholder="Enter your email" />
            <button className="my-1 py-1 px-8 text-sm hover:text-green rounded-[6px] border border-2 border-green hover:bg-white bg-green text-white transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr></hr>
        <h6 className="text-center p-4">evbodiovo@gmail.com</h6>
      </div>
    </div>
  )
}

export default Footer;