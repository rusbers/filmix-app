import SearchBar from "@/components/application/search-bar";
import { ShowsList } from "@/components/application/shows-list";
import { Suspense } from "react";
import { fetchBookmarkedShows } from "@/lib/services/shows";
import { SkeletonShowsList } from "@/components/application/skeleton-shows-list";
import { Skeleton } from "@/components/ui/skeleton";
import { ShowItemData } from "@/lib/types";
import { checkAuth } from "@/lib/services/users";

type BookmarkedPageProps = {
  searchParams: { query?: string };
};

export default async function BookmarkedPage({
  searchParams: { query = "" },
}: BookmarkedPageProps) {
  const { session } = await checkAuth();

  return (
    <>
      <h1 className="sr-only">Bookmarked Movies and TV Series</h1>

      <section className="container lg:container-none mb-6">
        <SearchBar placeholder="Search for bookmarked shows" />
      </section>

      <Suspense key={query} fallback={<BookmarkedListsSkeleton />}>
        <BookmarkedContent userId={session.user.id} query={query} />
      </Suspense>
    </>
  );
}

async function BookmarkedContent({
  query,
  userId,
}: {
  query: string;
  userId: string;
}) {
  const [movies, tvSeries] = await Promise.all([
    fetchBookmarkedShows({ query, category: "Movie", userId }),
    fetchBookmarkedShows({ query, category: "TV Series", userId }),
  ]);

  const hasBookmarkedItems = movies.length > 0 || tvSeries.length > 0;

  if (!hasBookmarkedItems) {
    return (
      <div className="container flex h-[calc(100vh-100px)] items-center justify-center text-center text-xl text-slate-200">
        {query ? (
          <p>No bookmarked shows found</p>
        ) : (
          <p>You haven&apos;t saved any shows yet</p>
        )}
      </div>
    );
  }

  return (
    <>
      <BookmarkedList title="Bookmarked Movies" shows={movies} query={query} />
      <BookmarkedList
        title="Bookmarked TV Series"
        shows={tvSeries}
        query={query}
      />
    </>
  );
}

function BookmarkedList({
  title,
  shows,
  query,
}: {
  title: string;
  shows: ShowItemData[];
  query: string;
}) {
  const hasShows = shows.length > 0;
  const noResultsForSearch = query && shows.length === 0;

  if (!hasShows && !noResultsForSearch) return null;

  return (
    hasShows && (
      <section className="mb-6 lg:mb-10">
        <h2 className="md:heading-L heading-2XS mb-6">{title}</h2>
        <ShowsList shows={shows} />
      </section>
    )
  );
}

function BookmarkedListsSkeleton() {
  return (
    <>
      <Skeleton className="mb-6 h-10 w-80" />
      <SkeletonShowsList className="mb-6 lg:mb-10" length={3} />
      <Skeleton className="mb-6 h-10 w-80" />
      <SkeletonShowsList className="mb-6 lg:mb-10" length={3} />
    </>
  );
}
