import { ShowCategory } from "@/lib/types";
import { fetchShows } from "./helper";
import { unstable_cache as cache } from "next/cache";
import { Prisma } from "@prisma/client";

export const fetchShowsByCategory = cache(
  async ({
    query = "",
    category = "Movie",
  }: {
    query: string;
    category?: ShowCategory;
  }) => {
    return fetchShows({
      title: {
        contains: query,
        mode: Prisma.QueryMode.insensitive,
      },
      category,
    });
  },
);

export const fetchRecommendedShows = cache(
  async ({ query = "" }: { query: string }) => {
    return fetchShows({
      title: {
        contains: query,
        mode: Prisma.QueryMode.insensitive,
      },
      isTrending: false,
    });
  },
);

export const fetchBookmarkedShows = cache(
  async ({
    query = "",
    category = "Movie",
    userId,
  }: {
    query?: string;
    category: ShowCategory;
    userId: string;
  }) => {
    return fetchShows({
      bookmarks: {
        some: {
          userId,
        },
      },
      title: {
        contains: query,
        mode: Prisma.QueryMode.insensitive,
      },
      category,
    });
  },
);

export const fetchTrendingShows = cache(async () => {
  return await fetchShows({ isTrending: true });
});
