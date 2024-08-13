"use client";

import { Table, TableBody } from "@/components/ui/table";
import { User } from "@/lib/types";
import TableUsersHeader from "./table-users-header";
import { TableUsersRow } from "./table-users-row";

export function TableUsersMain({ users }: { users: User[] }) {
  const hasUsers = users.length > 0;

  return hasUsers ? (
    <Table>
      <TableUsersHeader />
      <TableBody>
        {users.map((user) => (
          <TableUsersRow key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  ) : (
    <p className="text-xl">No users found</p>
  );
}
