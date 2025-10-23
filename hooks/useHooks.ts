import { headerMenuList } from "@/utils/menuList";
import { usePathname, useRouter } from "next/navigation";

export const useHooks = () => {
  const path = usePathname();
  const route = useRouter();

  const useRoute = (path: string) => {
    route.push(path);
  };

  const useMoveBack = () => {
    route.back();
  };

  const getPageName = () => {
    for (const m of headerMenuList) {
      if (m.subMenu) {
        for (const s of m.subMenu) {
          if (path.startsWith(`${m.href}${s.href}`)) {
            return {
              title: m.menu,
              sub: s.submenu,
            };
          }
        }
      } else {
        if (path.startsWith(m.href)) {
          return {
            title: m.menu,
          };
        }
      }
    }
    return undefined;
  };

  return { getPageName, useRoute, useMoveBack };
};
