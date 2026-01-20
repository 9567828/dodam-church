import { ISearchParams } from "@/utils/propType";
import AlbumLists from "./(list)/AlbumLists";
import { getSearchQuerys, getTabQuery } from "@/utils/pagenation";

export default async function Page({ searchParams }: ISearchParams) {
  const { page, size, tab, keyword } = await searchParams;

  const currPage = getSearchQuerys(page, 1);
  const listNum = getSearchQuerys(size, 10);
  const tabStatus = getTabQuery(tab, "all");
  const search = String(keyword) ?? "";

  return <AlbumLists currPage={currPage} size={listNum} tab={tabStatus} keyword={search} />;
}
