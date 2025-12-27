import { ChangeEvent, InputHTMLAttributes, RefObject } from "react";
import Button from "../button/Button";
import style from "./input.module.scss";
import InputBox from "./InputBox";
import { RefCallBack } from "react-hook-form";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  mode: "edit" | "add" | "readOnly";
  type: "text" | "email" | "password" | "phone";
  label: string;
  isImport?: boolean;
  withBtn?: boolean;
  btnName?: string;
  onClick?: () => void;
  error?: boolean;
}

export default function LabelInput({
  mode,
  type,
  label,
  isImport = false,
  withBtn = false,
  btnName,
  onClick,
  error,
  ...props
}: IInput) {
  return (
    <div className={style["with-label"]}>
      <label htmlFor={props.id} className={`${isImport ? style.import : ""}`.trim()}>
        {label}
      </label>
      <div className={style["input-wrap"]}>
        <InputBox {...props} type={type} variants="outline" height="md" readOnly={mode === "readOnly"} error={error} />
        {withBtn && <Button btnName={btnName!} variants="primary" visual="outline" onClick={onClick} />}
      </div>
    </div>
  );
}
