"use client";

import Link from "next/link";
import style from "./side-menu.module.scss";
import { usePathname } from "next/navigation";
import { useSideBarStateStore } from "@/hooks/store/useSideBarStateStore";
import { adminMenuList } from "@/utils/menuList";
import { roleEum } from "@/utils/supabase/sql";

const defaultImgSrc = "/imgs/admin/icons/menus/";

export default function SideMenu({ role }: { role: roleEum }) {
  const path = usePathname();
  const { isClose } = useSideBarStateStore();

  const sliceList = adminMenuList.filter((v) => !v.menu.startsWith("교인"));
  const roleAllow = role === "super" ? adminMenuList : sliceList;

  return (
    <>
      <div style={{ width: `${isClose ? "60px" : "250px"}` }}></div>
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
            {roleAllow.map((m, i) => {
              const isSub = m.sub.length > 0;
              let isActive = false;

              if (m.href !== "") {
                isActive = path.includes(m.href);
              }

              return (
                <li key={i}>
                  <Link href={m.href} className={`${style["main-menu"]} ${isActive ? style.active : ""}`.trim()}>
                    <div>
                      <img src={`${defaultImgSrc}${isActive || (isClose && path.startsWith(m.rootHref)) ? m.mainIocn : m.darkIcon}`} alt={m.menu} />
                      {!isClose && <span>{m.menu}</span>}
                    </div>
                  </Link>

                  {isSub || isClose ? (
                    <ul className={`${style["sub-wrap"]} ${isSub && isClose ? style["menu-hover"] : ""}`}>
                      {m.sub.map((s, idx) => {
                        const subPath = `${m.rootHref}${s.href}`;

                        return (
                          <li key={idx}>
                            <Link href={`${m.rootHref}${s.href}?page=1&size=10&tab=all`} className={`${style["sub-menu"]} ${path.startsWith(subPath) ? style.active : ""}`.trim()}>
                              {s.submenu}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
