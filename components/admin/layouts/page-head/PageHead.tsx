import Button from "../../ui/button/Button";
import style from "./page-head.module.scss";

interface IHead {
  title: string;
  btnName: string;
  icon?: string;
  onClick: () => void;
}

export default function PageHead({ title, btnName, icon, onClick }: IHead) {
  return (
    <div className={style.wrap}>
      <h5 className="admin-titleXl-b">{title}</h5>
      <Button type="button" btnName={btnName} variants="primary" visual="solid" src={icon} onClick={onClick} />
    </div>
  );
}
