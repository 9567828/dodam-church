import { Suspense } from "react";
import UserList from "./(list)/UserList";
import { ISearchParams } from "@/utils/propType";
import { getSearchQuerys } from "@/utils/pagenation";

export default async function Page({ searchParams }: ISearchParams) {
  const { page, size } = await searchParams;

  const currPage = getSearchQuerys(page, 1);
  const listNum = getSearchQuerys(size, 6);

  return (
    <Suspense>
      <UserList currPage={currPage} listNum={listNum} />
    </Suspense>
  );
}
