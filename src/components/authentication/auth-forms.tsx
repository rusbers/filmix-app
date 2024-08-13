"use client";

import { logIn, signUp } from "@/lib/actions/authentication";
import { useFormState } from "react-dom";
import { AuthButton } from "./auth-button";
import { Input } from "../application/input-field";
import { ErrorList } from "./error-list";
import { InputPassword } from "../application/input-password";

export function LoginForm() {
  const [logInError, dispatchLogin] = useFormState(logIn, undefined);

  return (
    <form action={dispatchLogin} noValidate className="mb-6">
      <div className="mb-6">
        <label>
          <span className="sr-only">Email address</span>
          <Input type="email" name="email" placeholder="Email address" />
        </label>
        <ErrorList errors={logInError?.messages.email} />
      </div>

      <div className="mb-10">
        <label>
          <span className="sr-only">Password</span>
          <InputPassword />
        </label>
        <ErrorList errors={logInError?.messages.password} />
        <ErrorList errors={logInError?.messages.general} />
      </div>

      <AuthButton>Login to your account</AuthButton>
    </form>
  );
}

export function SignUpForm() {
  const [signUpError, dispatchSignUp] = useFormState(signUp, undefined);

  return (
    <form action={dispatchSignUp} className="mb-6" noValidate>
      <div className="mb-6">
        <label>
          <span className="sr-only">Email Address</span>
          <Input type="email" name="email" placeholder="Email address" />
        </label>
        <ErrorList errors={signUpError?.messages.email} />
      </div>
      <div className="mb-6">
        <div className="inline-flex space-x-4">
          <div>
            <label>
              <span className="sr-only">Name</span>
              <Input type="text" name="name" placeholder="Name" />
            </label>
          </div>
          <div>
            <label>
              <span className="sr-only">Last name</span>
              <Input type="text" name="lastName" placeholder="Last name" />
            </label>
          </div>
        </div>
        <ErrorList errors={signUpError?.messages.name} />
        <ErrorList errors={signUpError?.messages.lastName} />
      </div>
      <div className="mb-6">
        <label>
          <span className="sr-only">Password</span>
          <InputPassword />
        </label>
        <ErrorList errors={signUpError?.messages.password} />
      </div>
      <div className="mb-10">
        <label>
          <span className="sr-only">Confirm Password</span>
          <InputPassword
            name="confirmPassword"
            placeholder="Confirm password"
          />
        </label>
        <ErrorList errors={signUpError?.messages.confirmPassword} />
        <ErrorList errors={signUpError?.messages.general} />
      </div>
      <AuthButton>Create an account</AuthButton>
    </form>
  );
}
