// Homepage

import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection2";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Trending from "@/components/Trending";

export const metadata = { title: 'Helendo Home' };

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeSection />
      <Stats />
      <Categories />
      <Trending />
      <Newsletter />
    </main>
  );
}
