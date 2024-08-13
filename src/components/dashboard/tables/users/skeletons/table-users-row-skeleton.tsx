import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

export function TableUsersRowSkeleton() {
  return (
    <TableRow className="max-sm:text-xs">
      <TableCell className="hidden max-lg:px-2 lg:table-cell">
        {/* avatar */}
        <Skeleton className="size-[2.3125rem] rounded-full" />
      </TableCell>
      <TableCell className="hidden font-medium max-lg:px-2 md:table-cell">
        {/* name */}
        <Skeleton className="h-4 w-16" />
      </TableCell>
      <TableCell className="font-medium max-lg:px-2 max-md:pl-0">
        {/* email */}
        <Skeleton className="h-4 w-12" />
      </TableCell>
      <TableCell className="text-center font-medium max-lg:px-2">
        {/* role */}
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-12" />
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap text-center max-lg:px-2 md:hidden">
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
          {" / "}
          <Skeleton className="h-4 w-3" />
          {" / "}
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>
      <TableCell className="hidden text-center font-bold text-green-600 max-lg:px-2 md:table-cell">
        {/* likes */}
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>
      <TableCell className="hidden text-center font-bold text-red-600 max-lg:px-2 md:table-cell">
        {/* dislikes */}
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>
      <TableCell className="hidden text-center font-bold max-lg:px-2 md:table-cell">
        {/* favs */}
        <div className="flex items-center justify-center">
          <Skeleton className="h-4 w-3" />
        </div>
      </TableCell>
      <TableCell className="hidden max-lg:px-2">
        {/* created at */}
        <Skeleton className="h-4 w-12" />
      </TableCell>
      <TableCell className="max-lg:px-2">
        <Button disabled aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </TableCell>
    </TableRow>
  );
}
