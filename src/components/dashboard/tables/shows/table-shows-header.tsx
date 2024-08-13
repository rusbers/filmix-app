import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bookmark, ThumbsDown, ThumbsUp } from "lucide-react";

export function TableShowsHeader() {
  return (
    <TableHeader className="sticky top-0 border-blue-50 bg-app-semidark-blue">
      <TableRow>
        <TableHead className="hidden w-[100px] text-center max-lg:px-2 lg:table-cell">
          <span className="sr-only">Thumbnail</span>
        </TableHead>
        <TableHead className="max-lg:px-2 max-lg:pl-0">Title</TableHead>
        <TableHead className="text-center max-lg:px-2">
          <span className="max-md:hidden">Category</span>
          <span className="md:hidden">Cat.</span>
        </TableHead>
        <TableHead className="text-center max-lg:px-2">
          <span className="max-md:hidden">Trending</span>
          <span className="md:hidden">Trend.</span>
        </TableHead>
        <TableHead className="hidden text-center max-lg:px-2 lg:table-cell">
          Status
        </TableHead>
        <TableHead className="max-lg:px-2 md:hidden">
          <span className="sr-only">
            Likes, dislikes and favorites indicators
          </span>
          <span aria-hidden>Likes</span>
        </TableHead>
        <TableHead className="hidden max-lg:px-2 md:table-cell">
          <div className="flex items-center justify-center">
            <span className="sr-only">Likes</span>
            <ThumbsUp className="size-4" />
          </div>
        </TableHead>
        <TableHead className="hidden max-lg:px-2 md:table-cell">
          <div className="flex items-center justify-center">
            <span className="sr-only">Dislikes</span>
            <ThumbsDown className="size-4" />
          </div>
        </TableHead>
        <TableHead className="hidden max-lg:px-2 md:table-cell">
          <div className="flex items-center justify-center">
            <span className="sr-only">Bookmarks</span>
            <Bookmark className="size-4" />
          </div>
        </TableHead>
        <TableHead className="hidden text-center max-lg:px-2 lg:table-cell">
          Created at
        </TableHead>
        <TableHead className="max-lg:px-2">
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
}
