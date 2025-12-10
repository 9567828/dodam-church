import style from "./side-menu.module.scss";

export default function SideMenu() {
  return (
    <aside className={style.aside}>
      <nav>
        <div className={style.head}>
          <h1>
            <img src="/imgs/admin/cms_logo.svg" alt="관리자페이지로고" />
          </h1>
          <div>
            <p>관리자페이지</p>
            <p>Admin Dashboard</p>
          </div>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
