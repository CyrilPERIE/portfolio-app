import { state } from "@/app/state";
import ProjetCard from "./projet-card";

export default function Projets() {
    return(
        <div className="h-section bg-[url('/assets/terre.jpg')] bg-repeat-x bg-fit-y">
        <div className="h-1/5">
            Terre
        </div>
        <div className="h-4/5 bg-[url('/assets/metro.png')] bg-repeat-x bg-fit-y">
            <div>Tête de train</div>
            {state.projects.map((projet) => (
                <ProjetCard
                key={projet.href}
                {...projet}
                />
            ))}
            <div>Queue de train</div>
        </div>
        </div>
    )
}