import { text } from "@/src/lib/text";
import { cn } from "@/src/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/ui/card";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { MailIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";

const FooterContact = ({ className }: { className?: string }) => {
  const whatsappHref = text.contact.whatsapp.href;
  const googleHref = text.contact.google.href;
  const githubHref = text.contact.github.href;
  const emailHref = text.contact.email.href;
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Un projet en tête ?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Parlons-en simplement. Un message WhatsApp ou 15 à 30 minutes
          d’échange suffisent pour poser les choses, comprendre votre besoin et
          voir si le feeling est bon pour avancer ensemble.
        </p>
        <div className="flex items-center gap-3 text-white">
          <Link
            href={whatsappHref}
            target="_blank"
            className="bg-[#00a45c] py-2 px-4 rounded-full flex items-center justify-center gap-2"
          >
            <WhatsappLogoIcon size={20} />
            <span className="font-semibold">Whatsapp</span>
          </Link>
          <Link
            href={googleHref}
            target="_blank"
            className="bg-accent py-2 px-4 rounded-full flex items-center justify-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            <span className="font-semibold">30 min</span>
          </Link>
          <Link
            href={emailHref}
            target="_blank"
            className="bg-yellow-400 py-2 px-4 rounded-full flex items-center justify-center gap-2"
          >
            <MailIcon className="w-4 h-4" />
            <span className="font-semibold">Email</span>
          </Link>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500 mr-1"> Autres réseaux :</p>
        <div className="flex items-center gap-1">
          <Link
            href={whatsappHref}
            target="_blank"
            className="border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center gap-2"
          >
            <LinkedinLogoIcon size={20} />
          </Link>
          <Link
            href={githubHref}
            target="_blank"
            className="border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center gap-2"
          >
            <GithubLogoIcon size={20} />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FooterContact;
