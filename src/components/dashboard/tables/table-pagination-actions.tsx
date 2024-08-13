"use client";

import { PaginationBtn } from "../pagination-button";
import { useGenerateNavLink } from "@/lib/hooks/useGenerateNavLink";

type TablePaginationActionsProps = {
  currentPage: number;
  totalPages: number;
  status?: string;
  query?: string;
};

export function TablePaginationActions({
  currentPage,
  totalPages,
  status,
  query,
}: TablePaginationActionsProps) {
  const prevPage = useGenerateNavLink([
    ...(status ? [{ label: "status", data: status }] : []),
    ...(query ? [{ label: "query", data: query }] : []),
    { label: "page", data: currentPage - 1 },
  ]);

  const nextPage = useGenerateNavLink([
    ...(status ? [{ label: "status", data: status }] : []),
    ...(query ? [{ label: "query", data: query }] : []),
    { label: "page", data: currentPage + 1 },
  ]);

  const hasPages = totalPages > 0;

  return (
    hasPages && (
      <div className="flex">
        <PaginationBtn
          variant="prev"
          currentPage={currentPage}
          totalPages={totalPages}
          href={prevPage}
        >
          Prev
        </PaginationBtn>
        <PaginationBtn
          variant="next"
          currentPage={currentPage}
          totalPages={totalPages}
          href={nextPage}
        >
          Next
        </PaginationBtn>
      </div>
    )
  );
}
