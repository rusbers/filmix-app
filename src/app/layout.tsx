import "../styles/globals.css";
import type { Metadata } from "next";
import { fontOutfit } from "@/fonts/font";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Filmix – Watch Movies and TV Programmes Online",
  description: "Watch Entertaimnet films & TV programmes online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-y-scroll bg-app-dark-blue text-white antialiased",
          fontOutfit.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
