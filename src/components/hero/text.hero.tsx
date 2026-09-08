import { text } from "@/src/lib/text";
import { Badge } from "@/src/ui/badge";
import { MapPinIcon, TargetIcon } from "lucide-react";

const Text = () => {
  return (
    <div>
      <p className="text-2xl font-bold mb-4 text-primary">
        {text.hero.profession}
      </p>
      {text.hero.pitches.map((pitch, index) => (
        <p key={index} className="text-muted-foreground text-balance mb-1">
          {pitch}
        </p>
      ))}
      <div className="flex items-center gap-2 mt-4">
        {text.hero.locations.map((location, index) => (
          <Badge variant="secondary" key={index}>
            <MapPinIcon />
            {location}
          </Badge>
        ))}
        <Badge>
          <TargetIcon />
          {text.hero.lookingFor}
        </Badge>
      </div>
    </div>
  );
};

export default Text;
