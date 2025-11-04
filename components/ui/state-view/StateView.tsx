import style from "./state.module.scss";

export default function StateView({ text }: { text: string }) {
  return <div className={style.layout}>{text}</div>;
}
