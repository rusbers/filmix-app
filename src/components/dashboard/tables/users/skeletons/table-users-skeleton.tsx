import { Table, TableBody } from "@/components/ui/table";
import * as Card from "../../table-card";
import TableUsersHeader from "../table-users-header";
import { TableUsersRowSkeleton } from "./table-users-row-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

type TableUsersSkeletonProps = {
  rowsNumber?: number;
};

export function TableUsersSkeleton({
  rowsNumber = 5,
}: TableUsersSkeletonProps) {
  const rows = Array.from({ length: rowsNumber });

  return (
    <>
      <Card.ContentWrapper>
        <Table>
          <TableUsersHeader />
          <TableBody>
            {rows.map((_, i) => (
              <TableUsersRowSkeleton key={i} />
            ))}
          </TableBody>
        </Table>
      </Card.ContentWrapper>

      <Card.Footer>
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-12 md:w-14" />
          <Skeleton className="h-4 w-12 md:w-14" />
        </div>
      </Card.Footer>
    </>
  );
}
