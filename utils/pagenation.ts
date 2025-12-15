import { useHooks } from "@/hooks/useHooks";
import { ISearchParams, pageQueryProps } from "./propType";

export interface IPagenation {
  totalPage: number;
  pagesPerBlock: number;
  currPage: number;
  listNum: number;
}

export const pageCalculate = (totalPage: number, currPage: number, pagesPerBlock: number, listNum: number) => {
  const { useRoute } = useHooks();
  const currBlock = Math.ceil(currPage / pagesPerBlock);
  const startPage = (currBlock - 1) * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPage);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("size", String(listNum));
    useRoute(`?${params.toString()}`);
  };
  return { startPage, endPage, pageNumbers, handleChangePage };
};

export const getTotalPage = (count: number, listNum: number) => {
  return Math.ceil(count / listNum);
};

export const getSearchQuerys = (params: pageQueryProps, num: number) => {
  if (Array.isArray(params)) {
    return Number(params[0]) || num;
  }
  return Number(params) || num;
};
