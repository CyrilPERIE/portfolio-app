import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cyril PERIE - Développeur Full Stack",
  description: "Développeur Full Stack passionné par le web et le code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "flex flex-col min-h-screen antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
          <div className="lg:px-82 sm:px-4 lg:pt-6 sm:pt-4 mb-4">
            <div className="min-h-full flex flex-col px-4 sm:px-2 lg:px-0">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
