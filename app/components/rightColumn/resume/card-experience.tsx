import { formatDateYearMonth } from "@/app/function/date";
import { Experience } from "@/app/state";

export default function CardExperience(experience: Experience) {
  return (
    <a
      href={experience.href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {experience.job} {formatDateYearMonth(experience.startingDate)}-{" "}
        {formatDateYearMonth(experience.endingDate)}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: experience.description }}
      />
    </a>
  );
}
