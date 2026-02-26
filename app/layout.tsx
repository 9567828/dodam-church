import type { Metadata } from "next";
import QueryProvider from "./providers";
import "@/styles/common.scss";

export const metadata: Metadata = {
  title: {
    default: "...loading",
    template: "도담교회 | %s",
  },
  description: "도담교회",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer`}
        ></script>
      </body>
    </html>
  );
}
