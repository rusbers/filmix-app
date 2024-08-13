import { ShowCategory, ShowItemData } from "@/lib/types";
import { ShowsList } from "./shows-list";

type ShowsContentProps = {
  query: string;
  category?: ShowCategory;
  fetcher: ({
    query,
    category,
  }: {
    query: string;
    category?: ShowCategory;
  }) => Promise<ShowItemData[]>;
};

export async function ShowsContent({
  query,
  category,
  fetcher,
}: ShowsContentProps) {
  const showsList = await fetcher({ query, category });

  const hasShows = showsList.length > 0;

  if (!hasShows) {
    return <p className="text-xl text-slate-200">No shows found</p>;
  }

  return <ShowsList shows={showsList} />;
}
