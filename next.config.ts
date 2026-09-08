import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sans ça, Next bloque ses ressources de dev dès que la page est ouverte
  // depuis une autre origine que localhost (test sur mobile via le Wi-Fi).
  allowedDevOrigins: ["192.168.1.91", "192.168.1.*"],
  // Par défaut l'indicateur de dev se place en bas à gauche, au-dessus de la
  // barre de contact flottante sur mobile.
  devIndicators: {
    position: "top-right",
  },
};

export default nextConfig;
