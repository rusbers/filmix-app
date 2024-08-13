import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PaginationBtnProps = {
  variant: "prev" | "next";
  currentPage: number;
  href: string;
  totalPages: number;
  children: React.ReactNode;
};

export function PaginationBtn({
  variant,
  currentPage,
  href,
  totalPages,
  children,
}: PaginationBtnProps) {
  if (variant === "prev") {
    return currentPage === 1 ? (
      <Button className="text-xs md:text-sm" variant="ghost" size="sm" disabled>
        <ChevronLeft className="mr-2 h-4 w-4" />
        {children}
      </Button>
    ) : (
      <Button className="text-xs md:text-sm" asChild variant="ghost" size="sm">
        <Link className="flex items-center" href={href} scroll={false}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          {children}
        </Link>
      </Button>
    );
  }

  if (variant === "next") {
    return currentPage === totalPages || !totalPages ? (
      <Button className="text-xs md:text-sm" variant="ghost" size="sm" disabled>
        {children}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    ) : (
      <Button className="text-xs md:text-sm" asChild variant="ghost" size="sm">
        <Link className="flex items-center" href={href} scroll={false}>
          {children}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    );
  }
}
