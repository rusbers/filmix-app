import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

export function TableShowsRowSkeleton() {
  return (
    <TableRow className="max-sm:text-xs">
      <TableCell className="hidden p-1 pl-0 lg:table-cell">
        <Skeleton className="aspect-video h-14 w-24 rounded-lg" />
      </TableCell>
      <TableCell className="font-semibold text-slate-300 max-lg:px-2 max-lg:pl-0">
        <Skeleton className="h-4 w-32 max-sm:w-14" />
      </TableCell>
      <TableCell className="text-center font-medium max-lg:px-2">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-14 max-sm:w-8" />
        </div>
      </TableCell>
      <TableCell className="text-center font-medium max-lg:px-2">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-14 max-sm:w-8" />
        </div>
      </TableCell>
      <TableCell className="hidden text-center max-lg:px-2 lg:table-cell">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-14 px-2.5 py-0.5 max-sm:w-8" />
        </div>
      </TableCell>

      <TableCell className="whitespace-nowrap max-lg:px-2 md:hidden">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
          {" / "}
          <Skeleton className="h-4 w-3" />
          {" / "}
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>

      <TableCell className="hidden text-center font-bold text-green-600 max-lg:px-2 md:table-cell">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>
      <TableCell className="hidden text-center font-bold text-red-600 max-lg:px-2 md:table-cell">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>
      <TableCell className="hidden text-center max-lg:px-2 md:table-cell">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>

      <TableCell className="hidden text-center max-lg:px-2 lg:table-cell">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-16" />
        </div>
      </TableCell>
      <TableCell className="max-lg:px-2">
        <Button disabled aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
