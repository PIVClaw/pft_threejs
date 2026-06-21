import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pft_threejs — Portfolio immersif",
  description: "MVP portfolio immersif en Next.js, Tailwind, Framer Motion et Three.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
