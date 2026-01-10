import style from "./info-message.module.scss";

interface IMsg {
  mode: "info" | "error";
  addPd?: boolean;
  msg: string;
}

export default function InfoMessage({ mode, msg, addPd = true }: IMsg) {
  return (
    <p style={addPd ? { padding: "8px 8px 0" } : undefined} className={`${style.default} ${style[mode]}`}>
      {msg}
    </p>
  );
}
