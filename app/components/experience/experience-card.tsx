import { formatDateYearMonth } from "@/app/function/date";
import { Experience } from "@/app/state";

export default function ExperienceCard(experience: Experience) {
  return (
    <div className="w-2/3 flex flex-col flex-grow my-10">
      <div className="w-full min-h-52 bg-yellow-300">
        <a
          href={experience.href}
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {experience.job} {formatDateYearMonth(experience.startingDate)}-{" "}
            {formatDateYearMonth(experience.endingDate)}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ---&gt;
            </span>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: experience.description }} />
        </a>
      </div>
      <div className="w-full h-8 bg-orange-500"></div>
    </div>
  );
}
