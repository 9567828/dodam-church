"use client";

import { useHooks } from "@/hooks/useHooks";
import style from "./page.module.scss";

interface IPagenation {
  totalPage: number;
  pagesPerBlock: number;
  currPage: number;
  listNum: number;
}

export default function Pagenation({ totalPage, currPage, pagesPerBlock, listNum }: IPagenation) {
  const { useRoute } = useHooks();
  const currBlock = Math.ceil(currPage / pagesPerBlock);
  const startPage = (currBlock - 1) * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, totalPage);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  console.log(endPage, totalPage);

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("size", String(listNum));
    useRoute(`?${params.toString()}`);
  };

  return (
    <div className={style.wrapper}>
      {currPage === 1 ? null : <button onClick={() => handleChangePage(1)}>처음으로</button>}
      <button
        className={style["nav-btn"]}
        onClick={() => handleChangePage(startPage - 1)}
        disabled={currPage === 1 || startPage === 1}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 2.33331L5 7.90056L11 13.6666"
            stroke="#9D744C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={style["page-btn"]}>
        {pageNumbers.map((p) => (
          <button
            key={p}
            className={`${style.num} ${currPage === p ? style.active : ""}`.trim()}
            onClick={() => handleChangePage(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        className={style["nav-btn"]}
        onClick={() => handleChangePage(endPage + 1)}
        disabled={currPage === totalPage || endPage === totalPage}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 2.33331L11 7.90056L5 13.6666"
            stroke={"#9D744C"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {currPage === totalPage ? null : <button onClick={() => handleChangePage(totalPage)}>마지막으로</button>}
    </div>
  );
}
