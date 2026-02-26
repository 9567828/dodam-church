import { RefObject } from "react";
import style from "./board.module.scss";

interface IProps {
  btnWrpRef?: RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export default function EditField({ btnWrpRef, children }: IProps) {
  return (
    <div className={style["modal-wrap"]} ref={btnWrpRef}>
      {children}
    </div>
  );
}
