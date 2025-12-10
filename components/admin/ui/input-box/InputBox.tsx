import { InputHTMLAttributes } from "react";
import style from "./input.module.scss";

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  variants: "login" | "solid" | "outline";
  height?: "sm" | "md" | "lg";
  error?: boolean;
}

export default function InputBox({ variants, height = "sm", error = false, ...props }: Iinput) {
  return (
    <>
      <input
        {...props}
        className={`${style[variants]} ${style[height]} ${variants === "solid" || variants === "outline" ? style.default : ""} ${
          error ? style.error : ""
        }`.trim()}
      />
    </>
  );
}
