import { Suspense } from "react";
import AlbumDetail from "./AlbumDetail";

export const metadata = {
  title: "교회사진",
};

export default async function Page() {
  return (
    <Suspense>
      <AlbumDetail />
    </Suspense>
  );
}
