import { Text } from "@/src/lib/text";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/ui/card";
import Image from "next/image";
import { LinkCardProject } from "@/src/components/projects/link.card.project";
import { Badge } from "@/src/ui/badge";
import { EyeOffIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";

const CardProject = ({
  project,
  className,
}: {
  project: Text["projects"][number];
  className?: string;
}) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        {project.logo_href && (
          <Image
            src={project.logo_href.href}
            alt={project.logo_href.alt}
            width={100}
            height={100}
            className="h-10 w-auto"
          />
        )}
        {!project.logo_href && (
          <p className="text-sm text-muted-foreground">{project.during}</p>
        )}
        <div>
          {project.links?.map((link) => (
            <LinkCardProject key={link.platform} link={link} />
          ))}
          {!project.links && (
            <Badge variant="outline">
              <EyeOffIcon className="w-4 h-4" /> Rien à montrer
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="my-auto">
        <p className="text-base font-medium">{project.title}</p>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Badge key={tool} variant="outline">
            {tool}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default CardProject;
