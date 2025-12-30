import createBrowClient from "../../services/browerClinet";
import { createServClient } from "../../services/serverClinet";

export const signIn = async (email: string, password: string) => {
  const supabase = await createServClient();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw error;
  return { data };
};

export const getUserId = async () => {
  const supabase = createBrowClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;
  const uid = user?.id;

  if (!uid) {
    return;
  } else {
    return uid;
  }
};
