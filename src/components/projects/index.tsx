import { SectionTitle } from "@/src/components/_common/section_title";
import { text } from "@/src/lib/text";
import { cn } from "@/src/lib/utils";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import CardProject from "@/src/components/projects/card.project";

const Projets = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <SectionTitle title="02." subtitle="projets" />
      <div className="overflow-x-auto flex gap-4 pb-4 scrollbar-thumb-primary">
          {text.projects.map((project, index) => (
            <CardProject key={index} project={project} className="w-[17rem] shrink-0"/>
          ))}
      </div>
      <div className="flex items-center gap-1 text-muted-foreground text-sm">
        <MoveLeftIcon className="w-3" />
        <span>faites défiler</span>
        <MoveRightIcon className="w-3" />
      </div>
    </div>
  );
};

export default Projets;
