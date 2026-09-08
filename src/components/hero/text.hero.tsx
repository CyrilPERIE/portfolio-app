import { text } from "@/src/lib/text";
import { Badge } from "@/src/ui/badge";
import { MapPinIcon, TargetIcon } from "lucide-react";

export const HeroTitle = () => {
  return (
    <p className="mb-2 text-lg font-bold text-primary sm:mb-4 sm:text-2xl">
      {text.hero.profession}
    </p>
  );
};

export const HeroPitches = () => {
  return (
    <>
      {text.hero.pitches.map((pitch, index) => (
        <p
          key={index}
          className="mb-1 text-sm text-pretty text-muted-foreground sm:text-base"
        >
          {pitch}
        </p>
      ))}
    </>
  );
};

export const HeroBadges = ({
  locations = true,
  lookingFor = true,
}: {
  locations?: boolean;
  lookingFor?: boolean;
}) => {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
      {locations &&
        text.hero.locations.map((location, index) => (
          <Badge variant="secondary" key={index}>
            <MapPinIcon />
            {location}
          </Badge>
        ))}
      {lookingFor && (
        <Badge className="h-auto max-w-full whitespace-normal py-1">
          <TargetIcon className="shrink-0" />
          {text.hero.lookingFor}
        </Badge>
      )}
    </div>
  );
};
