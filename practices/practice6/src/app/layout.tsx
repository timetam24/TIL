import type { Metadata } from "next";
import { inter, mrDeHaviland } from "@/lib/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "State 관리하기",
  description: "React 공식문서 - Learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mrDeHaviland.variable}`}>
        {children}
      </body>
    </html>
  );
}
