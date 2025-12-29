import style from "./main.module.scss";

export interface IMainList {
  title: string;
  sub: string;
  src: string;
  info: string;
}

export const makeActivity = ({ title, sub, src, info }: IMainList) => {
  return { title, sub, src, info };
};

interface IActivity {
  table: IMainList[];
}

export default function MainActivity({ table }: IActivity) {
  return (
    <section className={style.section}>
      <h1 className={style["main-title"]}>주요활동</h1>
      <div className={`inner ${style.container}`}>
        {table.map((t, i) => (
          <div key={i} className={style.wrapper}>
            <div className={style.img}>
              <img src={t.src} alt="주요활동" />
            </div>
            <div className={style["txt-wrap"]}>
              <p className={style.sub}>{t.sub}</p>
              <div className={style["info-wrap"]}>
                <h1 className={style.title}>{t.title}</h1>
                <p className={style.info}>{t.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
