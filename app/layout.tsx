/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-05 09:05:59
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-05 11:01:20
 * @FilePath: /PicImpact/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import type { Metadata, ResolvingMetadata } from "next";

import { NextUIProviders } from "~/app/providers/next-ui-providers";
import { ToasterProviders } from "~/app/providers/toaster-providers";
import { SessionProviders } from "~/app/providers/session-providers";
import { ProgressBarProviders } from "~/app/providers/progress-bar-providers";
import { ButtonStoreProvider } from "~/app/providers/button-store-Providers";

import "~/style/globals.css";
import { fetchCustomTitle } from "~/server/lib/query";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await fetchCustomTitle();

  return {
    //   title: data?.config_value || "PicImpact",
    //   icons: { icon: "./favicon.ico" },
    // };

    title: "Twitter Phone Wallpaper Collection",
    description:
      "pic.chuhai.tools is a free online platform for collecting high-quality Twitter phone wallpapers. We provide a vast collection of wallpapers to help users quickly find their favorite ones.",
    keywords: [
      "twitter phone wallpaper",
      "phone wallpaper collection",
      "twitter wallpaper",
      "phone wallpaper download",
      "wallpaper collection",
      "pic.chuhai.tools",
    ],
    alternates: {
      canonical: "https://pic.chuhai.tools",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: "Twitter Phone Wallpaper Collection",
      description:
        "pic.chuhai.tools is a free online platform for collecting high-quality Twitter phone wallpapers. We provide a vast collection of wallpapers to help users quickly find their favorite ones.",
      type: "website",
      url: "https://pic.chuhai.tools",
      siteName: "Twitter Phone Wallpaper Collection",
      images: "https://img.techrk1688.eu.org/file/aa17c62c365b0137bcb0a.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: "Twitter Phone Wallpaper Collection",
      description:
        "pic.chuhai.tools is a free online platform for collecting high-quality Twitter phone wallpapers. We provide a vast collection of wallpapers to help users quickly find their favorite ones.",
      site: "https://pic.chuhai.tools",
      images: "https://img.techrk1688.eu.org/file/aa17c62c365b0137bcb0a.jpg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-auto scrollbar-hide">
      <body>
        <SessionProviders>
          <ButtonStoreProvider>
            <NextUIProviders>
              <ToasterProviders />
              <ProgressBarProviders>{children}</ProgressBarProviders>
            </NextUIProviders>
          </ButtonStoreProvider>
        </SessionProviders>
      </body>
    </html>
  );
}
