type TablePaginationInfoProps = {
  currentPage: number;
  pageSize: number;
  totalShows: number;
  label: string;
};

export function TablePaginationInfo({
  currentPage,
  pageSize,
  totalShows,
  label,
}: TablePaginationInfoProps) {
  const hasShows = totalShows > 0;
  return (
    hasShows && (
      <div className="text-muted-foreground text-xs">
        Showing{" "}
        <span className="font-bold">
          {Math.min((currentPage - 1) * pageSize + 1, totalShows)}-
          {Math.min(currentPage * pageSize, totalShows)}
        </span>{" "}
        of <span className="font-bold">{totalShows}</span> {label}
      </div>
    )
  );
}
