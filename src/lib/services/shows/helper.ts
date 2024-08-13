import prisma from "@/lib/db";
import { ShowItemSchema } from "@/lib/validations";
import { ShowItem } from "@/lib/types";

export const fetchShows = async (filter: object) => {
  try {
    const shows = await prisma.showItem.findMany({
      where: filter,
      include: {
        thumbnail: {
          include: {
            trending: true,
            regular: true,
          },
        },
        bookmarks: true,
        likes: true,
        dislikes: true,
      },
    });

    return parseShows(shows);
  } catch (error) {
    console.error("Error fetching shows:", error);
    throw new Error("Could not fetch shows");
  }
};

export function parseShows(shows: ShowItem[]) {
  const parsedShows = shows.map((show) => ShowItemSchema.safeParse(show));

  return parsedShows
    .map((parsed) => {
      if (parsed.success) {
        return parsed.data;
      } else {
        console.error("Validation error:", parsed.error);
        return null;
      }
    })
    .filter((show) => show !== null);
}
