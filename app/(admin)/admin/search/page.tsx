import SearchList from "@/app/(admin)/admin/search/(layout)/SearchList";
import { ISearchParams } from "@/utils/propType";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }: ISearchParams) {
  const { keyword } = await searchParams;

  if (!keyword) {
    redirect("/admin/boards/albums?page=1&size=10&tab=all");
  }

  return <SearchList keyword={String(keyword)} />;
}
