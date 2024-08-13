import prisma from "@/lib/db";

export async function fetchShowItem(showId: string) {
  try {
    const showItem = await prisma.showItem.findUnique({
      where: { id: showId },
      include: { thumbnail: { include: { regular: true, trending: true } } },
    });

    return { data: showItem, error: null };
  } catch (error) {
    console.error(`Error fetching show: ${error}`);

    return {
      data: null,
      error: `Could not fetch the show with the id: ${showId}`,
    };
  }
}
