import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { File, PlusCircle, Filter } from "lucide-react";
import Link from "next/link";
import { capitalize } from "@/lib/utils";
import SearchBar from "@/components/application/search-bar";
import { showStatuses, ShowStatuses } from "@/lib/types";
import { ComingSoonTooltip } from "@/components/dashboard/coming-soon-tooltip";
import { TableShows } from "@/components/dashboard/tables/shows/table-shows";

export type ShowsDashboardPageSearchParams = {
  query: string;
  status: ShowStatuses;
  page: string;
};

type ShowsDashboardPageProps = {
  searchParams: ShowsDashboardPageSearchParams;
};

export default async function ShowsDashboardPage({
  searchParams,
}: ShowsDashboardPageProps) {
  const status = searchParams.status ?? "all";

  return (
    <Tabs defaultValue={status}>
      <div className="flex flex-col flex-wrap justify-between gap-2 md:flex-row md:flex-wrap">
        <SearchBar
          containerClassname="flex flex-row-reverse mb-2 md:w-full"
          inputClassname="text-lg placeholder:text-lg border-b-app-greyish-blue"
          placeholder={`Search in ${status} shows`}
        />

        <div className="flex items-center gap-2 md:order-3">
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
              <span className="whitespace-nowrap">Add New Show</span>
            </Button>
          </ComingSoonTooltip>
        </div>

        <TabsList className="flex w-full justify-between md:w-auto">
          {showStatuses.map((showStatus) => (
            <TabsTrigger
              className="basis-full"
              asChild
              key={showStatus}
              value={showStatus}
            >
              <Link href={`/dashboard/shows?status=${showStatus}`}>
                {capitalize(showStatus)}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {showStatuses.map((showStatus) => (
        <TabsContent key={showStatus} value={showStatus}>
          <TableShows searchParams={searchParams} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
