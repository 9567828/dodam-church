import { InputHTMLAttributes } from "react";
import ToggleBtn from "../button/ToggleBtn";
import Label from "../label/Label";
import ModalLayout from "./layout/ModalLayout";
import style from "./modal.module.scss";
import ModalLayout2 from "./layout/ModalLayout";
import ModalHead from "./layout/ModalHead";
import ModalContent from "./layout/ModalContent";

interface IChange extends InputHTMLAttributes<HTMLInputElement> {
  onClose: () => void;
  variant: "green" | "red";
  labelText: string;
}

export default function ChangeShowModal({ onClose, variant, labelText, ...props }: IChange) {
  return (
    <ModalLayout2 variant="row" left="0">
      <ModalHead fontType="admin-bodySm-r" title="상태선택" onClose={onClose} />
      <ModalContent>
        <div className={style.flex}>
          <Label text={labelText} variant={variant} />
          <ToggleBtn {...props} />
        </div>
      </ModalContent>
    </ModalLayout2>
  );
}
