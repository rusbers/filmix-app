"use client";

import { Table, TableBody } from "@/components/ui/table";
import { ShowItem } from "@/lib/types";
import { TableShowsHeader } from "./table-shows-header";
import { TableShowsRow } from "./table-shows-row";

export function TableShowsMain({ shows }: { shows: ShowItem[] }) {
  const hasShows = shows.length > 0;

  return hasShows ? (
    <Table>
      <TableShowsHeader />
      <TableBody>
        {shows.map((showItem) => (
          <TableShowsRow key={showItem.id} show={showItem} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <p className="text-xl">No shows found</p>
  );
}
