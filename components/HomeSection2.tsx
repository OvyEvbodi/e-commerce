// section 2 home
import { big_cards } from  "@/api/data.json";
import BigCard from "@/components/BigCard";

const HomeSection = () => {

  return (
    <section id="home_section" className="flex justify-center items-center">
      <div className="mt-4 p-2 lg:p-4 lg:px-12 min-h-[100vh] flex gap-4 lg:gap-10 flex-wrap justify-center ">
      {
        big_cards.map(item => (
          <div className={item.label == "FINELY Modern Rustic" ?
           "lg:self-end " : ""} key={item.id}>
            <BigCard { ...item }/>
          </div>
        ))
      }
      </div>
    </section>
  )
};

export default HomeSection;