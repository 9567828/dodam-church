import { SupabaseClient } from "@supabase/supabase-js";
import { tablesName } from ".";

interface ISelect {
  name: tablesName;
  limit?: number;
  page?: number;
  id?: number | string;
  supabase: SupabaseClient;
}

export const select = () => {
  const selectPageList = async ({ name, limit, page, supabase }: ISelect) => {
    const from = (page! - 1) * limit!;
    const to = from + limit! - 1;

    const { data, error } = await supabase
      .from(name)
      .select("*")
      .range(from, to)
      .order(name === "sermons" ? "published_date" : "created_at", { ascending: false })
      .limit(limit!);
    const { count } = await supabase.from(name).select("*", { count: "exact", head: true });

    if (error) throw error;

    return { count: count ?? 0, list: data ?? [] };
  };

  const selectList = async ({ name, limit, supabase }: ISelect) => {
    const { data, error } = await supabase
      .from(name)
      .select("*")
      .order(name === "sermons" ? "published_date" : "created_at", { ascending: false })
      .limit(limit!);

    if (error) throw error;

    return { list: data ?? [] };
  };

  const selectOne = async ({ name, id, supabase }: ISelect) => {
    const { data: table, error } = await supabase.from(name).select("*").eq("id", id).single();
    const { data: prev } = await supabase
      .from(name)
      .select("id")
      .lt("id", id)
      .order("id", { ascending: false })
      .limit(1)
      .single();
    const { data: next } = await supabase
      .from(name)
      .select("id")
      .gt("id", id)
      .order("id", {
        ascending: true,
      })
      .limit(1)
      .single();
    if (error) throw error;

    const data = {
      ...table,
      prev_id: prev?.id ? prev.id : null,
      next_id: next?.id ? next.id : null,
    };

    return { data: data ?? "" };
  };

  return { selectPageList, selectList, selectOne };
};
