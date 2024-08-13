import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ShowItemCard from "./show-item-card";
import { fetchTrendingShows } from "@/lib/services/shows";

export default function TrendingsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="group w-full"
    >
      <CarouselContent>
        <CarouselTrendingShows />
      </CarouselContent>
      <CarouselControl type="previous" />
      <CarouselControl type="next" />
    </Carousel>
  );
}

type CarouselControlProps = {
  type: "previous" | "next";
};

function CarouselControl({ type }: CarouselControlProps) {
  const commonClasses = cn(
    "absolute h-full",
    "rounded-none border-none bg-transparent text-transparent",
    "transition duration-300 group-hover:bg-black/15 group-hover:text-white",
    "hidden lg:block",
  );

  return type === "previous" ? (
    <CarouselPrevious className={cn(commonClasses, "left-0")} />
  ) : (
    <CarouselNext className={cn(commonClasses, "right-0")} />
  );
}

async function CarouselTrendingShows() {
  const trendingShows = await fetchTrendingShows();

  return trendingShows.map((showItem, index) => (
    <CarouselItem
      className={cn("mr-4 basis-60", "md:mr-10 md:basis-[29.375rem]")}
      key={index}
    >
      <ShowItemCard type="carousel" showItem={showItem} />
    </CarouselItem>
  ));
}
