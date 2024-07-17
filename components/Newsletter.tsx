// Newsletter
import news_img from "@/public/news_img.png";
import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";


const Newsletter = () => {
  return (
    <div className="bg-white lg:min-h-[59vh] w-full px-12 py-4 flex justify-center flex-wrap">
      <div className="lg:bg-off-white lg:border lg:border-orange  lg:border-r-0 flex flex-col justify-center items-center p-6 lg:w-[40vw] lg:min-h-full">
        <div className="mb-4 flex flex-col gap-2 justify-center lg:items-center flex-wrap">
          <h3 className="font-bold text-[1.4rem] capitalize">Be the first to see our new products</h3>
          <p>Subscribe to our newsletter</p>
        </div>
        <SubscribeForm />
      </div>
      <div className="lg:bg-green lg:border lg:border-orange lg:border-l-0 lg:w-[40vw] lg:min-h-full">
        <Image src={news_img} width={350} height={600} alt="newsletter"/>
      </div>
    </div>
  )
}

export default Newsletter;