import { InputHTMLAttributes } from "react";
import style from "./input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "nomal" | "check-box";
  label?: string;
  addLabel?: string;
}

export default function InputBox({ variant = "nomal", label, addLabel = "", ...props }: IInput) {
  return (
    <div className={style[variant]}>
      <input {...props} />
      <label htmlFor={props.id}>{label}</label>
      {addLabel !== "" ? <label htmlFor={props.id}>{addLabel}</label> : null}
    </div>
  );
}
