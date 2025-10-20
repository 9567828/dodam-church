import type { Metadata } from "next";
import QueryProvider from "./QueryProvider";
import "../styles/global-style.ts";

export const metadata: Metadata = {
  title: {
    default: "...loading",
    template: "동서울교회 | %s",
  },
  description: "하남 동서울교회",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
