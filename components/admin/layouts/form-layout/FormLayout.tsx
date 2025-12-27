import { FormHTMLAttributes, useState } from "react";
import style from "./form.module.scss";
import Button from "../../ui/button/Button";
import { useSideBarStateStore } from "@/hooks/store/useSideBarStateStore";

type ModeType = "add" | "edit" | "readOnly";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  mode: ModeType;
  variants: "grid" | "";
  onDelete: () => void;
  onBack: () => void;
  children: React.ReactNode;
}

export default function FormLayout({ mode, variants, onDelete, onBack, children, ...props }: IForm) {
  const [hover, setHover] = useState(false);
  const { isClose } = useSideBarStateStore();

  const btnName = (mode: ModeType) => {
    if (mode === "add") {
      return "등록";
    } else if (mode === "edit") {
      return "완료";
    } else {
      return "수정";
    }
  };

  return (
    <form {...props} className={style[variants]}>
      {children}
      <footer className={`${style.footer} ${isClose ? style.close : ""}`.trim()}>
        <Button type="button" btnName="돌아가기" variants="back" visual="none" onClick={onBack} />
        <div className={style["btn-wrap"]}>
          <Button
            type="button"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onDelete}
            btnName="삭제"
            variants="delete"
            visual="outline"
            src={`/imgs/admin/icons/ic_trash${hover ? `-hover` : ""}.svg`}
          />
          <Button type="submit" form={props.id} btnName={btnName(mode)} variants="primary" visual="solid" />
        </div>
      </footer>
    </form>
  );
}
