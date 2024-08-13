import { Table, TableBody } from "../../../../ui/table";
import * as Card from "../../table-card";
import { Skeleton } from "../../../../ui/skeleton";
import { TableShowsRowSkeleton } from "./table-shows-row-skeleton";
import { TableShowsHeader } from "../table-shows-header";

type TableShowsSkeletonProps = {
  rowsNumber?: number;
};

export function TableShowsSkeleton({
  rowsNumber = 5,
}: TableShowsSkeletonProps) {
  const rows = Array.from({ length: rowsNumber });

  return (
    <>
      <Card.ContentWrapper>
        <Table>
          <TableShowsHeader />
          <TableBody>
            {rows.map((_, i) => (
              <TableShowsRowSkeleton key={i} />
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
