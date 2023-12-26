import { Project } from "@/app/state";

export default function ProjetCard(projet: Project) {
    return (
        <div>
        {projet.title}
        </div>
    )
}