"use client";

import { cn } from "@/lib/utils";
import { Search as SearchIcon } from "../icons/actions";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "@/lib/hooks/useDebounce";

type SearchBarProps = {
  placeholder?: string;
  containerClassname?: string;
  inputClassname?: string;
  iconClassname?: string;
};

export default function SearchBar({
  placeholder = "Search",
  containerClassname,
  inputClassname,
  iconClassname,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const debouncedValue = useDebounce(searchTerm);

  useEffect(() => {
    handleSearch(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);

      if (pathname.includes("dashboard")) {
        params.set("page", "1");
      }
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className={cn("flex max-h-6 items-center gap-4", containerClassname)}>
      <SearchIcon className={iconClassname} width={24} height={24} />
      <input
        className={cn(
          "input mt-[.125rem] max-h-8 w-full border-b-transparent py-4 pr-2 text-2xl transition placeholder:text-2xl",
          "hover:border-b-app-greyish-blue focus:border-b-app-greyish-blue focus:outline-none",
          inputClassname,
        )}
        type="search"
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value)}
        defaultValue={searchParams.get("query")?.toString() || ""}
      />
    </form>
  );
}
