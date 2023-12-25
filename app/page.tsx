import AboutMe from "./components/about-me/aboutMe";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Projets from "./components/projets/projets";

export default function Home() {
  return (
    <main className="flex flex-col">
      <AboutMe />
      <div>
        <Menu />
        <Experience />
        <Projets />
        <Footer />
      </div>
    </main>
  );
}
