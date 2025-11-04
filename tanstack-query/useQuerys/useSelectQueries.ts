import createBrowClient from "@/utils/supabase/services/browerClinet";
import { tablesName } from "@/utils/supabase/sql";
import { select } from "@/utils/supabase/sql/select";
import { useQuery } from "@tanstack/react-query";
const { selectPageList, selectList, selectOne } = select();

const supabase = createBrowClient();

export const useSelectPageList = (name: tablesName, limit: number, page: number) => {
  return useQuery({
    queryKey: [name, limit, page],
    queryFn: async () => {
      return await selectPageList({ name, limit, page, supabase });
    },
  });
};

export const useSelectList = (name: tablesName, limit: number) => {
  return useQuery({
    queryKey: [name, limit],
    queryFn: async () => {
      return await selectList({ name, limit, supabase });
    },
  });
};

export const useSelectOne = (name: tablesName, id: number | string) => {
  return useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      return await selectOne({ name, id, supabase });
    },
  });
};
