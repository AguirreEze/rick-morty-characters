import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CharacterSelectionProvider from "@/context/characterSelection";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty",
  description:
    "Challenge completed by AguirreEze (https://github.com/AguirreEze)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <CharacterSelectionProvider>
        <body className={inter.className}>{children}</body>
      </CharacterSelectionProvider>
    </html>
  );
}
