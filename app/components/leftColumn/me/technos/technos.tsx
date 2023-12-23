import { groupSkillsByStack } from "@/app/function/groupBy";
import { Skill, Stack, state } from "@/app/state";
import TechnoCard from "./techno-card";

export default function TechnosSection() {
  const skillGroupeByStack = groupSkillsByStack(state.me.skill);
  const skillGroupeByStackEntries = Object.keys(skillGroupeByStack);
  return (
    <div>
      {skillGroupeByStackEntries.map((stack) => (
        <div key={stack}>
          {stack}
          {skillGroupeByStack[stack].map((skill: Skill) => (
            <TechnoCard key={skill.name} {...skill} />
          ))}
        </div>
      ))}
    </div>
  );
}
