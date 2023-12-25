import { state } from "@/app/state";
import ExperienceCard from "./experience-card";

export default function Experience() {
    return(
        <div className="h-section bg-green-900 flex justify-center">
            <div className=" w-2/3 h-full bg-violet-500 flex flex-row">
                <div className="w-1/3 h-full">
                    <div className="h-1/3 bg-[url('/assets/experience-blanc.png')] bg-no-repeat bg-auto" />
                    <div className="h-2/3 bg-[url('/assets/experience-jaune.png')] bg-no-repeat bg-auto" />
                </div>
                <div className="w-2/3 h-full flex items-center flex-col">
                    {state.resume.map( experience =>(
                        <ExperienceCard 
                            key={experience.href}
                            {...experience}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}