import ProjectSection from "./project/projet-section";
import ResumeSection from "./resume/resume-section";

export default function RightColumn() {
    return(
        <div className="flex-auto">
            <ResumeSection />
            <ProjectSection />
        </div>
    )
}