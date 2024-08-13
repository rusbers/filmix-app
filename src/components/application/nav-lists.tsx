"use client";

import { adminRoutes, navigationRoutes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-6 md:gap-8 lg:flex-col",
        className,
      )}
    >
      {children}
    </ul>
  );
}

export function UserNavList({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <NavList className={className}>
      {navigationRoutes.map(({ path, label, Icon }) => (
        <li className="flex" key={path}>
          <Link className="group/nav-item" href={path}>
            <span className="sr-only">{label}</span>
            <Icon
              className={cn(
                "size-[1rem] md:size-[1.25rem] [&_path]:transition-colors [&_path]:duration-300 group-hover/nav-item:[&_path]:fill-app-red group-active/nav-tiem:[&_path]:fill-app-red/50",
                {
                  "[&_path]:fill-white group-hover/nav-item:[&_path]:fill-white":
                    pathname === path,
                },
              )}
            />
          </Link>
        </li>
      ))}
    </NavList>
  );
}

export function AdminNavList({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <NavList className={className}>
      {adminRoutes.map(({ path, label, Icon }) => (
        <li className="flex" key={path}>
          <Link href={path}>
            <span className="sr-only">{label}</span>
            <Icon
              className={cn(
                "size-5 stroke-app-greyish-blue transition-colors duration-300 hover:stroke-app-red active:opacity-50 md:size-6",
                {
                  "stroke-slate-50 hover:stroke-slate-300": pathname === path,
                },
              )}
            />
          </Link>
        </li>
      ))}
    </NavList>
  );
}
