import { state } from "@/app/state";
import LinkCard from "./link-card";

export default function LinksSection() {
  return <div className="absolute bottom-0 left-0 flex items-center" style={{width: "inherit"}}>
    {state.me.links.map(link => (
        <LinkCard
          key={link.name}
          href={link.name}
          logoUrl={link.logoUrl}
          alt={link.alt}
          name={link.name}          
        />
      ))}
  </div>;
}
