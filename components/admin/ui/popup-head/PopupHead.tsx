import Button from "../button/Button";
import style from "./popup-head.module.scss";

interface IHead {
  title: string;
  onClick: () => void;
}

export default function PopupHead({ title, onClick }: IHead) {
  return (
    <div className={style.title}>
      <p>{title}</p>
      <Button type="button" variants="close" btnName="" visual="none" onClick={onClick} />
    </div>
  );
}
