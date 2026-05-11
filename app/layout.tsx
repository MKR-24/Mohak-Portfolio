import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight:['400','500','600','700'],
})

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight:['300','400','500'],
})

export const metadata: Metadata = {
  title: "Mohak Rathod | Software Engineer",
  description: "MS CS at Arizona State University (4.0 GPA).Building distributed systems, AI pipelines, and secure backend infrastructure. Open to SWE,AI/ML, and data science roles.",
  keywords:['Mohak Rathod', 'Software Engineer','Distributed Systems','AI Engineer', 'Backend Engineer', 'Data Science', 'ASU', 'Full Stack'],
  authors:[{name: 'Mohak Rathod'}],
  openGraph:{
    title: 'Mohak Rathod | Software Engineer',
    description: 'MS CS at ASU (4.0 GPA).Distributed systems, AI pipelines, and secure backend infrastructure. Open to global opportunities.',
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
