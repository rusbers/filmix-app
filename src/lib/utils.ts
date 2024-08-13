import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AuthErrorState } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms?: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateAvatarFallback(
  firstName?: string,
  lastName?: string,
): string {
  if (!firstName || !lastName) {
    return "";
  }
  const trimmedFirstName = firstName.trim();
  const trimmedSurname = lastName.trim();

  const firstInitial = trimmedFirstName.charAt(0).toUpperCase();
  const lastNameInitial = trimmedSurname.charAt(0).toUpperCase();

  return `${firstInitial}${lastNameInitial}`;
}

// Form validation error messages generator

type generateErrorMessagesArgs = {
  general?: string[];
  email?: string[];
  password?: string[];
  confirmPassword?: string[];
  name?: string[];
  lastName?: string[];
};

export const generateErrorMessages = ({
  general,
  email,
  password,
  confirmPassword,
  name,
  lastName,
}: generateErrorMessagesArgs): AuthErrorState => {
  return {
    messages: {
      general,
      email,
      password,
      confirmPassword,
      name,
      lastName,
    },
  };
};

export function capitalize(value: string) {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
}
