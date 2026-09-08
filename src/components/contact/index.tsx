import { SectionTitle } from "@/src/components/_common/section_title";
import FooterContact from "@/src/components/contact/footer.contact";
import FloatingContact from "@/src/components/contact/floating.contact";
import { ContactVisibility } from "@/src/components/contact/visibility.contact";
import { cn } from "@/src/lib/utils";

const Contact = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <SectionTitle title="03." subtitle="me contacter" />
      <ContactVisibility
        footer={<FooterContact />}
        floating={<FloatingContact />}
      />
    </div>
  );
};

export default Contact;
