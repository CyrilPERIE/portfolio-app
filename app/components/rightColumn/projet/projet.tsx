import CardProject from "./card-project";
import { state } from "@/app/state";

export default function ProjectSection() {
  return (
    <div>
      <h1>Projets</h1>
    <div className="grid max-w-5xl w-full mb-0 grid-cols-4 text-left">
      {state.projects.map((project) => (
        <CardProject
          key={project.title}
          {...project}
        />
      ))}
    </div>
    </div>
  );
}
