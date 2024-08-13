import TrendingsCarousel from "@/components/application/trendings-carousel";
import { fetchRecommendedShows } from "@/lib/services/shows";
import SearchBar from "@/components/application/search-bar";
import { Suspense } from "react";
import {
  SkeletonCarouselList,
  SkeletonShowsList,
} from "@/components/application/skeleton-shows-list";
import { ShowsContent } from "@/components/application/shows-content";

type PageProps = {
  searchParams: { query?: string };
};

export default async function HomePage({
  searchParams: { query = "" },
}: PageProps) {
  return (
    <>
      <h1 className="sr-only">Home page</h1>

      <section className="container lg:container-none mb-6">
        <SearchBar placeholder="Search for movies or TV series" />
      </section>

      <section className="mb-6 pl-4 lg:pl-0">
        <h2 className="md:heading-L heading-2XS mb-4">Trending</h2>
        <Suspense fallback={<SkeletonCarouselList />}>
          <TrendingsCarousel />
        </Suspense>
      </section>

      <section className="container lg:container-none mb-6">
        <h2 className="md:heading-L heading-2XS mb-6">Recommended for you</h2>

        <Suspense
          key={`recommended-shows-${query}`}
          fallback={<SkeletonShowsList length={3} />}
        >
          <ShowsContent query={query} fetcher={fetchRecommendedShows} />
        </Suspense>
      </section>
    </>
  );
}
