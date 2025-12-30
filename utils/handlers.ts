import { Dispatch, SetStateAction } from "react";
import { roleEum } from "./supabase/sql";

export const handlers = () => {
  const handleCheckedRole = (role: roleEum, setState: Dispatch<SetStateAction<roleEum | null>>) => {
    if (role === "super") {
      setState("super");
    } else if (role === "admin") {
      setState("admin");
    } else {
      setState("nomal");
    }
  };
  const toggleAllChecked = (allChecked: boolean, setState: Dispatch<SetStateAction<string[]>>, list: any[]) => {
    if (allChecked) {
      setState([]);
    } else {
      setState(list.map((v) => String(v.id)));
    }
  };

  return { handleCheckedRole, toggleAllChecked };
};
