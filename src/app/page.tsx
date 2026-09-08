import Hero from "@/src/components/hero";
import Products from "@/src/components/products";
import Projets from "@/src/components/projects";
import Contact from "@/src/components/contact";

export default function Home() {
  return (
    <div>
      <Hero className="mb-6" />
      <Products className="mb-6" />
      <Projets className="mb-6" />
      <Contact className="mb-6" />
    </div>
  );
}
