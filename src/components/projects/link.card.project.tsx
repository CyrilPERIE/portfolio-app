import { LinkProject } from "@/src/lib/text";
import { cn } from "@/src/lib/utils";
import { CodeXmlIcon, GlobeIcon, SquareArrowOutUpRightIcon, VideoIcon } from "lucide-react";
import Link from "next/link";

export const LinkCardProject = ({ link, className }: { link: LinkProject, className?: string }) => {
  switch (link.platform) {
    case "web":
      return <Link href={link.href} target="_blank"><GlobeIcon className={cn("w-4 h-4", className)} /></Link>;
    case "github":
      return <Link href={link.href} target="_blank"><CodeXmlIcon className={cn("w-4 h-4", className)} /></Link>;
    case "youtube":
      return <Link href={link.href} target="_blank"><VideoIcon className={cn("w-4 h-4", className)} /></Link>;
    default:
      return <Link href={link.href} target="_blank"><SquareArrowOutUpRightIcon className={cn("w-4 h-4", className)} /></Link>;
  }
};
