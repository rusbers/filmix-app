"use server";

import prisma from "../db";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { signIn, signOut } from "../auth";
import { LogInSchema, SignUpSchema } from "../validations";
import { type AuthErrorState } from "../types";
import { generateErrorMessages } from "../utils";

export async function signUp(
  prevState: AuthErrorState | undefined,
  formData: unknown,
) {
  if (!(formData instanceof FormData)) {
    return generateErrorMessages({ general: ["Invalid form data."] });
  }

  const validatedFormData = SignUpSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFormData.success) {
    const { email, password, confirmPassword, name, lastName } =
      validatedFormData.error.formErrors.fieldErrors;

    const errors = generateErrorMessages({
      email,
      password,
      confirmPassword,
      name,
      lastName,
    });

    return errors;
  }

  const { email, password, name, lastName } = validatedFormData.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        hashedPassword: hashedPassword,
        role: "user",
        likedShows: {
          create: [],
        },
        dislikedShows: {
          create: [],
        },
        bookmarkedShows: {
          create: [],
        },
        userDetails: {
          create: {
            avatarId: null,
            name,
            lastName,
          },
        },
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return generateErrorMessages({ email: ["Email already exists."] });
      }
    }

    return generateErrorMessages({ general: ["Could not create user."] });
  }

  await signIn("credentials", formData);
}

export async function logIn(
  prevState: AuthErrorState | undefined,
  formData: unknown,
) {
  if (!(formData instanceof FormData)) {
    return generateErrorMessages({ general: ["Invalid form data."] });
  }

  const validatedFormData = LogInSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFormData.success) {
    const { email, password } = validatedFormData.error.formErrors.fieldErrors;

    const errors = generateErrorMessages({
      email,
      password,
    });

    return errors;
  }

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return generateErrorMessages({ general: ["Invalid credentials"] });
        }
        default: {
          return generateErrorMessages({
            general: ["Error. Could not sign in!"],
          });
        }
      }
    }

    throw error; // nextjs redirects throws error, so we need to rethrow it
  }
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}
