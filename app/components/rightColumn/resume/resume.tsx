/* eslint-disable react/no-unescaped-entities */
import CardExperience from "./card-experience";
import { state } from "@/app/state";

export default function ResumeSection() {
  return (
    <div className="grid max-w-5xl w-full mb-0 text-left">
      <h1>Résumé d'expériences</h1>
      {state.resume.sort((a, b) => +b.startingDate - +a.startingDate).map((experience) => (
        <CardExperience
          key={experience.href}
          {...experience}
        />
      ))}
    </div>
  );
}
