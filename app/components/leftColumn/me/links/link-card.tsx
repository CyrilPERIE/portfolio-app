import { Link } from "@/app/state";
import Image from "next/image";

export default function LinkCard(link: Link) {
  return (
    <a href={link.href} className="inline-block">
      <Image
        src={link.logoUrl}
        alt={link.alt}
        width={54}
        height={54}
        className="rounded-full"
      />
    </a>
  );
}
