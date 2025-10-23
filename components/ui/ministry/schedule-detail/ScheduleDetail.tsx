import style from "./schedule.module.scss";

interface IBox {
  iconSrc: string;
  alt: string;
  title: string;
  sub?: string;
}

export default function ScheduleDetail({ iconSrc, alt, title, sub }: IBox) {
  return (
    <div className={style.box}>
      <div className={style.icon}>
        <img src={iconSrc} alt={alt} />
      </div>
      <div className={style.txt}>
        <p>{title}</p>
        {sub ? <p>{sub}</p> : null}
      </div>
    </div>
  );
}
