"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db";
import {
  fetchBookmarkedShow,
  fetchDislikedShow,
  fetchLikedShow,
} from "../services/shows/user-interactions";
import { checkAuth } from "../services/users";

export async function toggleBookmarkAction({
  showId,
  showTitle,
}: {
  showId: string;
  showTitle: string;
}) {
  const { session } = await checkAuth();

  const userId = session.user.id;

  try {
    const bookmarkedShow = await fetchBookmarkedShow({ showId, userId });

    if (bookmarkedShow.data) {
      await prisma.bookmarkedShows.delete({
        where: {
          id: bookmarkedShow.data.id,
        },
      });
    } else {
      await prisma.bookmarkedShows.create({
        data: {
          userId,
          showItemId: showId,
        },
      });
    }
  } catch (error) {
    console.error("Error toggling bookmark:", error);
    return {
      message: `Oops! Couldn't bookmark '${showTitle}' . Please try again later!`,
    };
  }

  revalidatePath("/app/home");
  revalidatePath("/app/movies");
  revalidatePath("/app/tvSeries");
  revalidatePath("/app/bookmarked");
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/shows");
  revalidatePath("/dashboard/users");
}

export async function toggleLikeDislikeAction({
  showId,
  showTitle,
  action,
}: {
  showId: string;
  showTitle: string;
  action: "like" | "dislike";
}) {
  const { session } = await checkAuth();
  const userId = session.user.id;

  try {
    // Check if the show is already liked or disliked
    const likedShow = await fetchLikedShow({ showId, userId });
    const dislikedShow = await fetchDislikedShow({ showId, userId });

    // If the action is 'like'
    if (action === "like") {
      if (likedShow.data) {
        // If already liked, remove the like
        await prisma.likedShows.delete({
          where: {
            id: likedShow.data.id,
          },
        });
      } else {
        // If not liked, add a like and remove dislike if exists
        await prisma.likedShows.create({
          data: {
            userId,
            showItemId: showId,
          },
        });
        if (dislikedShow.data) {
          await prisma.dislikedShows.delete({
            where: {
              id: dislikedShow.data.id,
            },
          });
        }
      }
    }
    // If the action is 'dislike'
    else if (action === "dislike") {
      if (dislikedShow.data) {
        // If already disliked, remove the dislike
        await prisma.dislikedShows.delete({
          where: {
            id: dislikedShow.data.id,
          },
        });
      } else {
        // If not disliked, add a dislike and remove like if exists
        await prisma.dislikedShows.create({
          data: {
            userId,
            showItemId: showId,
          },
        });
        if (likedShow.data) {
          await prisma.likedShows.delete({
            where: {
              id: likedShow.data.id,
            },
          });
        }
      }
    }
  } catch (error) {
    console.error("Error toggling like/dislike:", error);
    return {
      message: `Oops! Couldn't ${action} '${showTitle}'. Please try again later!`,
    };
  }

  revalidatePath("/app/home");
  revalidatePath("/app/movies");
  revalidatePath("/app/tvSeries");
  revalidatePath("/app/bookmarked");
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/shows");
  revalidatePath("/dashboard/users");
}
