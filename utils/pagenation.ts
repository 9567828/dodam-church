"use client";

import { useHooks } from "@/hooks/useHooks";
import { useSearchParams } from "next/navigation";
const { useRoute } = useHooks();
const searchParams = useSearchParams();

export interface IPagenation {
  totalPage: number;
  pagesPerBlock: number;
  currPage: number;
  listNum: number;
}

export const pageCalculate = (totalPage: number, currPage: number, pagesPerBlock: number, listNum: number) => {
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
  return { getCurrPage, getListNum, getTotalPage, startPage, endPage, pageNumbers, handleChangePage };
};

export const getCurrPage = () => {
  return Number(searchParams.get("page")) || 1;
};

export const getListNum = (listNum: number) => {
  return Number(searchParams.get("size")) || listNum;
};

export const getTotalPage = (count: number, listNum: number) => {
  return Math.ceil(count / listNum);
};
