import { Project } from "@/app/state";

export default function ProjetCard(projet: Project) {
  return (
    <div>
      <div className="flex items-center">
        <img className="w-[190px] h-[100px]" src={projet.screenshot}></img>
        <div className="pl-3">
          <h2>{projet.title}</h2>
          <h3>{projet.spitch}</h3>
          <p>{projet.content}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-3 mt-2">
        {projet.skills
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill, index) => (
            <li key={index} className="bg-item-bg-color rounded-[10px] py-[3px] px-4">
              <a href={skill.href} target="_blank">
                {skill.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
