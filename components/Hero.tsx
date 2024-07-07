// Hero section 

import Button from "@/components/Button";

const Hero = () => {
  const buttonProps = {
    text: 'Shop now'
  };
  return (
    <section id="hero" className=" hero lg:min-h-[86vh] w-full">
      <div className="hero_overlay flex justify-center items-center bg-off-white opacity-95 w-full h-full">
        <div className=" hero_text lg:pl-[9%] flex wrap justify-center items-center lg:h-full lg:w-[50vw]">
          <div className="p-12 lg:p-0 text-center lg:text-left">
            <h6 className='text-orange uppercase tracking-wide leading-[25px]'>Chiar Collection</h6>
            <h1 className="text-[2.4rem] text-grey-text leading-[50px] font-bold">Discover Excellence At Timble Store   Your Ultimate Shopping</h1>
            <p className="text-[1.4rem] text-grey-text leading-8 font-normal">Welcome to Helendo Store, where excellence meets every shopping desire! Unwind in Excellence</p>
            <Button {...buttonProps} />
          </div>
        </div>
        <div className="lg:w-[50vw] lg:h-[86vh] flex flex-col justify-center items-end">
          <div className="hero_img lg:w-[45vw] lg:h-[76vh]"></div>
        </div>
      </div>
    </section>
  )
};

export default Hero;