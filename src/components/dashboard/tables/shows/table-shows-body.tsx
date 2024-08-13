import { ShowStatuses } from "@/lib/types";
import { fetchShows } from "@/lib/services/admin";
import * as Card from "../table-card";
import { TablePaginationInfo } from "../table-pagination-info";
import { TablePaginationActions } from "../table-pagination-actions";
import { TableShowsMain } from "./table-shows-main";

const ROWS_PER_PAGE = 10;

export async function TableShowsBody({
  query,
  status,
  page,
}: {
  query: string;
  status: ShowStatuses;
  page: number;
}) {
  const { shows, totalPages, totalShows } = await fetchShows({
    query,
    status,
    page: page,
    pageSize: ROWS_PER_PAGE,
  });

  return (
    <>
      <Card.ContentWrapper>
        <TableShowsMain shows={shows} />
      </Card.ContentWrapper>
      <Card.Footer>
        <TablePaginationInfo
          currentPage={page}
          pageSize={ROWS_PER_PAGE}
          totalShows={totalShows}
          label="shows"
        />
        <TablePaginationActions
          currentPage={page}
          totalPages={totalPages}
          status={status}
          query={query}
        />
      </Card.Footer>
    </>
  );
}
