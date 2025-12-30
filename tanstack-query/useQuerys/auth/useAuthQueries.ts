import { selectUsers } from "@/utils/supabase/sql/users/select";
import { useQuery } from "@tanstack/react-query";

const { selectUser, selectUserRole, selectAllUsers } = selectUsers();

export const useSelectUser = () => {
  return useQuery({
    queryKey: ["member", "own"],
    queryFn: async () => {
      return await selectUser();
    },
  });
};

export const useSelectUserRole = () => {
  return useQuery({
    queryKey: ["user", "role"],
    queryFn: async () => {
      return await selectUserRole();
    },
  });
};

export const useSelectAllUsers = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["members", "all"],
    queryFn: async () => {
      return await selectAllUsers(page, limit);
    },
  });
};
