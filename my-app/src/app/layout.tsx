import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/BannerImageComp";
import EditBanner from "@/components/EditBannerTemplateBs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banner",
  description: "Assignment Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div><Banner /></div>
        {children}
      </body>
    </html>
  );
}
