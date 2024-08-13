import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "input body-L placeholder:body-L min-h-9 w-full py-1 pl-4 pr-10 placeholder:text-white/50 focus:outline-none",
        "file:border-b-0none",
        className,
      )}
      {...props}
    />
  );
}
