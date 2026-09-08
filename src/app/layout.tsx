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
          "flex min-h-screen flex-col antialiased font-sans",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <div className="mx-auto w-full max-w-5xl px-4 py-4 pb-28 sm:px-6 sm:py-6 sm:pb-28 lg:px-8 lg:pt-8">
          {children}
        </div>
      </body>
    </html>
  );
}
