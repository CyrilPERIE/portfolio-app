import { Skill } from "@/app/state";

export default function TechnoCard(skill: Skill) {
    return(
        <div>
            <pre>{"   " + skill.name}</pre>
        </div>
    )
}