import { ShowItem, User } from "@/lib/types";
import { Prisma, PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";
import bcrypt from "bcryptjs";
import { uploadThumbnail } from "../../src/lib/cloudinary";

const prisma = new PrismaClient();

const generateInitialShows = async (): Promise<
  Prisma.ShowItemCreateInput[]
> => {
  const data = await fs.readFile(
    process.cwd() + "/prisma/seed/data.json",
    "utf-8",
  );

  const shows: ShowItem[] = JSON.parse(data);

  return Promise.all(
    shows.map(async (show) => {
      const processedThumbnail = {
        trending: show.thumbnail.trending
          ? {
              create: {
                small: await uploadThumbnail({
                  imagePath: show.thumbnail.trending.small,
                  folderName: "thumbnails/trendings",
                }),
                large: await uploadThumbnail({
                  imagePath: show.thumbnail.trending.large,
                  folderName: "thumbnails/trendings",
                }),
              },
            }
          : undefined,
        regular: {
          create: {
            small: await uploadThumbnail({
              imagePath: show.thumbnail.regular.small,
              folderName: "thumbnails/regular",
            }),
            medium: await uploadThumbnail({
              imagePath: show.thumbnail.regular.medium,
              folderName: "thumbnails/regular",
            }),
            large: await uploadThumbnail({
              imagePath: show.thumbnail.regular.large,
              folderName: "thumbnails/regular",
            }),
          },
        },
      };

      return {
        title: show.title,
        thumbnail: {
          create: processedThumbnail,
        },
        year: show.year,
        category: show.category,
        rating: show.rating,
        isTrending: show.isTrending,
        status: show.status,
      };
    }),
  );
};

const generateInitialUsers = async (): Promise<Prisma.UserCreateInput[]> => {
  const data = await fs.readFile(
    process.cwd() + "/prisma/seed/users.json",
    "utf-8",
  );

  const users: User[] = JSON.parse(data);

  return users.map((user) => ({
    email: user.email,
    hashedPassword: user.hashedPassword,
    role: user.role,
    userDetails: {
      create: {
        name: user.userDetails.name,
        lastName: user.userDetails.lastName,
        avatarId: user.userDetails.avatarId,
      },
    },
    bookmarkedShows: {
      create: [],
    },
    likedShows: {
      create: [],
    },
    dislikedShows: {
      create: [],
    },
  }));
};

async function main() {
  const initialShows = await generateInitialShows();
  const initialUsers = await generateInitialUsers();

  console.log("Start seeding ...");

  for (const show of initialShows) {
    try {
      const createdShow = await prisma.showItem.create({
        data: show,
      });
      console.log(`Created show with id: ${createdShow.id}`);
    } catch (error) {
      console.error(`Error creating show: ${error}`);
    }
  }

  for (const user of initialUsers) {
    try {
      const hashedPassword = await bcrypt.hash(user.hashedPassword, 10);
      user.hashedPassword = hashedPassword;

      const createdUser = await prisma.user.create({
        data: user,
      });

      console.log(`Created user with id: ${createdUser.id}`);
    } catch (error) {
      console.error(`Error creating user: ${error}`);
    }
  }
}

console.log("Seeding finished.");

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
