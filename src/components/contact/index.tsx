"use client";

import { SectionTitle } from "@/src/components/_common/section_title";
import FooterContact from "@/src/components/contact/footer.contact";
import FloatingContact from "@/src/components/contact/floating.contact";
import { cn } from "@/src/lib/utils";
import { useEffect, useRef, useState } from "react";

const Contact = ({ className }: { className?: string }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterInView, setIsFooterInView] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsFooterInView(entry.isIntersecting);
      },
      {
        threshold: 0,
        // ~ hauteur du floating (bottom-8 + pill) : on masque
        // juste avant le recouvrement
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn(className)}>
      <SectionTitle title="03." subtitle="me contacter" />
      <div ref={footerRef}>
        <FooterContact
          className={cn(
            "transition-opacity duration-300 ease-in-out",
            !isFooterInView ? "opacity-0 pointer-events-none" : "opacity-100",
          )}
        />
      </div>
      <FloatingContact
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          isFooterInView ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
      />
    </div>
  );
};

export default Contact;
