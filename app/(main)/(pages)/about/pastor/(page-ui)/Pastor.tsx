import style from "./pastor.module.scss";

export default function Pastor() {
  return (
    <div className={`inner ${style.wrapper}`}>
      <div className={style["txt-wrap"]}>
        <h1 className="title2Xl-b" style={{ marginBottom: "10px" }}>
          인삿말입니다{" "}
        </h1>
        <p className="bodyMd-m">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div>
          <p className={style.name}>
            <span className="bodyLg-r">목사</span>홍길동
          </p>
        </div>
      </div>
      <div className={style["img-wrap"]}>
        <img src="/imgs/about/pastor.png" alt="동서울교회 윤다니엘목사님" />
      </div>
    </div>
  );
}
