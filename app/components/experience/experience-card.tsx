import { formatDateYearMonth, differenceBetweenTwoDates } from "@/app/function/date";
import { Experience } from "@/app/state";

export default function ExperienceCard(experience: Experience) {
  return (
    <div className="pb-[23px] pt-[11px]">
      <h2>{experience.job}</h2>
      <h3>{`${formatDateYearMonth(experience.startingDate)} - ${formatDateYearMonth(experience.endingDate)} - ${differenceBetweenTwoDates(experience.startingDate, experience.endingDate)}`}</h3>
      <div className="mt-2" dangerouslySetInnerHTML={{ __html: experience.description }} />
      <ul className="flex flex-wrap gap-3 mt-2">
      {experience.skills.sort((a,b) => a.name.localeCompare(b.name)).map((skill, index) => (
        <li key={index} className="bg-item-bg-color rounded-[10px] py-[3px] px-4"><a href={skill.href} target="_blank">{skill.name}</a></li>
      ))}
      </ul>
    </div>
  );
}
