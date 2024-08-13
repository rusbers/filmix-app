"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Play } from "../icons/actions";

type PlayButtonProps = {
  showCategory: "Movie" | "TV Series";
  showId: string;
  classNames?: string;
};

export function PlayButton({
  showCategory,
  showId,
  classNames,
}: PlayButtonProps) {
  const href = `/app/${showCategory === "Movie" ? "movies" : "tv-series"}/${showId}`;

  return (
    <div
      className={cn(
        "absolute flex h-full w-full items-center justify-center transition duration-300 group-hover/card:bg-black/50",
        classNames,
      )}
    >
      <Link
        href={href}
        className="flex min-h-12 min-w-28 items-center rounded-3xl bg-transparent p-2 pr-6 transition-all duration-300 group-focus-within/card:bg-white/25 group-hover/card:bg-white/25"
      >
        <Play className="play-icon hidden group-focus-within/card:block group-hover/card:block" />
        <span className="ml-auto text-transparent group-focus-within/card:text-inherit group-hover/card:text-inherit">
          Play
        </span>
      </Link>
    </div>
  );
}
