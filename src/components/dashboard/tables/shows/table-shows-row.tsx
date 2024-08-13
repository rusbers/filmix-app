import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { CldImage } from "next-cloudinary";
import { ShowItem } from "@/lib/types";
import { DateInfo } from "../../date";
import { ComingSoonTooltip } from "../../coming-soon-tooltip";

export function TableShowsRow({ show }: { show: ShowItem }) {
  return (
    <TableRow className="max-sm:text-xs">
      <TableCell className="hidden p-1 pl-0 lg:table-cell">
        <CldImage
          alt={`${show.title} poster`}
          className="aspect-video rounded-lg object-cover"
          width={256}
          height={172}
          src={show.thumbnail.regular.small}
        />
      </TableCell>
      <TableCell className="font-semibold text-slate-300 max-lg:px-2 max-lg:pl-0">
        <span>{show.title}</span> <span className="hidden">({show.year})</span>
      </TableCell>
      <TableCell className="text-center font-medium max-lg:px-2">
        <span className="max-md:hidden">{show.category}</span>
        <span className="md:hidden">
          {show.category === "Movie" ? "movie" : "tv"}
        </span>
      </TableCell>
      <TableCell className="text-center font-medium max-lg:px-2">
        <span className="md:hidden">{show.isTrending ? "yes" : "no"}</span>
        <span className="max-md:hidden">
          {show.isTrending ? "trending" : "standard"}
        </span>
      </TableCell>
      <TableCell className="hidden text-center max-lg:px-2 lg:table-cell">
        <Badge variant="outline" className="capitalize">
          {show.status}
        </Badge>
      </TableCell>

      <TableCell className="whitespace-nowrap max-lg:px-2 md:hidden">
        <span className="text-green-600">{show.likes.length}</span>
        {" / "}
        <span className="text-red-600">{show.dislikes.length}</span>
        {" / "}
        <span>{show.bookmarks.length}</span>
      </TableCell>

      <TableCell className="hidden text-center font-bold text-green-600 max-lg:px-2 md:table-cell">
        <span>{show.likes.length}</span>
      </TableCell>
      <TableCell className="hidden text-center font-bold text-red-600 max-lg:px-2 md:table-cell">
        <span>{show.dislikes.length}</span>
      </TableCell>
      <TableCell className="hidden text-center max-lg:px-2 md:table-cell">
        <span>{show.bookmarks.length}</span>
      </TableCell>

      <TableCell className="hidden text-center max-lg:px-2 lg:table-cell">
        <DateInfo date={show.createdAt} />
      </TableCell>
      <TableCell className="max-lg:px-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <ComingSoonTooltip>
                <button className="w-full text-start" disabled>
                  Edit
                </button>
              </ComingSoonTooltip>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ComingSoonTooltip>
                <button className="w-full text-start" disabled>
                  Delete
                </button>
              </ComingSoonTooltip>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
