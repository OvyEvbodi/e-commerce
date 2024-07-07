// Homepage

import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection2";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Trending from "@/components/Trending";
import Link from "next/link";

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
