import ExperienceCard from "./components/experience/experience-card";
import ProjetCard from "./components/projets/projet-card";
import "./page.css";
import { state } from "./state";

export default function Home() {
  return (
    <main className="pr-2 scrollbar overflow-y-auto flex flex-col text-font-color custom:flex-row">
      <div className="bg-bg-color h-screen flex flex-col justify-between custom:w-[650px] custom:fixed custom:top-0">
        <div className="ml-[18.5%] mt-3">
          <h1>{state.me.name}</h1>
          <h2>{state.me.wantedJob}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: state.me.catchPhrase }} />
        </div>

        <div className="flex flex-row gap-4 justify-center w-full pb-3">
          {state.me.links.map((link) => (
            <a href={link.href} target="_blank">
              {/* https://codepen.io/sosuke/pen/Pjoqqp si jamais la couleur des svg lien doit changer pour mettre à jour le filter.*/}
              <img
                src={link.logoUrl}
                alt={link.alt}
                style={{
                  width: "64px",
                  filter:
                    "invert(35%) sepia(70%) saturate(396%) hue-rotate(148deg) brightness(99%) contrast(94%)",
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="h-screen custom:w-[700px] custom:ml-[650px]">
        <div>
          <p>{state.me.professionalContext}</p>
        </div>

        <div>
          <h1>Experience</h1>
          {state.resume
            .sort((a, b) => +b.startingDate - +a.startingDate)
            .map((experience) => (
              <ExperienceCard key={experience.href} {...experience} />
            ))}
        </div>

        <div>
          <h1>Projets</h1>
          {state.projects.map((projet) => (
            <ProjetCard key={projet.href} {...projet} />
          ))}
        </div>
      </div>
    </main>
  );
}
