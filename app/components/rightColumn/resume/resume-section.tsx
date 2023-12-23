import CardExperience from "./card-experience"
import { state } from "@/app/state"

export default function ResumeSection() {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {state.resume.map(experience => (
            <CardExperience 
                key={experience.href} 
                href={experience.href}
                startingDate={experience.startingDate}
                endingDate={experience.endingDate}
                job={experience.job}
                company={experience.company}
                description={experience.description}
            />
            ))}
        </div>
    )
}