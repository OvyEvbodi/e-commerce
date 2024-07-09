// Homepage
'use client'

import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection2";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Trending from "@/components/Trending";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


// export const metadata = { title: 'Helendo Home' };

// 
// uncomment the metadata, take out the use client directive,
// and take out the useEffect hook import and call, take out userouter import
// 8 lines out, 1 line in
// uncomment home page jsx

export default function Home() {
  const router = useRouter();
  useEffect( () => {
    router.push('/products')
  }, []);
  

  return (
    <main>
      {/* <Hero />
      <HomeSection />
      <Stats />
      <Categories />
      <Trending />
      <Newsletter /> */}
    </main>
  );
}
