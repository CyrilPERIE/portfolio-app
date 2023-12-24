import { Project } from "@/app/state";

export default function CardProject(project: Project) {
  return (
    <a
      href={project.href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {project.title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p>{project.content}</p>
    </a>
  );
}
