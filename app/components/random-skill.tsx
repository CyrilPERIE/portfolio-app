"use client";
import { useEffect, useState } from "react";
import { Skill, Type, state } from "../state";

export default function RandomSkill() {
  const [skill, setSkill] = useState("|");

  const skills = getAllSkill()

  function getAllSkill(): string[] {

    let result: Set<string> = new Set();
    state.resume.forEach((experience) => {
        experience.skills.forEach((skill) => {
            if(skill.type !== Type.GestionDeProjet)
            result.add(skill.name)
        })
    })
    state.projects.forEach((project) => {
        project.skills.forEach((skill) => {
            if(skill.type !== Type.GestionDeProjet)
            result.add(skill.name)
        })
    })
    return Array.from(result.values());

  }

  function randomSkill(): string {
    const randomIndex: number = Math.floor(Math.random() * skills.length);
    return `${skills[randomIndex]} ?`;
  }

  function write(temp: string[], i: number = 0) {
    setTimeout(() => {
      setSkill(temp.slice(0, i).join("") + "|");
      i++;
      if (i < temp.length + 1) write(temp, i);
      else setSkill(temp.join(""));
    }, aleatoire(100));
  }

  function aleatoire(delay: number) {
    return Math.floor(Math.random() * delay);
  }

  useEffect(() => {
    const temp = randomSkill().split("");
    const delay = 100;

    const intervalId = setInterval(() => {
      write(temp);
    }, temp.length * delay);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="px-3">
      <div className="flex flex-wrap h-fit gap-1">
        <h2>Vous avez besoin de moi pour du</h2>{" "}
        <h2 className="bg-item-bg-color w-fit font-normal px-1">{skill}</h2>{" "}
      </div>
      <h2>Entrons en contact !</h2>
    </div>
  );
}
