import { z } from "zod";

export const ShowItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.object({
    trending: z
      .object({
        small: z.string(),
        large: z.string(),
      })
      .nullable(),
    regular: z.object({
      small: z.string(),
      medium: z.string(),
      large: z.string(),
    }),
  }),
  status: z.enum(["all", "active", "draft", "archived"]),
  year: z.number(),
  category: z.enum(["Movie", "TV Series"]),
  rating: z.enum(["PG", "E", "18+"]),
  isTrending: z.boolean(),
});

export const UserDetailsSchema = z.object({
  name: z.string().min(1, { message: "First name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last name cannot be empty" }),
  avatarId: z.string().optional(),
});

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  hashedPassword: z.string(),
  role: z.enum(["user", "admin"]),
  bookmarks: z.array(z.string()),
  userDetails: UserDetailsSchema,
});

export const LogInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email field cannot be empty" })
    .email({ message: "Must be a valid email address: example@email.com" }),
  password: z.string().min(1, { message: "Password field cannot be empty" }),
});

export const SignUpSchema = z
  .object({
    email: z.string().min(1, { message: "Email address is required" }).email({
      message: "Must be a valid email address: example@email.com",
    }),
    name: z.string().min(1, { message: "First name cannot be empty" }),
    lastName: z.string().min(1, { message: "Last name cannot be empty" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match. Please try again.",
    path: ["confirmPassword"],
  });
