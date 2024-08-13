import SearchBar from "@/components/application/search-bar";
import { fetchShowsByCategory } from "@/lib/services/shows";
import { SkeletonShowsList } from "@/components/application/skeleton-shows-list";
import { Suspense } from "react";
import { ShowsContent } from "@/components/application/shows-content";

type PageProps = {
  searchParams: { query?: string };
};

export default async function MoviesPage({
  searchParams: { query = "" },
}: PageProps) {
  return (
    <>
      <section className="container lg:container-none mb-6">
        <SearchBar placeholder="Search for movies" />
      </section>

      <h1 className="md:heading-L heading-2XS mb-6">Movies</h1>

      <Suspense key={query} fallback={<SkeletonShowsList length={7} />}>
        <ShowsContent
          query={query}
          fetcher={fetchShowsByCategory}
          category={"Movie"}
        />
      </Suspense>
    </>
  );
}
