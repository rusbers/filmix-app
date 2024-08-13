import { ShowItem, ShowStatuses } from "@/lib/types";
import prisma from "@/lib/db";
import { unstable_cache as cache } from "next/cache";

export const fetchShows = cache(
  async ({
    query = "",
    page = 1,
    pageSize = 10,
    status,
  }: {
    query: string;
    page: number;
    pageSize: number;
    status: ShowStatuses;
  }): Promise<{
    shows: ShowItem[];
    totalPages: number;
    totalShows: number;
  }> => {
    let where = {};

    if (query && status && status !== "all") {
      where = { title: { contains: query }, status };
    } else if (query) {
      where = { title: { contains: query } };
    } else if (status && status !== "all") {
      where = { status };
    }

    const totalShows = await prisma.showItem.count({ where });
    const totalPages = Math.ceil(totalShows / pageSize);

    const shows = await prisma.showItem.findMany({
      where,
      take: pageSize,
      skip: (page - 1) * pageSize,
      include: {
        thumbnail: {
          include: {
            regular: true,
            trending: true,
          },
        },
        bookmarks: true,
        likes: true,
        dislikes: true,
      },
    });

    return {
      shows,
      totalPages,
      totalShows,
    };
  },
  ["fetch-table-shows"],
  {
    revalidate: 60,
  },
);
