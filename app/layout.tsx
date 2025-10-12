import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoleMaster - Premium and affordable sneaker",
  description: "Discover premium sneakers and streetwear at Apa Do Je. Shop limited editions, classic kicks, and more.",
  keywords: [
    "sneakers",
    "streetwear",
    "limited edition shoes",
    "premium sneakers",
    "SoleMaster",
    "Nike",
    "Adidas",
    "Jordan",
    "Yeezy",
    "sneaker store online"
  ],
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo/newLogoSM.png',
        href: '/logo/newLogoSM.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo/newLogoSM.png',
        href: '/logo/newLogoSM.png',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}
