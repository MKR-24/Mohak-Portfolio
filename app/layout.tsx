import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight:['400','600','700','800'],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight:['400','600','700','800'],
})

export const metadata: Metadata = {
  title: "Mohak Rathod | Full Stack Developer",
  description: "Developer from India building full-stack apps, AI tools, and data-driven solutions.",
  keywords:['Mohak Rathod', 'MKR','Full Stack Developer','AI', 'MERN', 'Next.js'],
  authors:[{name: 'Mohak Rathod'}],
  openGraph:{
    title: 'Mohak Rathod | Full Stack Developer',
    description: 'Developer from India building full-stack apps, AI tools, and data driven solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
