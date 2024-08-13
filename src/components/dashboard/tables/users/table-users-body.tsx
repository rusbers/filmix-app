import * as Card from "../table-card";
import { TablePaginationInfo } from "../table-pagination-info";
import { TablePaginationActions } from "../table-pagination-actions";
import { fetchUsers } from "@/lib/services/admin";
import { TableUsersMain } from "./table-users-main";

const ROWS_PER_PAGE = 10;

export async function TableUsersBody({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const { users, totalPages, totalUsers } = await fetchUsers({
    query,
    page,
    pageSize: ROWS_PER_PAGE,
  });

  return (
    <>
      <Card.ContentWrapper>
        <TableUsersMain users={users} />
      </Card.ContentWrapper>
      <Card.Footer>
        <TablePaginationInfo
          currentPage={page}
          pageSize={ROWS_PER_PAGE}
          totalShows={totalUsers}
          label="Users"
        />
        <TablePaginationActions currentPage={page} totalPages={totalPages} />
      </Card.Footer>
    </>
  );
}
