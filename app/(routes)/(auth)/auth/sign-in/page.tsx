import SignInForm from "@/app/(auth-feat)/components/composites/sign-in-form";
import Text from "@/components/ui/text";
import Link from "next/link";

export default function Signin() {
  return (
    <section className="relative bg-light-gray min-h-screen w-full flex items-center justify-center">
      <Text className="absolute top-6 right-10 text-sm text-text-gray">
        Don&apos;t have account?{" "}
        <Link href="/auth/sign-up" className="text-blue-color">
          Sign up
        </Link>
      </Text>
      <SignInForm />
    </section>
  );
}
