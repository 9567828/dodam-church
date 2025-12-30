import createBrowClient from "../../services/browerClinet";
import { createServClient } from "../../services/serverClinet";
import { getUserId } from "./auth";

export const selectUsers = () => {
  const selectUser = async () => {
    const supabase = createBrowClient();

    const id = await getUserId();

    const { data, error } = await supabase.from("members").select("*").eq("admin_user", id!).single();

    if (error) throw error;

    return data;
  };

  const selectUserRole = async () => {
    const supabase = createBrowClient();

    const id = await getUserId();

    const { data, error } = await supabase.from("users").select("role").eq("id", id!).single();
    if (error) throw error;

    return data.role;
  };

  const selectAllUsers = async (page: number, limit: number) => {
    const supabase = createBrowClient();

    const from = (page! - 1) * limit!;
    const to = from + limit! - 1;

    const { data, count, error } = await supabase
      .from("members")
      .select(
        `*,
        admin:users (
          role
        )
        `,
        { count: "exact" }
      )
      .order("created_at", { ascending: true })
      .range(from, to);
    if (error) throw error;

    return { list: data ?? [], count: count ?? 0 };
  };

  return { selectUser, selectUserRole, selectAllUsers };
};
