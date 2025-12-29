import { InputHTMLAttributes } from "react";
import style from "./button.module.scss";

interface IToggle extends InputHTMLAttributes<HTMLInputElement> {}

export default function ToggleBtn({ ...props }: IToggle) {
  return (
    <div className={style["toggle-box"]}>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id} className={style.toggle}>
        <span className={style.circle}></span>
      </label>
    </div>
  );
}
