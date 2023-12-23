import { Skill, Stack } from "../state";

export function groupSkillsByStack(skills: Skill[]): { [key: string]: Skill[]; } {
  return skills.reduce((accumulator: { [key: string]: Skill[] }, item: Skill) => {
    
    let key = item.stack;

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(item);
    return accumulator;
  }, {});
}
