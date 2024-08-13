import prisma from "@/lib/db";
import { checkAuth } from "./check-auth";

export async function fetchUser() {
  const { session, isAdmin } = await checkAuth();

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      userDetails: true,
    },
  });

  return { user, isAdmin };
}
