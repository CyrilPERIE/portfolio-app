import { text } from "@/src/lib/text";
import { CalendarIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

const FloatingContact = ({ className }: { className?: string }) => {
  const whatsappHref = text.contact.whatsapp.href;
  const googleHref = text.contact.google.href;
  const emailHref = text.contact.email.href;
  return (
    <div
      className={cn(
        "fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex max-w-lg items-center gap-1.5 rounded-2xl border border-border bg-card p-1.5 shadow-md sm:inset-x-auto sm:left-1/2 sm:w-fit sm:-translate-x-1/2 sm:gap-3 sm:p-2",
        className,
      )}
    >
      <Link
        href={whatsappHref}
        target="_blank"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#00a45c] px-2 py-2 text-white sm:flex-none sm:gap-2 sm:px-4"
      >
        <WhatsappLogoIcon size={20} className="shrink-0" />
        <span className="text-xs font-semibold sm:text-sm">Whatsapp</span>
      </Link>
      <Link
        href={googleHref}
        target="_blank"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent px-2 py-2 text-white sm:flex-none sm:gap-2 sm:px-4"
      >
        <CalendarIcon className="h-4 w-4 shrink-0" />
        <span className="text-xs font-semibold sm:text-sm">30 min</span>
      </Link>
      <Link
        href={emailHref}
        target="_blank"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-yellow-400 px-2 py-2 text-white sm:flex-none sm:gap-2 sm:px-4"
      >
        <MailIcon className="h-4 w-4 shrink-0" />
        <span className="text-xs font-semibold sm:text-sm">Email</span>
      </Link>
    </div>
  );
};

export default FloatingContact;
