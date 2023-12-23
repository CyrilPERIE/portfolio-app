import CardProject from "./card-project";
import { state } from "@/app/state";

export default function ProjectSection() {
  return (
    <div>
      <h1>Projets</h1>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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
