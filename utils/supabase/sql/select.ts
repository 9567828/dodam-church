import { tablesName } from ".";
import createBrowClient from "../services/browerClinet";

export const select = () => {
  const supabase = createBrowClient();

  const selectList = async (name: tablesName, limit: number) => {
    const { data, error } = await supabase
      .from(name)
      .select("*")
      .order(name === "sermons" ? "published_date" : "created_at", { ascending: false })
      .limit(limit);
    const { count } = await supabase.from(name).select("*", { count: "exact", head: true });

    return { data, error, count };
  };

  const selectOne = async (name: tablesName, id: number | string) => {
    const { data, error } = await supabase.from(name).select("*").eq("id", id).single();

    return { data, error };
  };

  return { selectList, selectOne };
};
