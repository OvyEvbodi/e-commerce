// Newsletter
import news_img from "@/public/news_img.png";
import Image from "next/image";


const Newsletter = () => {
  return (
    <div className="bg-white lg:h-[59vh] w-full px-12 py-4 flex justify-center flex-wrap">
      <div className="bg-slate-200 lg:w-[45vw] lg:min-h-full"></div>
      <div className=" lg:w-[45vw] lg:min-h-full">
        <Image src={news_img} width={350} height={600} alt="newsletter"/>
      </div>
    </div>
  )
}

export default Newsletter;