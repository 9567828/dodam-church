"use client";

import { IPagenation, pageCalculate } from "@/utils/pagenation";
import style from "./board.module.scss";

export default function Pagenation({ totalPage, currPage, pagesPerBlock, listNum }: IPagenation) {
  return (
    <div>
      <button>
        <img src="/imgs/admin/icons/ic_chevron-left.svg" alt="맨앞으로" />
      </button>
      <button></button>
    </div>
  );
}
