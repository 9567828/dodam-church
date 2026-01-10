import style from "./toast.module.scss";

export default function ToastPopup() {
  return (
    <div className={style.container}>
      <div className={style["toast-wrap"]}>
        <img src="/imgs/admin/icons/ic_check-toast.svg" alt="체크" />
        <p className="admin-bodySm-m">저장이 완료 되었습니다.</p>
      </div>
    </div>
  );
}
