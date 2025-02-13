import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { supabase } from "@/services/supabase-config";

import { LoadingState, SignupData } from "../types";
import { EMAIL_REDIRECT_URL } from "../utils/const";
import { validateFields } from "../utils";



export default function useSignup() {
  const [loading, setLoading] = useState<LoadingState>("idle");
  const router = useRouter();
  const validateInput = useCallback(validateFields, []);

  const handleSupabaseSignup = useCallback(async ({ email, password }: SignupData) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: EMAIL_REDIRECT_URL },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }, []);

  const insertUserInfo = useCallback(async ({ name, email, user_id }: { name: string; email: string; user_id: string }) => {
    const { error } = await supabase.from("userinfo").insert([{ name, email, user_id }]);

    if (error) {
      throw new Error("Failed to save user information.");
    }
  }, []);


  const handleSignup = useCallback(
    async (signupData: SignupData) => {
      try {
        if (!validateInput(signupData)) return;

        setLoading("loading");

        // Step 1: Sign up with Supabase
        const { user } = await handleSupabaseSignup(signupData);

        if (!user) {
          throw new Error("User registration failed. Please try again.");
        }

        // Step 2: Insert user info into the database
        await insertUserInfo({ name: signupData.name, email: signupData.email, user_id: user.id });

        // Step 3: Notify user and redirect
        toast.success("Account successfully created!");
        setLoading("done");
        router.push("/auth/sign-in");
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Signup failed. Please try again.";
        toast.error(errorMessage);
        setLoading("error");
      }
    },
    [validateInput, handleSupabaseSignup, insertUserInfo, router]
  );

  return { handleSignup, loading };
}