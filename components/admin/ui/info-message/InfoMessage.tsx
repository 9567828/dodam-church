import style from "./info-message.module.scss";

interface IMsg {
  mode: "info" | "error";
  msg: string;
}

export default function InfoMessage({ mode, msg }: IMsg) {
  return <p className={`${style.default} ${style[mode]}`}>{msg}</p>;
}
