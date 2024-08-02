import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const inter = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    //%sとすることで、子に追加したメタデータ＋設定したものを付け加えることができる
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:["Next.js","React","TailwindCSS","shadcn/ui"],
  authors:[
    {
      name:"fy-yuhcan",
      url:siteConfig.url,
    },
  ],
  openGraph:{
    type: "website",
    locale:"ja",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter:{
    card: "summary_large_image",
    title:siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@yunbo_yuh",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn("bg-background antialiased min-h-screen",inter.className)}>{children}</body>
    </html>
  );
}
