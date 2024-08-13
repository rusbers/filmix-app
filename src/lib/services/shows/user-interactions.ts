import prisma from "@/lib/db";

export async function fetchLikedShow({
  userId,
  showId,
}: {
  userId: string;
  showId: string;
}) {
  try {
    const likedShow = await prisma.likedShows.findUnique({
      where: {
        userId_showItemId: {
          userId: userId,
          showItemId: showId,
        },
      },
    });

    return { data: likedShow, error: null };
  } catch (error) {
    console.error(`Error fetching liked show: ${error}`);

    return {
      data: null,
      error: `Could not get the LIKE status for the show: ${showId}`,
    };
  }
}

export async function fetchDislikedShow({
  userId,
  showId,
}: {
  userId: string;
  showId: string;
}) {
  try {
    const dislikedShow = await prisma.dislikedShows.findUnique({
      where: {
        userId_showItemId: {
          userId: userId,
          showItemId: showId,
        },
      },
    });

    return { data: dislikedShow, error: null };
  } catch (error) {
    console.error(`Error fetching liked show: ${error}`);

    return {
      data: null,
      error: `Could not get the DISLIKE status for the show: ${showId}`,
    };
  }
}

export async function fetchBookmarkedShow({
  showId,
  userId,
}: {
  showId: string;
  userId: string;
}) {
  try {
    const bookmarkedShow = await prisma.bookmarkedShows.findUnique({
      where: {
        userId_showItemId: {
          userId: userId,
          showItemId: showId,
        },
      },
    });

    return { data: bookmarkedShow, error: null };
  } catch (error) {
    console.error(error);

    return {
      data: null,
      error: `Could not fetch the bookmarked show with the id: ${showId}`,
    };
  }
}
