import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import { ShowsDashboardPageSearchParams } from "@/app/(admin)/dashboard/shows/page";
import * as Card from "../table-card";
import { TableShowsSkeleton } from "./skeletons/table-shows-skeleton";
import { TableShowsBody } from "./table-shows-body";

type ShowsTableProps = {
  searchParams: ShowsDashboardPageSearchParams;
};

export function TableShows({ searchParams }: ShowsTableProps) {
  const query = searchParams.query;
  const status = searchParams.status ?? "all";
  const page = Number(searchParams.page) || 1;

  return (
    <Card.Container>
      <Card.Header>
        <Card.Title>{`${capitalize(status)} Shows`}</Card.Title>
        <Card.Subtitle>Manage shows and view their performance.</Card.Subtitle>
      </Card.Header>
      <Suspense
        key={`table-shows-${query}-${page}-${status}`}
        fallback={<TableShowsSkeleton />}
      >
        <TableShowsBody query={query} status={status} page={page} />
      </Suspense>
    </Card.Container>
  );
}
