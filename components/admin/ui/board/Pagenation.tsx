"use client";

import { IPagenation, pageCalculate } from "@/utils/pagenation";
import style from "./board.module.scss";
import { useState } from "react";

// export default function Pagenation({ totalPage, currPage, pagesPerBlock, listNum }: IPagenation) {
export default function Pagenation() {
  const [hover, setHover] = useState<string | null>(null);

  const onClick = () => {
    console.log("클릭");
  };

  return (
    <div className={style["pagenation-wrap"]}>
      <button className={style["arrow-btn"]}>
        <img src="/imgs/admin/icons/ic_chevron-left.svg" alt="맨앞으로" />
      </button>
      <button
        id="left"
        className={style["arrow-btn"]}
        onClick={onClick}
        onMouseEnter={() => setHover("left")}
        onMouseLeave={() => setHover(null)}
      >
        {hover !== "left" ? <span>...</span> : <img src="/imgs/admin/icons/ic_chevron-double-left.svg" alt="앞으로" />}
      </button>
      <button className={`${style["page-btn"]}`}>
        <span>3</span>
      </button>
      <button className={`${style["page-btn"]} ${style.active}`}>
        <span>4</span>
      </button>
      <button className={`${style["page-btn"]}`}>
        <span>5</span>
      </button>
      <button
        id="right"
        className={style["arrow-btn"]}
        onMouseEnter={() => setHover("right")}
        onMouseLeave={() => setHover(null)}
      >
        {hover !== "right" ? <span>...</span> : <img src="/imgs/admin/icons/ic_chevron-double-right.svg" alt="뒤로" />}
      </button>
      <button className={style["arrow-btn"]}>
        <img src="/imgs/admin/icons/ic_chevron-right.svg" alt="맨뒤로" />
      </button>
    </div>
  );
}
