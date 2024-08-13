import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import SignOutBtn from "../authentication/sign-out-btn";
import UserAvatarWrapper from "./user-avatar-wrapper";
import HoverPopover from "../ui/hover-popover";
import { adminRoutes, userMenuRoutes } from "@/lib/constants/routes";

export function UserMenu({ isAdmin }: { isAdmin: boolean }) {
  return (
    <HoverPopover
      trigger={<UserAvatarWrapper />}
      content={
        <>
          {isAdmin && (
            <UserMenuList className="sm:hidden">
              {adminRoutes.map(({ path, label, Icon }) => (
                <UserMenuItem key={path} href={path}>
                  <Icon className="mr-2 h-5 w-5" /> {label}
                </UserMenuItem>
              ))}
            </UserMenuList>
          )}
          <Separator className="mb-2 sm:hidden" />
          <UserMenuList>
            {userMenuRoutes.map(({ path, label, Icon }) => (
              <UserMenuItem key={path} href={path}>
                <Icon aria-hidden className="mr-2 h-5 w-5" />
                {label}
              </UserMenuItem>
            ))}
          </UserMenuList>
          <Separator className="mb-2" />
          <SignOutBtn />
        </>
      }
    />
  );
}

function UserMenuList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <ul className={cn("mb-2 space-y-2 px-4", className)}>{children}</ul>;
}

function UserMenuItem({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <li>
      <Button
        asChild
        variant="link"
        className={cn(
          "h-min w-full justify-start px-0 py-0 text-white",
          className,
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </li>
  );
}
