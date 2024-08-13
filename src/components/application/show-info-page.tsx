import {
  AppreciationBtn,
  BookmarkBtn,
} from "@/components/application/show-action";
import { PageUnderDevelopment } from "@/components/application/page-under-development";
import {
  fetchDislikedShow,
  fetchLikedShow,
  fetchBookmarkedShow,
} from "@/lib/services/shows/user-interactions";
import { notFound } from "next/navigation";
import { ComingSoonTooltip } from "../dashboard/coming-soon-tooltip";
import { Button } from "../ui/button";
import { fetchShowItem } from "@/lib/services/shows";

type ShowInfoProps = {
  showId: string;
  userId: string;
  isAdmin: boolean;
};

export default async function ShowInfoPage({
  showId,
  userId,
  isAdmin,
}: ShowInfoProps) {
  const showItem = await fetchShowItem(showId);

  if (!showItem.data) {
    return notFound();
  }

  const likedShow = await fetchLikedShow({ userId, showId });
  const dislikedShow = await fetchDislikedShow({ userId, showId });
  const bookmarkedShow = await fetchBookmarkedShow({ userId, showId });

  const isAppreciationError = !!likedShow.error || !!dislikedShow.error;

  return (
    <>
      <div className="mb-6 flex items-center justify-between space-x-4">
        <div className="flex space-x-4">
          <div>
            <h1 className="heading-2XS md:heading-L">{showItem.data.title}</h1>
            <div className="space-x-2">
              <AppreciationBtn
                action="like"
                showId={showId}
                showTitle={showItem.data.title}
                isPerformed={!!likedShow.data}
                isDisabled={isAppreciationError}
              />
              <AppreciationBtn
                action="dislike"
                showId={showId}
                showTitle={showItem.data.title}
                isPerformed={!!dislikedShow.data}
                isDisabled={isAppreciationError}
              />
            </div>
          </div>
          <BookmarkBtn
            showId={showId}
            showTitle={showItem.data.title}
            isBookmarked={!!bookmarkedShow.data}
            isDisabled={!!bookmarkedShow.error}
          />
        </div>

        {isAdmin && (
          <ComingSoonTooltip>
            <Button
              disabled
              className="text-md"
              variant={"default"}
              size={"sm"}
            >
              Edit
            </Button>
          </ComingSoonTooltip>
        )}
      </div>
      <PageUnderDevelopment />
    </>
  );
}
