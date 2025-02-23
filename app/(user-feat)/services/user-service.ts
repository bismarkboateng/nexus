import { supabase } from "@/config";

export const fetchUserInfo = async (email: string) => {
  const { data, error } = await supabase
    .from("userinfo")
    .select("*")
    .eq("email", email);

  if (error) throw new Error(error.message);
  return data;
};
