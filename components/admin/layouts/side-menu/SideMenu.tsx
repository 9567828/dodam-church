"use client";

import Link from "next/link";
import style from "./side-menu.module.scss";
import { usePathname } from "next/navigation";
import { useSideMenuOpenStore } from "@/hooks/store/useSideMenuOpenStore";
import { useSideBarStateStore } from "@/hooks/store/useSideBarStateStore";

const defaultImgSrc = "/imgs/admin/icons/menus/";

const menuList = [
  {
    menu: "관리자계정",
    href: "/admin/users",
    whiteIcon: "ic_Users-white.svg",
    darkIcon: "ic_Users-dark.svg",
    mainIocn: "ic_Users-main.svg",
    sub: [],
  },
  {
    menu: "게시물관리",
    href: "",
    whiteIcon: "ic_Document-white.svg",
    darkIcon: "ic_Document-dark.svg",
    mainIocn: "",
    sub: [
      { submenu: "앨범목록", href: "/admin/boards/albums" },
      { submenu: "유튜브목록", href: "/admin/boards/youtube" },
    ],
  },
];

export default function SideMenu() {
  const path = usePathname();
  const { isOpen, toggleSideMenu } = useSideMenuOpenStore();
  const { isClose } = useSideBarStateStore();

  return (
    <aside className={`${style.aside} ${isClose ? style["side-close"] : ""}`.trim()}>
      <nav>
        <div className={style.head}>
          <h1>
            <img src="/imgs/admin/cms_logo.svg" alt="관리자페이지로고" />
          </h1>
          {!isClose && (
            <div className={style.title}>
              <p>관리자페이지</p>
              <p>Admin Dashboard</p>
            </div>
          )}
        </div>

        <ul className={style["menu-wrap"]}>
          {menuList.map((m, i) => (
            <li key={i}>
              <Link
                href={m.href}
                onClick={m.sub.length > 0 ? () => toggleSideMenu() : undefined}
                className={`${style["main-menu"]} ${m.href === path ? style.active : ""}`.trim()}
              >
                {!isClose ? (
                  <>
                    <div>
                      <img src={`${defaultImgSrc}${m.href === path ? m.mainIocn : m.darkIcon}`} alt="" />
                      <span>{m.menu}</span>
                    </div>
                    {m.sub.length > 0 ? (
                      <img src={`${defaultImgSrc}ic_chevron-${isOpen ? "up" : "down"}.svg`} alt="메뉴열림/닫힘" />
                    ) : null}
                  </>
                ) : (
                  <img src={`${defaultImgSrc}${m.href === path ? m.mainIocn : m.darkIcon}`} alt="" />
                )}
              </Link>

              {m.sub.length > 0 && isOpen && !isClose ? (
                <ul className={style["sub-wrap"]}>
                  {m.sub.map((s, idx) => (
                    <li key={idx}>
                      <Link href={s.href} className={`${style["sub-menu"]} ${s.href === path ? style.active : ""}`.trim()}>
                        {s.submenu}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
