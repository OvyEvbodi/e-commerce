// Hero section 

import Button from "@/components/Button";

const Hero = () => {
  const buttonProps = {
    text: 'Shop now'
  };
  return (
    <section className=" hero lg:h-[86vh] w-full">
      <div className="hero_overlay bg-off-white opacity-95 w-full h-full">
        <div className="bg-red-100 hero_text flex justify-center items-center lg:h-full lg:w-[50vw]">
          <div className="text-left">
          <h6>Chiar Collection</h6>
          <h1>Discover Excellence At Timble Store   Your Ultimate Shopping</h1>
          <p className="text-[1.5rem] text-grey-text leading-8">Welcome to Helendo Store, where excellence meets every shoppind desire! Unwind in Excellence</p>
          <Button {...buttonProps} />
          </div>
        </div>
        <div className="hero_img lg:w-[50vw]">

        </div>
      </div>
    </section>
  )
};

export default Hero;