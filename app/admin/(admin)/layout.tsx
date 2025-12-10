import Header from "@/components/admin/layouts/header/Header";
import SideMenu from "@/components/admin/layouts/side-menu/SideMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-grid">
      <SideMenu />
      <div className="admin-column">
        <Header />
        <div className="inner">{children}</div>
      </div>
    </div>
  );
}
