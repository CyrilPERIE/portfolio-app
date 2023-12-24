import { state } from "@/app/state";
import ProjectSection from "./projet/projet";
import ResumeSection from "./resume/resume";

export default function RightColumn() {
  return (
    <div className="">
      <div>{state.me.professionalContext}</div>
      <ResumeSection />
      <ProjectSection />
    </div>
  );
}
