import { ButtonHTMLAttributes } from "react";
import style from "./button.module.scss";

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants: "login" | "trans" | "primary" | "small" | "secondary" | "delete" | "back" | "close";
  visual: "solid" | "outline" | "none";
  btnName: string;
  src?: string;
}

export default function Button({ variants, visual, btnName, src, ...props }: Ibutton) {
  return (
    <button
      {...props}
      className={`${style[variants]} ${visual !== "none" ? style.default : ""} ${visual !== "none" ? style[visual] : ""}`.trim()}
    >
      {src && <img src={src} alt={btnName} />}
      {variants === "close" && <img src="/imgs/admin/icons/ic_close.svg" alt="닫기버튼" />}
      {variants === "back" && <div className={style.icon}></div>}
      {btnName !== "" && <span>{btnName}</span>}
    </button>
  );
}
