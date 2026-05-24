import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srijanshil Medical Hall",
  description: "Srijanshil Medical Hall provides quality healthcare services, doctor consultations, medicine support, and patient-friendly care with experienced medical professionals.",
  icons: {
    icon: "/shrijanshillogo.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
