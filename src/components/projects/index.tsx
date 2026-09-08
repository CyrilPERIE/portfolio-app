import { SectionTitle } from "@/src/components/_common/section_title";
import { text } from "@/src/lib/text";
import { cn } from "@/src/lib/utils";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import CardProject from "@/src/components/projects/card.project";

const Projets = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <SectionTitle title="02." subtitle="projets" />
      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:mx-0 sm:px-0">
        {text.projects.map((project, index) => (
          <CardProject
            key={index}
            project={project}
            className="w-[min(17rem,calc(100vw-3rem))] shrink-0 snap-start"
          />
        ))}
      </div>
      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <MoveLeftIcon className="w-3" />
        <span>faites défiler</span>
        <MoveRightIcon className="w-3" />
      </div>
    </div>
  );
};

export default Projets;
