// Footer
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="bg-light-green p-4 px-6 lg:px-12 lg:min-h-[30vh] flex flex-wrap justify-center gap-4 end">
        <div className="lg:w-[18vw]">
          <h5 className="md:font-[600] md:tracking-wider uppercase text-green text-[2.1rem]">Helendo<span className="text-[1rem] capitalize">Store</span></h5>
          <p className="text-[0.9rem]">evbodiovo@gmail.com</p>
          <div className="flex mt-2 gap-2">
            <Image src='/linkedin.png' width={40} height={40} alt="Linkedin logo"/>
            <Image src='/facebook.png' width={40} height={40} alt="facebook logo"/>
            <Image src='/twitter.png' width={40} height={40} alt="twitter logo"/>
          </div>
        </div>
        <div className="lg:w-[72vw] flex flex-col items-center md:items-start md:flex-row flex-wrap md:justify-between">
          <div className="lg:w-[14vw] p-2">
            <h5 className="font-[600] text-[1.05rem]">Product Caterogories</h5>
            <ul className="text-[0.8rem] leading-6 p-2">
              <li>Living Room Furniture</li>
              <li>Dining Room Furniture</li>
              <li>Bedroom Furniture</li>
              <li>Office Furniture</li>
              <li>Outdoor Furniture</li>
              <li>Accessories and Decor</li>
            </ul>
          </div>
          <div className="lg:w-[14vw]">
            <h5 className="font-[600] text-[1.05rem]">Help & Information</h5>
            <ul className="text-[0.8rem] leading-6 p-2">
              <li>Help & Contact Us</li>
              <li>Returns & Refunds</li>
              <li>Online Stores</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="lg:w-[14vw]">
            <h5 className="font-[600] text-[1.05rem]">About Us</h5>
            <ul className="text-[0.8rem] leading-6 p-2">
              <li>About us</li>
              <li>What We Do</li>
              <li>FAQ Page</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="lg:w-[22vw] ">
          <h6 className="mb-4">Newsletter</h6>
          <div >
            <input className="py-3 text-[0.8rem] bg-grey-bg  pl-4 rounded-[6px]" type="text" placeholder="your email" />
            <button className=" py-2 px-6 text-sm hover:text-green rounded-[6px] border border-4 border-green hover:bg-white bg-green text-white transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>
      <div>
        <hr></hr>
        <h6 className="text-center p-4">&copy; Helendostores inc.</h6>
      </div>
    </div>
  )
}

export default Footer;