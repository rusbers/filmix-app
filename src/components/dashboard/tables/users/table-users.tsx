import * as Card from "../table-card";
import { Suspense } from "react";
import { TableUsersBody } from "./table-users-body";
import { UsersDashboardPageSearchParams } from "@/app/(admin)/dashboard/users/page";
import { TableUsersSkeleton } from "./skeletons/table-users-skeleton";

type ShowsTableProps = {
  searchParams: UsersDashboardPageSearchParams;
};

export function TableUsers({ searchParams }: ShowsTableProps) {
  const query = searchParams.query ?? "";
  const page = Number(searchParams.page) || 1;

  return (
    <Card.Container>
      <Card.Header>
        <Card.Title>Users</Card.Title>
        <Card.Subtitle>View all users and their activity</Card.Subtitle>
      </Card.Header>
      <Suspense
        key={`users-table-${query}-${page}`}
        fallback={<TableUsersSkeleton />}
      >
        <TableUsersBody query={query} page={page} />
      </Suspense>
    </Card.Container>
  );
}
