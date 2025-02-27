"use client";
import { useEffect, useState } from "react";
import ExperienceCard from "./components/experience/experience-card";
import FormationCard from "./components/formation/formation-card";
import ProjetCard from "./components/projets/projet-card";
import RandomSkill from "./components/random-skill";
import "./page.css";
import { state } from "./state";

export default function Home() {
  type GitPull = {
    lastCommitDate: string;
    lastCommitUrl: string;
  };
  const [lastCommit, setLastCommit] = useState<GitPull>();

  useEffect(() => {
    const repoOwner = "CyrilPERIE";
    const repoName = "portfolio-app";
    const branchName = "main";

    fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/commits/${branchName}`
    )
      .then((response) => response.json())
      .then((data) => {
        const date = new Date(data.commit.committer.date);
        const lastCommitDate =
          date.toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) +
          ", " +
          date.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          });

        const lastCommitUrl = data.html_url.replace("commit", "tree");
        setLastCommit({ lastCommitDate, lastCommitUrl });
      })
      .catch((e) =>
        setLastCommit({
          lastCommitDate: "Serveur non joignable",
          lastCommitUrl: "",
        })
      );
  }, []);

  return (
    <main className="pr-2 scrollbar custom:overflow-y-auto flex flex-col text-font-color custom:flex-row">
      <div className="bg-bg-color h-fit w-screen flex flex-col justify-between custom:h-screen custom:w-[650px] custom:fixed custom:top-0">
        <div className="ml-[18.5%] mt-3">
          <h1>{state.me.name}</h1>
          <h2>{state.me.wantedJob}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: state.me.catchPhrase }} />
        </div>

        <div className="flex flex-col gap-4 justify-center w-full pt-10zz">
          <RandomSkill />
          <div className="flex flex-row gap-4 justify-center w-full pb-3">
            {state.me.links.map((link, index) => (
              <a key={index} href={link.href} target="_blank">
                {/* https://codepen.io/sosuke/pen/Pjoqqp si jamais la couleur des svg lien doit changer pour mettre à jour le filter.*/}
                <img
                  src={link.logoUrl}
                  alt={link.alt}
                  className="w-[64px]"
                  style={{
                    filter:
                      "invert(35%) sepia(70%) saturate(396%) hue-rotate(148deg) brightness(99%) contrast(94%)",
                  }}
                />
              </a>
            ))}
          </div>
          <a href={lastCommit?.lastCommitUrl} target="_blank">
            <p className="text-[10px]">Dernière mise à jour {lastCommit?.lastCommitDate}</p>
          </a>
        </div>
      </div>

      <div className="h-screen custom:w-[700px] custom:ml-[650px] p-[30px]">
        <div className="mt-2" dangerouslySetInnerHTML={{ __html: state.me.professionalContext }} />
        <div className="mt-[10px]">
          <h1 className="mb-[5px]">Expériences</h1>
          {state.resume
            .sort((a, b) => +b.startingDate - +a.startingDate)
            .map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
        </div>

        <div className="py-[30px]">
          <h2>Formations et Certifications</h2>
          {[...state.me.formation, ...state.me.certification]
            .sort((a, b) => {
              {
                let dateA = "obtainedDate" in a ? a.obtainedDate : a.yearEnding;
                let dateB = "obtainedDate" in b ? b.obtainedDate : b.yearEnding;
                return dateB - dateA;
              }
            })
            .map((formation, index) => (
              <FormationCard key={index} {...formation} />
            ))}
        </div>
        <div className="flex items-center py-[20px] pl-4">
          <a
            className="font-semibold underline"
            href="/files/Cyril_PERIE_CV.pdf"
            download="Cyril_PERIE_CV.pdf"
          >
            Récupérez mon cv
          </a>
          <img className="h-[64px]" src="/assets/cv.svg" alt="CV" />
        </div>

        <div className="pb-[30px]">
          <h1>Projets</h1>
          {state.projects.map((projet, index) => (
            <ProjetCard key={index} {...projet} />
          ))}
        </div>
      </div>
    </main>
  );
}
