import style from "./middle.module.scss";

export default function MiddleImg({
  url,
  isYoutful = false,
  isText = false,
  text,
}: {
  url: string;
  isYoutful?: boolean;
  isText?: boolean;
  text?: string;
}) {
  return (
    <section
      className={`${style.section} ${isYoutful ? style["youthful-txt"] : ""} ${isText ? style.text : ""}`.trim()}
      style={{ backgroundImage: `url(${url})` }}
    >
      {isYoutful && <p className={style["youthful-txt"]}>YOUTHFUL Ministry</p>}
      {isText && <p className={style.txt}>{text}</p>}
    </section>
  );
}
