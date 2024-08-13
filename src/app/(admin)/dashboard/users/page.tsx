import { Button } from "@/components/ui/button";
import { File, PlusCircle, Filter } from "lucide-react";
import SearchBar from "@/components/application/search-bar";
import { ComingSoonTooltip } from "@/components/dashboard/coming-soon-tooltip";
import { TableUsers } from "@/components/dashboard/tables/users/table-users";

export type UsersDashboardPageSearchParams = {
  query: string;
  page: string;
};

type UsersDashboardPageProps = {
  searchParams: UsersDashboardPageSearchParams;
};

export default async function UsersDashboardPage({
  searchParams,
}: UsersDashboardPageProps) {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-2">
        <SearchBar
          containerClassname="flex flex-row-reverse mb-2"
          inputClassname="text-lg placeholder:text-lg border-b-app-greyish-blue"
          placeholder="Search name or email"
        />
        <div className="mb-2 flex items-center gap-2 md:self-end">
          <ComingSoonTooltip>
            <Button
              disabled
              size="sm"
              variant="outline"
              className="h-8 basis-1/2 gap-1"
            >
              <File className="size-3.5" />
              <span className="whitespace-nowrap">Export</span>
            </Button>
          </ComingSoonTooltip>
          <ComingSoonTooltip>
            <Button
              disabled
              size="sm"
              variant="outline"
              className="h-8 basis-1/2 gap-1"
            >
              <Filter className="size-3.5" />
              <span className="whitespace-nowrap">Filter</span>
            </Button>
          </ComingSoonTooltip>
          <ComingSoonTooltip>
            <Button
              disabled
              size="sm"
              variant="outline"
              className="h-8 basis-1/2 gap-1"
            >
              <PlusCircle className="size-3.5" />
              <span className="whitespace-nowrap">Add New User</span>
            </Button>
          </ComingSoonTooltip>
        </div>
      </div>

      <TableUsers searchParams={searchParams} />
    </>
  );
}
