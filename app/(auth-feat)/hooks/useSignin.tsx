import { LoadingState } from "../types";
import { toast } from "sonner";
import { signInUser } from "../services";

import { fetchUserInfo } from "@/app/(user-feat)/services";
import { useBoundStore } from "@/store";
import { useRouter } from "next/navigation";
import { UserInfo } from "@/store/types/user-types";
import { useState } from "react";

export default function useSignin() {
  const [loading, setLoading] = useState<LoadingState>("idle");
  const setLoggedIn = useBoundStore((state) => state.setLoggedIn)
  const setUser = useBoundStore((state) => state.setUser)
  const router = useRouter()

  const handleSignin = async (email: string, password: string) => {
    try {
      
      setLoading("loading")
      await signInUser(email, password)
      const userInfo = await fetchUserInfo(email)
      setLoggedIn(true)

      const user: UserInfo = userInfo[0]
      setUser(user)
      toast.success("logged in")
      setLoading("done")
      router.push("/")
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
