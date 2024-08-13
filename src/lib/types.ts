import { Prisma } from "@prisma/client";
import { z } from "zod";
import { ShowItemSchema, UserSchema } from "./validations";

export type SVGComponentProps =
  | {
      width?: undefined;
      height?: undefined;
      className?: string;
      pathStyle?: string;
    }
  | { width: number; height: number; className?: string; pathStyle?: string };

export type ShowCategory = "Movie" | "TV Series";

export type ShowItem = Prisma.ShowItemGetPayload<{
  include: {
    thumbnail: { include: { regular: true; trending: true } };
    bookmarks: true;
    likes: true;
    dislikes: true;
    status: true;
  };
}>;

export type ShowItemData = z.infer<typeof ShowItemSchema>;
export type UserData = z.infer<typeof UserSchema>;

export type User = Prisma.UserGetPayload<{
  include: {
    userDetails: true;
    bookmarkedShows: true;
    likedShows: true;
    dislikedShows: true;
  };
}>;

export type AuthErrorState = {
  messages: {
    general: string[] | undefined;
    email: string[] | undefined;
    password: string[] | undefined;
    confirmPassword: string[] | undefined;
    name: string[] | undefined;
    lastName: string[] | undefined;
  };
};
export const showStatuses = ["all", "active", "draft", "archived"] as const;

export type ShowStatuses = (typeof showStatuses)[number];
