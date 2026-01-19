"use client";

import InnerLayout from "@/components/admin/layouts/inner-layout/InnerLayout";
import PanelLayout from "@/app/(admin)/admin/search/(layout)/Panel";
import { useSelectSearchByBoard } from "@/tanstack-query/useQuerys/useSelectQueries";
import { viewName } from "@/utils/supabase/sql";
import SearchResult from "@/app/(admin)/admin/search/(layout)/SearchResult";
import Loading from "@/app/Loading";
import Pagenation from "@/components/admin/ui/board/Pagenation";
import { useHooks } from "@/hooks/useHooks";

interface IDetailPorps {
  keyword: string;
  table: viewName;
  page: number;
  size: number;
}

export default function SearchDetail({ keyword, table, page, size }: IDetailPorps) {
  const tableName = table === "album_search" ? "앨범" : table === "sermon_search" ? "말씀영상" : "";
  const { data, isLoading } = useSelectSearchByBoard({ name: table, search: keyword, page, limit: size });
  const { useRoute } = useHooks();

  const list = data?.data ?? [];
  const count = data?.count ?? 0;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <InnerLayout mode="default" title={`"${keyword}" 검색결과`}>
      <PanelLayout mode="detail" title={`${tableName} (${count})`} url={`/admin/search?keyword=${keyword}`}>
        <SearchResult list={list} table={table} />
        <Pagenation
          count={count}
          currPage={page}
          listNum={size}
          isSearch={true}
          path={`?keyword=${keyword}&table=${table}&`}
        />
      </PanelLayout>
    </InnerLayout>
  );
}
