import BrowseCategory from "@/components/Category/BrowseCategory";
import FeaturedArticles from "@/components/FeaturedArticles/FeaturedArticles";
import Hero from "@/components/Hero-Section/Hero";
import SubscribeUpdate from "@/components/Subscribe/SubscribeUpdate";



export default function Home() {
  return (
    <main className={"mx-24"}>
      <Hero/>
      <BrowseCategory/>
      <FeaturedArticles/>
      <SubscribeUpdate/>
     
    </main>
  );
}