import { state } from "@/app/state";
import ExperienceCard from "./experience-card";

export default function Experience() {
    return(
        <div className="h-section bg-green-900 flex justify-center">
            <div className=" w-3/4 h-full bg-violet-500 flex flex-row overflow-y-scroll no-scrollbar">
                <div className="w-1/2 h-full  sticky top-0">
                    <div className="h-full bg-[url('/assets/skyscraper.png')] bg-fit-y" />
                </div>
                <div className="w-2/3 h-full flex items-center flex-col">
                    {state.resume.sort((a, b) => +b.startingDate - +a.startingDate).map( experience =>(
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