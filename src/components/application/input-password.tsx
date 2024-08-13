"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "./input-field";
import { Button } from "../ui/button";

type InputPasswordProps = {
  name?: string;
  placeholder?: string;
};

export function InputPassword({
  name = "password",
  placeholder = "Password",
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
      />
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform hover:bg-transparent hover:text-current"
        type="button"
        size="icon"
        variant="ghost"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <Eye className="h-5 w-5" />
        ) : (
          <EyeOff className="h-5 w-5 text-white/50" />
        )}
      </Button>
    </div>
  );
}
