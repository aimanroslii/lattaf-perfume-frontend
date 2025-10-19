import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lattafa Perfumes - Indulge The Luxury of Fragrances",
  description: "Lattafa Perfumes - Indulge The Luxury of Fragrances",
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
        url: '/perfume_banner/lattafa-logo-final-2.svg',
        href: '/perfume_banner/lattafa-logo-final-2.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/perfume_banner/lattafa-logo-final-2.svg',
        href: '/perfume_banner/lattafa-logo-final-2.svg',
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
