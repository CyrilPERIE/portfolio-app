import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Par défaut l'indicateur de dev se place en bas à gauche, au-dessus de la
  // barre de contact flottante sur mobile.
  devIndicators: {
    position: "top-right",
  },
};

export default nextConfig;
