import { useState } from "react";
import { LoadingState } from "../types";
import { supabase } from "@/services/supabase-config";
import { toast } from "sonner";

export default function useSignin() {
  const [loading, setLoading] = useState<LoadingState>("idle");

  const handleSignin = async (email: string, password: string) => {
    try {
      const { data: signIndata, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      console.log("user email", email)
      const { data, error: fetchingInfoError } = await supabase
        .from("userinfo")
        .select("*")
        .eq("email", email)
        .single();

      console.log({
        fetchInfoData: data,
        fetcInfoError: fetchingInfoError,

        signInData: signIndata,
        signInError: error,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Sign in failed. Please try again.";
      toast.error(errorMessage);
      setLoading("error");
    }
  };

  return {
    handleSignin,
    loading,
  };
}
