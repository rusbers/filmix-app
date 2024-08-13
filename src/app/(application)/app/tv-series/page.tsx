import SearchBar from "@/components/application/search-bar";
import { fetchShowsByCategory } from "@/lib/services/shows";
import { ShowsList } from "@/components/application/shows-list";
import { Suspense } from "react";
import { SkeletonShowsList } from "@/components/application/skeleton-shows-list";
import { ShowsContent } from "@/components/application/shows-content";

type PageProps = {
  searchParams: { query?: string };
};

export default async function TvSeriesPage({
  searchParams: { query = "" },
}: PageProps) {
  return (
    <>
      <section className="container lg:container-none mb-6">
        <SearchBar placeholder="Search for TV series" />
      </section>

      <h1 className="md:heading-L heading-2XS mb-6">TV Series</h1>

      <Suspense key={query} fallback={<SkeletonShowsList />}>
        <ShowsContent
          query={query}
          fetcher={fetchShowsByCategory}
          category="TV Series"
        />
      </Suspense>
    </>
  );
}
