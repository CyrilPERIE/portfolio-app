import { formatDateYearMonth, differenceBetweenTwoDates } from "@/app/function/date";
import { Experience } from "@/app/state";

export default function ExperienceCard(experience: Experience) {
  return (
    <div>
      <h2>{experience.job}</h2>
      <h3>{`${formatDateYearMonth(experience.startingDate)} - ${formatDateYearMonth(experience.endingDate)} - ${differenceBetweenTwoDates(experience.startingDate, experience.endingDate)}`}</h3>
          <div dangerouslySetInnerHTML={{ __html: experience.description }} />
    </div>
  );
}
