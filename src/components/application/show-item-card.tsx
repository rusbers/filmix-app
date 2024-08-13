import { cn } from "@/lib/utils";
import { ShowItemData } from "@/lib/types";
import { CldImage } from "./cloudinary-image";
import { generateImageUrlByPublicId } from "@/lib/cloudinary";
import { PlayButton } from "./play-button";
import { fetchBookmarkedShow } from "@/lib/services/shows/user-interactions";
import { BookmarkBtn } from "./show-action";
import { checkAuth } from "@/lib/services/users";

type ShowCardProps = {
  type: "grid" | "carousel";
  showItem: ShowItemData;
  classNames?: string;
};
export default async function ShowItemCard({
  type = "grid",
  showItem,
  classNames,
}: ShowCardProps) {
  const { session } = await checkAuth();

  const userId = session.user.id;

  const bookmarkedShow = await fetchBookmarkedShow({
    showId: showItem.id,
    userId: userId,
  });

  return type === "grid" ? (
    <GridShowItemCard
      classNames={classNames}
      showItem={showItem}
      isBookmarked={!!bookmarkedShow.data}
    />
  ) : (
    <CarouselShowItemCard
      classNames={classNames}
      showItem={showItem}
      isBookmarked={!!bookmarkedShow.data}
    />
  );
}

type CardTypeCommonProps = Omit<ShowCardProps, "type"> & {
  isBookmarked: boolean;
};

function CarouselShowItemCard({
  showItem,
  isBookmarked,
  classNames,
}: CardTypeCommonProps) {
  const { title, year, category, rating, thumbnail, id } = showItem;

  return (
    <div
      className={cn(
        "group/card relative flex flex-col bg-app-semidark-blue text-white",
        "min-h-36 w-60",
        "md:min-h-[14.375rem] md:w-[29.375rem]",
        classNames,
      )}
    >
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet={generateImageUrlByPublicId(thumbnail.trending?.large!)}
        />
        <CldImage
          className="rounded-lg object-cover"
          src={thumbnail.trending?.small!}
          alt={`${title} poster`}
          fill
          sizes="(max-width: 768px) 33vw, 50vw"
        />
      </picture>

      <ShowDetails
        type="carousel"
        className="z-10 mt-auto p-4 md:p-6"
        title={title}
        year={year}
        category={category}
        rating={rating}
      />
      <div className="absolute right-2 top-2 z-40 md:right-6 md:top-4">
        <BookmarkBtn
          variant="card"
          isBookmarked={isBookmarked}
          showId={id}
          showTitle={title}
        />
      </div>
      <PlayButton showCategory={showItem.category} showId={showItem.id} />
    </div>
  );
}

function GridShowItemCard({
  showItem,
  isBookmarked,
  classNames,
}: CardTypeCommonProps) {
  const { title, year, category, rating, thumbnail, id } = showItem;

  return (
    <div
      className={cn(
        "group/card inline-flex flex-col text-white",
        "min-h-[9.625rem] min-w-40",
        "md:min-h-48 md:min-w-56",
        "lg:min-h-56 lg:min-w-[17.5rem]",
        classNames,
      )}
    >
      <div className="relative mb-2 h-full min-h-28 rounded-lg bg-app-semidark-blue md:min-h-36 xl:min-h-44">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={generateImageUrlByPublicId(thumbnail.regular.large)}
          />
          <source
            media="(min-width: 768px)"
            srcSet={generateImageUrlByPublicId(thumbnail.regular.medium)}
          />
          <source />
          <CldImage
            className="rounded-lg object-cover object-center"
            src={thumbnail.regular.small}
            alt={`${title} poster`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        </picture>
        <div className="absolute right-2 top-2 z-40 md:right-4 md:top-4">
          <BookmarkBtn
            variant="card"
            isBookmarked={isBookmarked}
            showId={id}
            showTitle={title}
          />
        </div>
        <PlayButton showCategory={showItem.category} showId={showItem.id} />
      </div>

      <ShowDetails
        type="grid"
        title={title}
        year={year}
        category={category}
        rating={rating}
      />
    </div>
  );
}

type ShowDetailsProps = {
  type: "carousel" | "grid";
  title: string;
  year: number;
  category: string;
  rating: string;
  className?: string;
};

function ShowDetails({
  type,
  title,
  year,
  category,
  rating,
  className,
}: ShowDetailsProps) {
  const details = [year, category, rating];

  return (
    <section className={className}>
      <ul className="flex gap-2 text-white/75">
        {details.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center gap-2 font-light text-white/75",
              "before:block before:h-[.1875rem] before:w-[.1875rem] before:bg-current",
              "first:before:hidden",
              {
                "md:body-M body-XS": type === "grid",
                "md:body-L body-S": type === "carousel",
              },
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      <h3
        className={cn({
          "heading-4XS md:heading-XS": type === "grid",
          "heading-3XS md:heading-S": type === "carousel",
        })}
      >
        {title}
      </h3>
    </section>
  );
}
