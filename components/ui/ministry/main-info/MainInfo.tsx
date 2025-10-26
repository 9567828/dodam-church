import Title from "../title/Title";
import style from "./info.module.scss";

interface ISchedule {
  indexNum: number;
  titleTxt: string;
  subTxt?: string;
}

const scheduleList = [
  { src: "/imgs/icons/ic_time.svg", title: "", sub: "" },
  { src: "/imgs/icons/ic_place.svg", title: "" },
  { src: "/imgs/icons/ic_person.svg", title: "담당자", sub: "" },
];

export const modifyfSchedule = ({ indexNum, titleTxt, subTxt }: ISchedule) => {
  const index = indexNum;
  const targetObj = scheduleList[index];

  if (targetObj) {
    targetObj.title = titleTxt !== "" ? titleTxt : targetObj.title;
    targetObj.sub = subTxt;
  }

  return scheduleList;
};

interface IMain {
  title: string;
  content: string;
  src: string;
}

export default function MainInfo({ title, content, src }: IMain) {
  return (
    <section className={`inner ${style.section}`}>
      <div className={style.intro}>
        <Title title={title} content={content} />
        <div className={style.img}>
          <img src={src} alt={title} />
        </div>
      </div>
      <div className={style["schedule-wrap"]}>
        {scheduleList.map((l, i) => (
          <div key={i} className={style.box}>
            <div className={style.icon}>
              <img src={l.src} alt="활동안내" />
            </div>
            <div className={style.txt}>
              <p>{l.title}</p>
              {l.sub ? <p className={style.sub}>{l.sub}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
