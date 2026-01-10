import style from "./toast.module.scss";

export default function PopupWrapper({ children }: { children: React.ReactNode }) {
  return <div className={style.container}>{children}</div>;
}
