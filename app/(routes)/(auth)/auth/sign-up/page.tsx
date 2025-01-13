import SignupForm from "@/app/(auth-feat)/components/composites/sign-up-form";
import Text from "@/components/ui/text";
import Link from "next/link";

export default function Signup() {
  return (
    <section className="relative bg-light-gray min-h-screen w-full flex items-center justify-center">
      <Text className="absolute top-6 right-10 text-sm text-text-gray">
        Already have account?{" "}
        <Link href="/auth/sign-in" className="text-blue-color">
          Sign in
        </Link>
      </Text>
      <SignupForm />
    </section>
  );
}