import { useState } from "react";
import { LoadingState } from "../types";
import { supabase } from "@/services/supabase-config";
import { toast } from "sonner";

export default function useSignin() {
  const [loading, setLoading] = useState<LoadingState>("idle");

  const handleSignin = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      // route, check error states
      console.log(data, error)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Signup failed. Please try again.";
      toast.error(errorMessage);
      setLoading("error");
    }
  };

  return {
    handleSignin,
    loading,
  };
}
