"use client";

import BoardDetail from "@/components/main/layouts/board/detail/BoardDetail";
import StateView from "@/components/main/ui/state-view/StateView";
import { useSelectOne } from "@/tanstack-query/useQuerys/useSelectQueries";
import { BoardDetailType } from "@/utils/supabase/sql";
import { redirect } from "next/navigation";

export default function AlbumDetail({ id }: { id: string }) {
  const { data, error, isLoading } = useSelectOne<BoardDetailType>("albums", id, "show");

  const detail = data?.data;

  if (error) {
    console.error(error);
    return <StateView text="문제가 지속될 경우 관리자에게 문의해 주세요" />;
  }

  if (isLoading) {
    return <StateView text="로딩중" />;
  }

  if (detail === null) {
    return redirect("/community/album");
  }

  return <BoardDetail detail={detail!} variant="album" />;
}
