import { text } from "@/src/lib/text";
import { CalendarIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const FloatingContact = ({ className }: { className?: string }) => {
  const whatsappHref = text.contact.whatsapp.href;
  const googleHref = text.contact.google.href;
  const emailHref = text.contact.email.href;
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl bg-card border border-border p-2 w-fit shadow-md text-white fixed bottom-8 -translate-x-1/2 left-1/2",
        className,
      )}
    >
      <Link
        href={whatsappHref}
        target="_blank"
        className="bg-[#00a45c] py-2 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <WhatsappLogoIcon size={20} />
        <span className="font-semibold">Whatsapp</span>
      </Link>
      <Link
        href={googleHref}
        target="_blank"
        className="bg-accent py-2 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <CalendarIcon className="w-4 h-4" />
        <span className="font-semibold">30 min</span>
      </Link>
      <Link
        href={emailHref}
        target="_blank"
        className="bg-yellow-400 py-2 px-4 rounded-lg flex items-center justify-center gap-2"
      >
        <MailIcon className="w-4 h-4" />
        <span className="font-semibold">Email</span>
      </Link>
    </div>
  );
};

export default FloatingContact;
