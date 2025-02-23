import { useState } from "react";
import { LoadingState } from "../types";
import { resetPassword } from "../services";
import { toast } from "sonner";

export default function useResetPassword() {
  const [loading, setLoading] = useState<LoadingState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleResetPassword = async (email: string, redirectUrl: string) => {
    try {
      setLoading("loading");
      setErrorMessage(null);

      const res = await resetPassword(email, redirectUrl);

      if (res.error) {
        throw new Error(res.error.message);
      }

      toast.success(`
        Click on the link we've sent to your email   
      `)
      setLoading("done");
      return res;
    } catch (error) {
      setLoading("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setLoading("idle");
    }
  };

  return {
    loading,
    errorMessage,
    handleResetPassword,
  };
}
