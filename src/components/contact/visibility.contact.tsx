"use client";

import { cn } from "@/src/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Affiche la barre de contact flottante tant que le bloc de contact
 * n'est pas à l'écran, pour éviter que les deux se superposent.
 */
export const ContactVisibility = ({
  footer,
  floating,
}: {
  footer: ReactNode;
  floating: ReactNode;
}) => {
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
        threshold: 0.35,
        rootMargin: "0px 0px -72px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={footerRef}>{footer}</div>
      <div
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          isFooterInView ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        {floating}
      </div>
    </>
  );
};
