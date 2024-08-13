import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { DateInfo } from "../../date";
import { User } from "@/lib/types";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/application/user-avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export function TableUsersRow({ user }: { user: User }) {
  return (
    <TableRow className="max-sm:text-xs">
      <TableCell className="hidden max-lg:px-2 lg:table-cell">
        <UserAvatar
          avatarId={user.userDetails.avatarId}
          name={user.userDetails.name}
          lastName={user.userDetails.lastName}
        />
      </TableCell>
      <TableCell className="hidden font-medium max-lg:px-2 md:table-cell">{`${user.userDetails.name} ${user.userDetails.lastName}`}</TableCell>
      <TableCell className="font-medium max-lg:px-2 max-md:pl-0">
        {user.email}
      </TableCell>
      <TableCell className="text-center font-medium max-lg:px-2">
        <Badge
          className={cn({ "bg-yellow-500 text-black": user.role === "admin" })}
          variant="outline"
        >
          {user.role}
        </Badge>
      </TableCell>
      <TableCell className="whitespace-nowrap text-center max-lg:px-2 md:hidden">
        <span className="text-green-600">{user.likedShows.length}</span>
        {" / "}
        <span className="text-red-600">{user.dislikedShows.length}</span>
        {" / "}
        <span>{user.bookmarkedShows.length}</span>
      </TableCell>
      <TableCell className="hidden text-center font-bold text-green-600 max-lg:px-2 md:table-cell">
        {user.likedShows.length}
      </TableCell>
      <TableCell className="hidden text-center font-bold text-red-600 max-lg:px-2 md:table-cell">
        {user.dislikedShows.length}
      </TableCell>
      <TableCell className="hidden text-center font-bold max-lg:px-2 md:table-cell">
        {user.bookmarkedShows.length}
      </TableCell>
      <TableCell className="hidden max-lg:px-2">
        <DateInfo date={user.createdAt} />
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
