"use client";

import style from "./pagetitle.module.scss";
import { useHooks } from "@/hooks/useHooks";

export default function PageTitle() {
  const { getPageName } = useHooks();

  const { title, sub } = getPageName() || { title: "", sub: undefined };

  console.log(title, sub);

  return (
    <div className={style["bg-img"]}>
      <div className={style["name-wrap"]}>
        <p>{title}</p>
        <h1>{sub}</h1>
      </div>
    </div>
  );
}
