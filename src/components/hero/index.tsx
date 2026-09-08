import ImageHero from "@/src/components/hero/image.hero";
import {
  HeroBadges,
  HeroPitches,
  HeroTitle,
} from "@/src/components/hero/text.hero";
import { cn } from "@/src/lib/utils";

const Hero = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-center md:gap-8",
        className,
      )}
    >
      <div className="flex flex-row items-start gap-4 md:contents">
        <ImageHero />
        <div className="min-w-0 flex-1">
          <HeroTitle />
          <div className="hidden md:block">
            <HeroPitches />
            <HeroBadges />
          </div>
          <div className="md:hidden">
            <HeroBadges lookingFor={false} />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <HeroPitches />
        <HeroBadges locations={false} />
      </div>
    </div>
  );
};

export default Hero;
