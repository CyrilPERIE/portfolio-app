import { state } from "@/app/state";
import ProjetCard from "./projet-card";

export default function Projets() {
  return (
    <div className="min-h-section flex flex-col">
      <div className="h-[250vh] bg-[url('/assets/terre.jpg')]">Terre</div>
      <div className="h-project bg-[url('/assets/metro.png')] bg-repeat-x bg-fit-y">
        <div>Tête de train</div>
        {state.projects.map((projet) => (
          <ProjetCard key={projet.href} {...projet} />
        ))}
        <div>Queue de train</div>
      </div>
    </div>
  );
}
