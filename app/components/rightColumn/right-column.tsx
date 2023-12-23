import ProjectSection from "./projet/projet";
import ResumeSection from "./resume/resume";

export default function RightColumn() {
  return (
    <div className="flex-auto">
      <ResumeSection />
      <ProjectSection />
    </div>
  );
}
