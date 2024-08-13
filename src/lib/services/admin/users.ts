import { User } from "@/lib/types";
import prisma from "@/lib/db";
import { unstable_cache as cache } from "next/cache";
import { Prisma } from "@prisma/client";

export const fetchUsers = cache(
  async ({
    query = "",
    page = 1,
    pageSize = 10,
  }: {
    query: string;
    page: number;
    pageSize: number;
  }): Promise<{
    users: User[];
    totalPages: number;
    totalUsers: number;
  }> => {
    // Split the query into parts (words)
    const queryParts = query.trim().split(/\s+/);

    // Create conditions based on the query parts
    const searchConditions = queryParts.map((part) => ({
      OR: [
        {
          userDetails: {
            name: {
              contains: part,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        },
        {
          userDetails: {
            lastName: {
              contains: part,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        },
        {
          email: {
            contains: part,
            mode: Prisma.QueryMode.insensitive,
          },
        },
      ],
    }));

    const users = await prisma.user.findMany({
      orderBy: {
        role: "asc",
      },
      where: {
        AND: searchConditions,
      },
      take: pageSize,
      skip: (page - 1) * pageSize,
      include: {
        userDetails: true,
        bookmarkedShows: true,
        likedShows: true,
        dislikedShows: true,
      },
    });

    const totalUsers = await prisma.user.count({
      orderBy: {
        role: "asc",
      },
      where: {
        AND: searchConditions,
      },
    });

    const totalPages = Math.ceil(totalUsers / pageSize);

    return {
      users,
      totalPages,
      totalUsers,
    };
  },
  ["fetch-table-users"],
  { revalidate: 60 },
);
