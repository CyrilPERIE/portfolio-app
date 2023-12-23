import { state } from "@/app/state";
import CardProject from "../projet/card-project";

export default function ProjectSection() {
  return (
    <div>
      <h1>Projets</h1>
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {state.projects.map((project) => (
        <CardProject
          key={project.title}
          href={project.href}
          title={project.title}
          content={project.content}
        />
      ))}
    </div>
    </div>
  );
}
