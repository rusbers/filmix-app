import Link from "next/link";
import { LoginForm, SignUpForm } from "./auth-forms";

type AuthCardProps = {
  variant: "login" | "signup";
};

export default function AuthCard({ variant }: AuthCardProps) {
  const isLoginVariant = variant === "login";

  return (
    <div className="w-full max-w-[25rem] rounded-xl bg-app-semidark-blue p-6 text-inherit md:rounded-2xl md:p-8">
      <h1 className="card-header heading-L mb-10">
        {isLoginVariant ? "Login" : "Sign Up"}
      </h1>

      {isLoginVariant ? <LoginForm /> : <SignUpForm />}

      <p className="body-L flex flex-wrap justify-center gap-2">
        {isLoginVariant ? "Don’t have an account?" : "Alread have an account?"}{" "}
        <Link
          className="text-app-red underline-offset-[.375rem] hover:underline"
          href={isLoginVariant ? "/signup" : "/login"}
        >
          {isLoginVariant ? "Sing Up" : "Login"}
        </Link>
      </p>
    </div>
  );
}
