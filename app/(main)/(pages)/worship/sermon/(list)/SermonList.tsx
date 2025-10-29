"use client";

import PhotoBoard, { SermonRow } from "@/components/layouts/board/photo-board/PhotoBoard";
import { useSelectList } from "@/hooks/react-query/useQuerys/useSelectQueries";

export default function SermonList() {
  const { data: { list, count } = { list: [], count: 0 }, isLoading } = useSelectList("sermons", 9);

  if (list.length <= 0 && []) {
    return <div>게시물없음</div>;
  }

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div className="inner">
      <PhotoBoard list={list} variant="sermon" />
    </div>
  );
}
