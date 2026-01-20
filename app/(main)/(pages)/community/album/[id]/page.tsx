import { Suspense } from "react";
import AlbumDetail from "./AlbumDetail";
import { createServClient } from "@/utils/supabase/services/serverClinet";
import { select } from "@/utils/supabase/sql/boards/select";
import { AlbumRow } from "@/utils/supabase/sql";
import { IParams } from "@/utils/propType";
import { redirect } from "next/navigation";
const { selectOne } = select();

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const supabase = await createServClient();
  const { data, error } = await selectOne<AlbumRow>({ name: "albums", id, supabase });

  if (error) {
    return redirect("/community/album");
  }

  return {
    title: data.title,
  };
}

export default async function Page({ params }: IParams) {
  const { id } = await params;
  return (
    <Suspense>
      <AlbumDetail id={id} />
    </Suspense>
  );
}
