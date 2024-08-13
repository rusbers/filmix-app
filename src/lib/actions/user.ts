"use server";

import prisma from "../db";
import { revalidatePath } from "next/cache";
import { UserDetailsSchema } from "../validations";
import { deleteFile } from "../cloudinary";
import { type AuthErrorState } from "../types";
import { generateErrorMessages } from "../utils";
import { checkAuth } from '../services/users';

export async function updateUserDetails(
  prevState: AuthErrorState | undefined,
  formData: FormData,
) {
  if (!(formData instanceof FormData)) {
    return generateErrorMessages({ general: ["Invalid form data"] });
  }
  const { session } = await checkAuth();

  const validatedFormData = UserDetailsSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFormData.success) {
    const { name, lastName } = validatedFormData.error.formErrors.fieldErrors;
    return generateErrorMessages({ name, lastName });
  }

  const { name, lastName } = validatedFormData.data;

  try {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        userDetails: {
          update: {
            name,
            lastName,
          },
        },
      },
    });
  } catch (error) {
    return generateErrorMessages({
      general: ["Oops, could not update your details. Please try again!"],
    });
  }

  revalidatePath("/app/account");
}

export async function updateUserAvatar(avatarId: string) {
  const { session } = await checkAuth();

  try {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        userDetails: {
          update: {
            avatarId: avatarId,
          },
        },
      },
    });
  } catch (error) {
    return {
      message: "Oops! Could not update your avatar!",
    };
  }

  revalidatePath("/app/account");
}

export async function deleteUserAvatar(avatarId: string) {
  const { session } = await checkAuth();

  try {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        userDetails: {
          update: {
            avatarId: null,
          },
        },
      },
    });

    await deleteFile(avatarId);
  } catch (error) {
    return {
      message: "Oops! Could not delete image",
    };
  }

  revalidatePath("/app/account");
}

export async function deleteUser() {
  const { session } = await checkAuth();

  if (!session.user.id) {
    return {
      message: "User not found",
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      // Delete bookmarks
      await tx.bookmarkedShows.deleteMany({
        where: { userId: session.user.id },
      });

      // Get the user with userDetails
      const user = await tx.user.findUnique({
        where: { id: session.user.id },
        include: { userDetails: true },
      });

      if (!user) {
        throw new Error("User not found");
      }

      // Delete avatar from Cloudinary if it exists
      if (user.userDetails.avatarId) {
        await deleteFile(user.userDetails.avatarId);
      }

      // Delete user
      await tx.user.delete({
        where: { id: session.user.id },
      });

      // Delete user details
      await tx.userDetails.delete({
        where: { id: user.userDetailsId },
      });
    });

    return {
      message: "Account deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      message: "Could not delete your account",
    };
  }
}
