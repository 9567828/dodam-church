import { InputHTMLAttributes } from "react";
import ToggleBtn from "../button/ToggleBtn";
import Label from "../label/Label";
import style from "./modal.module.scss";
import ModalHead from "./layout/ModalHead";
import ModalContent from "./layout/ModalContent";
import ModalLayout from "./layout/ModalLayout";

interface IChange extends InputHTMLAttributes<HTMLInputElement> {
  onClose: () => void;
  variant: "green" | "red";
  labelText: string;
  index: number;
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

export default function ChangeShowModal({ onClose, index, variant, labelText, modalRef, ...props }: IChange) {
  return (
    <ModalLayout variant="row" left="0" modalRef={modalRef} changeBottm={index >= 5}>
      <ModalHead fontType="admin-bodySm-r" title="상태선택" onClose={onClose} />
      <ModalContent>
        <div className={style.flex}>
          <Label text={labelText} variant={variant} />
          <ToggleBtn {...props} />
        </div>
      </ModalContent>
    </ModalLayout>
  );
}
