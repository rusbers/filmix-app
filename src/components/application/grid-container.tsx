import { cn } from "@/lib/utils";

type GridContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GridContainer({
  className,
  children,
}: GridContainerProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4",
        "sm:grid-cols-3 md:gap-6",
        "xl:grid-cols-4 xl:gap-x-10 xl:gap-y-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
