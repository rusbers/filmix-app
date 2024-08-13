import { Skeleton } from "@/components/ui/skeleton";
import GridContainer from "./grid-container";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function SkeletonShowsList({
  length = 7,
  className,
}: {
  length?: number;
  className?: string;
}) {
  return (
    <GridContainer className={className}>
      {Array.from({ length }).map((_, index) => (
        <GridCardSkeleton key={index} />
      ))}
    </GridContainer>
  );
}

export function SkeletonCarouselList({ length = 7 }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length }).map((_, index) => (
          <CarouselItem
            key={index}
            className="mr-4 basis-60 md:mr-10 md:basis-[29.375rem]"
          >
            <CarouselCardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function CarouselCardSkeleton() {
  return (
    <div className="h-full min-h-36 w-60 md:min-h-[14.375rem] md:w-[29.375rem]">
      <Skeleton className="h-full min-h-28 w-full rounded-lg md:min-h-36 xl:min-h-44" />
    </div>
  );
}

function GridCardSkeleton() {
  return (
    <div
      className={cn(
        "inline-flex flex-col",
        "min-h-[9.625rem] min-w-40",
        "md:min-h-48",
        "lg:min-h-56",
      )}
    >
      <Skeleton className="mb-2 h-full min-h-28 rounded-lg md:min-h-36 xl:min-h-44" />
      <div className="space-y-2">
        <DetailsSkeleton />
      </div>
    </div>
  );
}

function DetailsSkeleton() {
  return (
    <div className="space-y-2">
      <ul className="flex gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center gap-2 font-light text-slate-800",
              "before:block before:h-[.1875rem] before:w-[.1875rem] before:bg-current",
              "first:before:hidden",
            )}
          >
            <Skeleton className="h-3 w-10" />
          </li>
        ))}
      </ul>
      <div>
        <Skeleton className="title h-3 w-[80%]" />
      </div>
    </div>
  );
}
