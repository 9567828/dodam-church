import { tabStatusType } from "@/components/admin/ui/board/BoardTab";
import createBrowClient from "@/utils/supabase/services/browerClinet";
import { boardTables, tablesName } from "@/utils/supabase/sql";
import { select, showStateType } from "@/utils/supabase/sql/boards/select";
import { filterSortType } from "@/utils/supabase/sql/users/select";
import { useQuery } from "@tanstack/react-query";
const { selectPageList, selectList, selectOne } = select();

const supabase = createBrowClient();

export const useSelectPageList = <T>(
  name: tablesName,
  limit: number,
  page: number,
  tab: tabStatusType,
  filter: filterSortType,
  hasIsShow?: showStateType
) => {
  return useQuery({
    queryKey: [name, limit, page, tab, filter, hasIsShow],
    queryFn: async () => {
      return await selectPageList<T>({ name, limit, page, tab, filter, hasIsShow, supabase });
    },
  });
};

export const useSelectList = <T>(name: tablesName, limit: number, hasIsShow?: showStateType) => {
  return useQuery({
    queryKey: [name, limit, hasIsShow],
    queryFn: async () => {
      return await selectList<T>({ name, limit, hasIsShow, supabase });
    },
  });
};

export const useSelectOne = <T extends boardTables>(name: tablesName, id: number | string, hasIsShow?: showStateType) => {
  return useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      return await selectOne<T>({ name, id, hasIsShow, supabase, defaultValue: {} as T });
    },
  });
};
