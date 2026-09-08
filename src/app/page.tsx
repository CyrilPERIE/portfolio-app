import Hero from "@/src/components/hero";
import Products from "@/src/components/products";
import Projets from "@/src/components/projects";
import Contact from "@/src/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      <Hero />
      <Products />
      <Projets />
      <Contact />
    </div>
  );
}
