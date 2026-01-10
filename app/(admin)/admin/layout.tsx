"use client";

import Loading from "@/app/Loading";
import Header from "@/components/admin/layouts/header/Header";
import SideMenu from "@/components/admin/layouts/side-menu/SideMenu";
import { useSelectLogginUser } from "@/tanstack-query/useQuerys/users/useSelectUser";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useSelectLogginUser();

  if (isLoading) return <Loading />;

  return (
    <div className="admin-grid">
      <SideMenu role={data?.admin?.role!} />

      <div>
        <Header user={data!} />
        <>{children}</>
      </div>
    </div>
  );
}
