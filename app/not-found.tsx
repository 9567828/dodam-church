"use client";

import PrimaryBtn from "@/components/ui/primarybtn/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";
import style from "@/styles/ui/not-found.module.scss";

export default function NotFound() {
  const { useRoute } = useHooks();

  return (
    <div className={style["err-wrap"]}>
      <div className={style["txt-wrap"]}>
        <h1>404 ERROR</h1>
        <p>원하시는 페이지를 찾을 수 없습니다</p>
      </div>
      <PrimaryBtn label="홈으로 돌아가기" onClick={() => useRoute("/")} />
    </div>
  );
}
