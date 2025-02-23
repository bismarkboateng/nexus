import { supabase } from "@/config";

export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
};

export const resetPassword = async (email: string, redirectUrl: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${redirectUrl}/auth/set-new-password`,
  });

  if (error) {
    return { error };
  }

  return { data };
};
