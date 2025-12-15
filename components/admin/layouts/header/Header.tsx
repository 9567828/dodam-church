"use client";

import { useState } from "react";
import AvatarWrap from "../../ui/avatar-wrap/AvatarWrap";
import SearchInput from "../../ui/input-box/SearchInput";
import style from "./header.module.scss";
import { useSideBarStateStore } from "@/hooks/store/useSideBarStateStore";
import Link from "next/link";

export default function Header() {
  const [alret, setAlert] = useState(false);
  const { isClose, toggleSideBar } = useSideBarStateStore();

  return (
    <header className={`${style.header} ${isClose ? style.close : ""}`.trim()}>
      <nav>
        <div className={style["menu-wrap"]}>
          <button onClick={toggleSideBar}>
            <img src="/imgs/admin/icons/ic_menu.svg" alt="메뉴버튼" />
          </button>
          <SearchInput id="headerSearch" variants="header" />
        </div>
        <div className={style["menu-wrap"]}>
          <Link href={"/"}>
            <img src="/imgs/admin/icons/ic_home.svg" alt="홈으로이동" />
          </Link>
          <button>
            {!alret ? (
              <img src="/imgs/admin/icons/ic_alert=off.svg" alt="알림아이콘" />
            ) : (
              <img src="/imgs/admin/icons/ic_alert=on.svg" alt="알림아이콘" />
            )}
          </button>
          <Link href={"/admin/profile"}>
            <AvatarWrap variant="empty" size="sm" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
