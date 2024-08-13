import Logo from "@/components/marketing/logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AdminNavList, UserNavList } from "./nav-lists";
import { checkAuth } from "@/lib/services/users";
import { UserMenu } from "./user-menu";

export default async function AppHeader() {
  const { isAdmin } = await checkAuth();

  return (
    <header
      className={
        "md:container lg:container-none z-50 mb-4 lg:fixed lg:max-w-24 lg:gap-5"
      }
    >
      <nav
        className={
          "flex items-center gap-6 bg-app-semidark-blue px-[1rem] py-3 md:gap-8 md:rounded-lg lg:min-h-[calc(100vh-_2.25rem)] lg:max-w-24 lg:flex-col lg:gap-5"
        }
      >
        <Link className="flex transition active:opacity-25 lg:mb-8" href="/">
          <Logo />
          <span className="sr-only">Logo</span>
        </Link>

        <div
          className={cn("flex basis-full justify-center gap-6 lg:mb-auto", {
            "justify-between max-sm:justify-center lg:flex-col": isAdmin,
          })}
        >
          <UserNavList />
        </div>

        <div className="flex shrink-0 gap-6 md:gap-8 lg:flex-col">
          {isAdmin && <AdminNavList className="max-sm:hidden" />}

          <UserMenu isAdmin={isAdmin} />
        </div>
      </nav>
    </header>
  );
}
