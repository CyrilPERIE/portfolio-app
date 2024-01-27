import { Certification, Formation } from "@/app/state";

export default function FormationCard(formation: Formation | Certification) {
    return (
        <div className="flex items-center">
            <p>{`${'obtainedDate' in formation ? formation.obtainedDate : formation.yearEnding} - ${formation.name}`}</p>
        </div>
    )
}