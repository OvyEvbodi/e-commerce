// Homepage

import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection2";
import Nav from "@/components/Nav";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeSection />
      <Stats />
      <Categories />
      <Newsletter />
    </main>
  );
}
