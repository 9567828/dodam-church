import style from "./page.module.scss";

export default function Pagenation() {
  return (
    <div className={style.wrapper}>
      <button className={style["nav-btn"]}>
        <img src="/imgs/icons/ic_arrow-pagenation.svg" alt="이전버튼" />
      </button>
      <div className={style["page-btn"]}>
        <button className={`${style.num} ${style.active}`}>1</button>
      </div>
      <button className={`${style["nav-btn"]} ${style.reverse}`}>
        <img src="/imgs/icons/ic_arrow-pagenation.svg" alt="다음버튼" />
      </button>
    </div>
  );
}
