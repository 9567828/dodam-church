import Title from "../title/Title";
import style from "./youthful.module.scss";

const iconBaseURL = "/imgs/icons/";

const activeList = [
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
  {
    src: `${iconBaseURL}ic_Location.svg`,
    title: "리더십트레이닝",
    sub: "Advanced testing to help you make informed decisions during early pregnancy.",
  },
];

export default function YouthfulActivity() {
  return (
    <section className={style.section}>
      <div className={style.inner}>
        <div className={style.txt}>
          <h5>YOUTHFUL Active</h5>
          <Title
            variant="nomal"
            title="유스풀 청년부 주요사역"
            content={`예수님의 사랑으로 하나 되어\n함께 배우고 섬기며 세상을 변화시키는 청년 공동체입니다.`}
          />
        </div>
        <div className={style["active-list"]}>
          {activeList.map((a, i) => (
            <div key={i} className={style.active}>
              <div className={style.icon}>
                <img src={a.src} alt="아이콘" />
              </div>
              <div className={style["active-info"]}>
                <h5>{a.title}</h5>
                <p>{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
