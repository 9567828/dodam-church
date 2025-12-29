"use client";

import { ButtonHTMLAttributes } from "react";
import style from "./primarybtn.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  src?: string;
  alt?: string;
  variant?: "primary" | "secondary";
  addClass?: "nomal";
}

export default function PrimaryBtn({ label, src, alt, variant = "primary", addClass, ...props }: IButton) {
  return (
    <button {...props} className={`${style[variant]} ${addClass ? style[addClass] : ""}`.trim()}>
      {src ? <img src={src} alt={alt} /> : null}
      {label}
    </button>
  );
}
