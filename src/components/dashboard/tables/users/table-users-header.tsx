import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bookmark, ThumbsDown, ThumbsUp } from "lucide-react";

export default function TableUsersHeader() {
  return (
    <TableHeader className="sticky top-0 border-blue-50 bg-app-semidark-blue">
      <TableRow>
        <TableHead className="hidden w-24 text-center max-lg:px-2 lg:table-cell">
          <span className="sr-only">User avatar</span>
        </TableHead>
        <TableHead className="hidden max-lg:px-2 md:table-cell">
          Full Name
        </TableHead>
        <TableHead className="max-lg:px-2 max-md:pl-0">E-mail</TableHead>
        <TableHead className="text-center max-lg:px-2">Role</TableHead>
        <TableHead className="max-lg:px- text-center md:hidden">
          <span className="sr-only">
            Likes, dislikes and favorites indicators
          </span>
          <span aria-hidden>Likes</span>
        </TableHead>
        <TableHead className="hidden text-center max-lg:px-2 md:table-cell">
          <div className="flex items-center justify-center">
            <span className="sr-only">Likes</span>
            <ThumbsUp className="size-4" />
          </div>
        </TableHead>
        <TableHead className="hidden text-center max-lg:px-2 md:table-cell">
          <div className="flex items-center justify-center">
            <span className="sr-only">Dislikes</span>
            <ThumbsDown className="size-4" />
          </div>
        </TableHead>
        <TableHead className="hidden text-center max-lg:px-2 md:table-cell">
          <div className="flex items-center justify-center">
            <span className="sr-only">Bookmarks</span>
            <Bookmark className="size-4" />
          </div>
        </TableHead>
        <TableHead className="hidden text-center max-lg:px-2">
          Created at
        </TableHead>
        <TableHead className="text-center max-lg:px-2">
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
}
