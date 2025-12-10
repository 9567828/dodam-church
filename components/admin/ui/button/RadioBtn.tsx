import { InputHTMLAttributes } from "react";
import style from "./button.module.scss";

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export default function RadioBtn({ text, ...props }: IRadio) {
  return (
    <div className={style["radio-btn"]}>
      <input type="radio" {...props} />
      <label htmlFor={props.id}>{text}</label>
    </div>
  );
}
