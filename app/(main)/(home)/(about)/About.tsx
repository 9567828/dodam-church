"use client";

import { MouseEvent } from "react";
import style from "./about.module.scss";
import PrimaryBtn from "@/components/ui/primarybtn/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";

export default function About() {
  const { useRoute } = useHooks();

  return (
    <section className={style.section}>
      <div className={style.left}>
        <img src="/imgs/home/church-bg.png" alt="교회사진" />
      </div>
      <div className={style.right}>
        <div className="top">
          <p className={style.label}>about us</p>
          <div className={style.txtWrap}>
            <p className={style.title}>예수를 닮아가는 따뜻한 공동체</p>
            <p className={style.subTxt}>
              서로를 있는 그대로 사랑하며 예수님의 마음으로 하나되는 교회
              <br />
              삶의 여정 속에 쉼과 회복, 새로운 소망을 나누는 믿음의 공동체 동서울교회 입니다
              <br />
              언제든 따뜻한 차 한 잔처럼 여러분을 환영합니다
            </p>
          </div>
        </div>
        <PrimaryBtn label="더보기" addClass="nomal" onClick={() => useRoute("/about/pastor")} />
      </div>
    </section>
  );
}
