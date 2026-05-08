import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "nyc.0430-0504",
  description: "my pov of nyc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${playfair.variable} antialiased font-sans bg-[#050A11] text-gray-100 overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
