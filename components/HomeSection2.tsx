// section 2 home
import { big_cards } from  "@/api/data.json";
import BigCard from "@/components/BigCard";

const HomeSection = () => {

  return (
    <section id="home_section" className="mt-4 p-2 lg:p-4 lg:px-12 w-full min-h-[100vh] flex gap-4 lg:gap-1 flex-wrap justify-center lg:justify-center">
      {
        big_cards.map(item => (
          <div className={item.label == "FINELY Modern Rustic" ?
           "lg:self-end md:w-[320px] w-[280px] sm:w-[300px] lg:w-[340px] xl:w-[400px]" : "md:w-[320px] w-[280px] sm:w-[300px] lg:w-[340px] lg:min-h-[80vh] xl:w-[400px]"} key={item.id}>
            <BigCard { ...item }/>
          </div>
        ))
      }
    </section>
  )
};

export default HomeSection;