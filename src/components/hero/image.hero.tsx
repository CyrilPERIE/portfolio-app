import { text } from "@/src/lib/text";
import { Badge } from "@/src/ui/badge";
import { CircleIcon } from "lucide-react";
import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="relative">
      <Image
        src="/me.jpeg"
        alt="Cyril PERIE"
        width={416}
        height={416}
        className="rounded-2xl shadow-lg"
      />
      <Badge
        variant="success"
        className="absolute bottom-2 right-2 flex items-center gap-2"
      >
        <CircleIcon fill="green" stroke="green" />
        <p className="text-sm font-medium">{text.hero.status}</p>
      </Badge>
    </div>
  );
};

export default ImageHero;
