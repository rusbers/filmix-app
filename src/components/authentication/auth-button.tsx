"use client";

import { useFormStatus } from "react-dom";

type AuthButtonProps = {
  children: React.ReactNode;
};

export function AuthButton({ children }: AuthButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="app-button body-L flex min-h-12 w-full flex-col items-center justify-center rounded-lg p-3 transition-colors"
    >
      {children}
    </button>
  );
}
