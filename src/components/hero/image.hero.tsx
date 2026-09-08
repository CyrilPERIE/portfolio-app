import { text } from "@/src/lib/text";
import { Badge } from "@/src/ui/badge";
import { CircleIcon } from "lucide-react";
import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="relative w-24 shrink-0 sm:w-36 md:w-64 lg:w-80">
      <Image
        src="/me.jpeg"
        alt="Cyril PERIE"
        width={416}
        height={416}
        sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 320px"
        className="aspect-square h-auto w-full rounded-2xl object-cover shadow-lg"
        priority
      />
      <Badge
        variant="success"
        className="absolute right-1 bottom-1 flex items-center gap-1 sm:right-2 sm:bottom-2 sm:gap-2"
      >
        <CircleIcon fill="green" stroke="green" />
        <p className="hidden text-sm font-medium sm:inline">
          {text.hero.status}
        </p>
      </Badge>
    </div>
  );
};

export default ImageHero;
